"use client";
import { Dialog } from "@material-tailwind/react";
import { DialogFooter } from "@material-tailwind/react";
import { DialogBody } from "@material-tailwind/react";
import { DialogHeader } from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";
import React, { Fragment, useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import Select from "react-select";

export default function Par297() {
  const [data, setData] = React.useState({} as any);
  const [ModalParam, setModalParam] = useState(false);
  const [SelectedModulos, setSelectedModulos] = useState<[]>([]);
  const [EleccionModulos, setEleccionModulos] = useState(false);

  console.log(data);
  const handleOpen = () => setModalParam(!ModalParam);

  const SelectModulos = [
    {
      value: "1",
      label: "Habilitarlo durante el proceso de Inscripción del estudiante",
    },
    {
      value: "2",
      label:
        "Dejarlo abierto para el acudiente lo diligencie durante la vigencia del presente calendario escolar.",
    },
    {
      value: "3",
      label:
        "Habilitar en otro proceso donde el acudiente interactúe con el sistema.",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(297, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Habilitación del Formulario SIMPADE"
          parrafo="Habilitar los módulos con los cuales la Institución podrá sistematizar el formulario SIMPADE y sus correspondientes estadísticas."
        >
          <div className="flex justify-center items-center">
            <Fragment>
              <Button onClick={handleOpen}>Abrir Selección</Button>
              <Dialog open={ModalParam} handler={handleOpen}>
                <DialogHeader className="text-center text-cyan-700">
                  Habilitación del Formulario SIMPADE
                </DialogHeader>
                <DialogBody divider>
                  <div className="flex flex-col items-center">
                    <p className="text-center text-cyan-500 font-bold">
                      Módulos con los cuales la Institución podrá sistematizar
                      el formulario SIMPADE y sus correspondientes estadísticas.
                    </p>
                    <Select
                      isMulti
                      options={SelectModulos}
                      onChange={(e: any) => {
                        setSelectedModulos(e);
                        e.value == "3"
                          ? setEleccionModulos(true)
                          : setEleccionModulos(false);
                      }}
                      placeholder="Seleccione"
                      className="w-80"
                    />
                    {EleccionModulos && (
                      <div className=" text-center p-4 flex flex-col">
                        <label>Cúal</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="h-8 rounded-md shadow-lg ring-1 ring-gray-200"
                        />
                      </div>
                    )}
                  </div>
                </DialogBody>
                <DialogFooter className="flex justify-center">
                  <Button color="red" onClick={handleOpen}>
                    Cerrar
                  </Button>
                </DialogFooter>
              </Dialog>
            </Fragment>
          </div>
        </CardsPreguntas>
      </div>
    </div>
  );
}
