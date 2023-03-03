"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Open } from "../../typings";
import BodyComponent from "./BancoProcesos/BodyComponent";

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
  const [informacion, setInformacion] = useState(null as any);
  const [banco, setBanco] = useState(false);
  const GetProcesos = async () => {
    await axios
      .get(
        `/api/ProcesosEvaluacion/ProcesoCargado?cg=${dimensiones?.cga}&e=${
          dimensiones?.escala
        }&c=${localStorage.getItem("colegio")}`
      )
      .then((res) => {
        if (res.status == 200) {
          setInformacion({ ...res.data });
        }
      });
  };
  useEffect(() => {
    console.log(dimensiones.length);
    if (dimensiones?.cga && dimensiones?.escala) {
      GetProcesos();
    }
  }, [dimensiones?.escala]);
  return (
    <>
      {banco && (
        <BodyComponent
          setShow={setBanco}
          cga={dimensiones?.cga || 0}
          colegio={localStorage?.getItem("colegio") || 0}
          escala={dimensiones?.escala || 0}
        />
      )}
      <div>
        <h1
          className={`uppercase bg-blue-200 lg:text-lg font-medium rounded-tl-lg  rounded-tr-lg py-1 cursor-pointer ${
            open == posicion && "bg-green-800"
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
                        Banco de procesos
                      </button>
                      {/* <ReactSelect
                        className="whitespace-nowrap"
                        placeholder="Seleccione un proceso"
                      /> */}
                    </div>
                    <div>
                      <p className="text-left">
                        {informacion?.Proceso?.texto ||
                          "No existe un proceso registrado"}
                      </p>
                    </div>
                  </div>
                  <div className="border grid lg:grid-cols-2 gap-2 p-1 items-center">
                    <div>
                      <h1 className="font-medium text-lg">Observaciones</h1>
                    </div>
                    <div>
                      <p className="text-justify"></p>
                    </div>
                  </div>
                </>
              )}
            </div>
            {informacion && (
              <button className="text-white text-lg bg-green-700/80 hover:bg-green-700 font-medium hover:font-bold rounded-bl-lg rounded-br-lg p-2 w-full">
                Guardar Registros
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Dimensiones;
