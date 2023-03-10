"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactSelect from "react-select";
import WelcomeLogin from "./CompLogin/WelcomeLogin";
export type Props = {
  set: any;
};
function Login({ set }: Props) {
  const [data, setData] = useState({} as any);
  const colegios = [
    { label: "Seleccione", value: 0 },
    { label: "I.E.T. Sagrada Familia", value: 1 },
    { label: "Escuela Superior Normal de Ibagué", value: 2 },
    { label: "I.E. Niño Jesús de Praga", value: 3 },
    { label: "I.E.T Celmira Huertas", value: 4 },
    { label: "I.E. Leonidas Rubio Villegas", value: 5 },
    { label: "I.E.T. Joaquín París", value: 6 },
    { label: "I.E.T Francisco de Miranda", value: 7 },
  ];
  const getDatos = async () => {
    await fetch(
      `/api/Login?colegio=${data.Colegio}&usuario=${data.usuario}&pass=${data.pass}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res?.body && res?.body.includes("incorrecta")) {
          alert(res?.body);
          return false;
        }
        localStorage.setItem("datosColegio", JSON.stringify(res.colegio));
        localStorage.setItem("datosUsu", JSON.stringify(res.datosUsu));
        localStorage.setItem("Dimesiones", JSON.stringify(res.dimesion));
        localStorage.setItem("Grupo", JSON.stringify(res.Grupo));
        localStorage.setItem("colegio", data.Colegio || "");
        set(res.datosUsu);
      });
  };
  return (
    <>
      <div className="flex lg:flex-row w-full h-screen">
        {/* Bienvenido Sygescol */}
        <div className="hidden w-[70%] lg:flex flex-row lg:flex-col">
          <WelcomeLogin />
        </div>
        {/*---------------*/}

        {/* Inicio de Seccion */}
        <div className="w-96 lg:w-[30%] mx-auto bg-white flex flex-col justify-center p-6">
          {/* onda en Celular */}
          <h1 className="opacity-60 text-center text-blue-900 font-bold text-2xl uppercase mb-3">
            Inicio de Sesión
          </h1>
          <h1 className="block lg:hidden text-xl font-bold text-center mb-4">
            Bienvenido a <br />
            <b className="text-blue-600">Sygescol Online</b>
          </h1>
          <div>
            <ReactSelect
              onChange={(e: any) => setData({ ...data, ["Colegio"]: e.value })}
              options={colegios}
              placeholder="Seleccione su Institución"
            />
          </div>
          <form className="mt-6" action="#" method="POST">
            <label className="block text-gray-700">Usuario</label>
            <input
              onChange={(e: any) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              type="text"
              name="usuario"
              className="border-2 border-gray-300 w-full p-3 rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none"
            />
            <label className="mt-3 block text-gray-700">Contraseña</label>
            <input
              onChange={(e: any) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              name="pass"
              type="password"
              placeholder="Enter Password"
              minLength={6}
              className="border-2 border-gray-300 w-full p-3 rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full block bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              onClick={(e: any) => {
                e.preventDefault();
                getDatos();
              }}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .waves::before,
        .waves::after {
          content: "";
          position: absolute;
          width: 300vw;
          height: 300vw;
          top: -65vw;
          left: 50%;
          transform: translate(-50%, -75%);
        }

        .waves::before {
          border-radius: 44%;
          background: #183283;
          animation: waves 8s linear infinite;
        }

        .waves::after {
          border-radius: 44%;
          background: #0e215c;
          animation: waves 15s linear infinite;
        }

        @keyframes waves {
          0% {
            transform: translate(-50%, -75%) rotate(0deg);
          }

          100% {
            transform: translate(-50%, -75%) rotate(360deg);
          }

          .hide {
            display: none;
            transition: visibility 15s, opacity 0.5s linear;
          }

          .myDIV:hover + .hide {
            display: block;
            color: white;
          }

          .enter-right {
            transition: opacity 0.5 ease-out, transform 0.5s ease-out;
          }
        }
      `}</style>
    </>
  );
}

export default Login;
