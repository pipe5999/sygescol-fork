import React from "react";

export default function HeaderParam({ infoParams, newText }: any) {
  console.log("new text", newText);

  return (
    <div className="w-full items-center flex flex-col lg:flex-row place-content-center mb-4  px-6  bg-blue-900 ">
      <div className="flex flex-col">
        <h1 className="uppercase text-gray-50 text-font-extrabold text-center md:text-xl lg:text-2xl">
          Parámetro {infoParams?.infoParametros?.Id}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${infoParams?.infoParametros?.TipoParam || ""}`,
          }}
          className="sm:text-sm  lg:fond-bold lg:text-lg text-center text-gray-50  m-1"
        ></div>
      </div>
    </div>
  );
}
