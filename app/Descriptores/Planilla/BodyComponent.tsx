"use client";
import React, { useEffect, useState } from "react";
import DimensionAbreviatura from "./DimensionAbreviatura";

function BodyComponent() {
  const [datoDimensiones, setDatos] = useState({} as any);
  const [open, setOpen] = useState(null as any);
  const [data, setData] = useState({} as any);
  const [dimension, setDimension] = useState({} as any);
  const GetInfoBase = () => {
    setDatos(JSON?.parse(localStorage?.Dimesiones || {}));
    setData({ ...data, grupo: JSON?.parse(localStorage?.Grupo || {}) });
  };
  useEffect(() => {
    GetInfoBase();
  }, []);
  return (
    <>
      <div className="uppercase text-center font-bold lg:text-2xl py-4 bg-blue-900 text-white rounded-b-[1.6rem]">
        Planilla de Calificaciones para el Nivel Escolar Preescolar
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  !place-content-center items-center justify-between mt-2">
        {datoDimensiones.length > 0 &&
          datoDimensiones?.map((dim: any, key: number) => {
            return (
              <DimensionAbreviatura
                dimension={dim}
                setDim={setDimension}
                posicion={key}
                open={open}
                setOpen={setOpen}
              />
            );
          })}
      </div>
      <div className="flex flex-col lg:flex-row uppercase items-center">
        <div className="rounded-lg border-2 border-blue-600 text-center w-full py-2 px-4 font-bold">
          {(dimension && dimension?.nombreAsigna) ||
            "No se ha seleccionado una dimensión"}
        </div>
        <div className="rounded-lg border-2 border-blue-600 text-center w-full py-2 px-4">
          #Periodo Académico#
        </div>
        <div className="rounded-lg border-2 border-blue-600 text-center w-full py-2 px-4 font-bold">
          Grupo: {data && data?.grupo?.grupo_nombre}
        </div>
      </div>
      {/* <div>table</div> */}
    </>
  );
}

export default BodyComponent;
