"use client";
import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import getDataParametro from "../../../../../utils/GetParametro";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import { Input } from "@material-tailwind/react";

export default function Par100() {
  const [data, setData] = React.useState({} as any);
  const [PorcentajeRegistro, setPorcentajeRegistro] = useState(false);
  const [SelectedParam100, setSelectedParam100] = useState({});
  console.log("any Dónde", SelectedParam100);

  const handlerChangeParam100 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam100({
      ...SelectedParam100,
      [e.target?.name]: e.target?.value,
    });
  };

  const ParamRegistro = [
    {
      value: "1",
      label:
        "El registro lo podrá hacer cada docente que le oriente clase al estudiante.",
    },
    {
      value: "2",
      label: "El registro lo hará solo el Director de grupo.",
    },
  ];

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(100, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {/* {data?.infoParametros?.TipoParam} */}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Manejo de la planilla de comportamiento."
          parrafo="Establecer los datos que debe subir el sistema a las planillas, boletines y certificados de estudio, como proceso de la valoración comportamental del estudiante."
        >
          <Select
            onChange={(e: number) => {
              // console.log("No es any", e.target.value);
              setSelectedParam100({
                ...SelectedParam100,
                Resgistro: e,
              });
              if (e == 1 || e == 2) {
                setPorcentajeRegistro(true);
              }
            }}
            options={ParamRegistro}
            label="Seleccione"
          >
            {ParamRegistro?.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
          {PorcentajeRegistro && (
            <div className="mt-2 flex justify-center">
              <Input
                onChange={handlerChangeParam100}
                type="text"
                label="Ingrese el Porcentaje"
                name="PorcentajeRegistro"
              />
            </div>
          )}
          <br />

          <p className="p-2">Generar consolidado para fin de año:</p>
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedParam100({
                ...SelectedParam100,
                ConsolidadoFin: e,
              })
            }
            label="Seleccione"
            className="p-2"
          >
            {YesOrNot?.map((item) => {
              return <Option value={item?.value}>{item?.label}</Option>;
            })}
          </Select>
          <br />
          <p className="p-2">Habilitar carga masiva de conceptos</p>
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectedParam100({
                ...SelectedParam100,
                CargaMasiva: e,
              });
            }}
            label="Seleccione"
            className="p-2"
          >
            {YesOrNot?.map((item) => {
              return <Option value={item?.value}>{item?.label}</Option>;
            })}
          </Select>
        </CardsPreguntas>
      </div>
    </div>
  );
}
