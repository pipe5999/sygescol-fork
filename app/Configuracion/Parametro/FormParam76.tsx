import React, { Fragment, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { DialogFooter } from "@material-tailwind/react";
import { DialogBody } from "@material-tailwind/react";
import { DialogHeader } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import ReactSelect from "react-select";
import { YesOrNot, TipoInasistencia } from "../../../utils/OptionsParams";
import WysWyget from "./WysWyget";

export default function FormParam76({
  title,
  abbr,
  setSelectedLltcControl,
  SelectedLltcControl,
  setSelectedLltcTipoI,
  SelectedLltcTipoI,
  setSelectedLltcObservador,
  SelectedLltcObservador,
  setSelectedLltcCorreo,
  SelectedLltcCorreo,
  setSelectedLltcSms,
  SelectedLltcSms,
  setTextObservador,
  TextObservador,
  TextoMensaje,
  setTextoMensaje,
}: any) {
  const [ModalParam, setModalParam] = useState(false);

  const handleOpen = () => {
    setModalParam(!ModalParam);
  };
  const handleChangeControl = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLltcControl(event.target.value);
  };
  const handleChangeTipoI = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLltcTipoI(event.target.value);
  };
  const handleChangeObservador = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLltcObservador(event.target.value);
  };
  const handleChangeCorreo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLltcCorreo(event.target.value);
  };
  const handleChangeSms = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLltcSms(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-light-blue-800 underline">{title}</h1>
        <h2 className="text-center text-cyan-900">{abbr}</h2>
        <Fragment>
          <Button onClick={handleOpen} color="cyan" variant="text">
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
            <DialogBody divider className="overflow-y-auto h-96">
              <div className="flex justify-center flex-col items-center ">
                <p className=" uppercase font-bold text-light-blue-600">
                  {title}
                </p>
                <p className=" uppercase font-bold text-light-blue-600">
                  {abbr}
                </p>
                <p>Control de reincidencia</p>
                <ReactSelect
                  onChange={(e) => {
                    setSelectedLltcControl({
                      ...SelectedLltcControl,
                      ValueParam76: e?.value,
                    });
                  }}
                  options={YesOrNot}
                  placeholder="Aplica"
                />
                <br />
                <p>Tipos De Inasistencia</p>
                <ReactSelect
                  onChange={(e) => {
                    setSelectedLltcTipoI({
                      ...SelectedLltcTipoI,
                      ValueParamTipoI: e?.value,
                    });
                  }}
                  options={TipoInasistencia}
                  placeholder="Seleccione"
                />
                <br />
                <p>Enviar al observador</p>
                <ReactSelect
                  onChange={(e) => {
                    setSelectedLltcObservador({
                      ...SelectedLltcObservador,
                      ValueParamObservador: e?.value,
                    });
                  }}
                  options={YesOrNot}
                  placeholder="Seleccione"
                />
                <br />
                <p>Enviar Correo Electrónico</p>
                <ReactSelect
                  onChange={(e) => {
                    setSelectedLltcCorreo({
                      ...SelectedLltcCorreo,
                      ValueParamCorreo: e?.value,
                    });
                  }}
                  options={YesOrNot}
                  placeholder="Seleccione"
                />
                <br />
                <p>Enviar SMS</p>
                <ReactSelect
                  onChange={(e) => {
                    setSelectedLltcSms({
                      ...SelectedLltcSms,
                      ValueParamSms: e?.value,
                    });
                  }}
                  options={YesOrNot}
                  placeholder="Seleccione"
                />
                <br />
                <p>Texto Por Defecto en el observador</p>
                <WysWyget
                  TextObservador={TextObservador.lltc}
                  setTextObservador={setTextObservador}
                  VaribableEdit="lltc"
                  TextBase={TextObservador}
                />
                <br />
                <p>Texto Por Defecto en el Correo Electrónico</p>
                <WysWyget
                  TextObservador={TextObservador}
                  setTextObservador={setTextObservador}
                  TextoMensaje={TextoMensaje}
                  setTextoMensaje={setTextoMensaje}
                  VaribableEdit="llti,lltc"
                  TextBase={TextObservador}
                />
              </div>
            </DialogBody>
            <DialogFooter className="flex justify-center">
              <Button variant="text" onClick={handleOpen} color="red">
                Cerrar
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
      </div>
    </div>
  );
}
