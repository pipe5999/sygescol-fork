"use client";
import { Select, Option } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getDataParametro } from "../../../../../utils/GetParametro";
import { CiclosEscolares } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par95() {
  const [data, setData] = React.useState({} as any);
  const [SelectedPara95, setSelectedPara95] = useState({});
  console.log("Any Dónde", SelectedPara95);

  const handlerChangeParam95 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPara95({
      ...SelectedPara95,
      [e.target?.name]: e.target?.value,
    });
  };

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(95, 2);
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
          titulo="NÚMERO DE PERIODOS SEGÚN MODALIDAD"
          parrafo="Defina el número de periodos para:"
        >
          <p className="p-2">Educación tradicional</p>
          <Select
            label="Seleccione"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectedPara95({
                ...SelectedPara95,
                EduTrad: e,
              });
            }}
            name="EduTrad"
          >
            {CiclosEscolares?.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
          <br />
          <p className="p-2">Ciclos I, II, III, IV</p>
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedPara95({
                ...SelectedPara95,
                EduCicloI: e,
              })
            }
            label="Seleccione"
            name="EduCicloI"
          >
            {CiclosEscolares?.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
          <br />
          <p className="p-2">Ciclos V, VI</p>
          <Select
            label="Seleccione"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              console.log("---------------------------->", e);

              setSelectedPara95({
                ...SelectedPara95,
                EduCicloV: e,
              });
            }}
            name="EduCicloV"
          >
            {CiclosEscolares?.map((item) => {
              return <Option value={item?.value}>{item?.label}</Option>;
            })}
          </Select>
        </CardsPreguntas>
      </div>
    </div>
  );
}
