"use client";

import React, { useEffect, useState } from "react";
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
  const [TextoMensaje, setTextoMesnaje] = useState({
    lltcSms:
      "El estudiante #ESTUDIANTE# Llegó a clase después de la hora de iniciación en la Asignatura: #ASIGNATURA# el día #FECHA# con el Docente #DOCENTE#... Inasistencia Injustificada.",
    lltiSms:
      "El estudiante #ESTUDIANTE# Por presentarse después de la hora e ingreso a la Institución se le registra inasistencia a clase en la Asignatura: #ASIGNATURA# el día #FECHA# con el Docente #DOCENTE#... Inasistencia Injustificada",
  });
  const [TextObservador, setTextObservador] = useState({
    lltc: "El estudiante #ESTUDIANTE# Llegó a clase después de la hora de iniciación en la Asignatura: #ASIGNATURA# el día #FECHA# con el Docente #DOCENTE#... Inasistencia Injustificada.",

    llti: "El estudiante #ESTUDIANTE# Por presentarse después de la hora e ingreso a la Institución se le registra inasistencia a clase en la Asignatura: #ASIGNATURA# el día #FECHA# con el Docente #DOCENTE#... Inasistencia Injustificada",
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
          <div className="flex justify-center flex-col">
            <FormParam76
              title="Llegadas Tarde la Intitucion"
              abbr="LLTI"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Llegadas Tarde A Clase"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Evasion de la Institución"
              abbr="EVA"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Evasion de la Clase"
              abbr="EVAC"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
          </div>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Tipos de Inasistencia. 2  "
          parrafo="Defina las variables de cada tipo de inasistencia"
        >
          <div className="flex justify-center flex-col">
            <FormParam76
              title="Ausencia No Justificada"
              abbr="INJ"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="No ingresó a la institución"
              abbr="NOLL"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Cita en Coordinación"
              abbr="CO"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Delegación Académica"
              abbr="DEAC"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Delegación Deportiva"
              abbr="DEDP"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
          </div>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Tipos de Inasistencia. 3 "
          parrafo="Defina las variables de cada tipo de inasistencia"
        >
          <div className="flex justify-center flex-col">
            <FormParam76
              title="En servicio Social"
              abbr="ENSER"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Con Excusa"
              abbr="EXC"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Con Incapacidad"
              abbr="INC"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Con Permiso"
              abbr="PER"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
          </div>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Tipos de Inasistencia. 4"
          parrafo="Defina las variables de cada tipo de inasistencia"
        >
          <div className="flex justify-center flex-col">
            <FormParam76
              title="Cita en Orientación Escolar"
              abbr="PS"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Semi-Escolarización"
              abbr="SE"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Suspensión"
              abbr="SP"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
            <br />
            <FormParam76
              title="Trabajo en Casa con guías"
              abbr="TCG"
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
              TextObservador={TextObservador}
              setTextObservador={setTextObservador}
              TextoMensaje={TextoMensaje}
              setTextoMensaje={TextoMensaje}
            />
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
