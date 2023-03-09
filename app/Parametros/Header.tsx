import React from "react";

function Header({}) {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/Parametros/barraParametros.jpg')" }}
        className="w-full items-center flex flex-col lg:flex-row place-content-center mb-4  px-6"
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
          <img
            style={{ filter: "drop-shadow(0px 0px 6px white)" }}
            className="w-32 h-auto object-contain"
            src="Parametros/logoSistemasIvhorsnet.png"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
