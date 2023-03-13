import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req:any){
    const {searchParams} = req.nextUrl;
    let colegio = searchParams.get("c")
    let estudiante = searchParams.get("e")
    let cga = searchParams.get("cg")
    try {
        const conexion = conecctions[colegio]
        const [grupo]:any = await conexion.query(`SELECT v_grupos.grupo_id FROM v_grupos INNER JOIN matricula ON v_grupos.grupo_id = matricula.grupo_id WHERE matri_id = ${estudiante}`)
        const [periodo]:any = await conexion.query(`SELECT periodo_academicos.per_id, per_nombre FROM periodo_academicos INNER JOIN periodo_fechas ON periodo_academicos.per_id = periodo_fechas.per_id  INNER JOIN v_grupos ON v_grupos.per_con_id = periodo_academicos.per_con_id INNER JOIN grados ON v_grupos.grado_base = grados.id_grado AND grados.nivel = periodo_academicos.nivel WHERE grupo_id = ${grupo[0]?.grupo_id} AND periodo_academicos.inicio_ing_notas <= CURDATE() AND periodo_academicos.fin_ing_notas >= CURDATE()`)

        const [procesos]:any = await conexion.query(`SELECT texto, PE.escala FROM newProcesoEstudiante Pe INNER JOIN newProcesosEvaluacion PE ON PE.id = Pe.proceso INNER JOIN newBancoProcesos BP ON PE.relacionBanco = BP.id WHERE PE.periodo = ${periodo[0]?.per_id} AND Pe.estudiante = ${estudiante} AND Pe.cga = ${cga}`)

        const [observaciones]:any = await conexion.query(`SELECT texto, OP.escala FROM newObservacionesEstudiante OE INNER JOIN newObservacionesProcesos OP ON  OE.observacion = OP.id INNER JOIN newBancoObservacionesProcesos BOP ON BOP.id = OP.relacionBanco WHERE OP.periodo = ${periodo[0]?.per_id} AND OE.estudiante = ${estudiante} AND OP.cga = ${cga}`)
        return NextResponse.json({procesos: procesos || [], observaciones: observaciones || []}, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({body: "Error al consultar la información de procesos asociados al estudiante"}, {status: 400})
    }
}