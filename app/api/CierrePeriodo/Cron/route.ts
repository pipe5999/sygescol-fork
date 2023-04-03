import { NextRequest, NextResponse } from "next/server";
import CierrePeriodo from "../../../../utils/CierrePeriodo/Students/CierrePeriodo";
import VerificarFechas from "../../../../utils/CierrePeriodo/VerificarFechas/CheckDate";
import School from "../../../../utils/School";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  try {
    const colegios = School();
    let DataResponse: any = [];

    let Grupos: any = [];

    if (colegios?.length > 0) {
      let key = 0;
      for (const colegio of colegios) {
        let DateCierrePeriodo: any = await VerificarFechas(key);
        Grupos = [...Grupos, DateCierrePeriodo?.GruposCerrar];

        if (DateCierrePeriodo?.GruposCerrar?.length) {
          let DateCierreConfig: any = await CierrePeriodo(
            colegio,
            DateCierrePeriodo?.GruposCerrar
          );

          // console.log(DateCierreConfig);

          if (DateCierreConfig?.grupos.length > 0) {
            DataResponse = [...DataResponse, DateCierreConfig];
          }
        }
        key++;
      }
      return NextResponse.json(
        {
          body: {
            Response: DataResponse,
            // Grupos,
            Msn: "Cierre de periodo realizado",
          },

          // ,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información" },
      { status: 404 }
    );
  }
}
