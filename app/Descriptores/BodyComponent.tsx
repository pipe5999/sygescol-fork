"use client";
import Image from "next/image";
import React from "react";
import ReactSelect from "react-select";
import Dimensiones from "./Dimensiones";

const BodyComponent = () => {
  return (
    <div className="container mx-auto text-center px-4">
      <div className="uppercase text-center font-bold text-2xl py-4 bg-blue-800 text-white rounded-lg">
        Registro de Descriptores para el Nivel Preescolar
      </div>
      <div>
        <h1 className="font-bold text-2xl text-blue-800 mt-3 mb-1">
          DIMENSIONES
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Dimensiones />
          {/* <div>
            <h1 className="uppercase bg-blue-200 text-lg font-medium rounded-tl-lg  rounded-tr-lg py-1">
              Cognitiva
            </h1>
            <div>
              <h1 className="font-medium bg-blue-100 py-1 rounded-bl-lg rounded-br-lg">
                Desempeño Nacional
              </h1>
              <div className="flex flex-row justify-between my-2">
                <div className="bg-blue-50 rounded-lg">
                  <h1 className="font-medium">Superior</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/emojiSuperior.png"
                    alt="Imagen Desempeño"
                  />
                </div>
                <div className="bg-green-100 rounded-lg">
                  <h1 className="font-medium">Alto</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/emojiAlto.png"
                    alt="Imagen Desempeño"
                  />
                </div>
                <div className="bg-blue-50 rounded-lg">
                  <h1 className="font-medium">Básico</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/emojiBasico.png"
                    alt="Imagen Desempeño"
                  />
                </div>
                <div className="bg-blue-50 rounded-lg">
                  <h1 className="font-medium">Bajo</h1>
                  <Image
                    width={100}
                    height={100}
                    src="/Descriptores/emojiBajo.png"
                    alt="Imagen Desempeño"
                  />
                </div>
              </div>
              <div className="border grid grid-cols-2 gap-2 p-1 items-center">
                <div>
                  <h1 className="font-medium text-lg">Proceso</h1>
                  <ReactSelect
                    className="whitespace-nowrap"
                    placeholder="Seleccione una opción"
                  />
                </div>
                <div>
                  <p className="text-justify">
                    Escribir algunas letras y dibuja círculos, identifica
                    algunos colores y dibuja figuras más complejas.
                  </p>
                </div>
              </div>
              <div className="border grid grid-cols-2 gap-2 p-1 items-center">
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
          </div>
          <div>Comunicativa</div>
          <div>Corporal</div> */}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
