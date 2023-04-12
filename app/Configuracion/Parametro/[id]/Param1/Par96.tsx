"use client";
import { Dialog } from "@material-tailwind/react";
import { DialogBody } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { DialogFooter } from "@material-tailwind/react";
import { DialogHeader } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import React, { Fragment, useEffect, useState } from "react";
import { getDataParametro } from "../../../../../utils/GetParametro";
import { Niveles } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import ModalSelectDate from "../../ModalSelectDate";

export default function Par96() {
  const [data, setData] = React.useState({} as any);
  const [ShowModalFecha, setShowModalFecha] = useState(false);
  const handleOpen = () => setShowModalFecha(!ShowModalFecha);
  const [SelectedParam96, setSelectedParam96] = useState({});

  const [SeleccionFecha, setSeleccionFecha] = useState(false);

  const [FechaInciocalificacion, setFechaInciocalificacion] = useState(
    new Date()
  );
  const [FechaFinalCalificacion, setFechaFinalCalificacion] = useState(
    new Date()
  );
  const [FechaIncioRecuperacion, setFechaIncioRecuperacion] = useState(
    new Date()
  );
  const [FechaFinalRecuperacion, setFechaFinalRecuperacion] = useState(
    new Date()
  );
  const [FechaInicioPermiso, setFechaInicioPermiso] = useState(new Date());
  const [FechaFinalPermiso, setFechaFinalPermiso] = useState(new Date());
  const [FechaInicioConsideracion, setFechaInicioConsideracion] = useState(
    new Date()
  );
  const [FechaIniciArea, setFechaIniciArea] = useState(new Date());
  const [FechaFinalArea, setFechaFinalArea] = useState(new Date());
  const [FechaFinalConsideracion, setFechaFinalConsideracion] = useState(
    new Date()
  );
  const [DateInitNi1, setDateInitNi1] = useState(new Date());
  const [DateFinNi1, setDateFinNi1] = useState(new Date());
  const [DateInitNi2, setDateInitNi2] = useState(new Date());
  const [DateFinNi2, setDateFinNi2] = useState(new Date());
  const [FechaEntregaBoletin, setFechaEntregaBoletin] = useState(new Date());

  console.log("Any Dónde", SelectedParam96);

  const handlerChangeParam96 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam96({
      ...SelectedParam96,
      [e.target?.name]: e.target?.value,
    });
  };

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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectedParam96({
                  ...SelectedParam96,
                  Niveles: e,
                });
              }}
              label="Seleccione Uno"
              name="Niveles"
              className="w-72 p-2"
            >
              {Niveles?.map((item) => {
                return <Option value={item?.value}>{item?.label}</Option>;
              })}
            </Select>
            <br />

            <Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedParam96({
                  ...SelectedParam96,
                  User: e,
                })
              }
              label="Seleccione"
              className="w-72 p-2"
            >
              {User?.map((item) => {
                return <Option value={item?.value}>{item?.label}</Option>;
              })}
            </Select>
            <br />
            <div className=" flex justify-center ">
              <Fragment>
                <Button onClick={handleOpen} variant="filled" color="cyan">
                  Definir Fechas
                </Button>
                <Dialog
                  open={ShowModalFecha}
                  handler={handleOpen}
                  className="flex overflow-auto h-full w-full max-w-[90%] flex-col"
                >
                  <DialogBody>
                    <table className=" table-auto rounded-lg p-4 ">
                      <thead className="bg-gray-50">
                        <tr className="bg-cyan-900 border-4 border-gray-200 ">
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={6}
                          >
                            Procesos de calificación por periodo
                          </th>
                        </tr>
                        <tr className="bg-cyan-700 border-4 border-gray-200 ">
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Periodo
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Inicio y Cierre Ingreso Calificaciones
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Porcentaje Perido
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Inicio y Cierre Ingreso Recupueraciones
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Fecha Entrega Boletines
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Permisos Entregados por el cordinador
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            Periodo Uno
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-800 hover:stroke-green-400 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    FechaInciocalificacion={
                                      FechaInciocalificacion
                                    }
                                    FechaFinalCalificacion={
                                      FechaFinalCalificacion
                                    }
                                    setFechaInciocalificacion={
                                      setFechaInciocalificacion
                                    }
                                    setFechaFinalCalificacion={
                                      setFechaFinalCalificacion
                                    }
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <Input
                              onChange={handlerChangeParam96}
                              type="text"
                              label="Ingrese el Pocertanje"
                              name="Porcentaje1"
                            />
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-800 hover:stroke-lime-500 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    FechaIncioRecuperacion={
                                      FechaIncioRecuperacion
                                    }
                                    FechaFinalRecuperacion={
                                      FechaFinalRecuperacion
                                    }
                                    setFechaIncioRecuperacion={
                                      setFechaIncioRecuperacion
                                    }
                                    setFechaFinalRecuperacion={
                                      setFechaFinalRecuperacion
                                    }
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <div>
                              <Input
                                onChange={setSelectedParam96}
                                type="date"
                                name="Fecha1"
                                defaultValue="2023-1-1"
                              />
                            </div>
                          </td>
                          <td className=" py-2 border  text-gray-700 font-semibold text-center">
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-800 hover:stroke-lime-500 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    FechaInicioPermiso={FechaInicioPermiso}
                                    FechaFinalPermiso={FechaFinalPermiso}
                                    setFechaInicioPermiso={
                                      setFechaInicioPermiso
                                    }
                                    setFechaFinalConsideracion={
                                      setFechaFinalConsideracion
                                    }
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cyan-900 border-4 border-gray-200 ">
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={6}
                          >
                            Proceso Comisión de evaluación{" "}
                          </th>
                        </tr>
                        <tr className="bg-cyan-700 border-4 border-gray-200 ">
                          <td
                            className="px-4 py-2 border text-gray-100 uppercase text-center"
                            colSpan={3}
                          >
                            Inicio y Final Reconsideración Consolidado del Año /
                            Comisiones de Evaluación
                          </td>
                          <td
                            className="px-4 py-2 border text-gray-100 uppercase font-bold text-center"
                            colSpan={3}
                          >
                            Defina la Fecha
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td
                            className=" py-2 border  text-gray-700 font-bold text-center"
                            colSpan={3}
                          >
                            Comisiones de Evaluación
                          </td>
                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-900 hover:stroke-lime-500 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    FechaInicioConsideracion={
                                      FechaInicioConsideracion
                                    }
                                    FechaFinalConsideracion={
                                      FechaFinalConsideracion
                                    }
                                    setFechaInicioConsideracion={
                                      setFechaInicioConsideracion
                                    }
                                    setFechaFinalPermiso={setFechaFinalPermiso}
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cyan-900 border-4 border-gray-200 ">
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={6}
                          >
                            {" "}
                            Proceso Cierre Áreas
                          </th>
                        </tr>
                        <tr className="bg-cyan-700 border-4 border-gray-200 ">
                          <td
                            className="px-4 py-2 border text-gray-100 uppercase text-center"
                            colSpan={3}
                          >
                            {" "}
                            Inicio y final Cierre de Áreas
                          </td>

                          <td
                            className="px-4 py-2 border text-gray-100 uppercase text-center"
                            colSpan={3}
                          >
                            {" "}
                            Fecha De Entrega Informe Final
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 ">
                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-900 hover:stroke-lime-500 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    FechaIniciArea={FechaIniciArea}
                                    FechaFinalArea={FechaFinalArea}
                                    setFechaIniciArea={setFechaIniciArea}
                                    setFechaFinalArea={setFechaFinalArea}
                                  />
                                </div>
                              )}
                            </div>
                          </td>

                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            <div>
                              <Input
                                onChange={handlerChangeParam96}
                                type="date"
                                id="start"
                                name="Fecha2"
                                defaultValue="2023-1-1"
                                className="w-90 p-2"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cyan-800 border-4 border-gray-200 ">
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={6}
                          >
                            PROCESO DE SUPERACIÓN DE INSUFICIENCIAS ACADÉMICAS
                          </th>
                        </tr>
                        <tr className="bg-cyan-700 border-4 border-gray-200 ">
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={2}
                          >
                            Superación de Insuficiencias
                          </th>
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={2}
                          >
                            Inicio Superación de Insuficiencias
                          </th>
                          <th
                            className="px-4 py-2 border text-gray-100 uppercase"
                            colSpan={2}
                          >
                            Cierre Superación de Insuficiencias
                          </th>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 ">
                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            Superación 1:
                          </td>
                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-900 hover:stroke-lime-500 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    DateInitNi1={DateInitNi1}
                                    DateFinNi1={DateFinNi1}
                                    setDateInitNi1={setDateInitNi1}
                                    setDateFinNi1={setDateFinNi1}
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 ">
                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            Superación 2:
                          </td>

                          <td
                            className=" py-2 border  text-gray-700 font-semibold text-center"
                            colSpan={3}
                          >
                            <div className="flex justify-center">
                              <svg
                                onClick={(e) => {
                                  e.preventDefault;
                                  setSeleccionFecha(!SeleccionFecha);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 stroke-cyan-900 hover:stroke-lime-500 text-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                              </svg>
                              {SeleccionFecha && (
                                <div>
                                  <ModalSelectDate
                                    setSeleccionFecha={setSeleccionFecha}
                                    SeleccionFecha={SeleccionFecha}
                                    DateInitNi2={DateInitNi2}
                                    DateFinNi2={DateFinNi2}
                                    setDateInitNi2={setDateInitNi2}
                                    setDateFinNi2={setDateFinNi2}
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </DialogBody>
                  <DialogFooter className="flex justify-center ">
                    <Button variant="text" onClick={handleOpen} color="red">
                      Cerrar
                    </Button>
                  </DialogFooter>
                </Dialog>
              </Fragment>
            </div>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
