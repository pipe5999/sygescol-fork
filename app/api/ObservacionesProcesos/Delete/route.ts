import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function GET(req:any){
    const {searchParams} = req.nextUrl;
    let colegio = searchParams.get("c")
    let id = searchParams.get("i")
    try{
        const conexion = conecctions[colegio];
        const [elimina] = await conexion.query(`DELETE FROM newObservacionesProcesos WHERE id = ${id}`)
        return NextResponse.json({body: "La observación fue eliminada con exito", datos: `DELETE FROM newObservacionesProcesos WHERE id = ${id}`},{status:200})
    }catch(error){
        console.log(error)
        return NextResponse.json({body: "Error al eliminar la observación"},{status:400})
    }
}