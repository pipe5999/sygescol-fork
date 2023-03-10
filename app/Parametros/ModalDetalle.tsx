"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../utils/GetParametro";
type Props = {
  setModalDetalle?: any;
  ModalDetalle?: any;
  setData?: any;
  InfoParametro: {
    TipoParam: string;
    Description: string;
  };
};

export default function ModalDetalle({ InfoParametro }: Props) {
  console.log("asdasdasdsa", InfoParametro);
  const [ModalDetalle, setModalDetalle] = useState(false);
  return (
    <>
      {ModalDetalle && (
        <div className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex justify-end text-white">
            <svg
              onClick={() => {
                setModalDetalle(false);
              }}
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className=" max-h-screen p-3 bg">
            <div className="rounded-lg border border-gray-400 shadow-md m-5">
              <div className="flex justify-center flex-col  text-gray-300  bg-gray-300 border-solid rounded-md text-md font-bold   px-4 py-1">
                <h1 className="fond-bold text-lg text-center ">
                  {InfoParametro?.TipoParam || "aja"}
                </h1>
                <p className="text-justify place-self-center px-8  ">
                  {InfoParametro?.Description || "Hola"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
