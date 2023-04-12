"use client";
import { Select, Option } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par111() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam, setSelectedParam] = useState({});

  console.log("Chanchito", SelectedParam);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(111, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  const SelectParam = [
    {
      value: "1",
      label: "Coordinador de Convivencia",
    },
    {
      value: "2",
      label: "Orientador Escolar",
    },
    {
      value: "3",
      label: "Tanto el uno como el otro",
    },
  ];

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Roles asignados para cambiar las Inansitencias"
          parrafo="Defina"
        >
          <Select
            onChange={(e: any) => {
              setSelectedParam(e);
            }}
            label="Seleccione"
            name="Roles"
            className="w-72 p-2"
          >
            {SelectParam.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
        </CardsPreguntas>
      </div>
    </div>
  );
}
