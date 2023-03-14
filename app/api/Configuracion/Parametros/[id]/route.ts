import { NextResponse } from "next/server";
import { conecctions } from "../../../../../utils/Conexions";

export async function GET(req: any, { params: { id } }: any) {
  const { searchParams } = new URL(req.url);

  console.log("id", id);

  try {
    let colegio: any = searchParams.get("colegio");

    const conexion = conecctions[colegio];

    const [infoParametros]: any = await conexion.query(
      `SELECT conf_descri as Description, conf_id as Id, conf_nom_ver as TipoParam FROM conf_sygescol WHERE conf_id IN (${id})`
    );

    console.log("infoParametros", infoParametros);

    return NextResponse.json(
      { infoParametros: infoParametros[0] },
      { status: 200 }
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
