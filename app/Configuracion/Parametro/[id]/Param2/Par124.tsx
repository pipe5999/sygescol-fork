"use client";
import { Option } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par124() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam124, setSelectedParam124] = useState({});

  console.log("Any ???", SelectedParam124);

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
              onChange={(e: any) => {
                setSelectedParam124(e);
              }}
              label="Seleccione"
              name="Param124"
            >
              {YesOrNot.map((item) => {
                return <Option value={item.value}>{item.label}</Option>;
              })}
            </Select>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
