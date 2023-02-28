import type { NextApiRequest, NextApiResponse } from "next";
import { conecctions } from "../../../utils/Conexions";
type ErrorData = {
    body: string;
}
export default async function Banco(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(500).json({ body: "Method Not Allowed" })
        return;
    }
    try {
        console.log(req.body)
        const { colegio, docente } = req?.body
        const connection = conecctions[colegio];
        const [loginDcne]: any = await connection.query(`SELECT CONCAT(dcne_ape1,' ',dcne_ape2,' ',dcne_nom1,' ',dcne_nom2) AS nombre, dcne.i AS Id FROM usuario INNER JOIN dcne ON usu_fk = dcne.i WHERE usu_fk = ${docente}`);
        const [datosGrupo]: any = await connection.query(`SELECT DISTINCT grupo_nombre FROM cga INNER JOIN v_grupos ON grupo_id = cga.b WHERE cga.g = ${docente}`);
        const [dimensiones]: any = await connection.query(`SELECT aintrs.i AS idAsig, aintrs.b AS nombreAsigna FROM cga INNER JOIN aintrs ON cga.a = aintrs.i WHERE cga.g = ${docente}`)
        const [datosColegio]: any = await connection.query(`SELECT b AS nombreInst, a AS urlEscudo, uu AS urlColegio FROM clrp`);
        return res.status(200).json({
            datosUsu: loginDcne,
            Grupo: datosGrupo,
            dimesion: dimensiones,
            colegio: datosColegio[0],
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ body: "Error al consultar la información del inicio de sesión" })
    }
}