"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuItem from "./CompMenu/MenuItem";

type Props = {
  children: any;
};

const Header = ({ children }: Props) => {
  const [dataHeader, setHeader] = useState({} as any);
  const setDatos = () => {
    setHeader(JSON.parse(localStorage?.datosUsu || {}));
  };
  useEffect(() => {
    setDatos();
  }, []);
  return (
    <div className="flex flex-row justify-end">
      <div className="fixed top-0 left-0 w-[15%] md:w-[18%] lg:w-[20%] border-r-white border-r-2 bg-blue-900 h-screen flex flex-col items-center p-3">
        <div className="gap-2 w-full p-2 bg-blue-600 rounded-lg lg:flex lg:flex-row flex-col items-center justify-center">
          <div
            // style={{ textAlign: "-webkit-center" }}
            className="lg:w-[50%] m-auto"
          >
            <Image
              style={{ filter: "drop-shadow(0px 0px 6px white)" }}
              width={80}
              height={80}
              src="/Menu/IconoUser.png"
              alt=""
            />
          </div>
          <div className="hidden md:block w-full lg:flex lg:flex-col items-center text-center mt-2">
            <h1 className="font-bold text-white text-xs lg:text-[1rem] uppercase leading-none">
              {dataHeader[0]?.nombre}
            </h1>
            <hr className="w-full border-white border-dashed border-[2px] rounded-full my-2" />
            <p className="text-base p-0 font-normal leading-none m-0 text-white">
              Docente
            </p>
          </div>
        </div>
        <div className="w-full scrollbar-hide overflow-x-hidden">
          <div className="mt-4 flex flex-col gap-1">
            <h1 className="hidden md:block lg:text-base font-bold text-white uppercase">
              Principal
            </h1>
            <MenuItem
              link="/"
              icono={
                <svg
                  className="h-5 w-5 !fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z" />
                </svg>
              }
              submenu="Inicio"
            />
            {/* <MenuItem
              link="/Descriptores/BancoProcesos"
              icono={
                <svg
                  className="h-5 w-5 !fill-white"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 2h13l.5.5V9h-1V6H2v7h7v1H1.5l-.5-.5v-11l.5-.5zM2 5h12V3H2v2zm5 7v-1.094a1.633 1.633 0 0 1-.469-.265l-.945.539-.5-.86.937-.547a1.57 1.57 0 0 1 0-.547l-.937-.546.5-.86.945.54c.151-.12.308-.209.469-.266V7h1v1.094a1.48 1.48 0 0 1 .469.265l.945-.539.5.86-.937.547a1.57 1.57 0 0 1 0 .546l.937.547-.5.86-.945-.54a1.807 1.807 0 0 1-.469.266V12H7zm-.25-2.5c0 .208.073.385.219.531a.723.723 0 0 0 .531.219.723.723 0 0 0 .531-.219.723.723 0 0 0 .219-.531.723.723 0 0 0-.219-.531.723.723 0 0 0-.531-.219.723.723 0 0 0-.531.219.723.723 0 0 0-.219.531zm5.334 5.5v-1.094a1.634 1.634 0 0 1-.469-.265l-.945.539-.5-.86.938-.547a1.572 1.572 0 0 1 0-.547l-.938-.546.5-.86.945.54c.151-.12.308-.209.47-.266V10h1v1.094a1.486 1.486 0 0 1 .468.265l.945-.539.5.86-.937.547a1.562 1.562 0 0 1 0 .546l.937.547-.5.86-.945-.54a1.806 1.806 0 0 1-.469.266V15h-1zm-.25-2.5c0 .208.073.385.219.531a.723.723 0 0 0 .531.219.723.723 0 0 0 .531-.219.723.723 0 0 0 .22-.531.723.723 0 0 0-.22-.531.723.723 0 0 0-.53-.219.723.723 0 0 0-.532.219.723.723 0 0 0-.219.531z"
                  ></path>
                </svg>
              }
              submenu="Banco de Procesos"
            /> */}
            <MenuItem
              link="/Descriptores"
              icono={
                <svg
                  className="h-5 w-5 !fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM16 4h4v4h-4zM11 17.86V20h2.1l5.98-5.97-2.12-2.12zM14 12.03V10h-4v4h2.03zM20.85 11.56l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z"></path>
                </svg>
              }
              submenu="Registro Descriptores"
            />
            <MenuItem
              link="/Descriptores/Planilla"
              icono={
                <svg
                  className="h-5 w-5 !fill-white"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
                </svg>
              }
              submenu="Planilla Descriptores"
            />
            <MenuItem
              link=""
              icono={
                <svg
                  className="h-5 w-5 !fill-white"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path>
                </svg>
              }
              submenu="Cerrar Sesión"
            />
          </div>
        </div>
      </div>

      {/* Contenido lado derecho */}
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default Header;
