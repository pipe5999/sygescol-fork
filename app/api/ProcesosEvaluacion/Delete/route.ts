import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = req.nextUrl;
  let colegio = searchParams.get("c");
  let id = searchParams.get("i");
  try {
    const conexion = conecctions[colegio];
    // console.log(
    //   `DELETE newProcesosEvaluacion.*, newProcesoEstudiante.* FROM newProcesosEvaluacion INNER JOIN newProcesoEstudiante ON newProcesosEvaluacion.id = newProcesoEstudiante.id WHERE newProcesosEvaluacion.id = ${id}`
    // );
    const [elimina] = await conexion.query(
      `DELETE newProcesosEvaluacion.*, newProcesoEstudiante.* FROM newProcesosEvaluacion INNER JOIN newProcesoEstudiante ON newProcesosEvaluacion.id = newProcesoEstudiante.id WHERE newProcesosEvaluacion.id = ${id}`
    );
    return NextResponse.json(
      {
        body: "El proceso fue eliminado con exito",
        datos: `DELETE FROM newProcesosEvaluacion WHERE id = ${id}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al eliminar el proceso" },
      { status: 400 }
    );
  }
}
