import { NextResponse } from "next/server";
import { conecctions } from "../../../../../utils/Conexions";

export async function GET(req:any) {
    const {searchParams} = req?.nextUrl;

    let colegio = searchParams.get("colegio")
    let cga = searchParams.get("cga")
    let escala = searchParams.get("escala")
    let texto = searchParams.get("texto")

    try{
        const conexion = conecctions[colegio]
        const [dataCga]:any = await conexion.query(`SELECT * FROM cga WHERE i = ${cga}`);
        console.log(dataCga)
        const [periodo]:any = await conexion.query(`SELECT per_id,grado_base FROM periodo_academicos
        INNER JOIN v_grupos ON periodo_academicos.per_con_id = v_grupos.per_con_id
        INNER JOIN grados ON periodo_academicos.nivel = grados.nivel AND v_grupos.grado_base = grados.id_grado
        WHERE v_grupos.grupo_id = ${dataCga[0]?.b} AND periodo_academicos.inicio_ing_notas <= CURDATE() AND fin_ing_notas >= CURDATE() `)
        const [guarda]:any = await conexion.query(`INSERT INTO newBancoProcesos(texto,docente,grado,periodo,cga,escala) VALUES('${texto}','${dataCga[0]?.g || 0}','${periodo[0]?.grado_base}','${periodo[0]?.per_id}','${dataCga[0]?.i}','${escala}')`)
        return NextResponse.json({body: "Información Guardada con Exitó"},{status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({body: "No se pudo guardar la información"}, {status:400})
    }
}