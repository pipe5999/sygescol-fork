import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = req.nextUrl;
  let cga = searchParams.get("cga");
  let escala = searchParams.get("escala");
  let colegio = searchParams.get("colegio");
  let id = searchParams.get("id");
  try {
    const conexion = conecctions[colegio];
    const [dataCga]: any = await conexion.query(
      `SELECT * FROM cga WHERE i = ${cga}`
    );
    const [periodo]: any =
      await conexion.query(`SELECT per_id,grado_base,grupo_id FROM periodo_academicos
        INNER JOIN v_grupos ON periodo_academicos.per_con_id = v_grupos.per_con_id
        INNER JOIN grados ON periodo_academicos.nivel = grados.nivel AND v_grupos.grado_base = grados.id_grado
        WHERE v_grupos.grupo_id = ${dataCga[0]?.b} AND periodo_academicos.inicio_ing_notas <= CURDATE() AND fin_ing_notas >= CURDATE() `);
    const [revision]: any = await conexion.query(
      `SELECT id FROM newProcesosEvaluacion WHERE grado = ${periodo[0]?.grado_base} AND grupo = ${periodo[0]?.grupo_id} AND periodo = ${periodo[0]?.per_id} AND cga = ${cga} AND relacionBanco = ${id}`
    );
    console.log(revision.length);
    if (!revision.length) {
      const [save]: any = await conexion.query(
        `INSERT INTO newProcesosEvaluacion(grado,grupo,periodo,escala,relacionBanco,cga) VALUES('${periodo[0]?.grado_base}','${periodo[0]?.grupo_id}','${periodo[0]?.per_id}','${escala}','${id}','${cga}')`
      );
      return NextResponse.json({ body: save }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          body: "Este proceso ya se encuentra asociado a la dimensión",
          error: 1,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al enviar la información" },
      { status: 400 }
    );
  }
}
