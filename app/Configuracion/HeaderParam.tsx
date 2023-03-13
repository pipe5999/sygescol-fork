import React from "react";

export default function HeaderParam({ infoParams }: any) {
  return (
    <div className="w-full items-center flex flex-col lg:flex-row place-content-center mb-4  px-6  bg-blue-900 h-24">
      <div className="flex flex-col">
        <h1 className="uppercase text-gray-50 text-font-extrabold text-center md:text-xl lg:text-2xl">
          Parámetro {infoParams?.infoParametros?.Id}
        </h1>
        <h1 className="capitalize text-gray-50 text-font-bold text-center md:text-xl lg:text-2xl">
          {infoParams?.infoParametros?.TipoParam}
        </h1>
      </div>
    </div>
  );
}
