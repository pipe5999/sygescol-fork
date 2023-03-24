import { NextResponse } from "next/server";
import School from "../../../../utils/School";

export async function GET() {
  try {
    const colegios = School();

    if (colegios.length > 0) {
      console.log("colegios", colegios);
      let key = 0;
      for (const colegio of colegios) {
        const DateCierrePeriodo = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/VerificarFechas/${key}`
        ).then((res) => res.json());

        if (DateCierrePeriodo?.GruposCerrar?.length) {
          const DateCierreConfig = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/Students`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                colegio: colegio,
                grupos: DateCierrePeriodo?.GruposCerrar || [],
              }),
            }
          ).then((res) => res?.json());

          // console.log("DateCierreConfig", DateCierreConfig);

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
