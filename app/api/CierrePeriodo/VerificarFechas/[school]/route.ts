import { NextResponse } from "next/server";
import { conecctions } from "../../../../../utils/Conexions";
import School from "../../../../../utils/School";

export async function GET(req: any, { params }: any) {
  const { searchParams } = new URL(req.url);
  const UtilsSchool = School();
  const school = params.school;

  const selectSchool = UtilsSchool[school];

  const conexion = conecctions[school];

  if (selectSchool?.TipoColegio == "Antiguo") {
    let Nivel = 0;
    if (selectSchool.label == "I.E.T. Sagrada Familia") {
    }
    if (selectSchool.label == "Escuela Superior Normal de Ibagué") {
      console.log("selectSchool", selectSchool);

      const [periodo_academicos]: any = await conexion.query(
        `SELECT nivel FROM periodo_academicos`
      );
    }
  } else {
  }

  //   const [StructurePeriodoAcademico]: any =
  //     await conexion.query(`DESCRIBE periodo_academicos
  //     `);

  //   console.log(StructurePeriodoAcademico);

  return NextResponse.json(
    { body: "Todo Naice señor" },
    {
      status: 200,
    }
  );
}
