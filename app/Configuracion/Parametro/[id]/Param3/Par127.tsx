"use client";
import { Option } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getDataParametro } from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par127() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam, setSelectedParam] = useState({});

  console.log("Chanchito", SelectedParam);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(127, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  const SelectParam = [
    { value: 1, label: "En la Planilla de Calificaciones" },
    { value: 2, label: "En la Planilla de inasistencias virtual" },
    { value: 3, label: "No registrar Inacistencias en el sistema" },
  ];

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Dónde ha de quedar registrada este tipo de inasistencia"
          parrafo="Defina"
        >
          <Select
            onChange={(e: any) => {
              setSelectedParam(e);
            }}
            label="Seleccione"
            name="RegistroInasistencia"
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
