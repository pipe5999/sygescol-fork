import { NextResponse } from "next/server";
import { conecctions } from "../../../../../../utils/Conexions";

export async function GET(req:any){
    const {searchParams} = req.nextUrl;
    let colegio = searchParams.get("c")
    let proceso = searchParams.get("p")
    let estudiante = searchParams.get("e")
    let correcto = 0;
    try {
        
        const conexion = conecctions[colegio]
        const [procesoFind]:any =  await conexion.query(`SELECT * FROM newProcesosEvaluacion WHERE id = ${proceso}`)
        const [search]: any = await conexion.query(`SELECT * FROM newProcesoEstudiante NPE INNER JOIN newProcesosEvaluacion PE ON NPE.proceso = PE.id WHERE estudiante = ${estudiante}`)
        search?.map((pros:any) => {
            console.log(`${pros?.escala} != ${procesoFind[0]?.escala}`)
            if(pros?.escala != procesoFind[0]?.escala){
                correcto++;
            }
        })
        if(correcto == 0){
            const [save]:any = await  conexion.query(`INSERT INTO newProcesoEstudiante(estudiante,proceso,periodo,cga) VALUES('${estudiante}','${proceso}','${procesoFind[0]?.periodo}','${procesoFind[0]?.cga}')`)
            return NextResponse.json({body: "Información Guardada con Exito"},{status:200})
        }else if(correcto > 0){
            return NextResponse.json({body: "El estudiante ya tiene asignado procesos para otro desempeño"}, {status:200})
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({body: "Error al guardar la información"},{status:400})
    }
}