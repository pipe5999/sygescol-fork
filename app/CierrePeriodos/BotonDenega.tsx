import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";

const BotonDenega = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!open);
  const [size, setSize] = useState(null);
  const handleOpen = (value: any) => setSize(value);

  return (
    <>
      <Fragment>
        {/* <Button onClick={handleOpen} variant="gradient">
          ver
        </Button> */}
        <Button onClick={() => handleOpen("lg")} variant="gradient">
          ver
        </Button>
        <Dialog
          className="overflow-y-scroll h-auto"
          // open={open}
          open={size === "lg"}
          size={size || "lg"}
          handler={handleOpen}
        >
          <DialogHeader>Causa de la Devolución</DialogHeader>

          <DialogBody divider>
            <div className="    flex flex-col w-auto gap-6">
              <Textarea label="causa de la devolución..." Message />
              {/* <Textarea label="Textarea Success" success /> */}
            </div>
          </DialogBody>

          <DialogFooter>
            {/* <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button> */}
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Enviar Novedad</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
};

export default BotonDenega;
