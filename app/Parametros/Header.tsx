import React from "react";

function Header({}) {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/Parametros/barraParametros.jpg')" }}
        className="w-auto items-center flex flex-col lg:flex-row place-content-evenly mb-4 pt-6 px-4"
      >
        <div className="hidden lg:block mx-8 my-8 ">
          <img
            style={{ filter: "drop-shadow(0px 0px 6px white)" }}
            className="w-32 h-auto object-contain"
            src="Parametros/LogoSYGESCOL2022-02.png"
          />
        </div>
        <div className="mb-4 ">
          <h1 className=" text-center flex justify-center items-center text-white  font-extrabold xs:text-md md:text-xl lg:text-4xl">
            {" "}
            PARAMETRIZACIÓN{" "}
          </h1>
          <h3 className="text-white text-font-bold text-center md:text-xl lg:text-2xl">
            ! Dinos cómo deseas que SYGESCOl ONLINE trabaje para ti ¡
          </h3>
        </div>
        <div className="mx-8  my-8 content-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-auto text-white container mx-auto "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="text-white text-center font-semibold text-xs">
            Nombre
          </h3>
          <p className="text-white text-center font-semibold text-xs">Cargo</p>
        </div>
      </div>
    </>
  );
}

export default Header;
