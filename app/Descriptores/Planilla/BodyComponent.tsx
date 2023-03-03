"use client";
import React from "react";
import DimensionAbreviatura from "./DimensionAbreviatura";

function BodyComponent() {
  return (
    <div className="px-4 container mx-auto">
      <div className="uppercase text-center font-bold lg:text-2xl py-4 bg-blue-900 text-white rounded-lg">
        Planilla de Calificaciones para el Nivel Escolar Preescolar
      </div>
      <div className="flex flex-wrap md:flex-nowrap flex-row !place-content-center items-center justify-between mt-2">
        <DimensionAbreviatura title="dcg" supTitle="DIMENSIÓN COGNITIVA" />
        <DimensionAbreviatura title="dcm" supTitle="DIMENSIÓN COMUNICATIVA" />
        <DimensionAbreviatura title="dcr" supTitle="DIMENSIÓN CORPORAL" />
      </div>
      <div className="flex flex-row uppercase items-center">
        <div className="rounded-lg border-2 border-blue-600 text-center w-[20%] py-2 px-4">
          #DIMENSION#
        </div>
        <div className="rounded-lg border-2 border-blue-600 text-center w-[50%] py-2 px-4">
          #Periodo Académico#
        </div>
        <div className="rounded-lg border-2 border-blue-600 text-center w-[30%] py-2 px-4">
          #Grupo y Grado#
        </div>
      </div>
      <div>table</div>
    </div>
  );
}

export default BodyComponent;
