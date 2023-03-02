"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactSelect from "react-select";
import Dimensiones from "./Dimensiones";

const BodyComponent = () => {
  const [desempeño, setDesempeño] = useState(null);
  return (
    <div className="container mx-auto text-center px-4 mb-4">
      <div className="uppercase text-center font-bold lg:text-2xl py-4 bg-blue-900 text-white rounded-lg">
        Registro de Descriptores para el Nivel Preescolar
      </div>
      <div>
        <h1 className="font-bold lg:text-2xl text-blue-800 mt-3 mb-1">
          DIMENSIONES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Dimensiones title={"cognitiva"} />
          <Dimensiones title={"Comunicativa"} />
          <Dimensiones title={"Corporal"} />
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
