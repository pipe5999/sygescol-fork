"use client";
import { Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import { EstadoAcdemico, YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par93() {
  const [data, setData] = React.useState({} as any);
  const [Paso1, setPaso1] = useState(false);
  const [Paso21, setPaso21] = useState(false);
  const [Paso212, setPaso212] = useState(false);
  const [Paso31Select, setPaso31Select] = useState(false);
  const [Paso31InSelect, setPaso31InSelect] = useState(false);
  const [Paso32Select, setPaso32Select] = useState(false);
  const [Paso33Select, setPaso33Select] = useState(false);
  const [Paso33InSelect, setPaso33InSelect] = useState(false);
  const [Paso4Select, setPaso4Select] = useState(false);
  const [SelectedPaso1, setSelectedPaso1] = useState({});
  const [SelectedPaso21, setSelectedPaso21] = useState({});
  const [SelectedPaso22, setSelectedPaso22] = useState({});

  console.log("Any ??", SelectedPaso22);

  const handlerChangePaso1 = (e: any) => {
    setSelectedPaso1({
      ...SelectedPaso1,
      [e.target.name]: e.target.value,
    });
  };
  const handlerChangePaso21 = (e: any) => {
    setSelectedPaso21({
      ...SelectedPaso21,
      [e.target.name]: e.target.value,
    });
  };
  const handlerChangePaso22 = (e: any) => {
    setSelectedPaso22({
      ...SelectedPaso22,
      [e.target.name]: e.target.value,
    });
  };

  const Paso22Bajo = [
    {
      value: "1",
      label: "El promedio obtenido al cierre de áreas",
    },
    {
      value: "2",
      label:
        "El 100% de la valoración registrada en la planilla de superación fin de año",
    },
    {
      value: "3",
      label:
        "El prmedio entre el cierre de áreas y la valoración registrada en la planilla de superación fin de año",
    },
    {
      value: "4",
      label:
        "La calificación de mayor valor, entre el consolidado al cierre de áreas y la calificación del proceso de superación fin de año",
    },
  ];
  const Paso22Alto = [
    {
      value: "1",
      label:
        "El 100% de la valoración registrada en la planilla de superación fin de año",
    },
    {
      value: "2",
      label:
        "El prmedio entre el cierre de áreas y la valoración registrada en la planilla de superación fin de año",
    },
  ];
  const Paso22Area = [
    {
      value: "1",
      label:
        "La valoración obtenida por el estudiante en el Proceso de Superación fin de año.",
    },
    {
      value: "2",
      label:
        "Promediará la valoración del Proceso de superación fin de año, con las valoraciones históricas consolidadas en el cierre de áreas TENIENDO EN CUENTA los Porcentajes asignados a las asignaturas que conformaron el área en el plan de estudios del año en que el estudiante la reprobó.",
    },
    {
      value: "3",
      label:
        "Promediará la valoración del Proceso de superación fin de año, con las valoraciones históricas consolidadas en el cierre de áreas SIN TENER en cuenta los Porcentajes asignados a las asignaturas que conformaron el área en el plan de estudios del año en que el estudiante la reprobó.",
    },
  ];
  const Paso31 = [
    {
      value: "1",
      label:
        "Registrará como valoración final del proceso, la calificación consolidada al cierre del periodo o año",
    },
    {
      value: "2",
      label: "Registrará una calificación definida en este parámetro: ",
    },
  ];
  const Paso32 = [
    {
      value: "1",
      label:
        "Si se trata de una planilla de registro por periodo académico, se enviará un NC (No calificado por el docente)",
    },
    {
      value: "2",
      label:
        "Se permitirá la impresión del boletín del periodo, pero en la asignatura se notificará que el docente no registró la valoración",
    },
    {
      value: "3",
      label:
        "No se permitirá la impresión del boletín, hasta tanto el docente haya registrado las valoraciones pendientes",
    },
  ];
  const Paso33 = [
    {
      value: "1",
      label:
        "No permitirá la Impresión del Informe Final, Certificados y Libros final de valoraciones, a TODO EL GRUPO",
    },
    {
      value: "2",
      label:
        "No permitirá la Impresión del Informe Final, Certificados y Libros final de valoraciones, solo al estudiante afectedo",
    },
    {
      value: "3",
      label:
        "Dejar como valoración final, la consolidada en el cierre de áreas",
    },
    {
      value: "4",
      label: "Dejar como valoración final, la registrada en este parámetro:",
    },
  ];
  const Paso4 = [
    {
      value: "1",
      label: "Área",
    },
    {
      value: "2",
      label: "Por Pemsum",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(93, 2);
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
          titulo="Paso 1"
          parrafo="Después del cierre de áreas efectuado por los coordinadores, el sistema asignará a los estudiantes según los criterios establecidos en este parámetro, los siguientes estados académicos:"
        >
          <div className="flex justify-center">
            <svg
              onClick={(e) => {
                e.preventDefault;
                setPaso1(!Paso1);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500"
            >
              <title>Abrir Modal</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
              />
            </svg>
          </div>
          {Paso1 && (
            <div className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen p-3   ">
                <div className="rounded-lg border border-gray-400 shadow-md m-5 ">
                  <table className="bg-red-500 table-auto rounded-lg p-4">
                    <thead className="bg-gray-50">
                      <tr className="bg-cyan-700 border-4 border-gray-200 ">
                        <th className="px-4 py-2 border text-gray-100 uppercase">
                          Estudiantes
                        </th>
                        <th className="text-center px-4 py-2 border text-gray-100">
                          Desde
                        </th>
                        <th className="text-center px-4 py-2 border text-gray-100">
                          Hasta
                        </th>
                        <th className="text-center px-4 py-2 border text-gray-100">
                          Estado
                        </th>
                        <th className="text-center px-4 py-2 border text-gray-100 w-10">
                          Estado Por definir
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          Para estudiantes áreas reprobada entre:
                        </td>
                        <td className="px-16 py-2 border  text-gray-700 font-semibold text-center">
                          0
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          0
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          Estado Académcio:
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          Aprobado
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-16 py-2  flex flex-wrap border text-center text-gray-700 font-semibold">
                          Para estudiantes áreas reprobada entre:
                        </td>
                        <td className="px-16 py-2 border  text-gray-700 font-semibold text-center">
                          1
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          2
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          Estado Académcio:
                        </td>
                        <td className="px-6 py-2 border text-center text-gray-700 font-semibold w-8">
                          <Select
                            onChange={(e) => {
                              setSelectedPaso1({
                                ...SelectedPaso1,
                                EstadoAcademicoUnoDos: e?.value,
                              });
                            }}
                            options={EstadoAcdemico}
                            className="w-72"
                            placeholder="Elija"
                          />
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-16 py-2  flex flex-wrap border text-center text-gray-700 font-semibold">
                          Para estudiantes áreas reprobada entre:
                        </td>
                        <td className="px-16 py-2 border  text-gray-700 font-semibold text-center">
                          3
                        </td>
                        <td className="px-16  border text-center text-gray-700 font-semibold">
                          4
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          Estado Académcio:
                        </td>
                        <td className="px-6 py-2 border text-center text-gray-700 font-semibold w-8">
                          <Select
                            onChange={(e) => {
                              setSelectedPaso1({
                                ...SelectedPaso1,
                                EstadoAcademicoTresCuatro: e?.value,
                              });
                            }}
                            options={EstadoAcdemico}
                            className="w-72"
                            placeholder="Elija"
                          />
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-16 py-2  flex flex-wrap border text-center text-gray-700 font-semibold">
                          Para estudiantes áreas reprobada entre:
                        </td>
                        <td className="px-16 py-2 border  text-gray-700 font-semibold text-center">
                          5
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          6
                        </td>
                        <td className="px-16 py-2 border text-center text-gray-700 font-semibold">
                          Estado Académcio:
                        </td>
                        <td className="px-6 py-2 border text-center text-gray-700 font-semibold w-8">
                          <Select
                            onChange={(e) => {
                              setSelectedPaso1({
                                ...SelectedPaso1,
                                EstadoAcademicoCincoSeis: e?.value,
                              });
                            }}
                            options={EstadoAcdemico}
                            className="w-72"
                            placeholder="Elija"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex items-center justify-center py-1 bg-gray-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault;
                        setPaso1(false);
                      }}
                      className=" w28 rounded-full bg-cyan-900 p-2 px-4 text-white hover:bg-red-600 "
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardsPreguntas>
        {/* Paso 2 */}
        <CardsPreguntas titulo="Paso 2.1" parrafo="">
          <div className="flex flex-col items-center justify-center ">
            <p className="text-center font-semibold">
              Reprobación Final de año
            </p>
            <div className="flex justify-center">
              <svg
                onClick={(e) => {
                  e.preventDefault;
                  setPaso21(!Paso21);
                  setPaso212(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500"
              >
                <title>Abrir Componente</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </div>
            {Paso21 && (
              <div className="flex flex-col gap-1 justify-center w-72 p-4 ">
                <p className=" text-center text-wrap">
                  El sistema no relacionará en las planillas de superación fin
                  de año, a estudiantes cuyo promedio ponderado detodos los
                  periodos académicos, sea igual o menor a:
                </p>
                <Input
                  onChange={handlerChangePaso21}
                  type="text"
                  name="RelacionPlanillas1"
                  placeholder="Ingrese el promedio"
                  className="h-6 rounded-md border-2 border-gray-400"
                />
              </div>
            )}
            <p className="text-center font-semibold">Condiciones del Proceso</p>
            <div className="flex justify-center">
              <svg
                onClick={(e) => {
                  e.preventDefault;
                  setPaso212(!Paso212);
                  setPaso21(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500"
              >
                <title>Abrir Componente</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </div>
            {Paso212 && (
              <div className="flex flex-col gap-1 text-center w-72 p-2">
                <p className="text-center">
                  El sistema no enviará a las planillas de SEGUNDA SUPERACIÓN
                  FIN DE AÑO, a aquellos estudiantes que registren valoraciones
                  del primer proceso de superación fin de año, menor o gual a:{" "}
                </p>
                <Input
                  onChange={handlerChangePaso21}
                  type="text"
                  name="CondicionesDelProceso"
                  label="Ingrese la valoración"
                />
                <p>
                  La calificación máxima permitida en la planilla de la{" "}
                  <strong>Priemra</strong> superación fin de año, será de:
                </p>
                <Input
                  onChange={handlerChangePaso21}
                  type="text"
                  name="CalificacionPlanillaPaso21"
                  label="Ingrese la Calificación"
                />
                <p>
                  La calificación máxima permitida en la planilla de la{" "}
                  <strong>Segundo</strong> superación fin de año, será de:
                </p>
                <Input
                  onChange={handlerChangePaso21}
                  type="text"
                  name="CalificacionPlanillaPaso212"
                  label="Ingrese la Calificación"
                />
                <p className="font-semibold">
                  Para que un área reprobada en el cierre de áreas, cambie su
                  estado de reprobada a promovida, todas las asignaturas que la
                  integren y que fueron reprobadas, deberán en el proceso de
                  superación fin de año, ser calificadas con la valoración
                  mínima del desempeño básico.
                </p>
                <>
                  <Select
                    onChange={(e) => {
                      setSelectedPaso21({
                        ...SelectedPaso21,
                        YesOrNotPaso521: e?.value,
                      });
                    }}
                    name="ReproveORAprove"
                    options={YesOrNot}
                    placeholder="Seleccione"
                  />
                </>
              </div>
            )}
          </div>
        </CardsPreguntas>
        <CardsPreguntas titulo="Paso 2.2" parrafo="">
          <>
            <p className="text-center">
              Para los casos de áreas calificadas con desempeño{" "}
              <strong>BAJO</strong>, despues del proceso de superación fin de
              año, el sistema deberá dejar como valoración final:
            </p>
            <Select
              onChange={(e) => {
                setSelectedPaso22({
                  ...SelectedPaso22,
                  Bajo: e?.value,
                });
              }}
              options={Paso22Bajo}
              placeholder="Seleccione"
              name="Paso22Bajo"
            />
            <p>
              Para los casos de áreas calificadas con desempeño BÁSICO, ALTO o
              SUPERIOR, despues del proceso de superación fin de año, el sistema
              deberá dejar como valoración final:
            </p>
            <Select options={Paso22Alto} />
            <p>
              Cuando en un Área conformada por más de 1 Asignatura, se realicen
              Procesos de Superación fin de año en cualquiera de estas
              asignaturas, el Sistema deberá dejar como valoración final:
            </p>
            <Select options={Paso22Area} />
          </>
        </CardsPreguntas>
        {/* Paso 3 */}
        <CardsPreguntas
          titulo="Paso 3"
          parrafo="Caso de uso del NP DE (Para el Estudiante) o del  NC (Para el Docente)"
        >
          <div className="flex justify-center">
            <svg
              onClick={(e) => {
                e.preventDefault();
                setPaso31Select(!Paso31Select);
                setPaso32Select(false);
                setPaso33Select(false);
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {Paso31Select && (
            <div className="flex flex-col">
              <p className="text-center m-2">
                Cuando en la planilla de calificaciones el docente le registre
                al estudiante un NP (No se presentó), el sistema:
              </p>
              <Select
                onChange={(e: any) => {
                  e.value == "2"
                    ? setPaso31InSelect(true)
                    : setPaso31InSelect(false);
                }}
                options={Paso31}
              />
              {Paso31InSelect && (
                <div>
                  <input
                    type="text"
                    placeholder="Defina la calificación"
                    className="p-2 "
                  />
                </div>
              )}
            </div>
          )}
          <br />
          <div className="flex justify-center">
            <svg
              onClick={(e) => {
                e.preventDefault();
                setPaso32Select(!Paso32Select);
                setPaso33Select(false);
                setPaso31Select(false);
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {Paso32Select && (
              <div className="">
                <p>
                  Cuando en la planilla de calificaciones sea el docente quien
                  no registre la calificación ni el NP al estudiante, el
                  sistema:
                </p>
                <Select options={Paso32} />
              </div>
            )}
            <br />
          </div>
          <br />
          <div className="flex justify-center">
            <svg
              onClick={(e) => {
                e.preventDefault();
                setPaso33Select(!Paso33Select);
                setPaso32Select(false);
                setPaso31Select(false);
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {Paso33Select && (
            <div>
              <p>
                Si se trata de una planilla de superación fin de año, se enviará
                un NC (No calificado por el docente)
              </p>
              <Select
                onChange={(e: any) => {
                  e.value == "4"
                    ? setPaso33InSelect(true)
                    : setPaso33InSelect(false);
                }}
                options={Paso33}
              />
              {Paso33InSelect && (
                <div>
                  <input
                    type="text"
                    placeholder="Defina la nota"
                    className="p-2 m-1"
                  />
                </div>
              )}
            </div>
          )}
        </CardsPreguntas>
        {/* Paso 4 */}
        <CardsPreguntas
          titulo="Paso 4"
          parrafo="TASAS PORCENTUALES DE INASISTENCIAS QUE SERÁN MOTIVO DE REPROBACIÓN DE UN ÁREA"
        >
          <p className="p-2 text-center">
            La reprobación por Inasistencia se realizará por:
          </p>
          <Select
            onChange={() => {
              setPaso4Select(true);
            }}
            options={Paso4}
            placeholder="Seleccione"
            className="p-2"
          />
          {Paso4Select && (
            <div className="flex flex-col gap-1 p-4">
              <label>
                Tasa porcentual para la inasistencia{" "}
                <strong>Injustificada</strong>:
              </label>
              <input
                type="text"
                placeholder="Defina la tasa Porcentual"
                className="h-8 rounded-sm ring-1 ring-gray-200 shadow-md"
              />
              <label>
                Tasa porcentual para la inasistencia{" "}
                <strong>Justificada</strong>:
              </label>
              <input
                type="text"
                placeholder="Defina la tasa Porcentual"
                className="h-8 rounded-sm ring-1 ring-gray-200 shadow-md"
              />
            </div>
          )}
        </CardsPreguntas>
        {/* Paso 5 */}
        <CardsPreguntas
          titulo="Paso 5"
          parrafo="REPROBACION DE ÁREAS POR INSUFICIENCIA ACADÉMICA EN EL ÚLTIMO PERIODO"
        >
          <p className="text-justify p-2">
            Los estudiantes que en el último periodo académico obtengan un
            cualquiera de las áreas de promoción, registros valorativos iguales
            o menor al registrado en este parámetro, el sistema no tendrá en
            cuenta el promedio de las calificaciones de los periodos anteriores
            y dejará como definitiva del área, la valoración registrada en este
            último periodo.
          </p>
          <br />
          <label className="p-2">Ingrese La valoración:</label>
          <input
            type="text"
            placeholder="..."
            className="rounded-sm ring-1 ring-gray-200 shadow-lg h-8 w-64 p-4  "
          />
        </CardsPreguntas>
        {/* Paso 6 */}
        <CardsPreguntas titulo="Paso 6">
          <p className="p-2">
            La Institución Educativa contempla en su SIEPE que las
            calificaciones registradas en cada periodo académico, no serán
            acumulables y que la valoración definitiva de cada área, será la que
            el docente ingrese en el último periodo académico; registro con el
            cual el sistema, hará el informe final, el Libro final de
            valoraciones y la carga de estados académicos para la matrícula del
            año escolar siguiente.
          </p>
          <Select options={YesOrNot} className="P-2" placeholder="Seleccione" />
          <div className="p-2 flex flex-col gap-1">
            <p className="p-2">
              Cambio de valoración para área reprobada si el promedio le
              favorece
            </p>
            <label className="p-2">
              1. Cuando un estudiante al cierre de áreas obtiene como promedio
              en todas las áreas, una calificación mayor o igual a
            </label>
            <input
              type="text"
              placeholder="Ingrese la valoración"
              className="ring-1 ring-gray-200 rounded-sm h8 shadow-lg "
            />
            <label className="p-2">
              2. Si la valoración DEFINITIVA del área reprobada, es mayor o
              igual a:
            </label>
            <input
              type="text"
              placeholder="Ingrese la valoración"
              className="ring-1 ring-gray-200 rounded-sm h8 shadow-lg "
            />
            <label className="p-2">
              3. El sistema cambiará la nota de la asignatura reprobada, por:
            </label>
            <input
              type="text"
              placeholder="Ingrese la valoración"
              className="ring-1 ring-gray-200 rounded-sm h8 shadow-lg "
            />
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
