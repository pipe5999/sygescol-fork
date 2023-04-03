import axios from "axios";
import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = req.nextUrl;
  let colegio = searchParams.get("colegio");
  let grupo = searchParams.get("grupo");
  try {
    const conexion = conecctions[colegio];
    const [dataColegio]: any = await conexion.query(
      `SELECT uu AS url FROM clrp`
    );
    const [estudiante]: any = await conexion.query(
      `SELECT CONCAT(alumno_ape1,' ',alumno_ape2,' ',alumno_nom1,' ',alumno_nom2,' ') AS nombre, alumno.alumno_id AS alumno, matri_id AS matricula, matri_codigo AS codigo, alumno_rum AS rum FROM alumno INNER JOIN matricula ON alumno.alumno_id = matricula.alumno_id WHERE grupo_id = ${grupo} AND matri_id NOT IN (SELECT matri_id FROM novedad_estudiante) AND matri_estado = 0 ORDER BY alumno_ape1,alumno_ape2,alumno_nom1,alumno_nom2 ASC`
    );
    const estdianteFormated: any = [];
    for await (const est of estudiante) {
      await axios
        .post(
          `${
            dataColegio[0]?.url
          }sygescol${new Date().getFullYear()}/images/fotos/estudiantes/${
            est.rum
          }.jpg`
        )
        .then((res) => {
          if (res.status == 200) {
            estdianteFormated.push({
              ...est,
              foto: `${
                dataColegio[0]?.url
              }/sygescol${new Date().getFullYear()}/images/fotos/estudiantes/${
                est.rum
              }.jpg`,
            });
          }
        })
        .catch((error) => {
          estdianteFormated.push({
            ...est,
            foto: `${
              dataColegio[0]?.url
            }/sygescol${new Date().getFullYear()}/images/fotos/estudiantes/no_imagen.jpg`,
          });
        });
    }
    const [periodo]: any = await conexion.query(
      `SELECT periodo_academicos.per_id, per_nombre FROM periodo_academicos INNER JOIN periodo_fechas ON periodo_academicos.per_id = periodo_fechas.per_id  INNER JOIN v_grupos ON v_grupos.per_con_id = periodo_academicos.per_con_id INNER JOIN grados ON v_grupos.grado_base = grados.id_grado AND grados.nivel = periodo_academicos.nivel WHERE grupo_id = ${grupo} AND periodo_academicos.inicio_ing_notas <= CURDATE() AND periodo_academicos.fin_ing_notas >= CURDATE()`
    );
    return NextResponse.json(
      { alumnos: estdianteFormated, periodo: periodo[0] },
      { status: 200 }
    );
  } catch (error) {}
}
