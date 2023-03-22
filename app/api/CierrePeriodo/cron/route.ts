import { NextResponse } from "next/server";
import School from "../../../../utils/School";

export async function GET() {
  const colegios = School();

  if (colegios.length > 0) {
    //   console.log("ejecute el cron");
    let cont = 0;
    colegios.forEach(async (colegio, key) => {
      const DateCierrePeriodo = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/VerificarFechas/${key}`
      ).then((res) => res.json());

      console.log("DateCierrePeriodo", DateCierrePeriodo);

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
              grupos: DateCierrePeriodo?.GruposCerrar,
            }),
          }
        ).then((res) => res.json());
        console.log("DateCierreConfig", DateCierreConfig);
      }
    });
  }

  return NextResponse.json(
    { body: "Todo Naice señor" },
    {
      status: 200,
    }
  );
}
