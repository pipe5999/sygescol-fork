"use client";
import { Option } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import React, { useEffect } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par256() {
  const [data, setData] = React.useState({} as any);

  console.log(data);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(256, 2);
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
          titulo="Bloqueo de la Matrícula, ante la ausencia de fotografía del estudiante."
          parrafo="El sistema solicitará que el estudiante primero registre la fotografía en base de datos, y luego si proceda con el registro de la matrícula."
        >
          <div className="flex w-72 flex-col gap-6">
            <Select color="cyan" label="Seleccione" isMulti>
              {YesOrNot.map((option) => {
                return <Option>{option.label}</Option>;
              })}
            </Select>
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
