"use client";
import Image from "next/image";
import React from "react";
import ReactSelect from "react-select";
import { Open } from "../../typings";

type Props = {
  title: string;
  open: number;
  posicion: number;
  setOpen: any;
};

const Dimensiones = ({ title, open, posicion, setOpen }: Props) => {
  return (
    <>
      <div>
        <h1
          className={`uppercase bg-blue-200 lg:text-lg font-medium rounded-tl-lg  rounded-tr-lg py-1 cursor-pointer ${
            open == posicion && "bg-green-800"
          }`}
          onClick={() => {
            console.log(posicion);
            setOpen(posicion);
          }}
        >
          {title}
        </h1>
        {open == posicion && (
          <>
            <div>
              <h1 className="font-medium lg:text-base bg-blue-100 py-1 rounded-bl-lg rounded-br-lg">
                Desempeño Nacional
              </h1>
              <div className="flex flex-row justify-between my-2 gap-2">
                <div className="bg-blue-50 rounded-lg">
                  <h1 className="lg:text-base font-medium">Superior</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/caraSuperior.png"
                    alt="Imagen Desempeño"
                  />
                </div>
                <div className="bg-green-100 rounded-lg">
                  <h1 className="lg:text-base font-medium">Alto</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/caraAlto.png"
                    alt="Imagen Desempeño"
                  />
                </div>
                <div className="bg-blue-50 rounded-lg">
                  <h1 className="lg:text-base font-medium">Básico</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/caraBasico.png"
                    alt="Imagen Desempeño"
                  />
                </div>
                <div className="bg-blue-50 rounded-lg">
                  <h1 className="lg:text-base font-medium">Bajo</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/caraBajo.png"
                    alt="Imagen Desempeño"
                  />
                </div>
              </div>
              <div className="border grid lg:grid-cols-2 gap-2 p-1 items-center">
                <div>
                  <h1 className="font-medium text-lg">Proceso</h1>
                  <ReactSelect
                    className="whitespace-nowrap"
                    placeholder="Seleccione un proceso"
                  />
                </div>
                <div>
                  <p className="text-left">
                    Escribir algunas letras y dibuja círculos, identifica
                    algunos colores y dibuja figuras más complejas.
                  </p>
                </div>
              </div>
              <div className="border grid lg:grid-cols-2 gap-2 p-1 items-center">
                <div>
                  <h1 className="font-medium text-lg">Observaciones</h1>
                </div>
                <div>
                  <p className="text-justify">
                    Canten canciones. Las canciones ayudan a que los niños
                    trabajen la memoria por eso animá a los niños a cantar
                    contigo
                  </p>
                </div>
              </div>
            </div>
            <button className="text-white text-lg bg-green-700/80 hover:bg-green-700 font-medium hover:font-bold rounded-bl-lg rounded-br-lg p-2 w-full">
              Guardar Registros
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Dimensiones;
