"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactSelect from "react-select";
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
      {/* component */}
      <section className="flex lg:flex-row w-full h-full items-center">
        <div className="hidden lg:block">
          <Image
            style={{ filter: "blur(0.6rem)" }}
            src="/fondoLogin.jpg"
            width={1200}
            height={800}
            alt="fondoLogin"
          />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">
              Bienvenido a <br />
              <b>
                <span className="text-blue-600">Sygescol Online</span>
              </b>
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Usuario</label>
                <input
                  onChange={(e: any) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  type="text"
                  name="usuario"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Contraseña</label>
                <input
                  onChange={(e: any) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  name="pass"
                  type="password"
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                />
              </div>
              {/* <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div> */}
              <hr className="my-6 border-gray-300 w-full" />
              <div>
                <ReactSelect
                  onChange={(e: any) =>
                    setData({ ...data, ["Colegio"]: e.value })
                  }
                  options={colegios}
                  placeholder="Seleccione su Institución"
                />
              </div>
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
                onClick={(e: any) => {
                  e.preventDefault();
                  getDatos();
                }}
              >
                Iniciar Sesión
              </button>
            </form>
            {/* <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4">Log in with Google</span>
              </div>
            </button> */}
            {/* <p className="mt-8">
              Need an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
