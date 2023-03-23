"use client";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { title } from "process";

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
      text: "boton 1",
      variant: "gradient",
      title: "Titulo uno",
      content: " Contenido uno",
    },
    {
      text: "boton 2",
      variant: "gradient",
      title: "Titulo dos",
      content: " Contenido dos",
    },
  ];

  return (
    <>
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
            className={index === 0 ? "mr-1" : ""}
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
          <DialogFooter>
            {[
              {
                text: "Cancel",
                variant: "text",
                color: "red",
              },
              {
                text: "Confirm",
                variant: "gradient",
                color: "green",
              },
            ].map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                color={button.color}
                onClick={handleOpen}
                className={index === 0 ? "mr-1" : ""}
              >
                <span>{button.text}</span>
              </Button>
            ))}
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
};

export default BodyComponent;
