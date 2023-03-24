"use client";
import React, { useEffect } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par73() {
  const [data, setData] = React.useState({} as any);

  const Modules = [
    {
      value: "1",
      label: "Datos Académicos",
    },
    {
      value: "2",
      label: "Información Básica del estudiante",
    },
    {
      value: "3",
      label: "Necesidades Educativas Especiales",
    },
    {
      value: "4",
      label: "Tipo De Religión que Profesa",
    },
    {
      value: "5",
      label: "Información de localización del Estudiante",
    },
    {
      value: "6",
      label: "Estudiante Víctima de Conflicto ",
    },
    {
      value: "7",
      label: "Información sobre la Salud del Estudiante",
    },
    {
      value: "8",
      label: "Información de la Madre",
    },
    {
      value: "9",
      label: "Información del Padre",
    },
    {
      value: "10",
      label: "Información del Acudiente",
    },
    {
      value: "11",
      label: "Subir Archivos Requisitos de la Matrícula",
    },
    {
      value: "12",
      label: "Cuadro acumulativo de la Matrícula",
    },
    {
      value: "13",
      label: "Programa Transporte Escolar",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(73, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <div className="flex flex-wrap gap-6 justify-center p-4 ">
          <CardsPreguntas
            titulo="Información para el libro de matrículas"
            parrafo="Información que el sistema debe indexar en el libro de matrículas"
          >
            <Select isMulti options={Modules} placeholder="Seleccione" />
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
