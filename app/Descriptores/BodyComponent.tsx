"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Open } from "../../typings";
import Dimensiones from "./Dimensiones";

const BodyComponent = () => {
  const [desempeño, setDesempeño] = useState(null);
  const [datoDimensiones, setDatos] = useState({} as any);
  const [open, setOpen] = useState(null as any);
  const GetInfoBase = () => {
    setDatos(JSON?.parse(localStorage?.Dimesiones || {}));
  };
  useEffect(() => {
    GetInfoBase();
  }, []);
  return (
    <div className="container mx-auto text-center px-4 mb-4">
      <div className="uppercase text-center font-bold lg:text-2xl py-4 bg-blue-800 text-white rounded-lg">
        Registro de Descriptores para el Nivel Preescolar
      </div>
      <div>
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
    </div>
  );
};

export default BodyComponent;
