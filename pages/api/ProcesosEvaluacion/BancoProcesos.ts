import type { NextApiRequest, NextApiResponse } from "next";
type ErrorData = {
    body: string;
}
export default async function Banco(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(500).json({ body: "Method Not Allowed" })
        return;
    }
    try {
        const { col, docente, periodo, asignatura } = req?.body
        const [banco]: any = `SELECT proeva_id, proeva_desc FROM proceso_evaluacion_banco WHERE dnce_id ${docente} AND periodo = ${periodo} AND asignatura = ${asignatura}`;
    } catch (error) {

    }
}