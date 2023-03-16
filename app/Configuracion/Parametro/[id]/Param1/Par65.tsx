"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import DetallesParametro from "../../../DetallesParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import HeaderParam from "../../../HeaderParam";
import Select from "react-select";
import { YesOrNot } from "../../../../../utils/OptionsParams";

export default function Par65() {
  const [data, setData] = React.useState({} as any);
  const [Eleccion, setEleccion] = useState(false);
  const [Paso53Eleccion, setPaso53Eleccion] = useState(false);
  const [Paso54Eleccion, setPaso54Eleccion] = useState(false);
  const [Paso3, setPaso3] = useState(false);
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(65, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  const Paso1 = [
    {
      value: "Cualitativo",
      label: "Cualitativo",
    },
    {
      value: "Cuantitativo",
      label: "Cuantitativo",
    },
  ];
  const Paso4 = [
    {
      value: "1",
      label: "Por Redondeo",
    },
    {
      value: "2",
      label: "Por Truncamiento",
    },
  ];
  const Paso51 = [
    {
      value: "1",
      label:
        "El sistema dejará la valoración registrada en el cierre de periodos",
    },
    {
      value: "2",
      label:
        "El sistema dejará la valoración de mayor valor, entre la del cierre y la obtenida en la superación",
    },
    {
      value: "3",
      label:
        "El sistema promediará la valoración del cierre y la del proceso de superación",
    },
  ];
  const Paso512 = [
    {
      value: "1",
      label: "El sistema dejará la valoración  obtenida en la superación",
    },
    {
      value: "2",
      label:
        "El sistema promediará la valoración del cierre y la del proceso de superación",
    },
  ];
  const Paso52 = [
    {
      value: "1",
      label:
        "El sistema dejará la valoración consolida hasta la fecha de cierre del semestre",
    },
    {},
    {
      value: "2",
      label:
        "El sistema dejará la valoración de mayor valor, entre la del cierre del semestre y la obtenida en la superación",
    },
    {
      value: "3",
      label:
        "El sistema promediará la valoración del cierre del semestre y la del proceso de superación",
    },
  ];
  const Paso521 = [
    {
      value: "1",
      label: "El sistema dejará la valoración  obtenida en la superación",
    },
    {
      value: "2",
      label:
        "El sistema promediará la valoración del cierre del semestre y la del proceso de superación",
    },
  ];
  const Paso53 = [
    {
      value: "1",
      label:
        "El sistema generará planilla para el registro de la calificación de reconsideración",
    },
    {
      value: "2",
      label:
        "El sistema ingresará a la planilla a estudiantes con un máximo de ____áreas reprobadas",
    },
    {
      value: "3",
      label:
        "La calificación de reconsideracion reemplazará en su totalidad la valoración consolida en el semestre",
    },
    {
      value: "4",
      label:
        "La calificación de reconsideracion será promediada con la del promedio consolido en el semestre",
    },
  ];
  const Paso54 = [
    {
      value: "1",
      label:
        "El sistema generará planilla para el registro de la calificación de reconsideración  Fin de Año",
    },
    {
      value: "2",
      label:
        "El sistema ingresará a la planilla a estudiantes con un máximo de ______áreas reprobadas",
    },
    {
      value: "3",
      label:
        "La calificación de reconsideracion reemplazará en su totalidad la valoración consolidada en el último periodo",
    },
    {
      value: "4",
      label:
        "La calificación de reconsideracion será promediada con la del acumulado consolido en el último periodo",
    },
  ];

  return (
    <div>
      {/* <Parametro1 />

      {/* {data?.infoParametros?.TipoParam} */}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      {/* <ModalDetalle InfoParametro={data.infoParametros} /> */}
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Paso 1"
          parrafo="Qué sistema de Evaluación se deberá definir en el sistema:"
        >
          <Select
            onChange={(e: any) => {
              e.value == "Cuantitativo" && setEleccion(true);
              e.value == "Cualitativo" && setEleccion(true);
            }}
            options={Paso1}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
          {Eleccion == true && (
            <>
              <p className="text-center w-72 p-4">Rango Númerico</p>
              <div className="flex flex-col w-72 p-4 ">
                <label> Desde</label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="h-6 rounded-md border-2 border-gray-400"
                  placeholder="Ingrese el Rango Númerico"
                />
                <label>Hasta</label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="h-6 rounded-md border-2 border-gray-400"
                  placeholder="Ingrese el Rango Númerico"
                />
              </div>
            </>
          )}
          <p className="w-72 p-4">
            El sistema tendrá en cuenta solo los conceptos asociados a los
            cuatro Desempeños Nacionales
          </p>
          <Select
            options={YesOrNot}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
        </CardsPreguntas>
        {/* Paso 2 */}
        <CardsPreguntas
          titulo="Paso 2"
          parrafo="Cantidad de decimales requeridos para realizar los registros valorativos a los estudiantes, en las planillas de calificación"
        >
          <div className="w-72 p-4">
            <label>Ingrese el Número de decimales</label>
            <input
              type="number"
              name=""
              id=""
              className="rounded-lg h-8 border-2 border-slate-300 "
            />
          </div>
        </CardsPreguntas>
        {/* Paso 3 */}
        <CardsPreguntas
          titulo="Paso 3"
          parrafo="Defina la equivalencia numérica que debe tener en cuenta el sistema frente a la escala nacional y su correspopndiente abreviatura."
        >
          <div className="flex justify-center">
            <svg
              onClick={(e) => {
                e.preventDefault();
                setPaso3(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-800 hover:stroke-lime-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          {Paso3 && (
            <>
              <div className=" fixed inset-0 z-100  bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen p-3   ">
                  <div className="rounded-lg border border-gray-400 shadow-md m-5 ">
                    <table className="min-w-full table-auto rounded-lg p-4">
                      <thead className="bg-gray-50">
                        <tr className="bg-cyan-700 border-4 border-gray-200 ">
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Escala Nacional
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Abreviatura
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Desde
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Hasta
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Superior
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese la Abreviatura"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Desde "
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Hasta"
                            />
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Alto
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese la Abreviatura"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Desde "
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Hasta"
                            />
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Básico
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese la Abreviatura"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Desde "
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Hasta"
                            />
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Bajo
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese la Abreviatura"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Desde "
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <input
                              type="text"
                              placeholder="Ingrese el Rango Hasta"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex items-center justify-center py-1 bg-gray-200">
                      <button
                        onClick={(e) => {
                          e.preventDefault;
                          setPaso3(false);
                        }}
                        className=" w28 rounded-full bg-cyan-900 p-2 px-4 text-white hover:bg-red-600 "
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </CardsPreguntas>
        {/* Paso 4 */}
        <CardsPreguntas
          titulo="Paso 4"
          parrafo="Definir la forma como el sistema debe realizar los cálculos promediales frente a los registros valorativos ingresados ppor los docentes."
        >
          <Select options={Paso4} />
        </CardsPreguntas>
        {/* Paso 5.1 */}
        <CardsPreguntas
          titulo="Paso 5.1"
          parrafo="En el proceso de superación por periodos, si el estudiante vuelve a reprobar la asignatura:"
        >
          <Select
            options={Paso51}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
          <p className="text-justify p-4">
            Si el estudiante pasa la evaluación
          </p>
          <Select
            options={Paso512}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
          <div className="w-72  p-4 text-center">
            <label className="w-72 p-4 text-center">
              {" "}
              La valoración máxima permitida en esta planilla será de:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="h-8 p-4 border-lg border-slate-400 shadow-md"
            />
          </div>
        </CardsPreguntas>
        {/* Paso 5.2 */}
        <CardsPreguntas
          titulo="Paso 5.2"
          parrafo="En el proceso de evaluación Semestral:"
        >
          <p className="w-72 p-4">
            Si el estudiante vuelve a reprobar la asignatura:
          </p>
          <Select
            options={Paso52}
            placeholder="Seleccione"
            className="p-4 w-72"
          />
          <p className="w-72 p-4">Si el estudiante pasa la evaluación:</p>
          <Select
            options={Paso521}
            placeholder="Seleccione"
            className="p-4 w-72"
          />
          <div className="text-center">
            <label className=" p-4 text-center">
              La valoración máxima permitida en esta planilla será de:{" "}
            </label>
            <input
              type="text"
              name=""
              className=" border-slate-100 shadow-xl border-2 h-8 p-4 ml-4"
            />
          </div>
        </CardsPreguntas>
        {/* Paso 5.3 */}
        <CardsPreguntas
          titulo="Paso 5.3"
          parrafo="El sistema Generará planillas  para procesos de Reconsideración Semestral"
        >
          <Select
            onChange={(e) => {
              e?.value == "2"
                ? setPaso53Eleccion(true)
                : setPaso53Eleccion(false);
            }}
            options={Paso53}
            className="w-72 p-4"
            placeholder="Seleccione"
          />
          {Paso53Eleccion && (
            <div className="p-4">
              <label>Ingrese el número de áreas</label>
              <input
                type="number"
                name=""
                className="rounded-lg shadow-lg ring-2 ring-slate-200"
              />
            </div>
          )}
          <div className="p-4 text-center">
            <label className="">
              La valoración máxima permitida en esta planilla será de:
            </label>
            <input
              type="text"
              name=""
              className="rounded-md shadow-lg ring-1 ring-slate-200 h-8"
            />
          </div>
        </CardsPreguntas>
        {/*Paso 5.4  */}
        <CardsPreguntas
          titulo="Paso 5.4"
          parrafo="El sistema Generará planillas  para procesos de Reconsideración Fin de Año"
        >
          <Select
            onChange={(e) => {
              e?.value == "2"
                ? setPaso54Eleccion(true)
                : setPaso54Eleccion(false);
            }}
            options={Paso54}
            className="w-72 p-4"
            placeholder="Seleccione"
          />
          {Paso54Eleccion && (
            <div className="p-4">
              <label>Ingrese el número de áreas</label>
              <input
                type="number"
                name=""
                className="rounded-lg shadow-lg ring-2 ring-slate-200"
              />
            </div>
          )}
          <div className="p-4 text-center">
            <label className="">
              La valoración máxima permitida en esta planilla será de:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-md shadow-lg ring-1 ring-slate-200 h-8"
            />
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
