"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par115() {
  const [data, setData] = React.useState({} as any[]);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [Items, setItems] = useState([] as any);

  console.log("items", Items);

  const onSubmit = handleSubmit((data) => console.log("yarn", data));

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
  const GradoSelect = [
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
  const NumeroGradosSelect = [
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
  const TipoGradoSelect = [
    {
      value: "51",
      label: "Númerico",
    },
    {
      value: "52",
      label: "Alfabético",
    },
  ];
  const ProfundizacionSelect = [
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

            <div className="flex justify-center">
              <button
                onClick={() => {
                  setItems(
                    Items.push({
                      value: "",
                    })
                  );
                }}
                className="flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500"
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
            <div>
              {Items?.map((item: any, index: any) => {
                return (
                  <div className="p-2 w-72">
                    <p>Seleccione la Sede</p>
                    <Select
                      onChange={(e: any) => {
                        console.log("XD", e);

                        const { value } = e;
                        setItems((prev: any) => {
                          const newItems = [...prev];
                          newItems[index] = {
                            ...newItems[index],
                            Sede: value,
                          };
                        });
                      }}
                      options={SedeSelect}
                      placeholder="Seleccione"
                    />
                    <br />
                    <p>Seleccione la Jornada</p>
                    <Select
                      onChange={(e: any) => {
                        const { value } = e;
                        setItems((prev: any) => {
                          const newItems = [...prev];
                          newItems[index] = {
                            ...newItems[index],
                            Jornada: value,
                          };
                        });
                      }}
                      options={JornadaSelect}
                      placeholder="Seleccione"
                    />
                    <br />
                    <p>Seleccione el Grado</p>
                    <Select
                      onChange={(e: any) => {
                        const { value } = e;
                        setItems((prev: any) => {
                          const newItems = [...prev];
                          newItems[index] = {
                            ...newItems[index],
                            Grado: value,
                          };
                        });
                      }}
                      options={GradoSelect}
                      placeholder="Seleccione"
                    />
                    <br />
                    <p>Seleccione el Número de Grados</p>
                    <Select
                      onChange={(e: any) => {
                        const { value } = e.target;
                        setItems((prev: any) => {
                          const newItems = [...prev];
                          newItems[index] = {
                            ...newItems[index],
                            NGrado: value,
                          };
                        });
                      }}
                      options={NumeroGradosSelect}
                      placeholder="Seleccione"
                    />
                    <br />
                    <p>Seleccione el Tipo de Grado</p>
                    <Select
                      onChange={(e: any) => {
                        const { value } = e.target;
                        setItems((prev: any) => {
                          const newItems = [...prev];
                          newItems[index] = {
                            ...newItems[index],
                            TipoGrado: value,
                          };
                        });
                      }}
                      options={TipoGradoSelect}
                      placeholder="Seleccione"
                    />
                    <br />
                    <p>Seleccione la Profundización</p>
                    <Select
                      onChange={(e: any) => {
                        const { value } = e.target;
                        setItems((prev: any) => {
                          const newItems = [...prev];
                          newItems[index] = {
                            ...newItems[index],
                            Profundidad: value,
                          };
                        });
                      }}
                      options={ProfundizacionSelect}
                      placeholder="Seleccione"
                    />
                  </div>
                );
              })}
            </div>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
