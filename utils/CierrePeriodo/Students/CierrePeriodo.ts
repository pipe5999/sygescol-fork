import { conecctions } from "../../Conexions";
import CheckConfig from "../Params/CheckConfig";

export default async function CierrePeriodo(colegio: any, grupos: any) {
  try {
    let gruposFind = "";
    grupos?.find((grup: any) => {
      gruposFind = `${gruposFind}${grup?.GrupoId},`;
    });

    // let Pendientes: any = [];
    let NotasFaltantess: any = [];

    const dateActual = new Date();
    const dateActualFormat = `${dateActual.getFullYear()}-${
      dateActual.getMonth() + 1
    }-${dateActual.getDate()} ${dateActual.getHours()}:${dateActual.getMinutes()}:${dateActual.getSeconds()}`;

    gruposFind = gruposFind?.substring(0, gruposFind.length - 1);

    const { periodo } = grupos.find((grup: any) => grup?.periodo);

    const conexion = conecctions[colegio?.value];

    let InsertBulkInsertNotas =
      "INSERT INTO rel_notas_nuevo_sistema(id_accion,id_matri,id_periodo,id_cga,valoracion,observacion,fecha_registro) VALUES";
    let NotasBoolean = false;

    let InsertBulkAuditoriaPeriodo =
      "INSERT INTO auditoriaPeriodos(grupo_id,per_id,cga_id,dcne_id,matri_id,detalle,tipo_pendiente,fecha,estado) VALUES";

    let InsertBulkForder =
      "INSERT INTO auditoriaPeriodos(grupo_id,per_id,cga_id,dcne_id,matri_id,detalle,tipo_pendiente,fecha,estado) VALUES";

    let ForderBoolean = false;

    let InsertBulkCompetenciaDcne =
      "INSERT INTO auditoriaPeriodos(grupo_id,per_id,cga_id,dcne_id,matri_id,detalle,tipo_pendiente,fecha,estado) VALUES";
    let CompetenciaBolean = false;

    let InsertBulkComportamiento =
      "INSERT INTO auditoriaPeriodos(grupo_id,per_id,cga_id,dcne_id,matri_id,detalle,tipo_pendiente,fecha,estado) VALUES";
    let ComportabmientoBolean = false;

    const [ListDcne]: any = await conexion.query(
      `SELECT cga.i as CgaId,dcne.i as DocenteId,dcne.dcne_num_docu as Documento, CONCAT (dcne.dcne_nom1," ",dcne.dcne_nom2) as Nombre, CONCAT (dcne.dcne_ape1," ",dcne.dcne_ape2) as Apellidos,v_grupos.grupo_id as GrupoId,v_grupos.gao_nombre, v_grupos.grupo_sede,v_grupos.jornada_id, v_grupos.grupo_nombre AS gradoGrupo  FROM cga INNER JOIN dcne ON dcne.i=cga.g INNER JOIN v_grupos ON v_grupos.grupo_id=cga.b WHERE v_grupos.grupo_id in (${gruposFind})`
    );

    let DcneFindCga = "";
    ListDcne?.find((listDcne: any) => {
      DcneFindCga = `${DcneFindCga}${listDcne?.CgaId || 0},`;
    });

    DcneFindCga = DcneFindCga.substring(0, DcneFindCga.length - 1);

    let DcneFindId = "";
    ListDcne?.find((listDcne: any) => {
      DcneFindId = `${DcneFindId}${listDcne?.DocenteId || 0},`;
    });

    DcneFindId = DcneFindId.substring(0, DcneFindId.length - 1);

    const DelateNotesQuery: any = conexion.query(
      `DELETE FROM rel_notas_nuevo_sistema WHERE id_cga in (${DcneFindCga}) and  id_periodo='${periodo}' and observacion LIKE '%sistema%'`
    );
    const DelateAuditoriaPeriodosQuery: any = conexion.query(
      `DELETE FROM auditoriaPeriodos WHERE cga_id in (${DcneFindCga}) and per_id='${periodo}'`
    );

    const [[DelateNotes], [DelateAuditoriaPeriodos]]: [any, any] =
      await Promise.all([DelateNotesQuery, DelateAuditoriaPeriodosQuery]);

    const estudiantesQueri: any = conexion.query(
      `SELECT alumno.alumno_id AS alumno, matricula.matri_id AS matricula,CONCAT(alumno_nom1,' ',alumno_nom2,' ',alumno_ape1,' ',alumno_ape2) AS nombre, grupo_nombre AS grupo, matricula.grupo_id AS grupoId, matricula.matri_extraordinaria AS extraordinaria,comportamiento.compo_id, comportamiento.compo_observacion FROM alumno INNER JOIN matricula ON matricula.alumno_id = alumno.alumno_id INNER JOIN v_grupos ON matricula.grupo_id = v_grupos.grupo_id LEFT JOIN comportamiento ON(matricula.matri_id=comportamiento.matri_id) WHERE matricula.matri_id NOT IN (SELECT matri_id FROM novedad_estudiante) AND matricula.matri_estado = 0 AND matricula.grupo_id IN (${gruposFind}) ORDER BY grado_base, jornada_id, grupo_codigo,alumno_nom1,alumno_nom2,alumno_ape1,alumno_ape2 ASC`
    );

    const asignaturasQueri: any = conexion.query(
      `SELECT cga.b as grupoId, cga.i AS cga, aintrs.b AS asignatura, aes.b AS area, efss.b as Enfasis, cga.g AS docente FROM cga INNER JOIN aintrs ON cga.a = aintrs.i INNER JOIN efr ON efr.i = aintrs.g INNER JOIN aes ON efr.a = aes.i INNER JOIN efss ON efr.b = efss.i where cga.g in (${DcneFindId})`
    );
    const notasQueri: any = conexion.query(
      `SELECT acciones_subacciones.id_subaccion AS idRelacion, acciones_subacciones.id_cga AS cga, periodo, id_matri as matricula, valoracion, observacion, rel_notas_nuevo_sistema.fecha_registro AS registroNota, acciones_subacciones.fecha_registro AS registroAccion, acciones_subacciones.id_grupo AS grupo FROM acciones_subacciones INNER JOIN rel_notas_nuevo_sistema ON acciones_subacciones.id_subaccion = rel_notas_nuevo_sistema.id_accion WHERE id_grupo IN (${gruposFind}) and periodo=${periodo} ORDER BY matricula ASC`
    );

    const accionesQueri: any = conexion.query(
      `SELECT periodo, id_grupo, nombre, descripcion, acciones.id AS idPrincipal, acciones_subacciones.id AS idRelacion, grupo_nombre AS grupo, acciones_subacciones.id_cga AS cga FROM acciones_subacciones INNER JOIN acciones ON acciones.id = acciones_subacciones.id_subaccion INNER JOIN v_grupos ON id_grupo = grupo_id WHERE grupo_id IN(${gruposFind}) and periodo=${periodo}`
    );

    // const docentesQueri: any = conexion.query(
    //   `SELECT dcne.i, CONCAT(dcne_nom1,' ',dcne_nom2,' ',dcne_ape1,' ',dcne_ape2) AS Nombre FROM dcne where dcne.i in (${DcneFindId})`
    // );

    const direccionGrupoQueri = conexion.query(
      `SELECT u AS docente, i AS gradoGrupo,b as GrupoId FROM cg WHERE b IN (${gruposFind})`
    );
    const competenciasQueri: any =
      conexion.query(`SELECT DISTINCT proceso_evaluacion.proeva_sub_id, proceso_evaluacion_banco.proeva_id, proceso_evaluacion.grupo_id ,proceso_evaluacion_banco.proeva_cod, proceso_evaluacion_banco.proeva_porcen,proceso_evaluacion_banco.dcne_id,proceso_evaluacion.cga_id
      FROM proceso_evaluacion_banco 
      INNER JOIN proceso_evaluacion ON (proceso_evaluacion_banco.proeva_id = proceso_evaluacion.proeva_sub_id) 
      WHERE proceso_evaluacion_banco.per_id ='${periodo}'
      AND proceso_evaluacion_banco.dcne_id IN (${DcneFindId})`);

    const [
      [estudiantes],
      [asignaturas],
      [notas],
      [acciones],
      // [docentes],
      [direccionGrupo],
      [competencias],
    ]: [any, any, any, any, any, any] = await Promise.all([
      estudiantesQueri,
      asignaturasQueri,
      notasQueri,
      accionesQueri,
      // docentesQueri,
      direccionGrupoQueri,
      competenciasQueri,
    ]);

    const GetConfiguracion: any = await CheckConfig(colegio?.value);

    const NameProcesoEvaluacion: any = GetConfiguracion?.planillas?.find(
      (item: any) => item.nombre.includes("Proceso de Evaluación")
    )?.texto;

    if (GetConfiguracion?.forder == "S") {
      const [DcneQueryFordeb]: any = await conexion.query(
        `SELECT fordeb.fordeb_id as FordebId,fordeb.cga_id ,fordeb.fordeb_tipo,fordeb_banco.asignatura_id,fordeb_banco.dcne_id, fordeb_banco.fordeb_desc ,fordeb_banco.peri_id, fordeb.esca_nac_id AS escala,fordeb_banco.fordeb_id as IdBanco FROM fordeb LEFT JOIN fordeb_banco ON (fordeb_banco.fordeb_id=fordeb.fordeb_subid) WHERE fordeb.cga_id in (${DcneFindCga}) and fordeb_banco.peri_id='${periodo}'`
      );

      const newData = ListDcne?.reduce((acc: any, item: any) => {
        let LengthRes = acciones?.filter((accion: any) => {
          return accion.id_grupo == item.GrupoId && accion.cga == item.CgaId;
        });

        const AsignaturaDcne = asignaturas?.find(
          (asig: any) =>
            item?.DocenteId?.toString()?.includes(asig?.docente?.toString()) &&
            item?.CgaId?.toString()?.includes(asig?.cga?.toString())
        );
        const dcneFordeb = DcneQueryFordeb?.filter(
          (dcne: any) => dcne?.cga_id == item?.CgaId
        );

        let NewNotas = notas?.map((nota: any) => {
          let newData = acciones?.find((accion: any) => {
            return (
              accion?.idPrincipal == nota.idRelacion &&
              accion?.cga == item?.CgaId &&
              accion?.id_grupo == item?.GrupoId
            );
          });

          nota = {
            ...nota,
            ...newData,
          };
          return nota;
        });

        let NewArrayEstudiantes = estudiantes?.map((estu: any) => {
          let MatriculaId = "";

          let showNotas: any = [];

          const NotasEstudiante = NewNotas?.filter((nota: any) => {
            return (
              nota?.matricula
                ?.toString()
                .includes(estu?.matricula?.toString()) &&
              nota?.cga?.toString()?.includes(item?.CgaId?.toString())
            );
          });

          if (NotasEstudiante?.length != LengthRes?.length) {
            let NotasFaltantes = LengthRes?.filter((accion: any) => {
              return !NotasEstudiante?.find(
                (nota: any) =>
                  nota?.idRelacion == accion?.idRelacion &&
                  nota?.cga_id == item?.CgaId &&
                  nota?.valoracion
              );
            });

            showNotas = NotasFaltantes;
            if (NotasFaltantes?.length > 0) {
              MatriculaId = `${MatriculaId}${estu?.matricula},`;
              NotasFaltantess.push({
                ...estu,

                NotasFaltantes: NotasFaltantes || [],
              });
            }
          }

          estu = {
            ...estu,
            Notas: NotasEstudiante || [],
            NotasFaltantes: showNotas || [],
            LengthRes: LengthRes,
            MatriculaId: MatriculaId,
          };
          return estu;
        });

        let EstudianteGrupo = NewArrayEstudiantes.filter((estu: any) => {
          return estu?.grupoId == item?.GrupoId;
        });

        let EstudiIdMatricula = "";
        let EstudiIdComportamiento = "";

        EstudianteGrupo?.find((estu: any) => {
          if (estu?.NotasFaltantes?.length > 0) {
            EstudiIdMatricula = `${EstudiIdMatricula}${estu.matricula},`;
          }
          if (!estu?.campo_id) {
            EstudiIdComportamiento = `${EstudiIdComportamiento}${estu.matricula},`;
          }
        });

        if (EstudiIdMatricula.length > 0) {
          InsertBulkAuditoriaPeriodo += `('${item.GrupoId}','${periodo}','${item.CgaId}','${item.DocenteId}','${EstudiIdMatricula}','Verifique los estudiantes con calificaciones pendientes.','calificaciones','${dateActualFormat}','1'),`;
        }

        if (EstudiIdComportamiento.length > 0) {
          ComportabmientoBolean = true;

          const directorGupo = direccionGrupo.find(
            (dir: any) =>
              dir?.docente == item?.DocenteId && dir?.GrupoId == item?.GrupoId
          );

          if (!directorGupo?.docente) {
            InsertBulkComportamiento += `('${item.GrupoId}','${periodo}','${item.CgaId}','','','Este grupo no tiene director de grupo','coordinador','${dateActualFormat}','1'),`;
          } else {
            InsertBulkComportamiento += `('${item.GrupoId}','${periodo}','${item?.CgaId}','${directorGupo?.docente}','${EstudiIdMatricula}','Existen estudiantes sin registro de comportamiento','comportamiento','${dateActualFormat}','1'),`;
          }
        }

        const CompetenciasDcne = competencias?.filter((com: any) => {
          return (
            com?.dcne_id == item?.DocenteId &&
            com.grupo_id == item?.GrupoId &&
            com?.cga_id == item?.CgaId
          );
        });

        if (CompetenciasDcne.length == 0) {
          InsertBulkCompetenciaDcne += `('${item?.GrupoId}','${periodo}','${
            item.CgaId
          }','${
            item.DocenteId
          }','0','${`En la asignatura no se refleja el registro de  ${NameProcesoEvaluacion} `}','proceso_evaluacion','${dateActualFormat}','1'),`;

          CompetenciaBolean = true;
        }

        const key = `${item.DocenteId}`;

        if (!acc[key]) {
          acc[key] = {
            ...item,
            Fordeb: {
              Fortalezas: [],
              Debilidades: [],
              Recomentaciones: [],
            },
            Estudiantes: EstudianteGrupo,
            Asignaturas: AsignaturaDcne,
            CantNotas: LengthRes.length,
            EstudiIdComportamiento: EstudiIdComportamiento,
          };
        }

        if (dcneFordeb?.length > 0) {
          dcneFordeb.forEach((fordeb: any) => {
            if (fordeb.fordeb_tipo == "F") {
              acc[key].Fordeb?.Fortalezas?.push({
                ...fordeb,
              });
            }
            if (fordeb.fordeb_tipo == "D") {
              acc[key].Fordeb?.Debilidades?.push({
                ...fordeb,
              });
            }
            if (fordeb?.fordeb_tipo == "R") {
              acc[key].Fordeb.Recomentaciones?.push({
                ...fordeb,
              });
            }
          });
        }

        if (acc[key].Fordeb?.Fortalezas?.length == 0) {
          InsertBulkForder += `('${item.GrupoId}','${periodo}','${
            item.CgaId
          }','${
            item.DocenteId
          }','0','${`La asignatura no registra fortalezas para los desempeños Superior y Alto.`}','forder','${dateActualFormat}','1'),`;

          // Pendientes?.push({
          //   ...item,
          //   mensaje: `La asignatura no registra fortalezas para los desempeños Superior y Alto.`,
          // });
          ForderBoolean = true;
        }

        if (acc[key]?.Fordeb?.Debilidades?.length == 0) {
          InsertBulkForder += `('${item.GrupoId}','${periodo}','${
            item.CgaId
          }','${
            item.DocenteId
          }','0','${`La asignatura no registra debilidades para los desempeños Básico y Bajo.`}','forder','${dateActualFormat}','1'),`;

          // Pendientes?.push({
          //   ...item,
          //   mensaje: `La asignatura no registra debilidades para los desempeños Básico y Bajo.`,
          // });
          ForderBoolean = true;
        }
        if (acc[key].Fordeb?.Recomentaciones?.length == 0) {
          InsertBulkForder += `('${item.GrupoId}','${periodo}','${
            item.CgaId
          }','${
            item.DocenteId
          }','0','${`La asignatura no registra recomendaciones para los desempeños Básico y Bajo.`}','forder','${dateActualFormat}','1'),`;

          // Pendientes?.push({
          //   ...item,
          //   mensaje: `La asignatura no registra recomendaciones para los desempeños Básico y Bajo.`,
          // });
          ForderBoolean = true;
        }

        if (
          acc[key].Fordeb?.Recomentaciones?.length > 0 &&
          acc[key].Fordeb?.Debilidades?.length > 0 &&
          !(
            acc[key].Fordeb?.Recomentaciones.length ==
            acc[key].Fordeb?.Debilidades.length
          )
        ) {
          InsertBulkForder += `('${item.GrupoId}','${periodo}','${
            item.CgaId
          }','${
            item.DocenteId
          }','0','${`el docente no registra la misma cantidad de recomendaciones y debilidades `}','forder','${dateActualFormat}','1'),`;

          // Pendientes.push({
          //   ...item,
          //   mensaje: `el docente ${item?.Nombre} ${item?.Apellidos} no registra la misma cantidad de recomendaciones y debilidades en la asignatura ${AsignaturaDcne?.asignatura} en el grupo ${item?.gradoGrupo}`,
          //   lengthRecomendaciones: acc[key].Fordeb?.Recomentaciones.length,
          //   lengthDebilidades: acc[key].Fordeb?.Debilidades.length,
          // });
          ForderBoolean = true;
        }

        return acc;
      }, {});

      //  Generate build insert
      if (NotasFaltantess.length > 0) {
        NotasFaltantess.map((estu: any) => {
          if (estu?.NotasFaltantes?.length > 0) {
            estu?.NotasFaltantes.map((nota: any) => {
              InsertBulkInsertNotas += `('${nota.idPrincipal}','${
                estu?.matricula
              }','${periodo}','${nota.cga}','${
                GetConfiguracion.notaSistema || "0.1"
              }','sistema','${dateActualFormat}'),`;
            });
          }
        });

        InsertBulkAuditoriaPeriodo = InsertBulkAuditoriaPeriodo?.slice(0, -1);
        InsertBulkInsertNotas = InsertBulkInsertNotas?.slice(0, -1);

        const [InsertNota]: any = await conexion.query(InsertBulkInsertNotas);
        const [InsertAuditoriaPeriodo]: any = await conexion.query(
          InsertBulkAuditoriaPeriodo
        );
      }

      if (ForderBoolean) {
        InsertBulkForder = InsertBulkForder?.slice(0, -1);
        const [InsertForder]: any = await conexion.query(InsertBulkForder);
      }
      if (CompetenciaBolean) {
        InsertBulkCompetenciaDcne = InsertBulkCompetenciaDcne?.slice(0, -1);
        const [InsertCompetencia]: any = await conexion.query(
          InsertBulkCompetenciaDcne
        );
      }
      if (ComportabmientoBolean) {
        InsertBulkComportamiento = InsertBulkComportamiento?.slice(0, -1);

        const [InsertComportamiento]: any = await conexion.query(
          InsertBulkComportamiento
        );
      }

      if (Object.values(newData).length) {
        return {
          grupos: grupos,
          // Docentes: Object.values(newData),
        };
      } else {
        return {
          Docentes: [],
          NotasFaltantess: [],
        };
      }
    }
  } catch (error) {
    console.log("Este es el error->", error);
    return { body: "Error al consultar los estudiantes" };
  }
}
