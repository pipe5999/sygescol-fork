import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Parametros } from "../../utils/Parametros";
import ModalDetalle from "./ModalDetalle";

const DetallesParametro = ({ infoParams }: any) => {
  console.log("infoParamsdfsdf", infoParams);

  const searchParams = useSearchParams();
  const [Menu, setMenu] = useState({} as any);
  const [ShowModalDetalle, setShowModalDetalle] = useState(false);

  useEffect(() => {
    const IndexPrincipal: any = searchParams.get("IndexPrincipal");
    const IndexSecundario: any = searchParams.get("IndexSecundario");

    setMenu(Parametros[IndexPrincipal]?.ParametrosInternos[IndexSecundario]);
  }, []);

  return (
    <>
      {ShowModalDetalle && (
        <ModalDetalle
          infoParams={infoParams}
          setShowModalDetalle={setShowModalDetalle}
        />
      )}

      <div className="border border-gray-300 rounded-lg shadow-md  mx-auto items-center flex flex-col place-content-center mb-4 sm:w-1/2 lg:px-6   lg:h-24 lg:w-1/3">
        <h1 className="uppercase sm:text-sm lg:font-extrabold :lg:text-xl text-sky-800">
          Parámetro {infoParams?.infoParametros?.Id}
          {console.log("p2", infoParams)}
        </h1>
        <h3 className="sm:text-sm lg:text-xl lg:fotn-semibold text-sky-800 ">
          Detalle del Parámetro
        </h3>
        <button>
          <svg
            onClick={() => {
              setShowModalDetalle(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-cyan-900 text-sky-900 hover:stroke-lime-600 hover:text-lime-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default DetallesParametro;
