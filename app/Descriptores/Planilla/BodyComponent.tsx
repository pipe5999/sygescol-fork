"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DimensionAbreviatura from "./DimensionAbreviatura";
import Registro from "./ViewsPlanilla/Registro";

function BodyComponent() {
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
  const [registro, setRegistro] = useState(false);
  const [datoDimensiones, setDatos] = useState({} as any);
  const [estudent, setEstudent] = useState([] as any);
  const [dataEnvia, setDataEnvia] = useState({} as any);
  const [open, setOpen] = useState(null as any);
  const [escala, setEscala] = useState([] as any);
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
  const openRegistro = (estudiante: any, desempeño: any) => {
    setDataEnvia({ Desempeño: desempeño, Estudiante: estudiante });
    setRegistro(true);
  };
  useEffect(() => {
    GetInfoBase();
  }, []);
  return (
    <>
      {registro && (
        <Registro
          cga={dimension.CgaId}
          escala={dataEnvia.Desempeño}
          estudiante={dataEnvia.Estudiante}
          show={setRegistro}
        />
      )}
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
        <div className="rounded-lg border-2 border-blue-600 text-center w-full py-2 px-4 font-bold">
          {(data && data?.info?.periodo?.per_nombre) || ""}
        </div>
        <div className="rounded-lg border-2 border-blue-600 text-center w-full py-2 px-4 font-bold">
          Grupo: {data && data?.grupo?.grupo_nombre}
        </div>
      </div>
      <div className="grid grid-cols-5 mt-4">
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
          data?.info?.alumnos?.map((inf: any, key: number) => (
            <>
              <div></div>
              <div className="p-2 font-bold text-center">{inf?.codigo}</div>
              <div className="p-2 font-bold">{inf?.nombre}</div>
              <div className="p-2 font-bold">
                <div className="flex flex-row justify-between my-2 gap-2 lg:gap-0.5">
                  {nacional.map((nac) => {
                    return (
                      <div
                        className={`rounded-lg cursor-pointer ${
                          escala[key] == nac?.id && nac?.id < 3
                            ? "bg-green-600"
                            : escala[key] == nac?.id && nac?.id > 2
                            ? "bg-red-600"
                            : "bg-blue-100"
                        } 2xl:p-2 p-0`}
                        onClick={() => {
                          if (dimension?.CgaId) {
                            const dat = [...escala];
                            const newEst = [...estudent];
                            newEst[key] = inf.matricula;
                            dat[key] = nac?.id;
                            setEscala(dat);
                            setEstudent(newEst);
                          }
                        }}
                      >
                        <h1 className="lg:text-base font-medium">
                          {nac.title}
                        </h1>
                        <Image
                          width={50}
                          height={50}
                          src={`/Descriptores/${nac.img}.png`}
                          alt="Imagen Desempeño"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-2 text-center flex items-center justify-center">
                <button
                  className="p-2 text-center font-bold bg-blue-600 text-white rounded-md hover:bg-blue-400"
                  disabled={estudent.indexOf(inf.matricula) >= 0 ? false : true}
                  onClick={() => {
                    if (estudent.indexOf(inf.matricula) >= 0) {
                      openRegistro(inf.matricula, escala[key]);
                    }
                  }}
                >
                  VER REGISTRO
                </button>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default BodyComponent;
