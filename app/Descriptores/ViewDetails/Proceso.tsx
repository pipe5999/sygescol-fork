"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
export type Props = {
  showModal: any;
  id: any;

  contador: any;
  setContador: any;
};
function Proceso({ showModal, id, contador, setContador }: Props) {
  const [data, setData] = useState({} as any);
  const handleDelete = async () => {
    const acepta = confirm("¿Esta seguro que desea eliminar este proceso?");
    if (acepta) {
      try {
        axios
          .get(
            `/api/ProcesosEvaluacion/Delete?i=${id}&c=${localStorage.getItem(
              "colegio"
            )}`
          )
          .then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
              alert(res.data.body);
              setContador(contador + 1);
              showModal(false);
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Existe un error en la eliminación de la observación");
          });
      } catch (error) {
        console.log(error);
        alert("Existe un error en la eliminación de la observación");
      }
    }
  };
  const getData = async () => {
    await axios
      .get(
        `/api/ProcesosEvaluacion/ViewData?i=${id}&c=${localStorage.getItem(
          "colegio"
        )}`
      )
      .then((res) => {
        if (res.status == 200) {
          setData({ ...res.data?.informacion });
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Existe un error al consultar la informacion asociada al proceso"
        );
      });
  };
  useEffect(() => {
    getData();
  }, []);
  let desempeño: any = [
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
  return (
    <div className="bg-black/50 overflow-auto  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto   w-11/12 md:w-4/5 max-w-full  ">
        <div className="relative   py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 ">
          <div className="container mx-auto text-center px-4 mb-4 grid grid-cols-2">
            <div>
              <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-800 text-white rounded-lg">
                Información sobre el proceso
              </div>
              <div className="container mx-auto font-bold text-2xl w-10/12">
                {data?.texto}
              </div>
            </div>
            <div>
              <div className="container mx-auto text-center px-4 mb-4">
                <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-800 text-white rounded-lg">
                  Desempeño Asociado
                </div>
              </div>
              <div className="container mx-auto font-bold text-2xl w-10/12">
                {data &&
                  desempeño.find((des: any) => des.value == data?.escala)
                    ?.label}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <button
              className="border-2 border-red-600 text-red-600 hover:bg-red-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                handleDelete();
              }}
            >
              Eliminar
            </button>
            <button
              onClick={() => showModal(false)}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proceso;
