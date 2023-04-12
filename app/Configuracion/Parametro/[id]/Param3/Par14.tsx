"use client";
import { Select, Option } from "@material-tailwind/react";
import ReactSelect from "react-select";
import React, { ChangeEvent, useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

interface OptionType {
  label: string;
  value: string;
}

export default function Par14() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParmam, setSelectedParmam] = useState({});

  console.log("Chanchito", SelectedParmam);

  const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParmam({
      ...SelectedParmam,
      [e.target.name]: e.target.value,
    });
  };

  const SelectDatailMtehod = [
    {
      value: "1",
      label: "La fecha de la inasistencia",
    },
    {
      value: "2",
      label: "El intervalo de clase",
    },
    {
      value: "3",
      label: "Motivo de la Inasistencia",
    },
    {
      value: "4",
      label:
        "El reporte al módulo de contabilización porcentual, para la reprobación del área por inasistencia injustificada.",
    },
    {
      value: "5",
      label: "Al módulo de estadísticas de inasistencias",
    },
    {
      value: "6",
      label: "Al control de asistencia para reporte de Flias. Acción",
    },
  ];
  const SelectAccesControl = [
    {
      value: "1",
      label: "Si el estudiante llegó a tiempo a la Institución",
    },
    {
      value: "2",
      label: "Si el estudiante llegó fuera de la hora indicada.",
    },
    {
      value: "3",
      label: "Si el estudiante NO llegó a la Institución.",
    },
  ];
  const SelectCheckOut = [
    {
      value: "1",
      label:
        "Lo reporta evadido a partir de la segunda hora de clase, en las planillas de calificaciones, a partir de la segunda hora de clases.",
    },
    {
      value: "2",
      label:
        "Lo reporta evadido a partir de la segunda hora de clase, en el seguimiento del coordinador de convivencia, para la justificación.",
    },
    {
      value: "3",
      label:
        "Lo reporta evadido a partir de la segunda hora de clase, en el observador del alumno y notifica al E-mail del acudiente",
    },
    {
      value: "4",
      label:
        "Lo reporta evadido a partir de la segunda hora de clase, para el control de mortalidad académica por inasistencia injustificada.",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(14, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Método para el registro de las Inasistencias a los estudiantes. 1"
          parrafo="MÉTODO GENERAL: Indica que se van a ingresar las inasistencias del periodo directamente en la planilla de calificaciones de cada asignatura, sin tener en cuenta la fecha, ni el horario de clases."
        >
          <Select
            onChange={(e: any) =>
              setSelectedParmam({
                ...SelectedParmam,
                MetodoGeneral: e,
              })
            }
            label="Seleccione"
          >
            {YesOrNot.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Método para el registro de las Inasistencias a los estudiantes. 2"
          parrafo="MÉTODO DETALLADO: Indica que para ingresar las inasistencias se debe emplear la planilla virtual de inasistencias o la exportación de la planilla a Excel. El sistema ejecutará automáticamente."
        >
          <p className="text-center p-2">
            En el Observador del Alumno y correo electrónico del acudiente debe
            ir:
          </p>
          <ReactSelect
            onChange={(e: any) => {
              setSelectedParmam({
                ...SelectedParmam,
                CorreoObservador: e,
              });
            }}
            isMulti
            options={SelectDatailMtehod}
            placeholder="Seleccione"
            closeMenuOnSelect={false}
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Método para el registro de las Inasistencias a los estudiantes. 3"
          parrafo="CONTROL DE ACCESO POR BIOMETRÍA: El sistema de modo automático, una vez registrado el ingreso del estudiante al inicio de la jornada, quedará en capacidad de establecer:"
        >
          <ReactSelect
            onChange={(e: any) => {
              setSelectedParmam({
                ...SelectedParmam,
                ControlAcceso: e,
              });
            }}
            isMulti
            options={SelectAccesControl}
            placeholder="Seleccione"
            closeMenuOnSelect={false}
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Método para el registro de las Inasistencias a los estudiantes. 4"
          parrafo="CONTROL DE SALIDA CON REGISTRO BIOMÉTRICO: El sistema de modo automático, si el estudiante no se registra al Salir:"
        >
          <ReactSelect
            onChange={(e: any) => {
              setSelectedParmam({
                ...SelectedParmam,
                ControlSalida: e,
              });
            }}
            isMulti
            options={SelectCheckOut}
            placeholder="Seleccione"
          />
        </CardsPreguntas>
      </div>
    </div>
  );
}
