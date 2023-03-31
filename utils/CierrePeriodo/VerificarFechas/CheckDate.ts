import { conecctions } from "../../Conexions";
import School from "../../School";

export default async function VerificarFechas(school: any) {
  try {
    const UtilsSchool = School();

    const selectSchool = UtilsSchool[school];

    const conexion = conecctions[selectSchool?.value];

    // fecha actual
    const dateActual = new Date();

    const dateAnterior = new Date();
    //  dateAnterior  = a fecha actual menos 1 dia formato año-mes-dia

    const newDateAnterior = dateAnterior?.setDate(dateAnterior?.getDate() - 1);
    // ponerla en formato año-mes-dia

    const GruposCerrar = [];

    if (selectSchool?.TipoColegio == "Antiguo") {
      if (selectSchool?.label == "I.E.T. Sagrada Familia") {
      }
      if (selectSchool?.label == "Escuela Superior Normal de Ibagué") {
        // console.log("selectSchool", selectSchool);

        const GradosNivelQuery: any = conexion.query(
          `SELECT grupo_nombre, grupo_sede, nivel, v_grupos.grupo_id as GrupoId FROM v_grupos INNER JOIN grados ON v_grupos.grado_base = grados.id_grado ORDER BY grados.nivel ASC, v_grupos.grupo_sede ASC
            `
        );

        const periodo_academicosQuery: any = conexion.query(
          `SELECT periodo_academicos.nivel,periodo_academicos.fin_ing_notas,per_id FROM periodo_academicos        
            `
        );

        const [[GradosNivel], [periodo_academicos]]: [any, any] =
          await Promise.all([GradosNivelQuery, periodo_academicosQuery]);

        const DataNormalizada = GradosNivel?.reduce((acc: any, el: any) => {
          let key = el.grupo_nombre;
          let NewLvl: any = null;

          if (el.nivel == "1") {
            if (el.grupo_sede == "05") {
              NewLvl = 12;
            }
            if (el.grupo_sede == "06") {
              NewLvl = 13;
            }

            if (el.grupo_sede == "07") {
              NewLvl = 14;
            }
          }
          if (el.nivel == "2") {
            if (el.grupo_sede == "02") {
              NewLvl = 15;
            }
            if (el.grupo_sede == "05") {
              NewLvl = 16;
            }

            if (el.grupo_sede == "06") {
              NewLvl = 17;
            }
            if (el.grupo_sede == "07") {
              NewLvl = 18;
            }
          }
          if (el.nivel == "3") {
            if (el.grupo_sede == "04") {
              NewLvl = 19;
            }
          }
          if (el.nivel == "4") {
            if (el.grupo_sede == "04") {
              NewLvl = 20;
            }
          }
          if (el.nivel == "5") {
            if (el.grupo_sede == "04") {
              NewLvl = 25;
            }
          }

          let periodo = periodo_academicos?.find((per: any) => {
            const dateFin = Date.parse(
              per?.fin_ing_notas?.toString()?.substring(0, 10)
            );

            const DateActualParse = Date.parse(dateActual?.toString());

            return (
              per.nivel == (NewLvl ? NewLvl : el.nivel) &&
              DateActualParse > dateFin
            );
            // return per.nivel == el.nivel && dateFin > dateAnterior;
          });

          if (!acc[key]) {
            acc[key] = {
              grupo_nombre: el.grupo_nombre,
              grupo_sede: el.grupo_sede,
              NuevoLvl: NewLvl ? NewLvl : el.nivel,
              periodo: periodo.per_id,
              FinNotas: `${periodo?.fin_ing_notas}`,
              GrupoId: el.GrupoId,
            };
          }
          return acc;
        }, {});

        // console.log("DataNormalizada", Object.values(DataNormalizada));
        // console.log("selectSchool", selectSchool);

        const NewData = Object.values(DataNormalizada).filter((el: any) => {
          const fecha1 = new Date(el.FinNotas);
          const fecha2 = new Date(newDateAnterior);
          // console.log("fecha1", fecha1.toDateString());
          // console.log("fecha2", fecha2.toDateString());

          if (fecha1?.toDateString() == fecha2?.toDateString()) {
            return el;
          }
        });

        // console.log("NewData", NewData);
        GruposCerrar.push(...NewData);
      }
    } else {
    }

    //   const [StructurePeriodoAcademico]: any =
    //     await conexion.query(`DESCRIBE periodo_academicos
    //     `);

    //   console.log(StructurePeriodoAcademico);

    console.log("GruposCerrar", GruposCerrar);

    return { GruposCerrar: GruposCerrar || [] };
  } catch (error) {
    console.log("error", error);
    return { error: error };
  }
}
