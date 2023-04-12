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
import { Input } from "@material-tailwind/react";

export default function Par241() {
  const [data, setData] = React.useState({} as any);
  const [ModalParam1, setModalParam1] = useState(false);
  const [SelectedParam241, setSelectedParam241] = useState({});
  console.log("chanchito Feliz", SelectedParam241);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedParam241({
      ...SelectedParam241,
      [e.target.name]: e.target.value,
    });
  };
  console.log(SelectedParam241);

  const handlerOpen = () => setModalParam1(!ModalParam1);

  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(241, 2);
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
          titulo="Edades establecidas para los cambios de modalidad de Tradicional a Ciclos."
          parrafo="La Institución Educativa define la edad que debe tener el estudiante, para efectuar un cambio de modalidad."
        >
          <div className="flex justify-center">
            <Fragment>
              <Button onClick={handlerOpen} variant="text" color="cyan">
                Abrir
              </Button>
              <Dialog open={ModalParam1} handler={handlerOpen}>
                <DialogHeader className="flex justify-center">
                  {" "}
                  <h1 className="uppercase font-extrabold text-center text-cyan-700">
                    Según el Decreto <strong>3011</strong>{" "}
                  </h1>
                </DialogHeader>
                <DialogBody divider>
                  <div className="flex justify-center items-center ">
                    <table className=" table-auto rounded-lg p-4 ">
                      <thead className="bg-gray-50">
                        <tr className="bg-cyan-900 border-4 border-gray-200 ">
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Edad Requerida
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Grado Origen
                          </th>
                          <th className="px-4 py-2 border text-gray-100 uppercase">
                            Ciclo Destino
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChange}
                              type="number"
                              label=" Edad en Años"
                              name="EdadCiclosI"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            1°, 2° o 3° De Primaria{" "}
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            CICLO I
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChange}
                              type="number"
                              label=" Edad en Años"
                              name="EdadCiclosII"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            4° o 5° De Primaria{" "}
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            CICLO II
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChange}
                              type="number"
                              label=" Edad en Años"
                              name="EdadAnosCicloIII"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            6° o 7° De secundaria{" "}
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            CICLO III
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChange}
                              type="number"
                              label=" Edad en Años"
                              name="EdadCicloIV"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            8° o 9° De secundaria{" "}
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            CICLO IV
                          </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            <Input
                              onChange={handlerChange}
                              type="number"
                              label=" Edad en Años"
                              name="EdadCicloV"
                            />
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            De 10° u 11° media{" "}
                          </td>
                          <td className="px-4 py-2 border text-gray-700 uppercase">
                            CICLO V
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </DialogBody>
                <DialogFooter className="flex justify-center">
                  <Button onClick={handlerOpen} color="red" variant="text">
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
