import { NextResponse } from "next/server";
import School from "../../../../utils/School";

export async function GET() {
  const colegios = School();

  if (colegios.length > 0) {
    //   console.log("ejecute el cron");

    for (const iterator of colegios) {
      console.log(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/VerificarFechas/${iterator?.value}`
      );

      const DateCierrePeriodo = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/VerificarFechas/${iterator?.value}`
      ).then((res) => res.json());
    }
  }

  return NextResponse.json(
    { body: "Todo Naice señor" },
    {
      status: 200,
    }
  );
}
