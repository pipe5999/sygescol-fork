"use client";
import { Fragment, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Tabla from "./Tabla";
import BotonPermiso from "./BotonPermiso";
import axios from "axios";

const BodyComponent = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!open);
  const [showInfo, setShowInfo] = useState({} as any);
  const [size, setSize] = useState(null);
  const [data, setData] = useState({} as any);
  const handleOpen = (value: any) => setSize(value);
  const getDataPendiente = async () => {
    axios
      .post(`/api/CierrePeriodo/ConsultaAdmin`, {
        colegio: localStorage.colegio,
      })
      .then((res: any) => {
        if (res.status == 200) {
          setData(res.data);
        }
      })
      .catch((error: any) => {
        alert("Existe un error al consultar la información");
        console.log(error);
      });
  };
  useEffect(() => {
    getDataPendiente();
  }, []);

  return (
    <>
      <div className="mx-16">
        <Fragment>
          {data?.pendiente?.map((button: any, index: any) => (
            <Button
              key={index}
              variant={"gradient"}
              onClick={(e: any) => {
                e.preventDefault();
                handleOpen("xl");
                setOpen(true);
                setShowInfo({
                  ...button,
                });
              }}
              className={`mt-5 ${
                index !== data?.pendiente?.length - 1 ? "mr-5" : ""
              }`}
            >
              <span>{button.nombre}</span>
            </Button>
          ))}
          <Dialog
            // open={open}
            className="overflow-y-scroll h-96"
            open={size === "xl"}
            size={size || "xl"}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>
              Pdts. Cierre Grupo {showInfo?.nombre || ""} en el periodo{" "}
              {showInfo?.Periodo}
            </DialogHeader>
            <DialogBody divider>
              Este proceso revisa las planillas de los docentes, buscando
              registros sin calificar para asignarles una calificación según los
              parámetros establecidos.
            </DialogBody>
            <Tabla data={showInfo?.Pendiente} />
            <DialogFooter>
              {[
                {
                  text: "Cerrar",
                  variant: "gradient",
                  color: "green",
                },
              ].map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  color={button.color}
                  onClick={handleOpen}
                  className={index === 0 ? "mr-3" : ""}
                >
                  <span>{button.text}</span>
                </Button>
              ))}
            </DialogFooter>
          </Dialog>
        </Fragment>
        <div className="mt-10 text-center">
          <BotonPermiso />
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
