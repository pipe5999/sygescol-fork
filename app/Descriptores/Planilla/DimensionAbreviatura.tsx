"use client";
import React from "react";

type Props = {
  dimension: any;
  open: number;
  posicion: number;
  setOpen: any;
  setDim: any;
  escala: any;
};
const DimensionAbreviatura = ({
  dimension,
  open,
  posicion,
  setOpen,
  setDim,
  escala,
}: Props) => {
  return (
    <>
      <div
        title={dimension?.nombreAsigna}
        className={`w-full h-auto border-2  py-2 px-4 hover:rounded-lg text-lg font-medium text-black hover:bg-green-800 hover:text-white cursor-pointer  ${
          (open == posicion && "bg-green-800 text-white border-green-800") ||
          "border-blue-600"
        }`}
        onClick={() => {
          setOpen(posicion);
          setDim(dimension);
          escala([]);
        }}
      >
        <h1 className="text-center uppercase">{dimension?.Abreviatura}</h1>
      </div>
    </>
  );
};

export default DimensionAbreviatura;
