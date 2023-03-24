"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par156() {
  const [data, setData] = React.useState({} as any);
  const [ModalLimit, setModalLimit] = useState(false);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(156, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return <div></div>;
}
