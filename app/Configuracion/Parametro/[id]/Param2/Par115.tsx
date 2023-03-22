"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par115() {
  const [data, setData] = React.useState({} as any);
  const [Items, setItems] = useState([] as any[]);
  console.log("items", Items);

  const SedeSelect = [
    {
      value: "11",
      label: "Sede 1 ",
    },
  ];
  const JornadaSelect = [
    {
      value: "21",
      label: "Mañana",
    },
    {
      value: "22",
      label: "Tarde",
    },
    {
      value: "23",
      label: "Noche",
    },
    {
      value: "24",
      label: "Sabatina",
    },
    {
      value: "25",
      label: "Jornda uínca",
    },
  ];
  const GradosSelect = [
    {
      value: "31",
      label: "PA Párvulos",
    },
    {
      value: "32",
      label: "Pre-Jardín",
    },
    {
      value: "33",
      label: "Jardín I o Kinder",
    },
    {
      value: "34",
      label: "Jardín II o Transición",
    },
    {
      value: "35",
      label: "Primero",
    },
    {
      value: "36",
      label: "Segundo",
    },
    {
      value: "37",
      label: "Tercero",
    },
    {
      value: "38",
      label: "Cuarto",
    },
    {
      value: "39",
      label: "Quinto",
    },
    {
      value: "310",
      label: "Sexto",
    },
    {
      value: "311",
      label: "Séptimo",
    },
    {
      value: "312",
      label: "Octavo",
    },
    {
      value: "313",
      label: "Noveno",
    },
    {
      value: "314",
      label: "Décimo",
    },
    {
      value: "315",
      label: "Undécimo",
    },
  ];
  const NumeroGrados = [
    {
      value: "41",
      label: "1",
    },
    {
      value: "42",
      label: "2",
    },
    {
      value: "43",
      label: "3",
    },
    {
      value: "44",
      label: "4",
    },
    {
      value: "45",
      label: "5",
    },
    {
      value: "46",
      label: "6",
    },
    {
      value: "47",
      label: "7",
    },
    {
      value: "48",
      label: "8",
    },
    {
      value: "49",
      label: "9",
    },
    {
      value: "410",
      label: "10",
    },
    {
      value: "411",
      label: "11",
    },
    {
      value: "412",
      label: "12",
    },
  ];
  const TipoGrado = [
    {
      value: "51",
      label: "Númerico",
    },
    {
      value: "52",
      label: "Alfabético",
    },
  ];
  const Profundizacion = [
    {
      value: "61",
      label: "Sistemas",
    },
    {
      value: "62",
      label: "Servicios",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(115, 2);
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
          <CardsPreguntas
            titulo="Proyección de Sedes, grados y grupos"
            parrafo="Definir en el sistema, el número de grupos de acuerdo a las modalidades de la Institución Educativa, que se crearán en cada Sede, para cada Grado y Jornada"
          >
            <p className="p-2 text-center ">Agregar Grado</p>
            <div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setItems([...Items, {}]);
                  }}
                  className="flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-cyan-800 hover:stroke-lime-500"
                  >
                    <title>Ingreso Grados </title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
