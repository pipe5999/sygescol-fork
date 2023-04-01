"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";

export default function Par241() {
  const [data, setData] = React.useState({} as any);
  const [ModalParam1, setModalParam1] = useState(false);

  console.log(data);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(241, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      {ModalParam1 && (
        <div>
          {" "}
          <div className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="sm:max-h-[full] sm:w-full lg:max-h-full">
              <div className="h-[36rem] rounded-lg border border-gray-400 shadow-md m-5 bg-gray-50  ">
                <div className="flex justify-center items-center m-8">
                  <h1 className="uppercase font-extrabold text-center text-cyan-700">
                    Según el Decreto <strong>3011</strong>{" "}
                  </h1>
                </div>
                <div className="flex justify-center items-center ">
                  <table className=" table-auto rounded-lg p-4 ">
                    <thead className="bg-gray-50">
                      <tr className="bg-cyan-900 border-4 border-gray-200 ">
                        <th className="px-4 py-2 border text-gray-100 uppercase">
                          Edad Requerida
                        </th>
                        <th className="px-4 py-2 border text-gray-100 uppercase">
                          Grado Origen
                        </th>
                        <th className="px-4 py-2 border text-gray-100 uppercase">
                          Ciclo Destino
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          <input type="number" placeholder=" Edad en Años" />
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          1°, 2° o 3° De Primaria{" "}
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          CICLO I
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          <input type="number" placeholder=" Edad en Años" />
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          4° o 5° De Primaria{" "}
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          CICLO II
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          <input type="number" placeholder=" Edad en Años" />
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          6° o 7° De secundaria{" "}
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          CICLO III
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          <input type="number" placeholder=" Edad en Años" />
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          8° o 9° De secundaria{" "}
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          CICLO IV
                        </td>
                      </tr>
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          <input type="number" placeholder=" Edad en Años" />
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          De 10° u 11° media{" "}
                        </td>
                        <td className="px-4 py-2 border text-gray-700 uppercase">
                          CICLO V
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center m-8">
                  <button
                    onClick={(e) => {
                      e.preventDefault;
                      setModalParam1(false);
                    }}
                    className="h-8 w-40 text-gray-50 rounded-md bg-cyan-700  hover:bg-red-700 shadow-lg shadow-cyan-500 hover:shadow-lg hover:shadow-red-700 "
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Edades establecidas para los cambios de modalidad de Tradicional a Ciclos."
          parrafo="La Institución Educativa define la edad que debe tener el estudiante, para efectuar un cambio de modalidad."
        >
          <div className="flex justify-center">
            <svg
              onClick={(e) => {
                e.preventDefault;
                setModalParam1(!ModalParam1);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-700 hover:stroke-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
