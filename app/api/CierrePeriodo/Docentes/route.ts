import { NextResponse } from "next/server";

export async function POST(req: any, { params }: any) {
  const { colegio, grupos } = await req.json();

  const GetConfiguracion = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/Params/${colegio?.value}`
  ).then((res) => res?.json());

  console.log(GetConfiguracion);

  //   const gruposPorId = grupos?.reduce((acc: any, el: any) => {
  //     let key = el.GrupoId;

  //     if (!acc[key]) {
  //       acc[key] = [];
  //     }

  //     acc[key];

  //     return acc;
  //   }, {});

  // let sqlBaseGruposDcne = `SELECT * FROM cga INNER JOIN dcne ON dcne.i=cga.g INNER JOIN v_grupos ON v_grupos.grupo_id=cga.b WHERE v_grupos.grupo_id in (${Object.keys(
  //   gruposPorId
  // ).join(",")})`;

  //   console.log(sqlBaseGruposDcne);

  return NextResponse.json(
    { GruposCerrar: [] },
    {
      status: 200,
    }
  );
}

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};
