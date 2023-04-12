"use client";
import { Select, Option } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par123() {
  const [data, setData] = React.useState({} as any);
  const [SelectedParam123, setSelectedParam123] = useState({});
  console.log("Any ???", SelectedParam123);

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
            titulo="Autorización para que el docente director de grupo"
            parrafo="El Director de grupo podrá actualizar información a los estudiantes a su cargo, desde el módulo que se le asigne, para ingresar a los modales de información de la Inscripción en el año lectivo escolar."
          >
            <p className="p-2">Defina Si Aplica o no </p>
            <Select
              onChange={(e: any) => {
                setSelectedParam123(e);
              }}
              label="Seleccione"
              name="Param99S"
            >
              {YesOrNot.map((item) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                );
              })}
            </Select>
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
