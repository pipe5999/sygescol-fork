import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function POST(req: any) {
  let { colegio, grupos } = await req.json();
  // console.log("Este es el codigo que ingresa", colegio);
  try {
    let gruposFind = "";
    grupos?.map((grup: any) => {
      gruposFind = `${gruposFind}${grup.GrupoId},`;
    });
    gruposFind = gruposFind.substring(0, gruposFind.length - 1);
    const conexion = conecctions[colegio.value];
    const [estudiantes]: any = await conexion.query(
      `SELECT alumno.alumno_id AS alumno, matri_id AS matricula,CONCAT(alumno_nom1,' ',alumno_nom2,' ',alumno_ape1,' ',alumno_ape2) AS nombre, grupo_nombre AS grupo, matricula.grupo_id AS grupoId, matricula.matri_extraordinaria AS extraordinaria FROM alumno INNER JOIN matricula ON matricula.alumno_id = alumno.alumno_id INNER JOIN v_grupos ON matricula.grupo_id = v_grupos.grupo_id WHERE matri_id NOT IN (SELECT matri_id FROM novedad_estudiante) AND matri_estado = 0 AND matricula.grupo_id IN (${gruposFind}) ORDER BY grado_base, jornada_id, grupo_codigo,alumno_nom1,alumno_nom2,alumno_ape1,alumno_ape2 ASC`
    );
    const [asignaturas]: any = await conexion.query(
      "SELECT cga.b as grupoId, cga.i AS cga, aintrs.b AS asignatura, aes.b AS area, efss.b as Enfasis, cga.g AS docente FROM cga INNER JOIN aintrs ON cga.a = aintrs.i INNER JOIN efr ON efr.i = aintrs.g INNER JOIN aes ON efr.a = aes.i INNER JOIN efss ON efr.b = efss.i"
    );
    const [notas]: any = await conexion.query(
      `SELECT acciones_subacciones.id_subaccion AS idRelacion, acciones_subacciones.id_cga AS cga, periodo, id_matri as matricula, valoracion, observacion, rel_notas_nuevo_sistema.fecha_registro AS registroNota, acciones_subacciones.fecha_registro AS registroAccion, acciones_subacciones.id_grupo AS grupo FROM acciones_subacciones INNER JOIN rel_notas_nuevo_sistema ON acciones_subacciones.id = rel_notas_nuevo_sistema.id_accion WHERE id_grupo IN (${gruposFind}) ORDER BY matricula ASC`
    );
    const [acciones]: any = await conexion.query(
      `SELECT periodo, id_grupo, nombre, descripcion, acciones.id AS idPrincipal, acciones_subacciones.id AS idRelacion, grupo_nombre AS grupo FROM acciones_subacciones INNER JOIN acciones ON acciones.id = acciones_subacciones.id_relacional INNER JOIN v_grupos ON id_grupo = grupo_id WHERE grupo_id IN(${gruposFind})`
    );
    const [docentes]: any = await conexion.query(
      `SELECT dcne.i, CONCAT(dcne_nom1,' ',dcne_nom2,' ',dcne_ape1,' ',dcne_ape2) AS Nombre FROM dcne`
    );
    const [direccionGrupo]: any = await conexion.query(
      `SELECT u AS docente, i AS gradoGrupo FROM cg`
    );
    const [competencias]: any =
      await conexion.query(`SELECT DISTINCT proceso_evaluacion.proeva_sub_id, proceso_evaluacion_banco.proeva_id, proceso_evaluacion.cga_id, proceso_evaluacion.grupo_id ,proceso_evaluacion_banco.proeva_cod, proceso_evaluacion_banco.proeva_desc, proceso_evaluacion_banco.proeva_porcen 
      FROM proceso_evaluacion_banco 
      INNER JOIN proceso_evaluacion ON (proceso_evaluacion_banco.proeva_id = proceso_evaluacion.proeva_sub_id)
      ORDER BY proceso_evaluacion_banco.proeva_cod`);
    const formatDocente = docentes?.reduce((acc: any, item: any) => {
      let key = `${item.Nombre}`;
      if (!acc[key]) {
        acc[key] = {
          Docente: item.i,
          Data: [],
          Asignaturas: [],
          Direccion: [],
        };
        let data =
          direccionGrupo.find((est: any) => est.docente == item.i) || [];
        acc[key].Direccion.push({ ...data });
      }
      let newData = asignaturas.find((as: any) => as.docente == item.i);
      acc[key].Data.push({ ...newData });
      return acc;
    }, {});
    const formatAcciones = acciones?.reduce((acc: any, item: any) => {
      let key = `${item.grupo}`;
      if (!acc[key]) {
        acc[key] = {
          Grupo: item.id_grupo,
          Acciones: [],
        };
      }
      acc[key].Acciones.push({ ...item });
      return acc;
    }, {});
    const formatStudent = estudiantes?.reduce((acc: any, item: any) => {
      let key = `${item.grupo}`;

      if (!acc[key]) {
        acc[key] = {
          Grupo: item.grupoId,
          Estudiantes: [],
          Asignaturas: [],
        };
        let newData = asignaturas.filter(
          (est: any) => est.grupoId == item.grupoId
        );
        acc[key].Asignaturas.push({
          ...newData,
        });
      }
      const notasFormated = notas?.reduce((not: any) => {
        let key = ` `;
      });
      acc[key].Estudiantes.push({
        ...item,
        NotasPGI: notas.filter((not: any) => not.matricula == item.matricula),
      });

      return acc;
    }, {});
    return NextResponse.json(
      { estudiantes: formatStudent, acciones: formatAcciones },
      { status: 200 }
    );
  } catch (error) {
    console.log("Este es el error->", error);
    return NextResponse.json(
      { body: "Error al consultar los estudiantes" },
      { status: 404 }
    );
  }
}
