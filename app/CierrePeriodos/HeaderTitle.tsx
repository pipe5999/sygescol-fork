import React from "react";
import BodyComponent from "./BodyComponent";

const HeaderTitle = () => {
  return (
    <>
      <div className="mx-44 mt-3 shadow-card max-w-6xl flex flex-col rounded-xl bg-gray-100 bg-clip-border border-double border-4 border-indigo-600 shadow-xl">
        <div className="text-secondary flex-1 p-6">
          <div className="mb-5 text-center font-bold font-regular relative block w-full rounded-lg bg-blue-500 p-4 text-xl leading-5 text-white opacity-100">
            <h1>Cierre de Periodos</h1>
          </div>
          <p className="font-bold text-lg mb-3">
            Señor Coordinador Brahian Orozco:
          </p>
          <p className="text-justify font-semibold mb-4">
            Se le solicita amablemente revisar y contactar a los docentes
            responsables de registrar pendientes en ciertos grupos, a fin de
            poder cerrar el periodo académico actual. Por favor, es necesario
            ingresar la información faltante en el sistema.
          </p>

          <BodyComponent />
        </div>
      </div>
    </>
  );
};

export default HeaderTitle;
