import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import TablaModifica from "./TablaModifica";

const BotonModifica = () => {
  const [size, setSize] = useState(null);
  const handleOpen = (value: any) => setSize(value);

  return (
    <>
      <Fragment>
        <Button onClick={() => handleOpen("xl")} variant="gradient">
          ver
        </Button>
        {/* <Dialog open={open} handler={handleOpen}> */}
        <Dialog
          open={size === "xl"}
          className="overflow-y-scroll h-96"
          size={size || "xl"}
          handler={handleOpen}
        >
          <DialogHeader>Señor Profesor John Delgado.</DialogHeader>
          <DialogBody divider>
            Durante el cierre del 2 periodo académico, se han detectado
            pendientes de registro en los módulos asignados a su rol. Por favor,
            verifique los detalles a continuación y solicite un permiso
            individual a su Coordinador Académico para acceder nuevamente a los
            módulos afectados.
          </DialogBody>
          <TablaModifica />
          <DialogFooter>
            {/* <Button
              variant="text"
              color="green"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Enviar</span>
            </Button> */}
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Enviar Solicitud</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
};

export default BotonModifica;
