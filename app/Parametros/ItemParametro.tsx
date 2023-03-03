import React from "react";

type Props = {
  setVisible: any;
};

function ItemParametro({ setVisible }: Props) {
  return (
    <>
      <div className="container mx-auto w-1/2 text-center text-extrabold text-cyan-900 underline capitalize font-bold  mb-4">
        <h1>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 container mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span className="capitalize">
            Parámetros definidos por: Rectoría, Coordinador Académico,
            Representantes Docentes.
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 drop-shadow-lg">
        <div className="group relative mx-auto w-64 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-600 hover:to-green-500">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div className="relative rounded-[15px] items-center bg-white hover:bg-[#070e55] hover:text-white p-6">
            <div className="space-y-4 flex flex-col items-center  text-cyan-900 hover:text-white  ">
              <h3 className="text-center font-semibold">Parámetro 1</h3>
              <button className="text-4xl  text-center items-center font-semibold text-cyan-800 hover:text-white">
                <svg
                  onClick={() => setVisible(true)}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  className="items-center"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-black hover:stroke-white"
                    fill="none"
                    stroke-width="2"
                    d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemParametro;
