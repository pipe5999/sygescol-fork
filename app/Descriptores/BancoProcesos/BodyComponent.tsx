"use client";
import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";

function BodyComponent() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }
  console.log("showModal=========", showModal);

  return (
    <>
      <div className="container mx-auto text-center px-4 mb-4">
        <div className="flex flex-row justify-around items-center uppercase text-center font-bold text-2xl py-4 bg-blue-800 text-white rounded-lg">
          Banco de Procesos para los Descriptores
          <button
            onClick={handleClick}
            className="flex gap-1 flex-row items-center text-xl border-blue-500 hover:bg-blue-500 hover:border-blue-600 border-2 py-2 px-4 rounded-lg"
          >
            Agregar Proceso
            <TiPlus className="text-[150%]" />
          </button>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2 className="bg-blue-800 rounded-lg text-white py-1">
                Agregar proceso
              </h2>
              <div className="flex flex-row items-center gap-2 my-3">
                <p>Proceso:</p>
                <input
                  className="w-full border-[1px] border-gray-500"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <button
                className="bg-blue-800 hover:bg-blue-900 cursor-pointer text-white py-2 px-4 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: ;
        }

        .modal {
          background-color: white;
          padding: 1rem;
          border-radius: 4px;
          max-width: 500px;
          width: 100%;
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
