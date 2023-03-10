import React, { useEffect, useState } from "react";
import { Parametros } from "../../utils/Parametros";

type Props = {
  ModalDetalle: any;
  setModalDetalle: any;
};

export default function DetallesParametro({
  setModalDetalle,
  ModalDetalle,
}: Props) {
  const [Menu, setMenu] = useState([] as any);
  useEffect(() => {
    setMenu(Parametros);
  });
  console.log("xd", Menu);

  return (
    <div>
      <div>
        {Menu.map((item: any, key: any) => {
          return (
            <div>
              {item?.ParametrosInternos.map(
                (ParametrosInternos: any, key: any) => {
                  return (
                    <div key={key}>
                      <h1 className="uppercase font-extrabold text-xl">
                        {ParametrosInternos.title}
                      </h1>
                      <h3 className="text-xl fotn-semibold ">
                        Detalle del Parámetro
                      </h3>
                      <button>
                        <svg
                          onClick={() => {
                            setModalDetalle(true);
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
                  );
                }
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
