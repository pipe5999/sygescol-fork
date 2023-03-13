import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req:any){
    const {searchParams} = req?.nextUrl;
    let cga = searchParams.get("cg")
    let escala = searchParams.get("e")
    let colegio = searchParams.get("c")
    let id = searchParams.get("i")
    try {
        const date = new Date();
        const hoy = `${date.getFullYear()}-${date.getMonth()+1 > 9 && date.getMonth()+1 || `0${date.getMonth()+1}`}-${date.getDate() > 9 &&  date.getDate() || `0${date.getDate()}`}`
        const conexion = conecctions[colegio]
        const [grupo]:any = await conexion.query(`SELECT grupo_id, grado_base FROM v_grupos INNER JOIN cga ON cga.b = v_grupos.grupo_id WHERE cga.i = ${cga}`)
        const [periodo]:any = await conexion.query(`SELECT per_id FROM periodo_academicos WHERE nivel = 1 AND inicio_ing_notas <= '${hoy}' AND fin_ing_notas >= '${hoy}'`)
        const [procesos]:any = await conexion.query(`SELECT Pe.id AS id,texto, Pe.escala, Pe.periodo, Pe.cga FROM newProcesosEvaluacion AS Pe INNER JOIN newBancoProcesos AS BP ON Pe.relacionBanco = BP.id WHERE Pe.grado = ${grupo[0]?.grado_base} AND Pe.grupo = ${grupo[0]?.grupo_id} AND Pe.periodo = ${periodo[0]?.per_id} AND Pe.escala = ${escala} AND Pe.cga = ${cga}`)
        const [procesosAsig]:any = await conexion.query(`SELECT Pe.id AS id,texto, Pe.escala, Pe.periodo, Pe.cga FROM newProcesosEvaluacion AS Pe INNER JOIN newBancoProcesos AS BP ON Pe.relacionBanco = BP.id WHERE Pe.grado = ${grupo[0]?.grado_base} AND Pe.grupo = ${grupo[0]?.grupo_id} AND Pe.periodo = ${periodo[0]?.per_id} AND Pe.escala = ${escala} AND Pe.cga = ${cga} AND Pe.id NOT IN(SELECT proceso FROM newProcesoEstudiante WHERE estudiante = ${id})`)
        return NextResponse.json({Proceso: procesos || [], procesosAsig: procesosAsig || []},{status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({body: "Error al consultar la información"},{status: 400})
    }
}