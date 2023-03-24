import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const colegio: any = searchParams.get("school");

  try {
    const conexion = conecctions[colegio];
    const [params]: any = await conexion.query(
      `SELECT conf_valor, conf_id AS id FROM conf_sygescol WHERE conf_id IN(153,79,102)`
    );
    const [configAxio]: any = await conexion.query(
      "SELECT conf_valor,conf_id, conf_texto FROM evalua_axi_config"
    );
    const [confPlanilla]: any = await conexion.query(
      `SELECT conf_pla_id as id, conf_pla_nom_ver as nombre, conf_pla_valor_txt as texto, conf_pla_valor as valor FROM config_planilla WHERE conf_pla_id NOT IN (10) ORDER BY conf_pla_id`
    );
    const nota: any = params
      ?.find((par: any) => par?.id == 102)
      ?.conf_valor?.split("$")[0];
    const forder: any = params?.find((par: any) => par?.id == 79)?.conf_valor;
    const axiologica: any = params?.find(
      (par: any) => par?.id == 153
    )?.conf_valor;
    return NextResponse.json(
      {
        axiologica: axiologica,
        forder: forder,
        gruposAxiologica: configAxio,
        planillas: confPlanilla,
        notaSistema: nota,
      },
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};
