"use client";
import React, { useEffect, useState } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Par255() {
  const [data, setData] = React.useState({} as any);
  const [newText, setNewText] = React.useState("" as string);
  const [ModalParam1, setModalParam1] = useState(false);
  console.log("aprender", data);
  const handleOpen = () => setModalParam1(!ModalParam1);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(255, 2);
      // let regex = /#ff0000/g;
      // let nuevoTexto = resultado.infoParams.infoParametros?.TipoParamreplace(
      //   regex,
      //   "#FFFFFF"
      // );
      setData(resultado);
      // setNewText(nuevoTexto);
    };
    GetInfo();
  }, []);

  return (
    <div>
      <HeaderParam infoParams={data} newText={newText} />

      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Tabla para el registro de matrícula para estudiantes de Aceleración del Aprendizaje."
          parrafo="Tabla para los rangos de edad de preferencia, con los cuales se determina si un estudiante se encuentra en extraedad."
        >
          <div className="flex justify-center">
            <Fragment>
              <Button onClick={handleOpen} variant="gradient">
                Abrir Tabla
              </Button>
              <Dialog
                open={ModalParam1}
                handler={handleOpen}
                className="overflow-y-auto  h-full"
              >
                <DialogHeader>
                  <h1 className="text-center text-cyan-700">
                    Definición de Edades límete para el Cambio de Grados a
                    Ciclos.
                  </h1>
                </DialogHeader>
                <DialogBody divider>
                  <div className="flex justify-center overflow-auto">
                    <table className=" table-auto rounded-lg p-4 ">
                      <thead className="bg-gray-50">
                        <tr className="bg-cyan-900 border-4 border-gray-200 ">
                          <th className="px-4 py-2 border text-gray-100 uppercase text-center">
                            Edad
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Grado
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase w-72">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase ">
                            Primero
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Segundo
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Tercero
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Cuarto
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Quinto
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Sexto
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Séptimo
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Octavo
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Noveno
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Décimo
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <input
                              type="number"
                              placeholder="Ingrese La Edad en Años"
                              className="w-full"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            Úndecimo
                          </td>
                        </tr>
                      </tbody>
                    </table>{" "}
                  </div>
                </DialogBody>
                <DialogFooter className="flex justify-center">
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cerrar</span>
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
