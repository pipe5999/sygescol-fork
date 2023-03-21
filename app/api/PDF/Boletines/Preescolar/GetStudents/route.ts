import axios from "axios";
import { NextResponse } from "next/server";
import { conecctions } from "../../../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = req.nextUrl;
  let colegio = searchParams.get("c");
  let grupo = searchParams.get("g");
  let matricula = searchParams.get("m");
  try {
    const conexion = conecctions[colegio];
    const [dataColegio]: any = await conexion.query(
      `SELECT uu AS url FROM clrp`
    );

    const [estudiante]: any = await conexion.query(
      `SELECT CONCAT(alumno_ape1,' ',alumno_ape2,' ',alumno_nom1,' ',alumno_nom2,' ') AS nombre, alumno.alumno_id AS alumno, matri_id AS matricula, alumno_num_docu AS documento, alumno_rum AS rum FROM alumno INNER JOIN matricula ON alumno.alumno_id = matricula.alumno_id WHERE grupo_id = ${grupo} AND matri_id NOT IN (SELECT matri_id FROM novedad_estudiante) ORDER BY alumno_ape1,alumno_ape2,alumno_nom1,alumno_nom2 ASC`
    );

    const [grupodData]: any = await conexion.query(
      `SELECT grupo_nombre AS grupo, jornada_nombre AS jornada, sede_nombre AS sede FROM v_grupos INNER JOIN sedes ON grupo_sede = sede_consecutivo WHERE grupo_id = ${grupo}`
    );

    const [periodo]: any = await conexion.query(
      `SELECT periodo_academicos.per_id, per_nombre FROM periodo_academicos INNER JOIN periodo_fechas ON periodo_academicos.per_id = periodo_fechas.per_id  INNER JOIN v_grupos ON v_grupos.per_con_id = periodo_academicos.per_con_id INNER JOIN grados ON v_grupos.grado_base = grados.id_grado AND grados.nivel = periodo_academicos.nivel WHERE grupo_id = ${grupo} AND periodo_academicos.inicio_ing_notas <= CURDATE() AND periodo_academicos.fin_ing_notas >= CURDATE()`
    );

    const [cga]: any = await conexion.query(
      `SELECT cga.i AS id, aintrs.b AS asignatura, aes.b AS Area, cga.u AS Horas FROM cga INNER JOIN aintrs ON aintrs.i = cga.a INNER JOIN efr ON aintrs.g = efr.i INNER JOIN aes ON efr.a = aes.i WHERE cga.b = ${grupo}`
    );
    const formatCga = cga?.reduce((acc: any, item: any) => {
      let key = `${item.Area}`;

      if (!acc[key]) {
        acc[key] = {
          Area: item.Area,
          Asignaturas: [],
        };
      }

      acc[key].Asignaturas.push({
        ...item,
      });

      return acc;
    }, {});

    // console.log(formatCga);
    const [notas]: any = await conexion.query(
      `SELECT PE.escala, texto, estudiante, NEP.cga AS Asignatura FROM newProcesoEstudiante NEP INNER JOIN newProcesosEvaluacion PE ON NEP.proceso = PE.id INNER JOIN newBancoProcesos BP ON BP.id = PE.relacionBanco WHERE NEP.periodo = ${periodo[0]?.per_id}`
    );
    const cgaFormat: any = [];
    const studentFormat: any = [];
    for await (const est of estudiante) {
      const notasEstu = notas.filter(
        (not: any) => not.estudiante == est.matricula
      );

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
            studentFormat.push({
              ...est,
              foto: `${
                dataColegio[0]?.url
              }sygescol${new Date().getFullYear()}/images/fotos/estudiantes/${
                est.rum
              }.jpg`,
              notas: notasEstu,
            });
          }
        })
        .catch((error) => {
          studentFormat.push({
            ...est,
            foto: `${
              dataColegio[0]?.url
            }sygescol${new Date().getFullYear()}/images/fotos/estudiantes/no_imagen.jpg`,
            notas: notasEstu,
          });
        });
    }
    return NextResponse.json(
      {
        estudiante: studentFormat,
        grupo: grupodData[0],
        cga: Object.values(formatCga),
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        body: "Error al consultar la información para la generación de boletines",
      },
      { status: 404 }
    );
  }
}
