"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getDataParametro } from "../../../../../utils/GetParametro";
import { Niveles, YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par132() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam, setSelectedParam] = useState({});

  console.log("Chanchito", SelectedParam);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(132, 2);
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
          titulo="Grupos Con control De mortalidad Academica por Inasistencia"
          parrafo="Defina"
        >
          <Select
            onChange={(e: any) => {
              setSelectedParam(e);
            }}
            options={Niveles}
            isMulti
            placeholder="Seleccione los niveles"
            className="w-72 p-2"
          />
        </CardsPreguntas>
      </div>
    </div>
  );
}
