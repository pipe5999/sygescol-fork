import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { colegio, grupos } = await req.json();

  const GetConfiguracion = await fetch(
    `${process.env.APP_URL_BACKEND}/api/CierrePeriodo/Params/${colegio?.value}`
  ).then((res) => res?.json());

  console.log(GetConfiguracion);

  return NextResponse.json(
    { GruposCerrar: [] },
    {
      status: 200,
    }
  );
}
