"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import ReactSelect from "react-select";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../utils/CustomStylesTables";

function BodyComponent() {
  const [showModal, setShowModal] = useState(false);

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

  const columns = [
    {
      name: "Desempeño",
    },
    {
      name: "Proceso",
    },
  ];

  const data = [
    {
      name: "data",
    },
  ];

  function handleClick() {
    setShowModal(true);
  }
  // console.log("showModal=========", showModal);

  return (
    <>
      <div className="container mx-auto text-center px-4 mb-4">
        <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-900 text-white rounded-lg">
          Banco de Procesos para los Descriptores
          <button
            onClick={handleClick}
            className="flex gap-1 flex-row items-center lg:text-xl border-blue-500 hover:bg-blue-500 hover:border-blue-600 border-2 py-2 px-4 rounded-lg"
          >
            Agregar Proceso
            <TiPlus className="text-[150%]" />
          </button>
        </div>

        <div className="my-4">
          <DataTable
            title="Lista de Procesos"
            data={data}
            columns={columns}
            customStyles={customStyles}
            pagination
            responsive
            noDataComponent="No hay datos"
            paginationPerPage={7}
          />
        </div>

        {/* Modal Add Proceso */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="bg-blue-900 rounded-lg font-medium text-white py-1">
                Agregar proceso
              </h2>
              <div className="flex flex-row items-center gap-2 my-3">
                <p className="text-lg font-medium">Desempeño:</p>
                <ReactSelect
                  className="w-full text-left"
                  placeholder="Seleccione un desempeño"
                  options={desempeño}
                />
              </div>
              <div className="flex flex-row items-center gap-2 my-3">
                <p className="text-lg font-medium">Proceso:</p>
                <input
                  className="w-full border-[1px] border-gray-500 p-2 rounded-lg focus-visible:border-double focus-visible:border-[#2684FF] focus-visible:border-[0.4rem] focus-visible:outline-[#2684FF]/10"
                  type="text"
                  name="Nombre"
                  id="Nombre"
                  placeholder="Ingrese un proceso"
                />
              </div>
              <div className="flex flex-row justify-center gap-4">
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Agregar
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .modal-overlay {
          padding: 1rem;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background-color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          width: 30%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .modal h2 {
          margin-top: 0;
          font-size: 1.5rem;
        }
      `}</style>
      ;
    </>
  );
}

export default BodyComponent;
