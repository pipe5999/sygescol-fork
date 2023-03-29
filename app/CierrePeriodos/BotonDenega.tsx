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
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Fragment>
        <Button onClick={handleOpen} variant="gradient">
          ver
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Causa de la Devolución</DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col w-100 gap-6">
              <Textarea
                label="Redacte aquí por favor la causa de la devolución..."
                error
              />
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
              <span>Enviar</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
};

export default BotonDenega;
