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
  const [SelectedParam, setSelectedParam] = useState({});
  const [Eleccion, setEleccion] = useState(false);

  console.log("Chanchito bueno", SelectedParam);

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

  const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam({
      ...SelectedParam,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(299, 2);
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
          titulo="Plazo para casos de documentos prerrequisito NO válidos"
          parrafo="La Institución Educativa define a través de este parámetro el tiempo que asigna al acudiente/estudiante para devolver por la Web los documentos prerrequisitos que en la auditoria de la Inscripción, fueron detectados como incompletos, falsos, no correspondientes, otras razones."
        >
          <Select
            onChange={(e: any) => {
              // console.log("este es el change", e);
              setSelectedParam({
                ...SelectedParam,
                SelectParam: e,
              });
              setSelectedParam(e);
              e == "4" ? setEleccion(true) : setEleccion(false);
            }}
            variant="outlined"
            label="Seleccione"
            color="cyan"
            name="SelectName"
          >
            {SelectParam.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
          <br />
          {Eleccion && (
            <div className="flex justify-center">
              <Input
                onChange={handlerChange}
                type="text"
                name="InputParam"
                label="Cúal"
              />
            </div>
          )}
        </CardsPreguntas>
      </div>
    </div>
  );
}
