"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par95() {
  const [data, setData] = React.useState({} as any);

  const EducacionTradicional = [
    {
      value: "11",
      label: "Uno",
    },
    {
      value: "12",
      label: "Dos",
    },
    {
      value: "13",
      label: "Tres",
    },
    {
      value: "14",
      label: "Cuatro",
    },
  ];
  const CiclosUnoCu = [
    {
      value: "21",
      label: "Uno",
    },
    {
      value: "22",
      label: "Dos",
    },
    {
      value: "23",
      label: "Tres",
    },
    {
      value: "24",
      label: "Cuatro",
    },
  ];
  const CiclosCincoSeis = [
    {
      value: "31",
      label: "Uno",
    },
    {
      value: "32",
      label: "Dos",
    },
    {
      value: "33",
      label: "Tres",
    },
    {
      value: "34",
      label: "Cuatro",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(95, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {/* {data?.infoParametros?.TipoParam} */}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="NÚMERO DE PERIODOS SEGÚN MODALIDAD"
          parrafo="Defina el número de periodos para:"
        >
          <p className="p-2">Educación tradicional</p>
          <Select options={EducacionTradicional} placeholder="Seleccione" />
          <br />
          <p className="p-2">Ciclos I, II, III, IV</p>
          <Select options={CiclosUnoCu} placeholder="Seleccione" />
          <br />
          <p className="p-2">Ciclos V, VI</p>
          <Select options={CiclosCincoSeis} placeholder="Seleccione" />
        </CardsPreguntas>
      </div>
    </div>
  );
}
