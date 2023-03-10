import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Parametros } from "../../utils/Parametros";
import ModalDetalle from "./ModalDetalle";

const DetallesParametro = ({ infoParams }: any) => {
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
      {ShowModalDetalle && <ModalDetalle infoParams={infoParams} />}

      <div>
        <h1 className="uppercase font-extrabold text-xl">{Menu.title}</h1>
        <h3 className="text-xl fotn-semibold ">Detalle del Parámetro</h3>
        <button>
          <svg
            onClick={() => {
              setShowModalDetalle(true);
            }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11.5 9a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default DetallesParametro;
