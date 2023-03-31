import { NextResponse } from "next/server";
import { conecctions } from "../../../utils/Conexions";

export async function GET(req: any) {
  // console.log(req)
  const { searchParams } = req?.nextUrl;
  let colegio = searchParams.get("colegio");
  let usuario = searchParams.get("usuario");
  let pass = searchParams.get("pass");
  try {
    const conexion = conecctions[colegio];
    const [datos]: any = await conexion.query(
      `SELECT * FROM usuario WHERE usu_login = '${usuario}' AND usu_password = '${pass}'`
    );
    console.log(
      `SELECT * FROM usuario WHERE usu_login = '${usuario}' AND usu_password = '${pass}'`
    );
    if (datos.length > 0) {
      const id = datos[0]?.usu_fk;
      const usuar = datos[0]?.usu_id;
      const [datosColegio]: any = await conexion.query(
        `SELECT b AS nombreInst, a AS urlEscudo, uu AS urlColegio, e AS telefono1, n AS telefono2, nn AS icfes, tt AS dane, c AS resolucion, fx AS fax, nit_institucion AS nit, resol_sem AS resolucionSem FROM clrp`
      );
      switch (datos[0]?.usu_rol) {
        case 3:
          const [loginDcne]: any = await conexion.query(
            `SELECT CONCAT(dcne_ape1,' ',dcne_ape2,' ',dcne_nom1,' ',dcne_nom2) AS nombre, dcne.i AS Id,dcne_firma AS firma, dcne_foto AS foto, rol_nombre, usu_rol FROM usuario INNER JOIN dcne ON usu_fk = dcne.i INNER JOIN rol ON rol_id = usu_rol WHERE usu_id = ${usuar}`
          );
          const [datosGrupo]: any = await conexion.query(
            `SELECT DISTINCT grupo_nombre, grupo_id, grado_base FROM cga INNER JOIN v_grupos ON grupo_id = cga.b WHERE cga.g = ${id}`
          );
          const [dimensiones]: any = await conexion.query(
            `SELECT aintrs.i AS idAsig, aintrs.b AS nombreAsigna, cga.i AS CgaId, aintrs.a AS Abreviatura FROM cga INNER JOIN aintrs ON cga.a = aintrs.i INNER JOIN v_grupos ON cga.b = v_grupos.grupo_id WHERE cga.g = ${id} AND grado_base = 0`
          );
          return NextResponse.json(
            {
              datosUsu: loginDcne[0],
              Grupo: datosGrupo[0],
              dimesion: dimensiones,
              colegio: datosColegio[0],
            },
            { status: 200 }
          );
        case 1:
          const [loginAdmco]: any = await conexion.query(
            `SELECT CONCAT(admco_ape1,' ',admco_ape2,' ',admco_nom1,' ',admco_nom2) AS nombre, id AS Id, admco_firma AS firma, imagen AS foto, rol_nombre, usu_rol FROM usuario INNER JOIN admco ON admco.id = usu_fk INNER JOIN rol ON rol_id = usu_rol WHERE usu_fk = ${id}`
          );
          return NextResponse.json(
            {
              datosUsu: loginAdmco[0],
              colegio: datosColegio[0],
            },
            { status: 200 }
          );
        case 99:
          return NextResponse.json(
            {
              datosUsu: {
                nombre: "SOPORTE",
                firma: "",
                foto: "",
                Id: 99,
                rol_nombre: "SOPORTE",
                usu_rol: 99,
              },
              colegio: datosColegio[0],
            },
            { status: 200 }
          );
      }
    } else {
      return NextResponse.json(
        {
          body: "usuario Ingresado o contraseña incorrecta",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log("Este es el error", error);
    return NextResponse.json(
      { body: "Error al consultar la información" },
      { status: 400 }
    );
  }
}
