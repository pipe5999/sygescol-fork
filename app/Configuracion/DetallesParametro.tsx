import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Parametros } from "../../utils/Parametros";

const DetallesParametro = ({ infoParams }: any) => {
  console.log("infoParamsdfsdf", infoParams);

  const searchParams = useSearchParams();
  const [Menu, setMenu] = useState({} as any);
  const [ShowModalDetalle, setShowModalDetalle] = useState(false);
  const handleOpen = () => {
    setShowModalDetalle(!ShowModalDetalle);
  };

  useEffect(() => {
    const IndexPrincipal: any = searchParams.get("IndexPrincipal");
    const IndexSecundario: any = searchParams.get("IndexSecundario");

    setMenu(Parametros[IndexPrincipal]?.ParametrosInternos[IndexSecundario]);
  }, []);

  return (
    <>
      <div className="border border-gray-300 rounded-lg shadow-md  mx-auto items-center flex flex-col place-content-center mb-4 sm:w-1/2 lg:px-6   lg:h-24 lg:w-1/3">
        <div
          dangerouslySetInnerHTML={{
            __html: `${infoParams?.infoParametros?.Id}`,
          }}
          className="uppercase sm:text-sm lg:font-extrabold :lg:text-xl text-sky-800"
        ></div>
        <h3 className="sm:text-sm lg:text-xl lg:fotn-semibold text-sky-800 ">
          Detalle del Parámetro
        </h3>

        <Fragment>
          <Button onClick={handleOpen} variant="text" color="cyan">
            Abrir Detalle
          </Button>
          <Dialog
            open={ShowModalDetalle}
            handler={handleOpen}
            className="overflow-auto"
          >
            <DialogHeader>
              <div className="bg-cyan-800  text-gray-100 font-bold p-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${infoParams?.infoParametros?.TipoParam || ""}`,
                  }}
                  className="sm:text-sm  lg:fond-bold lg:text-lg text-center uppercase"
                ></div>
              </div>
            </DialogHeader>
            <DialogBody divider className="overflow-y-scroll h-40">
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${infoParams?.infoParametros?.Description || ""}`,
                  }}
                  className="text-justify place-self-center px-6 font-semibold  text-gray-700 overflow-y-auto "
                ></div>
              </div>{" "}
            </DialogBody>
            <DialogFooter className="flex justify-center">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                Cerrar
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
      </div>
    </>
  );
};

export default DetallesParametro;
