import React from "react";

type Props = {
  setModalDetalle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DetallesParametro({ setModalDetalle }: Props) {
  return (
    <div
      onClick={() => {
        setModalDetalle(false);
      }}
      className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center"
    >
      <div className=" max-h-screen p-3">
        <div className="rounded-lg border border-gray-400 shadow-md m-5">
          <div className="flex justify-center flex-col  text-gray-300  bg-cyan-900 border-solid rounded-md text-md font-bold   px-4 py-1">
            <h1 className="fond-bold text-lg text-center ">
              Procesos De evaluación
            </h1>
            <p className="text-justify place-self-center px-8  ">
              Establecer criterios relacionados con los PROCESOS DE EVALULACIÓN:
              1. Nombre específico de cada proceso 2. Obligatoriedad de registro
              del FORDEB 3. Tipo de Planilla de calificación por Modalidad 4.
              Registro de descriptores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
