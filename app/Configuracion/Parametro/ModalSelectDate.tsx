import React from "react";
import Fechas from "./Fechas";

export default function ModalSelectDate({
  setSeleccionFecha,
  SeleccionFecha,
}: any) {
  return (
    <div className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="sm:h-auto sm:w-auto lg:max-h-screen p-3   ">
        <div className="rounded-lg border border-gray-400 shadow-md m-5 ">
          <div className="flex justify-end bg-cyan-700 ">
            <svg
              onClick={(e) => {
                e.preventDefault;
                setSeleccionFecha(!SeleccionFecha);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke hover:stroke-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <Fechas />
        </div>
      </div>
    </div>
  );
}
