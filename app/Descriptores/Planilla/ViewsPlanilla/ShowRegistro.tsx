"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../../utils/CustomStylesTables";
export type Props = {
  show: any;
  id: any;
  cga: any;
  type?: any;
};
function ShowRegistro({ show, id, cga, type }: Props) {
  const [data, setData] = useState({} as any);
  let desempeño = [
    {
      value: 1,
      label: "Superior",
    },
    {
      value: 2,
      label: "Alto",
    },
    {
      value: 3,
      label: "Básico",
    },
    {
      value: 4,
      label: "Bajo",
    },
  ];

  const getData = async () => {
    await axios
      .get(
        `/api/Planilla/ShowInfo?c=${localStorage.getItem(
          "colegio"
        )}&e=${id}&cg=${cga}`
      )
      .then((res) => {
        if (res.status == 200) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Existe un error en la carga de información");
      });
  };
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const columns: any = [
    {
      name: "Texto Definido",
      selector: (row: any) => (
        <span className="text-lg text-justify">{row.texto}</span>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Desempeño Nacional",
      selector: (row: any) => (
        <div className="text-lg  font-bold">
          {desempeño?.find((des) => des?.value == row.escala)?.label}
        </div>
      ),
    },
  ];
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="bg-black/50 overflow-auto  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto   w-11/12 md:w-4/5 max-w-full  ">
          <div className="relative   py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 ">
            <div className="container mx-auto text-center px-4 mb-4">
              <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-800 text-white rounded-lg">
                Asignación de Procesos y Observaciones
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <DataTable
                    title={`${
                      (type && "Procesos Asignados") || "Lista de Procesos"
                    }`}
                    data={data?.procesos}
                    columns={columns}
                    customStyles={customStyles}
                    pagination
                    responsive
                    noDataComponent="No hay Datos"
                    paginationPerPage={4}
                    paginationComponentOptions={paginationComponentOptions}
                  />
                </div>
                <div>
                  <DataTable
                    title={`${
                      (type && "Observaciones Asignadas") ||
                      "Lista de Observaciones"
                    }`}
                    data={data?.observaciones}
                    columns={columns}
                    customStyles={customStyles}
                    pagination
                    responsive
                    noDataComponent="No hay Datos"
                    paginationPerPage={4}
                    paginationComponentOptions={paginationComponentOptions}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center gap-4">
                <button
                  onClick={() => show(false)}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowRegistro;
