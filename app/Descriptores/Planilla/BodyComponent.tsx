"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DimensionAbreviatura from "./DimensionAbreviatura";

function BodyComponent() {
  const [datoDimensiones, setDatos] = useState({} as any);
  const [open, setOpen] = useState(null as any);
  const [data, setData] = useState({} as any);
  const [dimension, setDimension] = useState({} as any);
  const GetInfoBase = async () => {
    setDatos(JSON?.parse(localStorage?.Dimesiones || {}));
    const info = await axios
      .get(
        `/api/Planilla/BaseInfo?colegio=${localStorage.getItem(
          "colegio"
        )}&grupo=${JSON?.parse(localStorage?.Grupo)?.grupo_id}`
      )
      .then((res) => {
        if (res.status == 200) {
          return res.data;
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Existe un error al consultar los estudiantes");
      });
    setData({
      ...data,
      grupo: JSON?.parse(localStorage?.Grupo || {}),
      info: info,
    });
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
      <div className="grid grid-cols-5 ">
        <div className="bg-blue-300 text-center">
          <h1 className="p-2 font-bold">Foto</h1>
        </div>
        <div className="bg-blue-300 text-center">
          <h1 className="p-2 font-bold">Código</h1>
        </div>
        <div className="bg-blue-300 text-center">
          <h1 className="p-2 font-bold">Estudiante</h1>
        </div>
        <div className="bg-blue-300 text-center">
          <h1 className="p-2 font-bold">Desempeño Nacional</h1>
        </div>
        <div className="bg-blue-300 text-center">
          <h1 className="p-2 font-bold">Consulta del Registro Efectuado</h1>
        </div>
        {data?.info &&
          data?.info?.alumnos?.map((inf: any) => (
            <>
              <div></div>
              <div className="p-2 font-bold text-center">{inf?.codigo}</div>
              <div className="p-2 font-bold">{inf?.nombre}</div>
              <div></div>
              <div></div>
            </>
          ))}
      </div>
    </>
  );
}

export default BodyComponent;
