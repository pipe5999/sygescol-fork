"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import { Niveles } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import ModalFecha from "../../ModalFecha";

export default function Par96() {
  const [data, setData] = React.useState({} as any);

  const [ShowModalFecha, setShowModalFecha] = useState(false);

  const User = [
    {
      value: "Estudiante",
      label: "Estudiante",
    },
    {
      value: "Docente",
      label: "Docente",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(96, 2);
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
        <div className="flex flex-wrap gap-6 justify-center p-4 ">
          <CardsPreguntas
            titulo="Fechas para cada periodo académico"
            parrafo=""
          >
            <Select
              options={Niveles}
              placeholder="Seleccione Uno"
              className="w-72 p-2"
            />
            <Select
              options={User}
              placeholder="Seleccione"
              className="w-72 p-2"
            />
            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModalFecha(!ShowModalFecha);
                }}
                className="w-1/2 h-8 rounded-sm shadow-lg bg-cyan-700 text-white  hover:bg-cyan-800 hover:text-white"
              >
                Definir Fechas
              </button>
            </div>
            {ShowModalFecha && (
              <div>
                <ModalFecha setShowModalFecha={setShowModalFecha} />
              </div>
            )}
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
