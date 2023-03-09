"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HomePage() {
  const [datosColegio, setDatos] = useState({} as any);
  const GetInfoBase = () => {
    setDatos(JSON.parse(localStorage?.datosColegio || {}));
  };
  useEffect(() => {
    // GetInfoBase();
  }, []);
  const year = new Date();
  return (
    <>
      <div className="h-screen">
        <div className=" h-full container m-auto col-span-7  w-full flex-col bg-[url('/fondoWelcome.webp')] bg-cover bg-no-repeat flex items-center justify-center p-5 ">
          <div className="bg-[#070E54]/90 text-white rounded-[1rem] shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4">
            <div className="grid lg:grid-cols-3 lg:gap-4 p-4 -mx-3 items-center">
              <div
                className="col-span-3 w-full px-3 text-center hidden md:block"
                style={{ filter: "drop-shadow(0px 0px 6px #020415)" }}
              >
                <span className="text-center text-3xl font-bold">
                  {datosColegio?.nombreInst}
                </span>
              </div>
              <div className="justify-center flex">
                <Image
                  src={
                    (datosColegio?.urlColegio &&
                      `${
                        datosColegio?.urlColegio
                      }sygescol${year.getFullYear()}/images/escudo.gif`) ||
                    ""
                  }
                  alt="Escudo Col"
                  width={150}
                  height={150}
                />
              </div>
              <div className="w-full px-3">
                <div className="">
                  <h1
                    className="lg:text-[1.3rem] text-center font-bold uppercase"
                    style={{ filter: "drop-shadow(0px 0px 6px #020415)" }}
                  >
                    Bienvendo a SYGESCOL
                  </h1>
                  <h5
                    style={{ filter: "drop-shadow(0px 0px 6px #020415)" }}
                    className="uppercase text-[#c2c9ff] text-md font-medium text-center"
                  >
                    SOFTWARE DE GESTIÓN ADMINISTRATIVO ACADEMICO EN LINEA
                  </h5>
                </div>
              </div>
              <div className="justify-center flex">
                <Image
                  src={
                    (datosColegio?.urlColegio &&
                      `${
                        datosColegio?.urlColegio
                      }sygescol${year.getFullYear()}/images/ivhorsnet.gif`) ||
                    ""
                  }
                  alt="Escudo Col"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
