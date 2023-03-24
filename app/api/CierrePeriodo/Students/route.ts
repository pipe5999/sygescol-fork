import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function POST(req: any) {
  let { colegio, grupos } = await req.json();
  // console.log("Este es el codigo que ingresa", colegio);

  console.log("colegio---------------", colegio);

  try {
    let gruposFind = "";
    grupos?.find((grup: any) => {
      gruposFind = `${gruposFind}${grup.GrupoId},`;
    });

    let Pendientes: any = [];

    gruposFind = gruposFind.substring(0, gruposFind.length - 1);

    const { periodo } = grupos.find((grup: any) => grup.periodo);
    const conexion = conecctions[colegio.value];

    const ListDcneQueri: any = conexion.query(
      `SELECT cga.i as CgaId,dcne.i as DocenteId,dcne.dcne_num_docu as Documento, CONCAT (dcne.dcne_nom1," ",dcne.dcne_nom2) as Nombre, CONCAT (dcne.dcne_ape1," ",dcne.dcne_ape2) as Apellidos,v_grupos.grupo_id as GrupoId,v_grupos.gao_nombre, v_grupos.grupo_sede,v_grupos.jornada_id, v_grupos.grupo_nombre AS gradoGrupo  FROM cga INNER JOIN dcne ON dcne.i=cga.g INNER JOIN v_grupos ON v_grupos.grupo_id=cga.b WHERE v_grupos.grupo_id in (${gruposFind})`
    );
    console.log(
      `SELECT cga.i as CgaId,dcne.i as DocenteId,dcne.dcne_num_docu as Documento, CONCAT (dcne.dcne_nom1," ",dcne.dcne_nom2) as Nombre, CONCAT (dcne.dcne_ape1," ",dcne.dcne_ape2) as Apellidos,v_grupos.grupo_id as GrupoId,v_grupos.gao_nombre, v_grupos.grupo_sede,v_grupos.jornada_id FROM cga INNER JOIN dcne ON dcne.i=cga.g INNER JOIN v_grupos ON v_grupos.grupo_id=cga.b WHERE v_grupos.grupo_id in (${gruposFind})`
    );

    const estudiantesQueri: any = conexion.query(
      `SELECT alumno.alumno_id AS alumno, matri_id AS matricula,CONCAT(alumno_nom1,' ',alumno_nom2,' ',alumno_ape1,' ',alumno_ape2) AS nombre, grupo_nombre AS grupo, matricula.grupo_id AS grupoId, matricula.matri_extraordinaria AS extraordinaria FROM alumno INNER JOIN matricula ON matricula.alumno_id = alumno.alumno_id INNER JOIN v_grupos ON matricula.grupo_id = v_grupos.grupo_id WHERE matri_id NOT IN (SELECT matri_id FROM novedad_estudiante) AND matri_estado = 0 AND matricula.grupo_id IN (${gruposFind}) ORDER BY grado_base, jornada_id, grupo_codigo,alumno_nom1,alumno_nom2,alumno_ape1,alumno_ape2 ASC`
    );

    const asignaturasQueri: any = conexion.query(
      "SELECT cga.b as grupoId, cga.i AS cga, aintrs.b AS asignatura, aes.b AS area, efss.b as Enfasis, cga.g AS docente FROM cga INNER JOIN aintrs ON cga.a = aintrs.i INNER JOIN efr ON efr.i = aintrs.g INNER JOIN aes ON efr.a = aes.i INNER JOIN efss ON efr.b = efss.i"
    );
    const notasQueri: any = conexion.query(
      `SELECT acciones_subacciones.id_subaccion AS idRelacion, acciones_subacciones.id_cga AS cga, periodo, id_matri as matricula, valoracion, observacion, rel_notas_nuevo_sistema.fecha_registro AS registroNota, acciones_subacciones.fecha_registro AS registroAccion, acciones_subacciones.id_grupo AS grupo FROM acciones_subacciones INNER JOIN rel_notas_nuevo_sistema ON acciones_subacciones.id = rel_notas_nuevo_sistema.id_accion WHERE id_grupo IN (${gruposFind}) ORDER BY matricula ASC`
    );
    const accionesQueri: any = conexion.query(
      `SELECT periodo, id_grupo, nombre, descripcion, acciones.id AS idPrincipal, acciones_subacciones.id AS idRelacion, grupo_nombre AS grupo FROM acciones_subacciones INNER JOIN acciones ON acciones.id = acciones_subacciones.id_relacional INNER JOIN v_grupos ON id_grupo = grupo_id WHERE grupo_id IN(${gruposFind})`
    );
    const docentesQueri: any = conexion.query(
      `SELECT dcne.i, CONCAT(dcne_nom1,' ',dcne_nom2,' ',dcne_ape1,' ',dcne_ape2) AS Nombre FROM dcne`
    );
    const direccionGrupoQueri = conexion.query(
      `SELECT u AS docente, i AS gradoGrupo FROM cg`
    );
    const competenciasQueri: any =
      conexion.query(`SELECT DISTINCT proceso_evaluacion.proeva_sub_id, proceso_evaluacion_banco.proeva_id, proceso_evaluacion.cga_id, proceso_evaluacion.grupo_id ,proceso_evaluacion_banco.proeva_cod, proceso_evaluacion_banco.proeva_desc, proceso_evaluacion_banco.proeva_porcen 
      FROM proceso_evaluacion_banco 
      INNER JOIN proceso_evaluacion ON (proceso_evaluacion_banco.proeva_id = proceso_evaluacion.proeva_sub_id)
      ORDER BY proceso_evaluacion_banco.proeva_cod`);

    const GetConfiguracionFetch = fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/CierrePeriodo/Params/${colegio?.value}`
    ).then((res) => res?.json());

    const [
      ListDcne,
      estudiantes,
      asignaturas,
      notas,
      acciones,
      docentes,
      direccionGrupo,
      competencias,
      GetConfiguracion,
    ]: [any, any, any, any, any, any, any, any, any] = await Promise.all([
      ListDcneQueri,
      estudiantesQueri,
      asignaturasQueri,
      notasQueri,
      accionesQueri,
      docentesQueri,
      direccionGrupoQueri,
      competenciasQueri,
      GetConfiguracionFetch,
    ]);

    // console.log("GetConfiguracion", GetConfiguracion);

    if (GetConfiguracion?.forder == "S") {
      // const [ListDcne]: [any] = await Promise.all([DcneQuery]);

      let DcneFindId = "";
      ListDcne[0]?.find((listDcne: any) => {
        DcneFindId = `${DcneFindId}${listDcne.CgaId},`;
      });

      DcneFindId = DcneFindId.substring(0, DcneFindId.length - 1);

      const [DcneQueryFordeb]: any = await conexion.query(
        `SELECT fordeb.fordeb_id as FordebId,fordeb.cga_id ,fordeb.fordeb_tipo,fordeb_banco.asignatura_id,fordeb_banco.dcne_id, fordeb_banco.fordeb_desc ,fordeb_banco.peri_id, fordeb.esca_nac_id AS escala,fordeb_banco.fordeb_id as IdBanco FROM fordeb LEFT JOIN fordeb_banco ON (fordeb_banco.fordeb_id=fordeb.fordeb_subid) WHERE fordeb.cga_id in (${DcneFindId}) and fordeb_banco.peri_id='${periodo}'`
      );
      // console.log(
      //   `SELECT fordeb.fordeb_id,fordeb.cga_id ,fordeb.fordeb_tipo,fordeb_banco.asignatura_id,fordeb_banco.dcne_id, fordeb_banco.fordeb_desc ,fordeb_banco.peri_id FROM fordeb INNER JOIN fordeb_banco ON (fordeb_banco.fordeb_id=fordeb.fordeb_subid) WHERE fordeb_banco.dcne_id in (${DcneFindId}) and fordeb_banco.peri_id='${periodo}'`
      // );

      // console.log("DcneQueryFordeb", DcneQueryFordeb);

      const newData = ListDcne[0]?.reduce((acc: any, item: any) => {
        const dcneFordeb = DcneQueryFordeb.filter(
          (dcne: any) => dcne.cga_id == item.CgaId
        );

        // console.log("dcneFordeb", dcneFordeb);

        // console.log("dcneFordeb", dcneFordeb);

        const key = `${item.DocenteId}`;

        if (!acc[key]) {
          acc[key] = {
            ...item,
            Fordeb: {
              Fortalezas: [],
              Debilidades: [],
              Recomentaciones: [],
            },
          };
        }

        if (dcneFordeb?.length > 0) {
          dcneFordeb.forEach((fordeb: any) => {
            if (fordeb.fordeb_tipo == "F") {
              acc[key].Fordeb?.Fortalezas.push({
                ...fordeb,
              });
            }
            if (fordeb.fordeb_tipo == "D") {
              acc[key].Fordeb?.Debilidades.push({
                ...fordeb,
              });
            }
            if (fordeb?.fordeb_tipo == "R") {
              acc[key].Fordeb.Recomentaciones.push({
                ...fordeb,
              });
            }
          });
        }

        if (acc[key].Fordeb?.Fortalezas.length == 0) {
          Pendientes.push({
            ...item,
            mensaje: "No tiene fortalezas",
          });
        }

        if (acc[key].Fordeb?.Debilidades.length == 0) {
          Pendientes.push({
            ...item,
            mensaje: "No tiene debilidades",
          });
        }
        if (acc[key].Fordeb?.Recomentaciones.length == 0) {
          Pendientes.push({
            ...item,
            mensaje: "No tiene recomendaciones",
          });
        }

        if (
          !acc[key].Fordeb?.Recomentaciones.length ==
          !acc[key].Fordeb?.Debilidades.length
        ) {
          Pendientes.push({
            ...item,
            mensaje:
              "No tiene la misma cantidad de debilidades y recomendaciones",
          });
        }

        return acc;
      }, {});

      // console.log("newData", Object.values(newData));

      console.log(Pendientes);

      if (Object.values(newData).length) {
        return NextResponse.json(
          // { estudiantes: formatStudent, acciones: formatAcciones },
          {
            Docentes: Object.values(newData),
          },
          { status: 200 }
        );
      }

      // console.log("ListDcne", ListDcne[0]);
    }

    // const formatDocente = docentes[0]?.reduce((acc: any, item: any) => {
    //   let key = `${item.Nombre}`;
    //   if (!acc[key]) {
    //     acc[key] = {
    //       Docente: item.i,
    //       Data: [],
    //       Asignaturas: [],
    //       Direccion: [],
    //     };
    //     let data =
    //       direccionGrupo[0].find((est: any) => est.docente == item.i) || [];
    //     acc[key].Direccion.push({ ...data });
    //   }
    //   let newData = asignaturas[0].find((as: any) => as.docente == item.i);
    //   acc[key].Data.push({ ...newData });
    //   return acc;
    // }, {});
    // const formatAcciones = acciones[0]?.reduce((acc: any, item: any) => {
    //   let key = `${item.grupo}`;
    //   if (!acc[key]) {
    //     acc[key] = {
    //       Grupo: item.id_grupo,
    //       Acciones: [],
    //     };
    //   }
    //   acc[key].Acciones[0].push({ ...item });
    //   return acc;
    // }, {});
    // const formatStudent = estudiantes[0]?.reduce((acc: any, item: any) => {
    //   let key = `${item.grupo}`;

    //   if (!acc[key]) {
    //     acc[key] = {
    //       Grupo: item.grupoId,
    //       Estudiantes: [],
    //       Asignaturas: [],
    //     };
    //     let newData = asignaturas[0].filter(
    //       (est: any) => est.grupoId == item.grupoId
    //     );
    //     acc[key].Asignaturas.push({
    //       ...newData,
    //     });
    //   }
    //   const notasFormated = notas[0]?.reduce((not: any) => {
    //     let key = ` `;
    //   });
    //   acc[key].Estudiantes.push({
    //     ...item,
    //     NotasPGI: notas[0].filter(
    //       (not: any) => not.matricula == item.matricula
    //     ),
    //   });

    //   return acc;
    // }, {});
    // return NextResponse.json(
    //   // { estudiantes: formatStudent, acciones: formatAcciones },
    //   {
    //     Docentes: Object.values(newData),
    //   },
    //   { status: 200 }
    // );

    // return NextResponse.json(
    //   {
    //     estudiantes,
    //   },
    //   { status: 200 }
    // );
  } catch (error) {
    console.log("Este es el error->", error);
    return NextResponse.json(
      { body: "Error al consultar los estudiantes" },
      { status: 404 }
    );
  }
}
