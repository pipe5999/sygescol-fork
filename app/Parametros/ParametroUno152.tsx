import React from "react";
type Props = {
  setModalDetalle: any;
};

export default function Parametro1({ setModalDetalle }: Props) {
  return (
    <>
      <div>
        <div className="">
          <div className=" container mx-auto rounded-lg border border-gray-400 shadow-md m-4 w-1/2 ">
            <div className="  text-cyan-900  bg-white border-solid rounded-md text-md font-bold py-1 flex items-center flex-col">
              <h1 className="fond-bold text-lg text-center uppercase mb-1">
                Procesos De evaluación
              </h1>
              <button className="font-bold flex flex-nowrap ml-1 ">
                <svg
                  onClick={() => {
                    setModalDetalle(true);
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 1024 1024"
                  height="1.5em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center mr-1"
                >
                  <path d="M159 768h612.3l103.4-256H262.3z" />
                  <path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" />
                </svg>
                Detalles del Parámetro
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="my-2">
          <h3 className=" rounded-md border-2 border-cyan-900 w-60 font-bold mt-2 text-cyan-700 text-center ">
            Registro de superaciones por periodo
          </h3>
          <h3 className=" w-1/2  mt-2 ">
            ¿Se debe habilitar planilla de caificaciones para el registro de
            superaciones en cada periodo académico?
          </h3>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
        </div>
        <hr className="w-1/2 border-cyan-600" />

        <div>
          <label className="w-60 flex flex-col">
            ¿Qué nombre debe llevar esta planilla?
            <input type="text" className="border-2 border-cyan-900 rounded" />
          </label>
        </div>
        <div className="my-2">
          <h3 className="rounded-md border-2 border-cyan-900 w-60 font-bold mt-2 text-cyan-700  ">
            Procesos de evaluación Semestral
          </h3>
          <p className="w-1/2">
            ¿El sistema Generará Fechas para procesos de evaluación Semestral?
          </p>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
          <hr className="w-1/2 border-cyan-600 " />
          <p className="w-1/2">
            ¿El sistema Generará planillas para proceos de evaluación Semestral?
          </p>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
          <p className="w-1/2">
            ¿El sistema Generará planillas para proceos de Reconsideración
            Semestral?
          </p>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
        </div>
        <div>
          <h3 className="rounded-md border-2 border-cyan-900 w-60 font-bold mt-2 text-cyan-700 ">
            Registo de Superaciones fin de año
          </h3>
          <p className="w-1/2">
            ¿Se debe habilitar planilla de caificaciones para el registro de
            superaciones fin de año?
          </p>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
          <hr className="w-1/2 border-cyan-600" />
          <p className="w-1/2">
            ¿Se debe generar el informe Final, con los registros del último
            periodo académico?
          </p>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
          <hr className="w-1/2 border-cyan-600" />
          <label className="w-60 flex flex-col">
            ¿Qué nombre debe llevar esta planilla?
            <input type="text" className="border-2 border-cyan-900 rounded" />
          </label>
        </div>
        <div>
          <h3 className="rounded-md border-2 border-cyan-900 w-1/3 font-bold mt-2 text-cyan-700 ">
            Tipos de planillas que se debe habliitar a los profesores
          </h3>
          <p className="w-1/2">
            Seleccione la planilla para la modalidad tradicional en los niveles
            de la básica y Media
          </p>
          <input type="radio" value="planilla11" name="opcion" /> Planilla 1.1
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <input type="radio" value="planilla12" name="opcion" /> Planilla 1.2
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <input type="radio" value="planilla13" name="opcion" /> Planilla 1.3
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <input type="radio" value="planilla14" name="opcion" /> Planilla 1.4
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <hr className="w-1/2 border-cyan-600" />
          <p className="w-1/2">
            Seleccione la planilla para la modalidad tradicional en los niveles
            de Preescolar
          </p>
          <input type="radio" value="planilla11" name="opcion" /> Planilla 2.1
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <input type="radio" value="planilla12" name="opcion" /> Planilla 2.2
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <input type="radio" value="planilla13" name="opcion" /> Planilla 2.3
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <input type="radio" value="planilla14" name="opcion" /> Planilla 2.4
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
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
          </button>
          <hr className="w-1/2 border-cyan-600" />
          <p className="w-1/2">
            Si el tipo de planilla corresponde a 2.1 / 2.2 , ¿cuál será el
            profesor encargado de subir las imágenes de las dimensiones?
          </p>
          <label className="w-60 flex flex-col">
            <input type="text" className="border-2 border-cyan-900 rounded" />
          </label>
          <hr className="w-1/2 border-cyan-600" />
          <p className="w-1/2">
            Para la modalidad{" "}
            <strong>Escuela Unitaria '(Escuela Nueva)'</strong> Solo hay un
            modelo de planilla
          </p>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="2em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <hr className="w-1/2 border-cyan-600" />
          <p className="w-1/2">
            Para la modalidad <strong>Aceleración del Aprendizaje</strong> Solo
            hay un modelo de planilla
          </p>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="2em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <hr className="w-1/2 border-cyan-600" />
          <p className="w-1/2 text-justify">
            Para los estudiantes de <strong>INCLUSIÓN</strong>, la Institución
            Educativa autoriza colocar el prefijo <strong>INCLUSÍON</strong>{" "}
            junto al nombre del estudiante, en las planillas
          </p>
          <input type="radio" value="Si" name="opcion" /> Sí
          <input type="radio" value="No" name="opcion" /> No
          <hr className="w-1/2 border-cyan-600" />
        </div>
        <div className="my-2">
          <h3 className="rounded-md border-2 border-cyan-900 w-1/3 font-bold mt-2 text-center text-cyan-700">
            Proceso a seguir en el registro de descriptores
          </h3>
          <p className="w-1/2">
            Si se evalua por Competencias, Logros o Desempeños, Modo de Ingreso
            del Texto Descriptivo, se hará:
          </p>
        </div>
      </div>
    </>
  );
}
