import { NextResponse } from "next/server";
import School from "../../../../utils/School";

export async function GET() {
  try {
    const colegios = School();

    if (colegios.length > 0) {
      colegios.forEach(async (colegio, key) => {
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

          const DateCierreConfigDcne = await fetch(
            `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/Docentes`,
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
        }
      });
    }

    return NextResponse.json(
      { body: "Todo Naice señor" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información" },
      { status: 404 }
    );
  }
}
