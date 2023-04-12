"use client";
import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par68() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam, setSelectedParam] = useState({});
  console.log("Any Dónde", SelectedParam);

  const handlerChangeParam68 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam({
      ...SelectedParam,
      [e.target.name]: e.target.value,
    });
  };

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
              onChange={(e: number) => {
                setSelectedParam({
                  ...SelectedParam,
                  Param68S: e,
                });
              }}
              label="Seleccione"
              name="Param68S"
            >
              {Param68.map((item) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                );
              })}
            </Select>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
