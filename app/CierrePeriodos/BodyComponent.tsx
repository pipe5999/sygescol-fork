"use client";
import { Fragment, useEffect, useState } from "react";
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

  const handleOpen = (value: any) => setSize(value);
  const [InfoUser, setInfoUser] = useState([] as any);

  // const buttons = [
  //   {
  //     text: "Grupo 6-01",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 6-01 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  //   {
  //     text: "Grupo 6-02",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 6-02 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  //   {
  //     text: "Grupo 6-03",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 6-03 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },

  //   {
  //     text: "Grupo 7-01",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 7-01 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.tro",
  //   },
  //   {
  //     text: "Grupo 7-02",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 7-02 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.co",
  //   },
  //   {
  //     text: "Grupo 7-03",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 7-03 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  //   {
  //     text: "Grupo 7-04",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 7-04 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  //   {
  //     text: "Grupo 8-01",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 8-01 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  //   {
  //     text: "Grupo 8-02",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 8-02 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  //   {
  //     text: "Grupo 8-03",
  //     variant: "gradient",
  //     title: "Pdts. Cierre Grupo 8-03 periodo 2",
  //     content:
  //       " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
  //   },
  // ];

  const GetData = async (IdDocente: any, Col: any) => {
    const Data = await fetch(
      `/api/CierrePeriodo/InfoCierre?IdDocente=${IdDocente}&colegio=${Col}`
    ).then((res) => res.json());

    setInfoUser(Data?.body);
  };
  useEffect(() => {
    const DatosUser = JSON.parse(localStorage?.datosUsu || "{}");

    const Colegio: any = localStorage?.colegio;
    if (DatosUser?.Id) {
      GetData(DatosUser?.Id, Colegio);
    }
  }, []);

  return (
    <>
      <div className="mx-16">
        <Fragment>
          {InfoUser?.map((TipoPendiente: any, index: any) => (
            <Button
              key={index}
              variant="gradient"
              onClick={(e: any) => {
                e.preventDefault();
                handleOpen("xl");
                setOpen(true);
                setShowInfo({
                  ...TipoPendiente,
                });
              }}
              className={`mt-5 
             
              `}
            >
              <span>{TipoPendiente.TipoPendiente}</span>
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
