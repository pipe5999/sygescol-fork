"use client";
import { Select } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Option } from "@material-tailwind/react";
import reactSelect from "react-select";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import { Reincidencia, YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import WysWyget from "../../WysWyget";
import ReactSelect from "react-select";

export default function Par167() {
  const [data, setData] = React.useState({} as any);
  const [ModalParam1, setModalParam1] = useState(false);
  const [TextoInaistencia, setTextoInaistencia] = useState(false);
  const [InasistenciaInjustificada, setInasistenciaInjustificada] =
    useState(false);
  const [InasistenciaJustificada, setInasistenciaJustificada] = useState(false);
  const [ModalParam2, setModalParam2] = useState(false);
  const [ModalParam3, setModalParam3] = useState(false);
  const [SelectedParam167Part1, setSelectedParam167Part1] = useState({});
  const [SelectedParam167Part2, setSelectedParam167Part2] = useState({});
  console.log("any 2 ???", SelectedParam167Part2);

  const handlerChangePart1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam167Part1({
      ...SelectedParam167Part1,
      [e.target.name]: e.target.value,
    });
  };
  const handlerChangePart2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam167Part2({
      ...SelectedParam167Part2,
      [e.target.name]: e.target.value,
    });
  };

  const ControlAsistenciaSelect = [
    {
      value: "11",
      label:
        " Acceso a la Institución y Asistencia en los Intervalos de Clases",
    },
    {
      value: "12",
      label: "Acceso a la Institución",
    },
    {
      value: "13",
      label: "Acceso y Salida de la Institución",
    },
  ];
  const PerfilesControlAistenciaSelect = [
    {
      value: "21",
      label: "Estudiantes",
    },
    {
      value: "22",
      label: "Directivos",
    },
    {
      value: "23",
      label: "Directivos Docentes",
    },
    {
      value: "24",
      label: "Docentes",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(167, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {ModalParam1 && (
        <div>
          <div className=" fixed inset-0 z-40  bg-gray-900 bg-opacity-50 flex justify-center items-center py-4">
            <div className="sm:max-h-[full] sm:w-full lg:h-max lg:w-max ">
              <div className="h-[38rem]  rounded-lg border border-gray-400 shadow-md m-5 overflow-y-scroll">
                <div className="flex flex-col  items-center gap-4 bg-gray-50  p-8">
                  <div className="flex justify-center rounded-md p-2 ">
                    <h1 className="font-extrabold text-xl text-cyan-700 uppercase">
                      Parámetros de configuración
                    </h1>
                  </div>
                  <div className=" rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50 w-1/3 text-center">
                    <p className="p-4">
                      Activar Registro Automático de asistencía :
                    </p>

                    <Select
                      onChange={(e: any) => {
                        setSelectedParam167Part1({
                          ...SelectedParam167Part1,
                          RegistroAutomatico: e,
                        });
                      }}
                      label="Seleccione"
                      name="RegistroAutomático"
                    >
                      {YesOrNot.map((item) => {
                        return <Option value={item.value}>{item.label}</Option>;
                      })}
                    </Select>
                  </div>
                  <div className=" rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50 w-1/3 text-center">
                    <p className="p-2">
                      Configuración del control de asistencía :
                    </p>
                    <Select
                      onChange={(e: any) => {
                        setSelectedParam167Part1({
                          ...SelectedParam167Part1,
                          ControlAsistencia: e,
                        });
                      }}
                      label="Seleccione"
                      name="ControlAsistencia"
                    >
                      {ControlAsistenciaSelect.map((item) => {
                        return <Option value={item.value}>{item.label}</Option>;
                      })}
                    </Select>
                  </div>
                  <div className=" flex  flex-col  items-center rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50 w-1/3 text-center  ">
                    <p className="p-2  text-center ">
                      Rango de tiempo para el acceso, permanencia y salida del
                      estudiante:
                    </p>
                    <table className=" table-auto rounded-lg  ">
                      <thead className="bg-gray-50">
                        <tr className="bg-cyan-700 border-4 border-gray-200 ">
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Acceso a la Institución
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Intervalos de clase
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Salida de la Institución
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <Input
                              onChange={handlerChangePart1}
                              type="number"
                              label="Ingrese los minutos"
                              name="accesosIntitucion"
                            />
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <Input
                              onChange={handlerChangePart1}
                              type="number"
                              label="Ingrese los minutos"
                              name="IntervaloDeclase"
                            />
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <Input
                              onChange={handlerChangePart1}
                              type="number"
                              label="Ingrese los minutos"
                              name="SalidaInstitucion"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className=" rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50 w-1/3">
                    <p className="p-2 text-center ">
                      A que Perfiles de la institución se realizara el control
                      de Asistencia :
                    </p>
                    <ReactSelect
                      isMulti
                      options={PerfilesControlAistenciaSelect}
                      placeholder="Seleccione"
                    />
                  </div>
                  <div className=" flex  flex-col  items-center rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50  ">
                    <p className="p-2 text-center ">
                      Definir el tiempo de envió de los mensajes para el control
                      de asistencia:
                    </p>
                    <table className=" table-auto rounded-lg p-4 ">
                      <thead className="bg-gray-50">
                        <tr className="bg-cyan-700 border-gray-200 ">
                          <th className="px-4 py-2 border text-gray-50 uppercase">
                            Acceso a la Institución
                          </th>
                          <th className="px-4 py-2 border text-gray-50 uppercase">
                            Intervalos de Clases
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white border-gray-200 ">
                        <tr className="bg-white border-gray-200 ">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChangePart1}
                              type="number"
                              label="Ingrese los Minutos"
                              name="AccesoInstitucion2"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChangePart1}
                              type="number"
                              label="Ingrese los Minutos"
                              name="IntervalosClases"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className=" rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50 w-1/3">
                    <p className="p-2 text-center ">
                      Pausar el Envío de Mensajes a Celulares y Correos
                      Electrónicos:
                    </p>
                    <Select
                      onChange={(e: any) => {
                        setSelectedParam167Part1({
                          ...setSelectedParam167Part1,
                          EnvioCorreoSms: e,
                        });
                      }}
                      options={YesOrNot}
                      label="Seleccione"
                      className="p-2"
                    >
                      {YesOrNot.map((item) => {
                        return <Option value={item.value}>{item.label}</Option>;
                      })}
                    </Select>
                  </div>
                  <div className="flex justify-center p-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setModalParam1(false);
                      }}
                      className="rounded-md bg-cyan-700 shadow-lg shadow-cyan-500 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500 p-2 w-40"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {ModalParam2 && (
        <div className=" fixed inset-0 z-50  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen  lg:w-max overflow-y-scroll ">
            <div className="rounded-lg border border-gray-400 shadow-md m-5 ">
              <div className="flex items-center flex-col   bg-gray-100 border-solid rounded-md text-md font-bold   px-4 py-1">
                <div className=" rounded-md border-cyan-700 shadow-lg shadow-cyan-50 bg-gray-50 w-1/3 ">
                  <p className="p-2 text-center font-bold text-cyan-700  ">
                    CASOS DE REINCIDENCIA DE INASISTENCIA PARA ENVIÓ DE
                    CITACIONES A ACUDIENTES.
                  </p>
                  <div className="flex justify-center ">
                    <svg
                      onClick={(e) => {
                        e.preventDefault();
                        setTextoInaistencia(!TextoInaistencia);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-cyan-700 hover:stroke-green-500   "
                    >
                      <title>Abrir Tabla</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                      />
                    </svg>

                    <button> </button>
                  </div>
                  {TextoInaistencia && (
                    <div className="flex  flex-col  items-center ">
                      <table className="table-auto rounded-lg p-2 ">
                        <thead className="bg-gray-50"></thead>
                        <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                          <tr
                            onClick={(e) => {
                              e.preventDefault();
                              setInasistenciaInjustificada(
                                !InasistenciaInjustificada
                              );
                              setInasistenciaJustificada(false);
                            }}
                            className="bg-cyan-700 border-gray-200 "
                          >
                            <td
                              className="px-4 py-2 border text-gray-50 text-center  "
                              colSpan={4}
                            >
                              INASISTENCIA INJUSTIFICADA
                            </td>
                          </tr>
                          {InasistenciaInjustificada && (
                            <div className="w-1/3">
                              <tr className="bg-cyan-900 border-gray-200 ">
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Inasistencia
                                </th>
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Activar el envío de la citación por
                                  reincidencia de inasistencia:
                                </th>
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Número de registro para realizar el envío de
                                  la Citación:
                                </th>
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Reincidencia
                                </th>
                              </tr>

                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Llegadas Tarde a Clase
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        AplicaLltc: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="AplicaLLegadasTarde"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}{" "}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="LltcInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ControlReincidenciaLltc: e,
                                      });
                                    }}
                                    label="Seleccione"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border text-cyan-500 text-center  "
                                  colSpan={4}
                                >
                                  Texto de Notificación para casos de
                                  reincidencia
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border  text-center  "
                                  colSpan={4}
                                >
                                  <WysWyget />
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Llegadas Tarde a la Institución
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        AplicaLlti: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="AplicaLlti"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="LltiInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        LltiReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="LltiReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border text-cyan-500 text-center  "
                                  colSpan={4}
                                >
                                  Texto de Notificación para casos de
                                  reincidencia
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border  text-center  "
                                  colSpan={4}
                                >
                                  <WysWyget />
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Evasión de la Institución
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        EvasionInstituciónAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="EvasiónInstitucionAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="EvasionInstiInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        EvasionInstituciónReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ReincidenciaEvasionInstu"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border text-cyan-500 text-center  "
                                  colSpan={4}
                                >
                                  Texto de Notificación para casos de
                                  reincidencia
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border  text-center  "
                                  colSpan={4}
                                >
                                  <WysWyget />
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Evasión de Clases
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        EvasionClasesAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="EvasionClaseAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    placeholder="Ingrese Un número"
                                    name="EvasionClasesInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        EvasionClasesReincidencia: e,
                                      });
                                    }}
                                    placeholder="Seleccione"
                                    name="ReincidenciaEvacionClase"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border text-cyan-500 text-center  "
                                  colSpan={4}
                                >
                                  Texto de Notificación para casos de
                                  reincidencia
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border  text-center  "
                                  colSpan={4}
                                >
                                  <WysWyget />
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Evasión de Institución
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        EvasionInstituciónAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="EvacionInstitucionAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="EvasionInstitucionInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        EvasionInstituciónReincidencia: e,
                                      });
                                    }}
                                    placeholder="Seleccione"
                                    label="Seleccione"
                                    name="EvasionInstitucionReicidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border  text-center  "
                                  colSpan={4}
                                >
                                  <WysWyget />
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  No ingresó a la Institución
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        NoIngresoAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="NoIngresoAlaInstitucionAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="NoIngresoAplica"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        NoIngresoReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="NoIngresoReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-100 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border text-cyan-500 text-center  "
                                  colSpan={4}
                                >
                                  Texto de Notificación para casos de
                                  reincidencia
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td
                                  className="px-4 py-2 border  text-center  "
                                  colSpan={4}
                                >
                                  <WysWyget />
                                </td>
                              </tr>
                            </div>
                          )}

                          <tr
                            onClick={(e) => {
                              e.preventDefault();
                              setInasistenciaJustificada(
                                !InasistenciaJustificada
                              );
                              setInasistenciaInjustificada(false);
                            }}
                            className="bg-cyan-700 border-gray-200 "
                          >
                            <td
                              className="px-4 py-2 border text-gray-50 text-center  "
                              colSpan={4}
                            >
                              INASISTENCIA JUSTIFICADA
                            </td>
                          </tr>
                          {InasistenciaJustificada && (
                            <div className="justify-center">
                              <tr className="bg-cyan-900 border-gray-200 ">
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Inasistencia
                                </th>
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Activar el envío de la citación por
                                  reincidencia de inasistencia:
                                </th>
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Número de registro para realizar el envío de
                                  la Citación:
                                </th>
                                <th className="px-4 py-2 border text-gray-50 uppercase">
                                  Reincidencia
                                </th>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Cita en Coordinación
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: string) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaCoordinacion: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaCoordinacionAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="CitaCoordinacionInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaCoordinacionReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaCoordinacionReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Cita en Delegación Académica
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaDelegacionAcademicaAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaDelegacionAcademicaAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="CitaDelegacionAcademicaInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaDelegacionAcademicaReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaDelegacionAcademicaReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-cyan-700 ">
                                  Cita en Delegación Deportiva
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaDelegacionDeportivaAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaDelegacionDeportivaAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="CitaDelegacionDeportivaInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaDelegacionDeportivaReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaDelegacionDeportivaReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Servicio Social
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ServicioSocialAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ServicioSocialAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="ServicioSocialInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ServicioSocialReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ServicioSocialReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>

                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Con incapacidad
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ConIcapacidadAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ConIncapacidadAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="ConIncapacidad"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ConIncapacidadReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ConIncapacidadReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Con Permiso
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ConPermisoAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ConPermisoAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="ConPermisoInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        ConPermisoReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="ConPermisoReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Cita en Orientación Escolar
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaOrientacionEscolarAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaOrientadorEscolarAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onChange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="CitaOrientacionEscolarInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        CitaOrientacionEscolarReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="CitaOrientacionEscolarReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Semi-Escolarización
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        SemiEscolarizacionAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="SemiEscolarizacionAplica"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onchange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="SemeEscolarizaciónInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        SemeEscolarizacionReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="SemiEscolarizacionReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                              <tr className="bg-gray-50 border-gray-200 ">
                                <td className="px-4 py-2 border text-gray-700 ">
                                  Trabajo en casa por guías Inasistencia
                                  Justificada
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        TrabajoInCasaAplica: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="TrabajoInasistenciaJustificada"
                                  >
                                    {YesOrNot.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Input
                                    onchange={handlerChangePart2}
                                    type="number"
                                    label="Ingrese Un número"
                                    name="TrabajoInCasaAplicaInput"
                                  />
                                </td>
                                <td className="px-4 py-2 border text-gray-700 ">
                                  <Select
                                    onChange={(e: any) => {
                                      setSelectedParam167Part2({
                                        ...SelectedParam167Part2,
                                        TrabajoInCasaReincidencia: e,
                                      });
                                    }}
                                    label="Seleccione"
                                    name="TrabajoInCasaReincidencia"
                                  >
                                    {Reincidencia.map((item) => {
                                      return (
                                        <Option value={item.value}>
                                          {item.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </td>
                              </tr>
                            </div>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                <div className="flex justify-center ">
                  <button
                    onClick={(e) => {
                      e.preventDefault;
                      setModalParam2(false);
                    }}
                    className="w-40 my-8 rounded-md bg-cyan-700 shadow-lg shadow-cyan-500 hover:bg-red-700 p-2 hover:shadow-lg hover:shadow-red-500 text-gray-100"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {ModalParam3 && (
        <div>
          <div className=" fixed inset-0 z-40  bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="sm:max-h-[full] sm:w-full lg:max-h-full">
              <div
                onClick={(e) => {
                  e.preventDefault;
                  alert("Es necesario Traer los Grados de la Base de Datos");
                }}
                className="h-[36rem] rounded-lg border border-gray-400 shadow-md m-5 bg-gray-50  "
              >
                <div className="flex justify-center  flex-col">
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Preescolar
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Básica Primaria
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Básica Secundaria
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Media Décimo
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Media Undécimo
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Ciclos Básica Preimaria
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Ciclos Básica Secundaria
                  </p>
                  <p className="p-2  font-bold text-center text-cyan-700 ">
                    Ciclos de la media
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault;
                      setModalParam3(false);
                    }}
                    className="rounded-md w-40 h-8 bg-cyan-700 hover:bg-red-700 text-gray-50 shadow-lg shadow-cyan-500 hover:shadow-lg hover:shadow-red-500 "
                  >
                    {" "}
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <div className="flex flex-wrap gap-6 justify-center p-4 ">
          <CardsPreguntas
            titulo="Parámetros para el uso del sistema biométrico. 1"
            parrafo="Establecer en el sistema, los diversos procesos a seguir con el uso de la biometría en el control de asistencia de estudiantes y demás roles que se incluyan."
          >
            <p className="text-center  p-2">
              Configuración de control Biométrico de Asistencia.
            </p>
            <div className="flex justify-center">
              <svg
                onClick={(e) => {
                  e.preventDefault();
                  setModalParam1(!ModalParam1);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-cyan-700 hover:stroke-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </div>
          </CardsPreguntas>
          <CardsPreguntas
            titulo="Parámetros para el uso del sistema biométrico. 2"
            parrafo="Establecer en el sistema, los diversos procesos a seguir con el uso de la biometría en el control de asistencia de estudiantes y demás roles que se incluyan."
          >
            <p className="text-center  p-2">
              Configuración del control para el Biométrico de Asistencia
            </p>
            <div className="flex justify-center">
              <svg
                onClick={(e) => {
                  e.preventDefault();
                  setModalParam2(!ModalParam2);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-cyan-700 hover:stroke-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </div>
          </CardsPreguntas>
          <CardsPreguntas
            titulo="Parámetros para el uso del sistema biométrico. 3"
            parrafo="Establecer en el sistema, los diversos procesos a seguir con el uso de la biometría en el control de asistencia de estudiantes y demás roles que se incluyan."
          >
            <p className="p-2 text-center ">
              Grupos en los cuales se realizará el control Biométrico.
            </p>{" "}
            <div className="flex justify-center">
              <svg
                onClick={(e) => {
                  e.preventDefault();
                  setModalParam3(!ModalParam3);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500 "
              >
                Abrir Modal
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </div>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
