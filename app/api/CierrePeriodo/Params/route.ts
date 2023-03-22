import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = req?.nextUrl;
  let colegio = searchParams.get("c");
  try {
    const conexion = conecctions[colegio];
    const [params]: any = await conexion.query(
      `SELECT conf_valor, conf_id AS id FROM conf_sygescol WHERE conf_id IN(153,79)`
    );
    const [configAxio]: any = await conexion.query(
      "SELECT conf_valor,conf_id, conf_texto FROM evalua_axi_config"
    );
    const [forder]: any = params?.find((par: any) => par?.id == 79)?.conf_valor;
    const [axiologica]: any = params?.find(
      (par: any) => par?.id == 153
    )?.conf_valor;
    console.log(axiologica);
    return NextResponse.json(
      { axiologica: axiologica, forder: forder, gruposAxiologica: configAxio },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información" },
      { status: 404 }
    );
  }
}
