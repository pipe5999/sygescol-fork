"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par95() {
  const [data, setData] = React.useState({} as any);

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
        <CardsPreguntas></CardsPreguntas>
      </div>
    </div>
  );
}
