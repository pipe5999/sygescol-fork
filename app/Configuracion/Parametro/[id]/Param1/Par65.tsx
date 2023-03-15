"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import DetallesParametro from "../../../DetallesParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import HeaderParam from "../../../HeaderParam";
import Select from "react-select";
import { YesOrNot } from "../../../../../utils/OptionsParams";

export default function Par65() {
  const [data, setData] = React.useState({} as any);
  const [Eleccion, setEleccion] = useState(true);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(65, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  const Paso1 = [
    {
      value: "Cuantitativo",
      label: "Cualitativo",
    },
    {
      value: "cuantitativo",
      label: "Cuantitativo",
    },
  ];

  return (
    <div>
      {/* <Parametro1 />

      {/* {data?.infoParametros?.TipoParam} */}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      {/* <ModalDetalle InfoParametro={data.infoParametros} /> */}
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Paso 1"
          parrafo="Qué sistema de Evaluación se deberá definir en el sistema:"
        >
          <Select
            options={Paso1}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
          <p className="w-72 p-4">
            El sistema tendrá en cuenta solo los conceptos asociados a los
            cuatro Desempeños Nacionales
          </p>
          <Select
            options={YesOrNot}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
        </CardsPreguntas>
      </div>
    </div>
  );
}
