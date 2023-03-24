import { NextResponse } from "next/server";
import School from "../../../../utils/School";
import CierrePeriodo from "../Students/CierrePeriodo";
import VerificarFechas from "../VerificarFechas/CheckDate";

export async function GET() {
  try {
    const colegios = School();

    if (colegios?.length > 0) {
      let key = 0;
      for (const colegio of colegios) {
        let DateCierrePeriodo: any = await VerificarFechas(key);

        if (DateCierrePeriodo?.GruposCerrar?.length) {
          let DateCierreConfig: any = await CierrePeriodo(
            colegio,
            DateCierrePeriodo?.GruposCerrar
          );

          if (DateCierreConfig?.Docentes.length > 0) {
            return NextResponse.json(
              {
                body: DateCierreConfig?.Docentes,
                Pendientes: DateCierreConfig?.Pendientes,
              },
              {
                status: 200,
              }
            );
          }
        }
        key++;
      }
    }
    // return NextResponse.json(
    //   { body: "todo bien señor" },
    //   {
    //     status: 200,
    //   }
    // );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información" },
      { status: 404 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};
