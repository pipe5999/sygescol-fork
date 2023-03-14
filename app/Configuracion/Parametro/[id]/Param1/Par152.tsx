"use client";
import React, { useEffect } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import Select from "react-select";
import { useForm } from "react-hook-form";
import CardsPreguntas from "../../../CardsPreguntas";

type FormData = {
  NombrePlanilla: any;
};

export default function Par152() {
  const [data, setData] = React.useState({} as any);

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
  const SuperacionFinal = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const InformeFinalS = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];

  const ProcesoDesarrolloFordeb = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const ProcesoDesarrolloProceso = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroSuperaciones = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const ProcesoEvaluacion1 = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];

  const ProcesoEvaluacion2 = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const ProcesoEvaluacion3 = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
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

  const TipoPlanillaPreescolar2 = [
    {
      value: "si",
      label: "Sí",
    },
    {
      value: "no",
      label: "No",
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
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroDescriptoresCargaMasiva = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroDescriptoresCargaMasiva2 = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroDescriptoresRolCoordi = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];

  const RegistroDescriptoresRolJefe = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroDescriptoresDimensiones = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const RegistroDescriptoresDimensiones2 = [
    {
      value: "Si",

      label: "Si",
    },
    {
      value: "No",

      label: "No",
    },
  ];
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log("yarn", data));

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(152, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {/* <Parametro1 />

    {/* {data?.infoParametros?.TipoParam} */}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      {/* <ModalDetalle InfoParametro={data.infoParametros} /> */}
      <div className="grid grid-cols-3 ">
        <CardsPreguntas
          titulo="Procesos de Evaluación"
          parrafo="Qué tipo de proceso aplicará"
        >
          <Select
            options={TipoProceso}
            placeholder="Seleccione"
            className="w-full p-4 text-center"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso de desarollo"
          parrafo="¿El docente deberá conceptualizar el proceso en el sistema?"
        >
          <Select
            options={ProcesoDesarrolloProceso}
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
              options={ProcesoDesarrolloFordeb}
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
            options={RegistroSuperaciones}
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
          <Select options={ProcesoEvaluacion1} placeholder="Seleccione" />
          <p>
            ¿El sistema Generará planillas para proceos de evaluación Semestral?
          </p>
          <Select options={ProcesoEvaluacion2} placeholder="Seleccione" />
          <p>
            ¿El sistema Generará planillas para proceos de Reconsideración
            Semestral?
          </p>
          <Select options={ProcesoEvaluacion3} placeholder="Seleccione" />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Tipos de planillas que se debe habliitar a los profesores"
          parrafo="Para la modalidad tradicional en los niveles de la básica y Media"
        >
          <Select options={TipoPlanilla} placeholder="Seleccione" />
          <p>Para la modalidad tradicional en los niveles de Preescolar</p>
          <Select options={TipoPlanillaPreescolar} placeholder="Seleccione" />
          <p>El registro de la Valoración, incluye Desempeños Nacionales</p>
          <Select options={TipoPlanillaPreescolar2} placeholder="Seleccione" />

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
        <CardsPreguntas titulo="Tipos de planillas que se debe habliitar a los profesores">
          <p>
            Para la modalidad Escuela Unitaria (Escuela Nueva) Solo hay un
            modelo de planilla
          </p>
          <svg
            className="cursor-pointer fill-teal-900"
            stroke="currentColor"
            fill=""
            strokeWidth={0}
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1.5em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />
          </svg>
          <p>
            Para la modalidad Aceleración del Aprendizaje Solo hay un modelo de
            planilla
          </p>
          <svg
            className="cursor-pointer fill-teal-900"
            stroke="currentColor"
            fill=""
            strokeWidth={0}
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1.5em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />
          </svg>
          <p>
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
          <p>¿Por registro directo del Docente?</p>
          <Select
            options={RegistroDescriptoresRegistroDocente}
            placeholder="Seleccione"
          />
          <p>
            ¿Por carga masiva con ventana emergente (Sin ningún tipo de
            modificación)?
          </p>
          <Select
            options={RegistroDescriptoresCargaMasiva}
            placeholder="Seleccione"
          />
          <p>¿Con carga masiva, pero permitiendo su modificación?</p>
          <Select
            options={RegistroDescriptoresCargaMasiva2}
            placeholder="Seleccione"
          />
          <p>
            ¿Los descriptores serán ingresados al sistema desde el Rol
            Coordinador?
          </p>
          <Select
            options={RegistroDescriptoresRolCoordi}
            placeholder="Seleccione"
          />
          <p>
            ¿Los descriptores serán ingresados al sistema desde el Rol Jefe de
            Área?
          </p>
          <Select
            options={RegistroDescriptoresRolJefe}
            placeholder="Seleccione"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso a seguir en el registro de descriptores 2"
          parrafo="Si se exige el registro de descriptores para Dimesnsiones de la competencia, el modo de ingreso de textos, se hará:"
        >
          <p>Con carga masiva, pero permitiendo su modificación.</p>
          <Select
            options={RegistroDescriptoresDimensiones}
            placeholder="Seleccione"
          />
          <p>
            Los descriptores serán ingresados al sistema desde el Rol
            Coordinador
          </p>
          <Select
            options={RegistroDescriptoresDimensiones2}
            placeholder="Seleccione"
          />
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Proceso a seguir en el registro de descriptores 3"
          parrafo="Las Dimensiones de la Competencia o el indicador del Logro tendrá asignado un prcentaje, así:"
        >
          <form>
            <label>Nombre de la Dimensión de la competencia</label>
            <input
              type="text"
              placeholder="Ingrese el porcentaje"
              className="border-[1px] rounded-sm border-inhereit h-8 flex mx-auto"
            />
          </form>
        </CardsPreguntas>
      </div>
    </div>
  );
}
