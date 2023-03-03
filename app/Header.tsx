import Image from "next/image";
import React from "react";

type Props = {
  children: any;
};

const Header = ({ children }: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-[16%] border-r-white border-r-2 bg-blue-900 h-screen flex flex-col items-center pb-2">
        <div className="w-full p-4">
          <div className="flex gap-2 flex-col lg:flex-row items-center">
            <div className="lg:w-full">
              <Image
                style={{ filter: "drop-shadow(0px 0px 6px white)" }}
                width={100}
                height={100}
                src="/Menu/IconoUser.png"
                alt=""
              />
            </div>
            <>
              <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-white text-base uppercase leading-none">
                  Miguel Angel Olarte Hernandez
                </h1>
                <hr className="w-full border-white border-dotted border-[2px] rounded-full my-2" />
                <p className="p-0 font-normal leading-none m-0 text-white">
                  Administrador del Sistema
                </p>
              </div>
            </>
          </div>
          <div className="mt-4">
            <h1 className="pl-3 text-md font-medium text-white uppercase">
              Principal
            </h1>
            <div className="bg-blue-200/10 text-white rounded flex items-center gap-2 transition-all duration-200">
              <svg
                className="h-5 w-5 !fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z" />
              </svg>
              <h1 className="uppercase">Inicio</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[84%]">{children}</div>
    </div>
  );
};

export default Header;
