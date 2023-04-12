import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  try {
    let colegio: any = searchParams.get("colegio");
    let parametro: any = searchParams.get("parametro");
    const conexion = conecctions[colegio];
    console.log("parametro", parametro);

    if (parametro == 152) {
      const [procesoEvaluacion] = await conexion.query(
        `SELECT conf_pla_id AS value, conf_pla_dat_text AS label FROM config_planilla_datos`
      );
      const [registroFordec]: any = await conexion.query(
        `SELECT conf_id , conf_valor AS value FROM conf_sygescol WHERE conf_id= "32"`
      );
      const [recuperacionesPeriodos]: any = await conexion.query(
        `SELECT conf_pla_id, conf_pla_nombre AS name, conf_pla_id_txt AS value FROM config_planilla WHERE conf_pla_id="11"`
      );
      const [ModeloPlanilla]: any = await conexion.query(
        `SELECT conf_pla_id, conf_pla_nom_ver AS name, conf_pla_id_txt AS value FROM config_planilla WHERE conf_pla_id="9"`
      );
      const [PlanillaPreescolar]: any = await conexion.query(
        `SELECT conf_pla_id, conf_pla_nom_ver AS name, conf_pla_id_txt AS value FROM config_planilla WHERE conf_pla_id="10"`
      );
      const [DocentePreescolar] = await conexion.query(
        `SELECT DISTINCT dcne.i AS value, CONCAT(dcne_ape1,' ',dcne_ape2,' ',dcne_nom1,' ',dcne_nom2) AS label FROM dcne INNER JOIN cga ON cga.g = dcne.i INNER JOIN v_grupos ON cga.b = v_grupos.grupo_id WHERE grado_base = 0 ORDER BY dcne.dcne_ape1 ASC`
      );
      const [ModeloInclusion]: any = await conexion.query(
        `SELECT conf_id, conf_valor AS value FROM conf_sygescol WHERE conf_id= "80"`
      );

      return NextResponse.json(
        {
          procesoEvaluacion: procesoEvaluacion || [],
          registroFordec: registroFordec[0] || {},
          recuperacionesPeriodos: recuperacionesPeriodos[0] || {},
          PlanillaPreescolar: PlanillaPreescolar[0] || {},
          ModeloPlanilla: ModeloPlanilla[0] || {},
          DocentePreescolar: DocentePreescolar || [],
          ModeloInclusion: ModeloInclusion[0] || {},
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("Este es el error", error);
    return NextResponse.json(
      { body: "Existe un error al consultar la información" },
      { status: 404 }
    );
  }
}
