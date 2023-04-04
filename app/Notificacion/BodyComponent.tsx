"use client";
import React from "react";
import TablaModifica from "./TablaModifica";

const BodyComponent = () => {
  const handleClick = () => {
    alert("Solicitud enviada con éxito");
  };

  return (
    <>
      {/* <div className="mx-44 mt-3 shadow-card max-w-6xl flex flex-col rounded-xl bg-gray-100 bg-clip-border border-double border-4 border-indigo-600 shadow-xl"></div> */}
      <div className="text-secondary flex-1 p-1">
        <div className="mb-5 text-center font-bold font-regular relative block w-full rounded-lg bg-blue-900 p-4 text-xl leading-5 text-white opacity-100">
          <h1>Notificación Docente</h1>
        </div>
        <p className="font-bold text-lg mb-2">Señor Profesor Brahian Orozco:</p>
        <p className="text-justify font-semibold mb-4">
          En el proceso de cierre del 2 periodo académico, el sistema ha
          detectado algunos pendientes de registro en los módulos asignados a su
          rol, los cuales describiremos a continuación de manera detallada, para
          que por favor, los verifique y solicite a través de esta interfaz, un
          permiso individual a su Coordinador Académico, permiso con el cual,
          podrá ingresar nuevamente a los módulos donde se encuentra el
          pendiente:
        </p>
      </div>
      <TablaModifica />
      <div className="w-16 h-8 py-1 px-2 ml-3 font-bold text-center text-white rounded-md bg-blue-500 shadow-lg">
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  );
};

export default BodyComponent;
