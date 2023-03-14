import { NextResponse } from "next/server";
import { conecctions } from "../../../utils/Conexions";

export async function GET(req: any) {
    // console.log(req)
    const { searchParams } = req?.nextUrl;
    let colegio = searchParams.get("colegio")
    let usuario = searchParams.get("usuario")
    let pass = searchParams.get("pass")
    try {
        const conexion = conecctions[colegio]
        const [datos]:any = await conexion.query(`SELECT * FROM usuario WHERE usu_login = '${usuario}' AND usu_password = '${pass}' AND usu_tipo = 'DOCENTE' `)
        console.log(`SELECT * FROM usuario WHERE usu_login = '${usuario}' AND usu_password = '${pass}' AND usu_tipo = 'DOCENTE' `)
        if(datos.length > 0){

            const docente = datos[0]?.usu_fk
            const [loginDcne]: any = await conexion.query(`SELECT CONCAT(dcne_ape1,' ',dcne_ape2,' ',dcne_nom1,' ',dcne_nom2) AS nombre, dcne.i AS Id FROM usuario INNER JOIN dcne ON usu_fk = dcne.i WHERE usu_fk = ${docente}`);
            const [datosGrupo]: any = await conexion.query(`SELECT DISTINCT grupo_nombre, grupo_id, grado_base FROM cga INNER JOIN v_grupos ON grupo_id = cga.b WHERE cga.g = ${docente}`);
            const [dimensiones]: any = await conexion.query(`SELECT aintrs.i AS idAsig, aintrs.b AS nombreAsigna, cga.i AS CgaId, aintrs.a AS Abreviatura FROM cga INNER JOIN aintrs ON cga.a = aintrs.i WHERE cga.g = ${docente}`)
            const [datosColegio]: any = await conexion.query(`SELECT b AS nombreInst, a AS urlEscudo, uu AS urlColegio, e AS telefono1, n AS telefono2, nn AS icfes, tt AS dane, c AS resolucion, fx AS fax, nit_institucion AS nit, resol_sem AS resolucionSem FROM clrp`);
            return NextResponse.json({ 
                datosUsu: loginDcne,
                Grupo: datosGrupo[0],
                dimesion: dimensiones,
                colegio: datosColegio[0],
            }, { status: 200 })
        }else{

            return NextResponse.json({ 
                body: "usuario Ingresado o contraseña incorrecta"
            }, { status: 404 })
        }
    } catch (error) {
        console.log("Este es el error", error)
        return NextResponse.json({ body: "Error al consultar la información" }, { status: 400 })
    }

}