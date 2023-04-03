"use client";

import React, { Fragment, useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import FormParam76 from "../../FormParam76";

export default function Par76() {
  const [data, setData] = React.useState({} as any);
  const [SelectedLltcControl, setSelectedLltcControl] = useState({});
  const [SelectedLltcTipoI, setSelectedLltcTipoI] = useState({});
  const [SelectedLltecObsevador, setSelectedLltecObsevador] = useState({});
  const [SelectedLltcCorreo, setSelectedLltcCorreo] = useState({});
  const [SelectedLltcSms, setSelectedLltcSms] = useState({});
  const [TextObservador, setTextObservador] = useState({
    lltc: "El estudiante #ESTUDIANTE# Llegó a clase después de la hora de iniciación en la Asignatura: #ASIGNATURA# el día #FECHA# con el Docente #DOCENTE#... Inasistencia Injustificada.",
  });

  console.log("Que no use any", SelectedLltcCorreo);
  console.log("Dont use any", SelectedLltecObsevador);
  console.log("Por Favor No uses any", SelectedLltcTipoI);
  console.log("No usar any", SelectedLltcControl);
  console.log("Por Favor No uses any", SelectedLltcCorreo);
  console.log("Please Don't do it", SelectedLltcSms);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(76, 2);
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
          titulo="Tipos de Inasistencia. 1"
          parrafo="Defina las variables de cada tipo de inasistencia"
        >
          <div className="flex justify-center">
            <FormParam76
              title="Llegadas Tarde la Intitucion"
              abbr="LLTC"
              setSelectedLltcControl={setSelectedLltcControl}
              SelectedLltcControl={SelectedLltcControl}
              setSelectedLltcTipoI={setSelectedLltcTipoI}
              SelectedLltcTipoI={SelectedLltcTipoI}
              setSelectedLltecObsevador={setSelectedLltecObsevador}
              SelectedLltecObsevador={SelectedLltecObsevador}
              setSelectedLltcCorreo={setSelectedLltcCorreo}
              SelectedLltcCorreo={SelectedLltcCorreo}
              setSelectedLltcSms={setSelectedLltcSms}
              SelectedLltcSms={SelectedLltcSms}
              TextObservador={TextObservador.lltc}
              setTextObservador={setTextObservador}
            />
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
