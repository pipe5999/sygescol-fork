"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par87() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam, setSelectedParam] = useState({});

  console.log("Chanchito", SelectedParam);

  const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam(e.target.value);
  };

  const SelectParam = [
    { value: "1", label: "Registro por Biometria Control de Entrada" },
    { value: "2", label: "Inasistencia Registrada por el Docente" },
    {
      value: "3",
      label:
        " el Docente Inasistencia Registrada por Coordinación de Convivencia por el Docente",
    },
    {
      value: "4",
      label: "Inasistencia Registrada por por el monitor de registro por grado",
    },
    {
      value: "5",
      label:
        "nasistencias registradas por el auxiliar de registro de inasistencias",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(87, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titutlo="Registro de inacistencias para el reporte de Familias en acción"
          parrafo="Defina"
        >
          <div className="flex justify-center">
            <Select
              onChange={(e: any) => {
                setSelectedParam(e);
              }}
              isMulti
              options={SelectParam}
              placeholder="Seleccione"
              className=" w-72 p-2"
            />
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
