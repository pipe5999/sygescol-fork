import { Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";
import BotonAutoriza from "./BotonAutoriza";
import BotonDenega from "./BotonDenega";
import BotonModifica from "./BotonModifica";

const data = [
  {
    asignatura: "Algebra",
    docente: "Jhon Delgado",
    detalle: "No se han subido Calificaciones",
  },
];

const TablaAutori = () => {
  return (
    <>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              DOCENTE
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              AUTORIZAR
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              MODIFICAR
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              DENEGAR
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            >
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  DOCENTE
                </span>
                {item.docente}
              </td>
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  AUTORIZAR
                </span>
                <BotonAutoriza />
                {/* {item.docente} */}
              </td>
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  MODIFICAR
                </span>
                {/* <BotonModifica /> */}
              </td>
              <td className="w-full lg:w-auto p-6 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase">
                  DENEGAR
                </span>
                <BotonDenega />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaAutori;
