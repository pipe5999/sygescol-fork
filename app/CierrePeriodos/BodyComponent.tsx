"use client";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Tabla from "./Tabla";
import BotonPermiso from "./BotonPermiso";

type Component = {
  text: string;
  variant: string;
  title: string;
  content: string;
};

const BodyComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [showInfo, setShowInfo] = useState({} as Component);
  console.log(showInfo);

  const buttons = [
    {
      text: "Grupo 6-01",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 6-01 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "Grupo 6-02",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 6-02 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "Grupo 6-03",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 6-03 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },

    {
      text: "Grupo 7-01",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-01 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.tro",
    },
    {
      text: "Grupo 7-02",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-02 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.co",
    },
    {
      text: "Grupo 7-03",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-03 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "Grupo 7-04",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-04 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "Grupo 8-01",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 8-01 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "Grupo 8-02",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 8-02 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "Grupo 8-03",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 8-03 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
  ];

  return (
    <>
      <div className="mx-16">
        <Fragment>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              onClick={(e: any) => {
                e.preventDefault();
                setOpen(true);
                setShowInfo({
                  ...button,
                });
              }}
              className={`mt-5 ${index !== buttons.length - 1 ? "mr-5" : ""}`}
            >
              <span>{button.text}</span>
            </Button>
          ))}
          <Dialog
            open={open}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>{showInfo?.title || ""}</DialogHeader>
            <DialogBody divider>{showInfo?.content || ""}</DialogBody>
            <Tabla />
            <DialogFooter>
              {[
                // {
                //   text: "Cancel",
                //   variant: "text",
                //   color: "red",
                // },
                {
                  text: "Guardar",
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
