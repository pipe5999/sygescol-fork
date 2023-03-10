"use client";
import React, { useEffect, useState } from "react";
import Dimensiones from "./Dimensiones";

const BodyComponent = () => {
  const [desempeño, setDesempeño] = useState(null);
  const [datoDimensiones, setDatos] = useState({} as any);
  const [open, setOpen] = useState(null as any);
  const GetInfoBase = () => {
    if (localStorage?.Dimesiones?.length > 0) {
      setDatos(JSON.parse(localStorage?.Dimesiones || []));
    } else {
      setDatos({});
    }
  };
  useEffect(() => {
    GetInfoBase();
  }, []);
  return (
    <>
      <div className="uppercase text-center font-bold lg:text-2xl py-4 bg-blue-900 text-white rounded-b-2xl">
        Registro de Descriptores para el Nivel Preescolar
      </div>
      <div className="p-2">
        <h1 className="font-bold lg:text-2xl text-blue-800 mt-3 mb-1">
          DIMENSIONES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {datoDimensiones.length > 0 &&
            datoDimensiones?.map((dim: any, key: number) => {
              return (
                <Dimensiones
                  dimension={dim}
                  posicion={key}
                  open={open}
                  setOpen={setOpen}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
