"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Open } from "../../typings";
import Banco from "./BancoObservaciones/Banco";
import BodyComponent from "./BancoProcesos/BodyComponent";
import Observacion from "./ViewDetails/Observacion";
import Proceso from "./ViewDetails/Proceso";

type Props = {
  dimension: any;
  open: number;
  posicion: number;
  setOpen: any;
};

const Dimensiones = ({ dimension, open, posicion, setOpen }: Props) => {
  const nacional = [
    {
      id: 1,
      img: "caraSuperior",
      title: "Superior",
    },
    {
      id: 2,
      img: "caraAlto",
      title: "Alto",
    },
    {
      id: 3,
      img: "caraBasico",
      title: "Básico",
    },
    {
      id: 4,
      img: "caraBajo",
      title: "Bajo",
    },
  ];
  const [dimensiones, setDimensiones] = useState({} as any);
  const [informacion, setInformacion] = useState({} as any);
  const [view, setView] = useState(false);
  const [viewObser, setViewObser] = useState(false);

  const [proceso, setProceso] = useState({
    proceso: 0,
    observacion: 0,
  } as any);
  const [banco, setBanco] = useState(false);
  const [observaciones, setObser] = useState(false);
  const [contador, setContador] = useState(0);
  const GetProcesos = async () => {
    const proceso = await axios
      .get(
        `/api/ProcesosEvaluacion/ProcesoCargado?cg=${dimensiones?.cga}&e=${
          dimensiones?.escala
        }&c=${localStorage.getItem("colegio")}`
      )
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          return res.data?.Proceso;
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Existe un error al consultar los procesos");
      });
    const Observaciones = await axios
      .get(
        `/api/ObservacionesProcesos/ProcesoCargado?cg=${dimensiones?.cga}&e=${
          dimensiones?.escala
        }&c=${localStorage.getItem("colegio")}`
      )
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          return res.data?.Proceso;
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Existe un error al consultar los procesos");
      });
    setInformacion({ ["Observaciones"]: Observaciones, ["procesos"]: proceso });
  };
  useEffect(() => {
    // console.log(dimensiones.length);
    if (dimensiones?.cga && dimensiones?.escala) {
      GetProcesos();
    }
  }, [dimensiones?.escala, contador]);
  return (
    <>
      {viewObser && (
        <Observacion
          id={proceso.observacion}
          showModal={setViewObser}
          setContador={setContador}
          contador={contador}
        />
      )}
      {view && (
        <Proceso
          showModal={setView}
          id={proceso.proceso}
          setContador={setContador}
          contador={contador}
        />
      )}
      {banco && (
        <BodyComponent
          setCont={setContador}
          setShow={setBanco}
          cga={dimensiones?.cga || 0}
          colegio={localStorage?.getItem("colegio") || 0}
          escala={dimensiones?.escala || 0}
        />
      )}
      {observaciones && (
        <Banco
          setCont={setContador}
          setShow={setObser}
          cga={dimensiones?.cga || 0}
          colegio={localStorage?.getItem("colegio") || 0}
          escala={dimensiones?.escala || 0}
        />
      )}
      <div>
        <h1
          className={`uppercase  bg-blue-200 lg:text-lg font-medium rounded-tl-lg  rounded-tr-lg py-1 cursor-pointer ${
            open == posicion && "bg-green-800 text-white"
          }`}
          onClick={() => {
            setOpen(posicion);
            setDimensiones({
              ...dimensiones,
              ["id"]: dimension?.idAsig,
              ["cga"]: dimension.CgaId,
            });
          }}
        >
          {dimension?.nombreAsigna}
        </h1>
        {open == posicion && (
          <>
            <div>
              <h1 className="font-medium lg:text-base bg-blue-100 py-1 rounded-bl-lg rounded-br-lg">
                Desempeño Nacional
              </h1>
              <div className="flex flex-row justify-between my-2 gap-2">
                {nacional.map((nac) => {
                  return (
                    <div
                      className={`${
                        dimensiones?.escala == nac?.id && nac?.id < 3
                          ? "bg-green-600"
                          : dimensiones?.escala == nac?.id && nac?.id > 2
                          ? "bg-red-600"
                          : "bg-blue-50"
                      } rounded-lg cursor-pointer`}
                      onClick={() =>
                        setDimensiones({ ...dimensiones, ["escala"]: nac?.id })
                      }
                    >
                      <h1 className="lg:text-base font-medium">{nac.title}</h1>
                      <Image
                        width={100}
                        height={100}
                        src={`/Descriptores/${nac.img}.png`}
                        alt="Imagen Desempeño"
                      />
                    </div>
                  );
                })}
              </div>
              {informacion && (
                <>
                  <div className="border grid lg:grid-cols-2 gap-2 p-1 items-center">
                    <div>
                      <h1 className="font-medium text-lg">Proceso</h1>
                      <button
                        className="bg-blue-500 p-2 text-white rounded-md font-bold"
                        onClick={(e) => {
                          e.preventDefault;
                          setBanco(true);
                        }}
                      >
                        Banco de <br /> Procesos
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(informacion?.procesos?.length > 0 &&
                        informacion.procesos.map((inf: any, key: number) => {
                          return (
                            <>
                              <button
                                className="bg-green-500 font-bold p-2 text-sm rounded-md text-white"
                                onClick={() => {
                                  setProceso({ ...proceso, proceso: inf?.id });
                                  setView(true);
                                }}
                              >
                                Proceso {key + 1}
                              </button>
                            </>
                          );
                        })) || (
                        <p className="text-left">
                          No existen procesos asignados
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="border grid lg:grid-cols-2 gap-2 p-1 items-center">
                    <div>
                      <h1 className="font-medium text-lg">Observaciones</h1>
                      <button
                        className="bg-blue-500 p-2 text-white rounded-md font-bold"
                        onClick={(e) => {
                          e.preventDefault;
                          setObser(true);
                        }}
                      >
                        Banco de <br /> Observaciones
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(informacion?.Observaciones?.length > 0 &&
                        informacion.Observaciones.map(
                          (inf: any, key: number) => {
                            return (
                              <>
                                <button
                                  className="bg-green-500 font-bold p-2 text-sm rounded-md text-white"
                                  onClick={() => {
                                    setProceso({
                                      ...proceso,
                                      observacion: inf?.id,
                                    });
                                    setViewObser(true);
                                  }}
                                >
                                  Proceso {key + 1}
                                </button>
                              </>
                            );
                          }
                        )) || (
                        <p className="text-left">
                          No existen observaciones asignadas
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dimensiones;
