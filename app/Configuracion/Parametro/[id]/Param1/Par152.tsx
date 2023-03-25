"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import Select from "react-select";
import { useForm } from "react-hook-form";
import CardsPreguntas from "../../../CardsPreguntas";
import { YesOrNot } from "../../../../../utils/OptionsParams";
import ModalImage from "react-modal-image";

type FormData = {
  NombrePlanilla: any;
};

export default function Par152() {
  const [data, setData] = React.useState({} as any);

  const [Eleccion, setEleccion] = React.useState(false);

  const [EscualaNuevaPlanilla, setEscualaNuevaPlanilla] = useState(false);

  const [PlanillaAceleracion, setPlanillaAceleracion] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [Items, setItems] = useState([] as any[]);

  console.log("items", Items);

  const onSubmit = handleSubmit((data) => console.log("yarn", data));

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(152, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);
  const TipoProceso = [
    {
      value: "Competencias",

      label: "Competencias",
    },
    {
      value: "Desempeños",
      label: "Desempeños",
    },
    {
      value: "Logros",
      label: "Logros",
    },
    {
      value: "Otros",
      label: "Otros",
    },
  ];

  const TipoPlanilla = [
    {
      value: "plantilla1.1",
      label: "plantilla 1.1",
    },
    {
      value: "plantilla1.2",
      label: "plantilla 1.2",
    },
    {
      value: "plantilla1.3",
      label: "plantilla 1.3",
    },
    {
      value: "plantilla1.4",
      label: "plantilla 1.4",
    },
  ];

  const TipoPlanillaPreescolar = [
    {
      value: "plantilla2.1",
      label: "plantilla 2.1",
    },
    {
      value: "plantilla2.2",
      label: "plantilla 2.2",
    },
    {
      value: "plantilla2.3",
      label: "plantilla 2.3",
    },
    {
      value: "plantilla2.4",
      label: "plantilla 2.4",
    },
  ];

  const EstudiantesInclusion = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroDescriptoresRegistroDocente = [
    {
      value: "1",

      label:
        "Por carga masiva con ventana emergente, (Sin ningún tipo de modificación)",
    },
    {
      value: "2",

      label: "Por registro directo del Docente",
    },
    {
      value: "3",

      label: "Con carga masiva, (pero permitiendo su modificación)",
    },
    {
      value: "4",

      label:
        "Los descriptores serán ingresados al sistema desde el Rol Coordinador",
    },
    {
      value: "5",

      label:
        "Los descriptores serán ingresados al sistema desde el Rol Jefe de Área",
    },
  ];

  const RegistroDescriptoresDimensiones = [
    {
      value: "1",

      label: "Con carga masiva, pero permitiendo su modificación.",
    },
    {
      value: "2",

      label:
        "Los descriptores serán ingresados al sistema desde el Rol Coordinador",
    },
  ];

  const RegistroDescriptoresDimensiones2 = [
    {
      value: "1",
      label: "Una sola calificación por periodo académico",
    },
    {
      value: "2",
      label: "Mínimo una acción por cada dimensión de la competencia",
    },
  ];

  return (
    <div>
      {EscualaNuevaPlanilla && (
        <div className=" fixed inset-0 z-100  bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen p-3 lg:w-1/2  ">
            <div className="rounded-lg border border-gray-400 shadow-md m-5">
              <div className="flex justify-end">
                <svg
                  onClick={() => {
                    setEscualaNuevaPlanilla(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-800"
                >
                  <title>Cerrar Planilla</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {PlanillaAceleracion && (
        <div className=" fixed inset-0 z-100  bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen p-3 lg:w-1/2  ">
            <div className="rounded-lg border border-gray-400 shadow-md m-5">
              <div className="flex justify-end">
                <svg
                  onClick={() => {
                    setPlanillaAceleracion(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-800"
                >
                  <title>Cerrar Planilla</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <img src="Parametros/PlanillaAceleracion.png" />
            </div>
          </div>
        </div>
      )}

      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      {/* <ModalDetalle InfoParametro={data.infoParametros} /> */}
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Procesos de Evaluación"
          parrafo="Qué tipo de proceso aplicará"
        >
          <Select
            onChange={(e: any) => {
              console.log(e);

              e.value == "Otros" ? setEleccion(true) : setEleccion(false);
            }}
            options={TipoProceso}
            placeholder="Seleccione"
            className="w-full p-4 text-center"
          />
          {Eleccion && (
            <div className=" text-center p-4 flex flex-col">
              <label>Cúal</label>
              <input
                type="text"
                name=""
                id=""
                className="h-8 rounded-md shadow-lg ring-1 ring-gray-200"
              />
            </div>
          )}
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso de desarollo"
          parrafo="¿El docente deberá conceptualizar el proceso en el sistema?"
        >
          <Select
            options={YesOrNot}
            placeholder="Seleccione"
            className="w-full p-4 text-center"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Registro ForDeb"
          parrafo=" ¿El docente deberá registrar desriptores para cada uno FOR
      -DEB- REC?"
        >
          <div>
            <Select
              options={YesOrNot}
              placeholder="Seleccione"
              className="w-full p-4 text-center"
            />
          </div>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Registro de superaciones por periodo"
          parrafo="¿Se debe habilitar planilla de caificaciones para el registro de
                superaciones en cada periodo académico?"
        >
          <Select
            options={YesOrNot}
            placeholder="Seleccione"
            className="w-full p-4 text-center"
          />

          <form>
            <label>¿Qué nombre de debe dar a la planilla?</label>
            <input
              type="text"
              className="border-[1px] rounded-sm border-inhereit h-8 flex mx-auto"
            />
          </form>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Procesos de evaluación Semestral"
          parrafo="¿El sistema Generará Fechas para procesos de evaluación Semestral?"
        >
          <Select options={YesOrNot} placeholder="Seleccione" />
          <p>
            ¿El sistema Generará planillas para proceos de evaluación Semestral?
          </p>
          <Select options={YesOrNot} placeholder="Seleccione" />
          <p>
            ¿El sistema Generará planillas para proceos de Reconsideración
            Semestral?
          </p>
          <Select options={YesOrNot} placeholder="Seleccione" />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Tipos de planillas que se debe habliitar a los profesores 1"
          parrafo="Para la modalidad tradicional en los niveles de la básica y Media"
        >
          <div className="flex flex-row justify-center gap-2 mb-3 ">
            <ModalImage
              small={"/Parametros/planilla1.1.png"}
              large={"/Parametros/planilla1.1.png"}
              alt="Planilla 1.1!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
            <ModalImage
              small={"/Parametros/planilla1.2.png"}
              large={"/Parametros/planilla1.2.png"}
              alt="Planilla 1.2!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
            <ModalImage
              small={"/Parametros/planilla1.3.png"}
              large={"/Parametros/planilla1.3.png"}
              alt="Planilla 1.3!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
            <ModalImage
              small={"/Parametros/planilla1.4.png"}
              large={"/Parametros/planilla1.4.png"}
              alt="Planilla 1.4!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
          </div>
          <Select options={TipoPlanilla} placeholder="Seleccione" />
          <p className="text-justify p-4">
            Para la modalidad tradicional en los niveles de Preescolar
          </p>
          <div className="flex flex-row justify-center gap-2 mb-2 ">
            <ModalImage
              small={"/Parametros/planilla2.1.png"}
              large={"/Parametros/planilla2.1.png"}
              alt="Planilla 2.1!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
            <ModalImage
              small={"/Parametros/planilla2.2.png"}
              large={"/Parametros/planilla2.2.png"}
              alt="Planilla 2.2!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
            <ModalImage
              small={"/Parametros/planilla2.3.png"}
              large={"/Parametros/planilla2.3.png"}
              alt="Planilla 2.3!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
            <ModalImage
              small={"/Parametros/planilla2.4.png"}
              large={"/Parametros/planilla2.4.png"}
              alt="Planilla 2.4!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
          </div>
          <Select options={TipoPlanillaPreescolar} placeholder="Seleccione" />
          <p className="text-justify p-4">
            El registro de la Valoración, incluye Desempeños Nacionales
          </p>
          <Select options={YesOrNot} placeholder="Seleccione" />

          <form>
            <label>
              Si el tipo de planilla corresponde a 2.1 / 2.2 , cuál será el
              profesor (a) encargado de subir las imágenes de las dimensiones
            </label>
            <input
              type="text"
              className="border-[1px] rounded-sm border-inhereit h-8 flex mx-auto"
            />
          </form>
        </CardsPreguntas>
        <CardsPreguntas titulo="Tipos de planillas que se debe habliitar a los profesores 2">
          <p className="text-justify">
            Para la modalidad Escuela Unitaria (Escuela Nueva) Solo hay un
            modelo de planilla
          </p>
          <div className="flex justify-center my-2">
            <ModalImage
              small={"/Parametros/EscuelaNueva.png"}
              large={"/Parametros/EscuelaNueva.png"}
              alt="¡Planilla Escuela Nueva!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />{" "}
          </div>
          <p className="text-justify">
            Para la modalidad Aceleración del Aprendizaje Solo hay un modelo de
            planilla
          </p>
          <div className=" flex justify-center my-2">
            <ModalImage
              small={"/Parametros/PlanillaAceleracion.png"}
              large={"/Parametros/PlanillaAceleracion.png"}
              alt="¡Planilla Aceleración!"
              className="h-8 w-8 rounded-full ring-2 ring-green-500"
            />
          </div>
          <p className="text-justify">
            Para los estudiantes de INCLUSIÓN, la Institución Educativa autoriza
            colocar el prefijo INCLUSÍON junto al nombre del estudiante, en las
            planillas
          </p>
          <Select options={EstudiantesInclusion} placeholder="Seleccione" />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso a seguir en el registro de descriptores 1"
          parrafo="Si se evalua por Competencias, Logros o Desempeños, Modo de Ingreso del Texto Descriptivo, se hará:"
        >
          <Select
            options={RegistroDescriptoresRegistroDocente}
            placeholder="Seleccione"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso a seguir en el registro de descriptores 2"
          parrafo="Si se exige el registro de descriptores para Dimesnsiones de la competencia, el modo de ingreso de textos, se hará:"
        >
          <Select
            options={RegistroDescriptoresDimensiones}
            placeholder="Seleccione"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso a seguir en el registro de descriptores 3"
          parrafo="Las Dimensiones de la Competencia o el indicador del Logro tendrá asignado un prcentaje, así:"
        >
          <div className="w-72 p-4">
            {Items?.map((item, index) => {
              return (
                <form>
                  <label>Nombre de la Dimensión de la competencia</label>
                  <input
                    onChange={(e) => {
                      const { value } = e.target;
                      setItems((prev) => {
                        const newItems = [...prev];
                        newItems[index] = {
                          ...newItems[index],
                          DimensionCompetencia: value,
                        };
                        return newItems;
                      });
                    }}
                    type="text"
                    placeholder="Ingrese el Nombre de la competencia"
                    className="border-[1px] rounded-sm border-inhereit h-8 flex mx-auto"
                  />
                  <label>Ingrese el Porcentaje</label>
                  <input
                    onChange={(e) => {
                      const { value } = e.target;
                      setItems((prev) => {
                        const newItems = [...prev];
                        newItems[index] = {
                          ...newItems[index],
                          DimensionCompetencia: value,
                        };
                        return newItems;
                      });
                    }}
                    type="text"
                    placeholder="Ingrese un porcentaje"
                    className="border-[1px] rounded-sm border-inhereit h-8 flex mx-auto"
                  />
                </form>
              );
            })}
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setItems([...Items, {}]);
                }}
                className="flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-cyan-800 hover:stroke-green-500"
                >
                  <title>Ingreso de Areas y Porcentajes </title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="w-72 p-2">
            El docente ingresará a la planilla de calificaciones, acciones del
            proceso evaluativo, así:
          </p>
          <Select
            options={RegistroDescriptoresDimensiones2}
            placeholder="Seleccione"
            className="w-72 p-4"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso a seguir en el registro de descriptores 4"
          parrafo="Para el registro de las Fortalezas, Debilidades y Recomendaciones, el docente subirá a la plataforma:"
        >
          <p>
            <strong>Fortalezas </strong>Para los desempeños nacionales SUPRIOR Y
            ALTO
          </p>
          <Select options={YesOrNot} placeholder="Seleccione" />
          <p>
            <strong>Debilidades </strong> Para los desempeños nacionales BÁSICO
            Y BAJO
          </p>
          <Select options={YesOrNot} placeholder="Seleccione" />
          <p>
            <strong>Recomendaciones </strong>Para los desempeños nacionales
            BÁSICO Y BAJO
          </p>
          <Select options={YesOrNot} placeholder="Seleccione" />
        </CardsPreguntas>
      </div>
    </div>
  );
}
