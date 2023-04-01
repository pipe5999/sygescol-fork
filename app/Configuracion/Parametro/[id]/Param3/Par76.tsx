"use client";
import { Dialog } from "@material-tailwind/react";
import { DialogFooter } from "@material-tailwind/react";
import { DialogBody } from "@material-tailwind/react";
import { DialogHeader } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import React, { Fragment, useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import FormParam76 from "../../FormParam76";

export default function Par76() {
  const [data, setData] = React.useState({} as any);
  const [ModalParam, setModalParam] = useState(false);

  console.log(data);

  const handleOpen = () => {
    setModalParam(!ModalParam);
  };

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(76, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Tipos de Inasistencia. 1"
          parrafo="Defina las variables de cada tipo de inasistencia"
        >
          <div className="flex justify-center">
            <FormParam76 title="Llegadas Tarde la Intitucion" abbr="LLTC" />
            {/* <Fragment>
              <Button onClick={handleOpen} color="cyan" variant="gradient">
                Abrir Tabla
              </Button>
              <Dialog
                open={ModalParam}
                handler={handleOpen}
                className="overflow-auto"
              >
                <DialogHeader className="flex justify-center">
                  <div className="  text-cyan-800 font-bold p-2">
                    <div className="sm:text-sm  lg:fond-bold lg:text-lg text-center uppercase">
                      Tipos de Inasistencia
                    </div>
                  </div>
                </DialogHeader>
                <DialogBody divider>
                  <div className="flex justify-center flex-col items-center">
                    <p>Llegadas Tarde</p>
                    <p>LLTC</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-cyan-600 hover:stroke-light-green-500"
                    >
                      <title>Abrir Selección</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </div>
                </DialogBody>
                <DialogFooter className="flex justify-center">
                  <Button variant="text" onClick={handleOpen} color="red">
                    Cerrar
                  </Button>
                </DialogFooter>
              </Dialog>
            </Fragment> */}
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
