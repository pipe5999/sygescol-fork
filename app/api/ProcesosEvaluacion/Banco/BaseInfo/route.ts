import {  NextResponse } from "next/server";
import { conecctions } from "../../../../../utils/Conexions";

export async function GET(req: any){
    const {searchParams} = req?.nextUrl;

    let colegio = searchParams.get("c")
    let cga = searchParams.get("cg")
    let escala = searchParams.get("e")
    try {
        const conexion = conecctions[colegio]
        const [banco]:any = await conexion.query(`SELECT * FROM newBancoProcesos WHERE cga = ${cga} AND escala = ${escala}`)
        return NextResponse.json({banco: banco}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({body: "Error al consultar el banco"}, {status:400})
    }
}