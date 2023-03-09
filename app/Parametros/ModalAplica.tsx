import React from "react";

export default function ModalAplica({ setShowAccep, ShowAccep }: any) {
  console.log(
    "🚀 ~ file: ModalAplica.tsx:4 ~ ModalAplica ~ ShowAccep:",
    ShowAccep
  );
  return (
    <>
      <div className=" fixed inset-0 z-[60]  bg-gray-900/80 flex justify-center items-center">
        <div className="bg-white  p-3 rounded-md ">
          <div className="flex justify-end bg-cyan-900 rounded-t-md">
            <button>
              <svg
                onClick={(e) => {
                  e.preventDefault();

                  setShowAccep({
                    show: false,
                    info: {},
                  });
                }}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="2em"
                className="text-gray-50 hover:text-red-600 m-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Cerrar</title>
                <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
                <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
              </svg>
            </button>
          </div>
          <h2 className="text-lg bg-cyan-900 font-bold text-gray-50  text-xl text-center rounded-b-md mb-2 ">
            PARÁMETRO {ShowAccep?.info.idParametro}
          </h2>
          <div className="text-cyan-600 text-lg my-2">
            {ShowAccep?.info.tipoParametro}
          </div>
          <hr className="border-cyan-600" />
          <p className="mt-2 text-md text-gray-600 my-2">
            Defina Si Aplica o No Dependiendo de los parámetros de la
            Institución
          </p>
          <div className="mt-4 flex gap-2 justify-center">
            <button
              type="button"
              className="rounded bg-green-100 px-4 py-2 text-sm font-medium text-green-600"
            >
              Sí
            </button>
            <button
              type="button"
              className="rounded bg-red-100 px-4 py-2 text-sm font-medium text-red-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
