"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";

import { Select, Option } from "@material-tailwind/react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par299() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam, setSelectedParam] = useState("");
  const [Eleccion, setEleccion] = useState(false);
  const [InputParam, setInputParam] = useState("");
  console.log("Any no es bueno", SelectedParam);
  console.log("Any sigue siendo malo", InputParam);

  const SelectParam = [
    {
      value: "1",
      label: "Un Día",
    },
    {
      value: "2",
      label: "Dos Días",
    },
    {
      value: "3",
      label: "Tres Días",
    },
    {
      value: "4",
      label: "Otros",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(299, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParam(event.target.value);
  };

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Plazo para casos de documentos prerrequisito NO válidos"
          parrafo="La Institución Educativa define a través de este parámetro el tiempo que asigna al acudiente/estudiante para devolver por la Web los documentos prerrequisitos que en la auditoria de la Inscripción, fueron detectados como incompletos, falsos, no correspondientes, otras razones."
        >
          <Select
            onChange={(e: any) => {
              // console.log("este es el change", e);
              setSelectedParam(e);
              e == "4" ? setEleccion(true) : setEleccion(false);
            }}
            variant="outlined"
            label="Seleccione"
            color="cyan"
          >
            {SelectParam.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
          <br />
          {Eleccion && (
            <div className="flex justify-center">
              <Input
                value={InputParam}
                onChange={handleInputChange}
                label="Cúal"
              />
            </div>
          )}
        </CardsPreguntas>
      </div>
    </div>
  );
}
