"use client";
import React, { useEffect } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par99() {
  const [data, setData] = React.useState({} as any);

  const Param99Select = [
    {
      value: "1",
      label: "Registrar las calificaciones de procedencia",
    },
    {
      value: "2",
      label: "Si no trae calificaciones, solicitar homologación",
    },
    {
      value: "3",
      label: "Si el pensum no corresponde, remitir al docente a cargo",
    },
    {
      value: "4",
      label: "Remitir nivelación a todos los docentes a cargo",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(99, 2);
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
            titulo="Guardar Matrícula en el sistema"
            parrafo="El sistema almacenará la Matrícula Extraordinaria en base de datos, SOLO en los casos en que el funcionario encargado del registro, haya procedido con alguno de estos procedimientos que permiten que al estudiante, se le registren las calificacones correspondientes al periodo (s), que anteceden al periodo que está activo, al momento de la matrícula."
          >
            <p className="p-2">Selección Múltiple</p>
            <Select
              isMulti
              options={Param99Select}
              className="p-2"
              placeholder="Seleccione"
            />
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
