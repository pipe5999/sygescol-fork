"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par100() {
  const [data, setData] = React.useState({} as any);
  const [PorcentajeRegistro, setPorcentajeRegistro] = useState(false);

  const ParamRegistro = [
    {
      value: "11",
      label:
        "El registro lo podrá hacer cada docente que le oriente clase al estudiante.",
    },
    {
      value: "12",
      label: "El registro lo hará solo el Director de grupo.",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(100, 2);
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
          titulo="Manejo de la planilla de comportamiento."
          parrafo="Establecer los datos que debe subir el sistema a las planillas, boletines y certificados de estudio, como proceso de la valoración comportamental del estudiante."
        >
          <Select
            onChange={(e: any) => {
              e.value == "11" && setPorcentajeRegistro(true);
              e.value == "12" && setPorcentajeRegistro(true);
            }}
            options={ParamRegistro}
          />
          {PorcentajeRegistro && (
            <div className="m-2 flex justify-center">
              <input
                type="text"
                placeholder="Ingrese el Porcentaje"
                className="h-8 rounded-sm ring-1 ring-gray-300 shadow-sm"
              />
            </div>
          )}
          <br />

          <p className="p-2">Generar consolidado para fin de año:</p>
          <Select options={YesOrNot} placeholder="Seleccione" className="p-2" />
          <br />
          <p className="p-2">Habilitar carga masiva de conceptos</p>
          <Select options={YesOrNot} placeholder="Seleccione" className="p-2" />
        </CardsPreguntas>
      </div>
    </div>
  );
}
