"use client";
import React, { useEffect } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par123() {
  const [data, setData] = React.useState({} as any);

  console.log(data);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(123, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <div className="flex flex-wrap gap-6 justify-center p-4 ">
          <CardsPreguntas
            titulo="Proyección de Sedes, grados y grupos"
            parrafo="Definir en el sistema, el número de grupos de acuerdo a las modalidades de la Institución Educativa, que se crearán en cada Sede, para cada Grado y Jornada"
          ></CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
