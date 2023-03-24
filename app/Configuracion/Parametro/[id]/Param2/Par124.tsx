"use client";
import React, { useEffect } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par124() {
  const [data, setData] = React.useState({} as any);

  console.log(data);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(124, 2);
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
            titulo="Asignación de RUM a la matrícula"
            parrafo="El sistema asignará el Registro Único de Matrícula a modo consecutivo"
          >
            <p className="p-2">Defina Si Aplica o no </p>
            <Select
              options={YesOrNot}
              placeholder="Seleccione"
              className="p-2"
            />
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
