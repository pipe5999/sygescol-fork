"use client";
import React from "react";

type Props = {
  title: string;
  supTitle: string;
};

const DimensionAbreviatura = ({ title, supTitle }: Props) => {
  return (
    <>
      <div
        title={supTitle}
        className="w-full h-auto border-2 border-blue-600 py-2 px-4 hover:rounded-lg text-lg font-medium text-black hover:bg-blue-600 hover:text-white cursor-pointer"
      >
        <h1 className="text-center uppercase">{title}</h1>
      </div>
    </>
  );
};

export default DimensionAbreviatura;
