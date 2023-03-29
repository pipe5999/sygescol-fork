"use client";
import React, { useEffect } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par68() {
  const [data, setData] = React.useState({} as any);

  const Param68 = [
    {
      value: "1",
      label: "Asignar cupo provisional",
    },
    {
      value: "2",
      label: "Generar alerta para que se defina grado",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(68, 2);
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
          <CardsPreguntas titulo="En los casos que al estudiante se le asigne estado académico por definir, el sistema habilitará la Matrícula Administrativa Provisional">
            <p className="p-2">En Caso de que este Parámetro aplique:</p>
            <Select
              options={Param68}
              placeholder="Seleccione"
              className="p-2"
            />
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
