"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import DetallesParametro from "../../../DetallesParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import HeaderParam from "../../../HeaderParam";
import Select from "react-select";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import { Input } from "@material-tailwind/react";

export default function Par65() {
  const [data, setData] = React.useState({} as any);
  const [Eleccion, setEleccion] = useState(false);
  const [Paso53Eleccion, setPaso53Eleccion] = useState(false);
  const [Paso54Eleccion, setPaso54Eleccion] = useState(false);
  const [Paso3, setPaso3] = useState(false);
  const [SelectedPaso1, setSelectedPaso1] = useState({});
  const [InputPaso2, setInputPaso2] = useState({});
  const [InputPaso3, setInputPaso3] = useState({});
  const [SelectedPaso4, setSelectedPaso4] = useState({});
  const [SelectedPaso51, setSelectedPaso51] = useState({});
  const [SelectedPaso52, setSelectedPaso52] = useState({});
  const [SelectedPaso53, setSelectedPaso53] = useState({});
  const [SelectedPaso54, setSelectedPaso54] = useState({});

  const handleChangePaso1 = (e: any) => {
    setSelectedPaso1({
      ...SelectedPaso1,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePaso2 = (e: any) => {
    setInputPaso2({
      ...InputPaso2,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePaso3 = (e: any) => {
    setInputPaso3({
      ...InputPaso3,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePaso51 = (e: any) => {
    setSelectedPaso51({
      ...SelectedPaso51,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePaso52 = (e: any) => {
    setSelectedPaso52({
      ...SelectedPaso52,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePaso53 = (e: any) => {
    setSelectedPaso53({
      ...SelectedPaso53,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePaso54 = (e: any) => {
    setSelectedPaso54({
      ...SelectedPaso54,
      [e.target.name]: e.target.value,
    });
  };

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
              setSelectedPaso1({
                ...SelectedPaso1,
                Qality: e?.value,
              });

              e.value == "Cuantitativo" && setEleccion(true);
              e.value == "Cualitativo" && setEleccion(true);
            }}
            options={Paso1}
            placeholder="Seleccione"
            name="CoC"
            className="w-72 p-4"
          />
          {Eleccion == true && (
            <>
              <p className="text-center w-72 p-4">Rango Númerico</p>
              <div className="flex flex-col w-72 p-4 ">
                <Input
                  label="Desde"
                  onChange={handleChangePaso1}
                  type="number"
                  name="Desde"
                  id=""
                  className="h-6 rounded-md border-2 border-gray-400"
                />
                <br />
                <Input
                  label="Hasta"
                  onChange={handleChangePaso1}
                  type="number"
                  name="Hasta"
                  id=""
                  className="h-6 rounded-md border-2 border-gray-400"
                />
              </div>
            </>
          )}
          <p className="w-72 p-4">
            El sistema tendrá en cuenta solo los conceptos asociados a los
            cuatro Desempeños Nacionales
          </p>
          <Select
            onChange={(e: any) => {
              setSelectedPaso1({
                ...SelectedPaso1,
                Desempeños: e?.value,
              });
            }}
            options={YesOrNot}
            name="Desempeños"
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
            <Input
              onChange={handleChangePaso2}
              label="Ingrese el Número de decimales"
              name="DecimalNum"
              type="number"
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
              className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500"
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
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese la abreviatura"
                              name="abbrSup"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Desde"
                              name="RangDesdeSup"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Hasta"
                              name="RangHastaSup"
                            />
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Alto
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese la Abreviatura"
                              name="abbrAlt"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Desde "
                              name="RangDesdeAlt"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Hasta"
                              name="RangHastaAlt"
                            />
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Básico
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese la Abreviatura"
                              name="abbrBas"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Desde "
                              name="RangDesdeBas"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Hasta"
                              name="RangHastaBas"
                            />
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                            Bajo
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese la Abreviatura"
                              name="abbrBajo"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Desde "
                              name="RangDesdeBajo"
                            />
                          </td>
                          <td className="px-16 py-2 border">
                            <Input
                              onChange={handleChangePaso3}
                              type="text"
                              label="Ingrese el Rango Hasta"
                              name="RangHastaBajo"
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
          <Select
            onChange={(e: any) => {
              setSelectedPaso4(e);
            }}
            options={Paso4}
            placeholder="Seleccione"
          />
        </CardsPreguntas>
        {/* Paso 5.1 */}
        <CardsPreguntas
          titulo="Paso 5.1"
          parrafo="En el proceso de superación por periodos, si el estudiante vuelve a reprobar la asignatura:"
        >
          <Select
            onChange={(e) => {
              setSelectedPaso51({
                ...SelectedPaso51,
                Paso51Selected: e?.value,
              });
            }}
            options={Paso51}
            placeholder="Seleccione"
            className="w-72 p-4"
            name="paso51"
          />
          <p className="text-justify p-4">
            Si el estudiante pasa la evaluación
          </p>
          <Select
            onChange={(e) => {
              setSelectedPaso51({
                ...SelectedPaso51,
                Paso512Selected: e?.value,
              });
            }}
            options={Paso512}
            placeholder="Seleccione"
            className="w-72 p-4"
            name="paso512"
          />
          <div className="w-72  p-4 text-center">
            <p className="w-72 p-4 text-center">
              {" "}
              La valoración máxima permitida en esta planilla será de:
            </p>
            <Input
              onChange={handleChangePaso51}
              type="text"
              name="ValoracionPlanilla51"
              label="Ingrese la valoración"
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
            onChange={(e) => {
              setSelectedPaso52({
                ...SelectedPaso52,
                Reprubed: e?.value,
              });
            }}
            options={Paso52}
            placeholder="Seleccione"
            className="p-4 w-72"
          />
          <p className="w-72 p-4">Si el estudiante pasa la evaluación:</p>
          <Select
            onChange={(e) => {
              setSelectedPaso52({
                ...SelectedPaso52,
                Aprubed: e?.value,
              });
            }}
            options={Paso521}
            placeholder="Seleccione"
            className="p-4 w-72"
          />
          <div className="w-72 p-4 text-center">
            <p className=" p-4 text-center">
              La valoración máxima permitida en esta planilla será de:{" "}
            </p>
            <Input
              onChange={handleChangePaso52}
              type="text"
              name="ValoracionPlanillaPaso"
              label="Ingrese la Valoración"
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
              setSelectedPaso53({
                ...SelectedPaso53,
                Paso53Seleccion: e?.value,
              });
              e?.value == "2"
                ? setPaso53Eleccion(true)
                : setPaso53Eleccion(false);
            }}
            options={Paso53}
            className="w-72 p-4"
            placeholder="Seleccione"
          />
          {Paso53Eleccion && (
            <div className="p-4 w-72">
              <Input
                onChange={handleChangePaso53}
                label="Ingrese el número de áreas"
                type="number"
                name="AreaNumbers"
              />
            </div>
          )}
          <div className="p-4 text-center w-72">
            <p className="">
              La valoración máxima permitida en esta planilla será de:
            </p>
            <Input
              onChange={handleChangePaso53}
              type="text"
              name="ValoracionPlanillaPaso53"
              label="Ingrese la Valoración"
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
              setSelectedPaso54({
                ...SelectedPaso54,
                Paso54Seleccion: e?.value,
              });
              e?.value == "2"
                ? setPaso54Eleccion(true)
                : setPaso54Eleccion(false);
            }}
            options={Paso54}
            className="w-72 p-4"
            placeholder="Seleccione"
          />
          {Paso54Eleccion && (
            <div className="p-4 w-72 ">
              <Input
                onChange={handleChangePaso54}
                label="Ingrese el número de áreas"
                type="number"
                name="NumemberAreasPaso54"
              />
            </div>
          )}
          <div className="p-4 text-center">
            <p className="">
              La valoración máxima permitida en esta planilla será de:
            </p>
            <Input
              onChange={handleChangePaso54}
              label="Ingrese la valoración"
              type="text"
              name="ValoraciónMaximaPaso54"
            />
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
