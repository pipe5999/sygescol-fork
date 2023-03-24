"use client";
import React, { useEffect } from "react";
import Select from "react-select";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par109() {
  const [data, setData] = React.useState({} as any);

  const BoletinDetallado = [
    {
      value: "11",
      label: "Mostrar el nombre del área y su calificación",
    },
    {
      value: "12",
      label: "Mostrar el nombre de la asignatura y su calificación",
    },
    {
      value: "13",
      label: "Mostrar el descriptor de la Competencia",
    },
    {
      value: "4",
      label: "Mostrar la Calificación de la competencia",
    },
    {
      value: "15",
      label: "Mostrar descriptor dimensión competencia",
    },
    {
      value: "16",
      label: "Mostrar Nota de Dimensión de Competencia",
    },
    {
      value: "17",
      label: "Mostrar descriptores del FORDER",
    },
    {
      value: "18",
      label: "Mostrar proceso de superación del periodo",
    },
    {
      value: "19",
      label: "Mostrar la estadística del proceso pedagógico",
    },
    {
      value: "110",
      label: "Mostrar el comportamiento tal como se definió",
    },
    {
      value: "111",
      label: "Mostrar la Foto del Estudiante",
    },
  ];
  const BoletinResumen = [
    {
      value: "21",
      label: "Mostrar el nombre del área y su calificación",
    },
    {
      value: "22",
      label: "Mostrar el nombre de la asignatura y su calificación",
    },
    {
      value: "23",
      label: "Mostrar proceso de superación del periodo",
    },
    {
      value: "24",
      label: "Mostrar la nota del promedio ponderado",
    },
    {
      value: "25",
      label: "Mostrar el puesto ocupado por el estudiante",
    },
    {
      value: "26",
      label: "Mostrar el Consolidado Acumulado del año",
    },
    {
      value: "27",
      label: "Mostrar el informe de Inasistencias del periodo",
    },
    {
      value: "28",
      label: "Mostrar la Foto del Estudiante",
    },
    {
      value: "29",
      label: "Mostrar la firma del director de grupo",
    },
  ];
  const NecesitoParaPasar = [
    {
      value: "31",
      label: "Cargarlo a partir del Segundo Periodo Académico",
    },
    {
      value: "32",
      label: "Cargarlo también en el Tercer Periodo Académico",
    },
    {
      value: "33",
      label: "Cargarlo para el perfil Docente",
    },
    {
      value: "34",
      label: "Cargarlo para el perfil de Estudiante",
    },
    {
      value: "35",
      label: "Cargarlo para el perfil de Coordinador Académico",
    },
    {
      value: "36",
      label: "Cargarlo para el perfil Acudiente ",
    },
    {
      value: "37",
      label: "Cargarlo para el perfil de Coordinador de Grupo",
    },
    {
      value: "38",
      label: "Mostrar el NPP en el boletin Resumen",
    },
  ];
  const TipoUsuario = [
    {
      value: "41",
      label: "Secretaría Académica de la Institución",
    },
    {
      value: "42",
      label: "Coordinador Académico",
    },
    {
      value: "43",
      label: "Coordinador de Convivencia",
    },
    {
      value: "44",
      label: "Orientador Escolar",
    },
    {
      value: "45",
      label: "Perfil Docente Director de Grupo",
    },
    {
      value: "46",
      label: "Todos los docentes de la Institución",
    },
    {
      value: "47",
      label: "Perfil Acudiente",
    },
    {
      value: "48",
      label: "Perfil Estudiantes",
    },
  ];
  const PeriodoControl = [
    {
      value: "51",
      label: "Primer Periodo",
    },
  ];
  const DescripcionCompetencia = [
    {
      value: "61",
      label: "Por grupo",
    },
    {
      value: "62",
      label: "Por estudiante en el cual no exista el registro",
    },
  ];
  const DescripcionFORDER = [
    {
      value: "71",
      label: "Por grupo",
    },
    {
      value: "72",
      label: "Por estudiante en el cual no exista el registro",
    },
  ];
  const RegistroCalificaciones = [
    {
      value: "81",
      label: "Por grupo",
    },
    {
      value: "82",
      label: "Por estudiante en el cual no exista el registro",
    },
  ];
  const RegistroComportamiento = [
    {
      value: "91",
      label: "Por grupo",
    },
    {
      value: "92",
      label: "Por estudiante en el cual no exista el registro",
    },
  ];
  const NoGenera = [
    {
      value: "101",
      label: "Huella",
    },
    {
      value: "102",
      label: "Firma",
    },
    {
      value: "103",
      label: "Foto",
    },
  ];
  const AplicaPara = [
    {
      value: "111",
      label: "Preescolar",
    },
    {
      value: "112",
      label: "Básica Primaria",
    },
    {
      value: "113",
      label: "Básica Secundaria",
    },
    {
      value: "114",
      label: "Media Décimo",
    },
    {
      value: "115",
      label: "Media Undécimo",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(109, 2);
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
            titulo="Directrices de control para la impresión de los informes valorativos 1"
            parrafo=""
          >
            <p className="p-2">
              Establecer en el sistema, qué tipo de información debe verificar
              que se haya ingresado a la base de datos, para proceder con la
              impresión del boletín DETALLADO.
            </p>
            <Select
              isMulti
              options={BoletinDetallado}
              placeholder="Seleccione"
              className="p-2"
            />
            <br />
            <p className="p-2">
              Establecer en el sistema, qué tipo de información debe verificar
              que se haya ingresado a la base de datos, para proceder con la
              impresión del boletín RESUMEN.
            </p>
            <Select
              isMulti
              options={BoletinResumen}
              placeholder="Seleccione"
              className="p-2"
            />
            <br />
          </CardsPreguntas>
          <CardsPreguntas titulo="Directrices de control para la impresión de los informes valorativos 2">
            <p className="p-2">
              Parametros para la carga del Necsito para pasar (N.P.P.)
            </p>
            <Select
              isMulti
              options={NecesitoParaPasar}
              placeholder="Seleccione"
              className="p-2"
            />
            <br />
            <p className="p-2">
              A qué ROLES (Tipos de Usuario), se les permitirá el acceso a la
              previsualización e Impresión de los boletines
            </p>
            <Select
              isMulti
              options={TipoUsuario}
              placeholder="Seleccione"
              className="p-2"
            />
          </CardsPreguntas>
          <CardsPreguntas
            titulo="Razones por la cual el sistema, no deba dejar previsualizar, ni imprimir boletines. 1"
            parrafo="Bloqueos autorizados por la Institución Educativa, para la
              impresión de informes valorativos por periodos y cierre de año."
          >
            <p className="p-2">Periodos en los cuales se activará el control</p>
            <Select isMulti options={PeriodoControl} placeholder="Seleccione" />
          </CardsPreguntas>
          <CardsPreguntas
            titulo="Razones por la cual el sistema, no deba dejar previsualizar, ni imprimir boletines. 2"
            parrafo="Bloqueos autorizados por la Institución Educativa, para la
              impresión de informes valorativos por periodos y cierre de año."
          >
            <p className="p-2">
              Ante la ausencia de descriptores de la competencia
            </p>
            <Select
              options={DescripcionCompetencia}
              placeholder="Seleccione"
              className="p-2"
            />
            <br />
            <p className="p-2">Ante la ausencia de descriptores del FORDER</p>
            <Select
              options={DescripcionFORDER}
              placeholder="Seleccione"
              className="p-2"
            />
            <p className="p-2">
              Ante la ausencia de registro de calificaciones
            </p>
            <Select options={RegistroCalificaciones} />
            <p className="p-2">
              Ante la ausencia de registro del Compoortamiento
            </p>
            <Select
              options={RegistroComportamiento}
              placeholder="Seleccione"
              className="p-2"
            />
            <p className="p-2">
              No generar el boletín del estudiante, si falta:
            </p>
            <Select
              isMulti
              options={NoGenera}
              placeholder="Seleccione"
              className="p-2"
            />
            <Select
              isMulti
              options={AplicaPara}
              placeholder="Aplica Para"
              className="p-2"
            />
          </CardsPreguntas>
        </div>
      </div>
    </div>
  );
}
