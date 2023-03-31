import { log } from "console";
import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const IdDocente: any = searchParams.get("IdDocente");
  const colegio: any = searchParams.get("colegio");

  try {
    const conexion = conecctions[colegio];

    const [AuditoriaDocente]: any = await conexion.query(
      `SELECT * FROM auditoriaPeriodos WHERE dcne_id = '${IdDocente}' and estado='1' `
    );

    // console.log("AuditoriaDocente", AuditoriaDocente);

    if (AuditoriaDocente?.length == 0) {
      return NextResponse.json(
        { body: "El docente no tiene pendientes" },
        {
          status: 200,
        }
      );
    }

    let AllData: any = [];
    for (const item of AuditoriaDocente) {
      if (
        (item.tipo_pendiente == "calificaciones" ||
          item.tipo_pendiente == "comportamiento") &&
        item?.matri_id?.length > 0
      ) {
        const IdsMatricula = item.matri_id.substring(
          0,
          item.matri_id.length - 1
        );

        const [AllEstudiantes]: any = await conexion.query(
          `SELECT matricula.matri_id as IdMatricula,alumno.alumno_id as AlumnoId,matricula.matri_codigo as CodigoMatricula, concat(alumno.alumno_nom1," ",alumno.alumno_nom2) as Nombre, concat(alumno.alumno_ape1," ",alumno.alumno_ape2) as Apellido FROM matricula INNER JOIN alumno ON alumno.alumno_id=matricula.alumno_id WHERE matricula.matri_id in (${IdsMatricula})`
        );
        AllData.push({ ...item, estudiantes: AllEstudiantes });
      } else {
        AllData.push({
          ...item,
        });
      }
    }

    // console.log("AllData", AllData);

    const DataNormalizada: any = AllData?.reduce((acc: any, el: any) => {
      const key = `${el.tipo_pendiente}`;

      if (!acc[key]) {
        acc[key] = {
          TipoPendiente: el.tipo_pendiente,
          pendientes: [],
        };
      }

      acc[key].pendientes.push({ ...el });

      return acc;
    }, {});

    return NextResponse.json(
      { body: Object.values(DataNormalizada) || [] },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
