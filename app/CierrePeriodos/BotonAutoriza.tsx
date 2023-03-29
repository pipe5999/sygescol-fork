import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";

const BotonAutoriza = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {!show && (
        <Button
          variant="gradient"
          className="table-fixed"
          onClick={() => setShow(true)}
        >
          SI
        </Button>
      )}
      <Alert
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 10 },
        }}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        La Información ha sido enviada con éxito
      </Alert>
    </Fragment>
  );
};

export default BotonAutoriza;
