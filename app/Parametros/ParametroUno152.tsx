import React from "react";
type Props = {
  setModalDetalle: any;
};

export default function Parametro1({ setModalDetalle }: Props) {
  return (
    <>
      <div>
        <div className="">
          <div className=" container mx-auto rounded-lg border border-gray-400 shadow-md m-4 w-1/2 ">
            <div className="  text-cyan-900  bg-white border-solid rounded-md text-md font-bold py-1 flex items-center flex-col">
              <h1 className="fond-bold text-lg text-center uppercase mb-1">
                Procesos De evaluación
              </h1>
              <button className="font-bold flex flex-nowrap ml-1 ">
                <svg
                  onClick={() => {
                    setModalDetalle(true);
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 1024 1024"
                  height="1.5em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center mr-1"
                >
                  <path d="M159 768h612.3l103.4-256H262.3z" />
                  <path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" />
                </svg>
                Detalles del Parámetro
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
