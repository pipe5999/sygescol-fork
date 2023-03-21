"use client";
import React, { useEffect, useState } from "react";
import { TiPlus } from "react-icons/ti";
import ReactSelect from "react-select";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../utils/CustomStylesTables";
import axios from "axios";

export type Props = {
  cga: number;
  escala: number;
  colegio: any;
  setShow: any;
  setCont: any;
  contador1: any;
};
function BodyComponent({
  cga,
  escala,
  colegio,
  setShow,
  setCont,
  contador1,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([{}] as any);
  const [values, setValues] = useState({} as any);
  const [contador, setContador] = useState(0);
  const getData = async () => {
    axios
      .get(
        `/api/ProcesosEvaluacion/Banco/BaseInfo?c=${colegio}&cg=${cga}&e=${escala}`
      )
      .then((res: any) => {
        setData(res.data?.banco);
      });
  };
  useEffect(() => {
    getData();
  }, [contador]);
  let desempeño = [
    {
      value: 1,
      label: "Superior",
    },
    {
      value: 2,
      label: "Alto",
    },
    {
      value: 3,
      label: "Básico",
    },
    {
      value: 4,
      label: "Bajo",
    },
  ];

  const columns: any = [
    {
      name: "Desempeño Nacional",
      selector: (row: any) => (
        <div className="text-justify text-lg">
          {desempeño[parseInt(row.escala) - 1]?.label || ""}
        </div>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Proceso",
      selector: (row: any) => (
        <div className="text-justify text-lg">{row.texto || ""}</div>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Operaciones",
      selector: (row: any) => (
        <>
          <div className="flex justify-center w-full">
            <button
              className="p-2 text-white text-lg rounded-md bg-blue-700 font-bold"
              title="Seleccionar"
              onClick={() => handleAsign(row.id)}
            >
              Seleccionar Proceso
            </button>
          </div>
        </>
      ),
    },
  ];
  const handleSave = async () => {
    if (!values?.escala) {
      alert(
        "Debe seleccionar la Escala Nacional a la cual desea asociar el proceso"
      );
      return false;
    }
    if (!values?.texto) {
      alert("Debe ingresar el texto del proceso");
      return false;
    }
    axios
      .get(
        `/api/ProcesosEvaluacion/Banco/Save?colegio=${localStorage.colegio}&cga=${cga}&escala=${values.escala}&texto=${values.texto}`
      )
      .then((res: any) => {
        alert(res.data?.body);
        setContador(contador + 1);
        setShowModal(false);
      });
  };
  const handleAsign = async (id: any) => {
    axios
      .get(
        `/api/ProcesosEvaluacion/Asignar?cga=${cga}&escala=${escala}&colegio=${colegio}&id=${id}`
      )
      .then((res: any) => {
        setCont(contador1 + 1);
        setShow(false);
      });
  };
  function handleClick() {
    setShowModal(true);
  }
  // console.log("showModal=========", showModal);

  return (
    <>
      <div className="bg-black/50 overflow-auto  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto   w-11/12 md:w-4/5 max-w-full  ">
          <div className="relative   py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 ">
            <div className="container mx-auto text-center px-4 mb-4">
              <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-800 text-white rounded-lg">
                Banco de Procesos para los Descriptores
                <button
                  onClick={handleClick}
                  className="flex gap-1 flex-row items-center lg:text-xl border-blue-500 hover:bg-blue-500 hover:border-blue-600 border-2 py-2 px-4 rounded-lg"
                >
                  Agregar Proceso
                  <TiPlus className="text-[150%]" />
                </button>
              </div>

              <div className="my-4">
                <DataTable
                  title="Lista de Procesos"
                  data={data}
                  columns={columns}
                  customStyles={customStyles}
                  pagination
                  responsive
                  noDataComponent="No hay datos"
                  paginationPerPage={7}
                />
              </div>
              <div className="flex justify-center w-full">
                <button
                  className="text-white font-bold flex gap-1 flex-row items-center lg:text-xl border-blue-500 bg-blue-800 hover:border-blue-600 border-2 py-2 px-4 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault;
                    setShow(false);
                  }}
                >
                  Cerrar
                </button>
              </div>
              {/* Modal Add Proceso */}
              {showModal && (
                <div className="modal-overlay">
                  <div className="modal">
                    <h2 className="bg-blue-800 rounded-lg font-medium text-white py-1">
                      Agregar proceso
                    </h2>
                    <div className="flex flex-row items-center gap-2 my-3">
                      <p className="text-lg font-medium">Desempeño:</p>
                      <ReactSelect
                        className="w-full text-left"
                        placeholder="Seleccione un desempeño"
                        options={desempeño}
                        onChange={(e: any) => {
                          setValues({ ...values, ["escala"]: e.value });
                        }}
                      />
                    </div>
                    <div className="flex flex-row items-center gap-2 my-3">
                      <p className="text-lg font-medium">Proceso:</p>
                      <textarea
                        className="w-full border-[1px] border-gray-500 p-2 rounded-lg focus-visible:border-double focus-visible:border-[#2684FF] focus-visible:border-[0.4rem] focus-visible:outline-[#2684FF]/10"
                        name="texto"
                        id="Nombre"
                        placeholder="Ingrese un proceso"
                        onChange={(e: any) => {
                          setValues({
                            ...values,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="flex flex-row justify-center gap-4">
                      <button
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        onClick={() => handleSave()}
                      >
                        Agregar
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          padding: 1rem;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background-color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          width: 30%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .modal h2 {
          margin-top: 0;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}

export default BodyComponent;
