"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../../utils/CustomStylesTables";
export type Props = {
  estudiante: any;
  escala: any;
  cga: any;
  show: any;
};
function Registro({ estudiante, escala, cga, show }: Props) {
  const [data, setData] = useState({} as any);
  const GetBase = async () => {
    // console.log("todo bien");
    const proceso = await axios
      .get(
        `/api/ProcesosEvaluacion/ProcesoCargado?cg=${cga}&e=${escala}&c=${localStorage.getItem(
          "colegio"
        )}`
      )
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          return res.data?.Proceso;
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Existe un error al consultar los procesos");
      });
    const Observaciones = await axios
      .get(
        `/api/ObservacionesProcesos/ProcesoCargado?cg=${cga}&e=${escala}&c=${localStorage.getItem(
          "colegio"
        )}`
      )
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          return res.data?.Proceso;
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Existe un error al consultar los procesos");
      });
    setData({ ["Observaciones"]: Observaciones, ["Procesos"]: proceso });
  };

  const columns: any = [
    {
      name: "Observacion",
      selector: (row: any) => (
        <div className="text-justify text-lg">{row.texto || ""}</div>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Operaciones",
      selector: (row: any) => (
        <>
          <div className="flex justify-center w-full">
            <button
              className="p-2 text-white text-lg rounded-md bg-blue-700 font-bold"
              title="Seleccionar"
              onClick={() => handleAsign2(row.id)}
            >
              Seleccionar Observación
            </button>
          </div>
        </>
      ),
    },
  ];
  const columns2: any = [
    {
      name: "Proceso",
      selector: (row: any) => (
        <div className="text-justify text-lg">{row.texto || ""}</div>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Operaciones",
      selector: (row: any) => (
        <>
          <div className="flex justify-center w-full">
            <button
              className="p-2 text-white text-lg rounded-md bg-blue-700 font-bold"
              title="Seleccionar"
              onClick={() => handleAsign(row.id)}
            >
              Seleccionar Proceso
            </button>
          </div>
        </>
      ),
    },
  ];
  const handleAsign = (id: any) => {
    alert("Proceso asignado Exitosamente");
    show(false);
  };
  const handleAsign2 = (id: any) => {
    alert("Observación asignada Exitosamente");
    show(false);
  };
  useEffect(() => {
    // console.log("entre");
    GetBase();
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
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="my-4">
                <DataTable
                  title="Lista de Procesos"
                  data={data?.Procesos}
                  columns={columns2}
                  customStyles={customStyles}
                  pagination
                  responsive
                  noDataComponent="No hay datos"
                  paginationPerPage={7}
                />
              </div>
              <div className="my-4">
                <DataTable
                  title="Lista de Observaciones"
                  data={data?.Observaciones}
                  columns={columns}
                  customStyles={customStyles}
                  pagination
                  responsive
                  noDataComponent="No hay datos"
                  paginationPerPage={7}
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
    </>
  );
}

export default Registro;
