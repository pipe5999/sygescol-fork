"use client";
import React, { useEffect } from "react";
import getDataParametro from "../../../../../utils/GetParametro";
import CardsPreguntas from "../../../CardsPreguntas";
import DetallesParametro from "../../../DetallesParametro";
import HeaderParam from "../../../HeaderParam";
import { Fragment, useState } from "react";
import Select from "react-select";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Par281() {
  const [data, setData] = useState({} as any);
  const [ModalParam, setModalParam] = useState(false);
  const [SelectedParam1, setSelectedParam1] = useState({});
  const [SelectedParam2, setSelectedParam2] = useState({});

  const [TipoMatricula2, setTipoMatricula2] = useState(false);

  console.log("TipoMatricula2 1", TipoMatricula2);
  console.log("Chanchito 2", SelectedParam2);

  const handlerChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam1({
      ...SelectedParam1,
      [e.target.name]: e.target.value,
    });
  };
  const handlerChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedParam2({
      ...SelectedParam2,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setModalParam(!ModalParam);
  };

  console.log(data);

  const SelectPrematriculas = [
    {
      value: "1",
      label: "Visualizacion Cupos Proyectados",
    },
    {
      value: "2",
      label: "Informe del estado de cupos",
    },
    {
      value: "3",
      label: "Parametros para la encuesta de continuidad",
    },
    {
      value: "4",
      label: "Informe resultados del proceso de continuidad",
    },
    {
      value: "5",
      label: "Administracion y entrega de pines",
    },
    {
      value: "6",
      label: "Informe de inscripciones efectuadas",
    },
  ];
  const SelectTradicionales = [
    {
      value: "1",
      label: "Matrícula Parcial (requiere llenar solo 6 datos)",
    },
    {
      value: "2",
      label:
        "Matrícula Administrativa Individual (secretaria llena el formulario)",
    },
    {
      value: "3",
      label: "Matrícula Individual para estudiantes que diligenciaron el PIN",
    },
    {
      value: "4",
      label: "Matrícula con código QR (Solo para estudiantes antiguos)",
    },
    {
      value: "5",
      label: "Matricula masiva para estudiantes Promovidos año anterior",
    },
    {
      value: "6",
      label: "Matrícula masiva para encuesta de continuidad (Est. Antiguos)",
    },
    {
      value: "7",
      label: "Matrícula masiva para inscripciones efectuadas (Est. Nuevos)",
    },
  ];
  const SelectCleis = [
    {
      value: "1",
      label: "Renovación de la matrícula Ciclo V para Ciclo VI",
    },
    {
      value: "2",
      label: "Matrícula masiva para estudiantes de CLEIS Promovidos",
    },
    {
      value: "3",
      label: "Matrícula masiva para estudiantes de CLEIS Reprobadosdos",
    },
  ];
  const SelectInter = [
    {
      value: "1",
      label: "Consulta de peticiones para traslado Inter-Institucional",
    },
    {
      value: "2",
      label: "Gestión de traslado Inter-Institucional",
    },
  ];
  const SelectControles = [
    {
      value: "1",
      label: "Registro y generación de Paz y Salvos",
    },
    {
      value: "2",
      label: "Control para denegación de Cupos",
    },
    {
      value: "3",
      label: "Inclusión en los procesos de Admisión",
    },
  ];
  const SelectAdministracion = [
    {
      value: "1",
      label:
        "Módulos para la Asignacion de grupos y codificacion de estudiantes",
    },
    {
      value: "2",
      label: "Módulos para el Ordenamiento numericó en listados de estudiantes",
    },
    {
      value: "3",
      label: "Módulos para la Reasignación de grupos (Cambio de ubicación)",
    },
  ];
  const SelectProcesos = [
    {
      value: "1",
      label: "Cambios de modalidad (Tradicional a Ciclos)",
    },
    {
      value: "2",
      label: "Ajuste de matrícula por cambio de estados académicos",
    },
  ];
  useEffect(() => {
    const GetInfo = async () => {
      const resultado = await getDataParametro(281, 2);
      setData(resultado);
    };
    GetInfo();
  }, []);

  const hanlerOpenNewModal = () => {
    setTipoMatricula2(!TipoMatricula2);
  };

  return (
    <div>
      <HeaderParam infoParams={data} />
      <DetallesParametro infoParams={data} />
      <div className="flex flex-wrap gap-6 justify-center p-4 ">
        <CardsPreguntas
          titulo="Tipos de Matrícula, procesos, administración y controles. 1"
          parrafo="Módulos a los que tendrá acceso el Rol Secretaría Académica, para el registro de matrículas en el sistema, una vez establecido este parámetro."
        >
          <div className="flex justify-center">
            <>
              <Button onClick={handleOpen} color="cyan" variant="gradient">
                Abrir selección
              </Button>
              <Dialog
                open={ModalParam}
                handler={handleOpen}
                className="overflow-auto max-h-screen"
              >
                <DialogHeader className="text-center text-cyan-700">
                  Tipos de Matrícula, procesos, administración y controles
                </DialogHeader>
                <DialogBody divider className="overflow-auto h-90">
                  <div className="flex justify-center flex-col items-center overflow-auto">
                    <p className="text-center text-cyan-500 font-extrabold">
                      Prematrícula
                    </p>
                    <Select
                      options={SelectPrematriculas}
                      isMulti
                      onChange={(e: any) => {
                        setSelectedParam1({
                          ...SelectedParam1,
                          SelectedPrematriculas: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 "
                    />
                    <br />
                    <p className="text-center text-cyan-500 font-extrabold p-2">
                      Tipos de matrícula para{" "}
                      <strong>Modalidad Tradicional</strong>(preescolar a once)
                    </p>
                    <Select
                      options={SelectTradicionales}
                      isMulti
                      onChange={(e: any) => {
                        setSelectedParam1({
                          ...SelectedParam1,
                          SelectTradicionales: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 "
                    />
                    <br />
                    <p className="text-center text-cyan-500 font-extrabold p-2">
                      Tipos de matrícula parala <strong>Modalidad CLEIS</strong>{" "}
                      (Educación para Adultos)
                    </p>
                    <Select
                      options={SelectCleis}
                      isMulti
                      onChange={(e: any) => {
                        setSelectedParam1({
                          ...SelectedParam1,
                          SelectCleis: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 "
                    />
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
            </>
          </div>
        </CardsPreguntas>
        <CardsPreguntas
          titulo="Tipos de Matrícula, procesos, administración y controles. 2"
          parrafo="Módulos a los que tendrá acceso el Rol Secretaría Académica, para el registro de matrículas en el sistema, una vez establecido este parámetro."
        >
          <div className="flex justify-center">
            <Fragment>
              <Button
                onClick={() => {
                  hanlerOpenNewModal();
                }}
                color="cyan"
                variant="gradient"
              >
                Abrir Selección
              </Button>
              <Dialog
                open={TipoMatricula2}
                size={"xl"}
                handler={() => {
                  hanlerOpenNewModal();
                }}
                className="overflow-auto max-h-full "
              >
                <DialogHeader className="text-center text-cyan-700">
                  Tipos de Matrícula, procesos, administración y controles
                </DialogHeader>
                <DialogBody divider className="overflow-auto h-90">
                  <div className="flex flex-col items-center overflow-auto ">
                    <p className="text-center font-bold text-cyan-500">
                      Matrícula Inter-Institucional
                    </p>
                    <Select
                      isMulti
                      options={SelectInter}
                      onChange={(e: any) => {
                        setSelectedParam2({
                          ...SelectedParam2,
                          SelectInter: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 mb-1"
                    />

                    <p className="text-center font-bold text-cyan-500">
                      Controles de la Matrícula
                    </p>
                    <Select
                      isMulti
                      options={SelectControles}
                      onChange={(e: any) => {
                        setSelectedParam2({
                          ...SelectedParam2,
                          SelectControles: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 mb-1"
                    />

                    <p className="text-center font-bold text-cyan-500">
                      Administración de la Matrícula
                    </p>
                    <Select
                      isMulti
                      options={SelectAdministracion}
                      onChange={(e: any) => {
                        setSelectedParam2({
                          ...SelectedParam2,
                          SelectAdministracion: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 mb-1"
                    />

                    <p className="text-center font-bold text-cyan-500">
                      Procesos de Matrícula
                    </p>
                    <Select
                      isMulti
                      options={SelectProcesos}
                      onChange={(e: any) => {
                        setSelectedParam2({
                          ...SelectedParam2,
                          SelectProcesos: e,
                        });
                      }}
                      closeMenuOnSelect={false}
                      placeholder="Seleccione"
                      className="w-72 mb-1"
                    />
                  </div>
                  <br />
                </DialogBody>

                <DialogFooter className="flex justify-center">
                  <Button
                    variant="text"
                    onClick={() => {
                      hanlerOpenNewModal();
                    }}
                    color="red"
                  >
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
