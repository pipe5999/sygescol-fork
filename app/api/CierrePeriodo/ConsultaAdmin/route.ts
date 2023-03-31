import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function POST(req: any) {
  const { colegio } = await req.json();

  const conexion = conecctions[colegio];
  try {
    const [datosPendientes]: any = await conexion.query(
      "SELECT detalle, grupo_nombre, CONCAT(dcne_ape1,' ',dcne_ape2,' ',dcne_nom1,' ',dcne_nom2) AS docente, auditoriaPeriodos.matri_id, aintrs.b AS Asignatura, auditoriaPeriodos.grupo_id FROM auditoriaPeriodos INNER JOIN v_grupos ON auditoriaPeriodos.grupo_id = v_grupos.grupo_id INNER JOIN dcne ON auditoriaPeriodos.dcne_id = dcne.i INNER JOIN cga ON cga.i = auditoriaPeriodos.cga_id INNER JOIN aintrs ON cga.a = aintrs.i"
    );
    const [students]: any = await conexion.query(
      "SELECT CONCAT(alumno_ape1,' ',alumno_ape2,' ',alumno_nom1,' ',alumno_nom2) AS Estudiante, matri_id AS matricula, grupo_id FROM matricula INNER JOIN alumno ON alumno.alumno_id = matricula.alumno_id WHERE matri_estado = 0 AND matri_id NOT IN(SELECT matri_id FROM novedad_estudiante) AND grupo_id != ' ' ORDER BY grupo_id, alumno_ape1,alumno_ape2,alumno_nom1,alumno_nom2 ASC"
    );

    const newData = datosPendientes?.reduce((acc: any, item: any) => {
      const key = `${item.grupo_nombre}`;
      if (!acc[key]) {
        acc[key] = {
          id: item.grupo_id,
          nombre: item.grupo_nombre,
          Pendiente: [],
        };
      }
      acc[key].Pendiente.push({ ...item });
      return acc;
    }, {});
    return NextResponse.json({ pendiente: newData }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información de los pendientes" },
      { status: 404 }
    );
  }
}
