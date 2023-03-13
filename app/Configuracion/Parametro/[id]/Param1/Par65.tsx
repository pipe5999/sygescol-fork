"use client";
import React, { useEffect } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import DetallesParametro from "../../../DetallesParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import HeaderParam from "../../../HeaderParam";

export default function Par65() {
  const [data, setData] = React.useState({} as any);

  console.log(data);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(65, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {/* <Parametro1 />

      {/* {data?.infoParametros?.TipoParam} */}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      {/* <ModalDetalle InfoParametro={data.infoParametros} /> */}
      <CardsPreguntas />
    </div>
  );
}
