"use client";
import React, { useEffect, useState } from "react";
import { Parametros } from "../../utils/Parametros";
import CardsPreguntas from "./CardsPreguntas";
import DefinidosPor from "./DefinidosPor";
import DetallesParametro from "./DetallesParametro";
import Header from "./Header";
import ItemParametro from "./ItemParametro";
import Parametro1 from "./ParametroUno152";
import ShowModal from "./ShowModal";

function BodyComponent() {
  const [visibelModal, setVisible] = useState(false as any);
  const [ModalDetalle, setModalDetalle] = useState(false as any);

  const [ParametroCliked, setParametroCliked] = useState({} as {});
  const [Menu, setMenu] = useState([] as any);
  useEffect(() => {
    setMenu(Parametros);
  });
  function ParametrosGlobales() {
    return (
      <div>
        {Menu?.map((item: any, key: number) => {
          return (
            <div className="container mx-auto">
              <DefinidosPor key={key} Titulo={item.Principal} />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 drop-shadow-lg px-8">
                {item?.ParametrosInternos?.map(
                  (ParametrosInterno: any, key: number) => {
                    return (
                      <div
                        onClick={() => {
                          setVisible(true);
                          setParametroCliked({
                            Title: ParametrosInterno.subTitle,
                            Interno: ParametrosInterno.interno,
                            Principal: item.Principal,
                          });
                          // setMenu(item.ParametrosInternos);
                        }}
                      >
                        <ItemParametro
                          setVisible={setVisible}
                          key={key}
                          title={ParametrosInterno.title}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      {visibelModal && (
        <>
          <ShowModal
            setVisible={setVisible}
            ParametroCliked={ParametroCliked}
          />
        </>
      )}
      <Header />
      {/* <DefinidosPor /> */}
      {/* <ItemParametro setVisible={setVisible} /> */}
      {ParametrosGlobales()}
      <div
        onClick={() => {
          setModalDetalle(true);
        }}
      >
        {/* {<Parametro1 setModalDetalle={setModalDetalle} />} */}
        {/* {<DetallesParametro setModalDetalle={setModalDetalle} />} */}
      </div>
      {/* <CardsPreguntas /> */}
    </>
  );
}

export default BodyComponent;
