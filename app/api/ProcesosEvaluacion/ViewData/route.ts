import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req:any){
const {searchParams} = req?.nextUrl;
let colegio = searchParams.get("c")
let id = searchParams.get("i")
const conexion = conecctions[colegio]
try {
    const [data]: any = await conexion.query(`SELECT * FROM newBancoProcesos BP INNER JOIN newProcesosEvaluacion PE ON PE.relacionBanco = BP.id WHERE PE.id = ${id}`);
    return NextResponse.json({informacion: data[0] || {}}, {status: 200})
} catch (error) {
    console.log(error)
    return NextResponse.json({body: "Error al consultar la información del proceso"},{status:200})
}
}