import React from "react";

type Props = {
  setVisible: any;
  title: string;
};

function ItemParametro({ setVisible, title }: Props) {
  return (
    <>
      <div className="group relative mx-auto w-64 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-600 hover:to-green-500">
        <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
        <div className="relative rounded-[15px] items-center bg-white hover:bg-[#f45757] hover:text-white p-6">
          <div className="space-y-4 flex flex-col items-center  text-cyan-900 hover:text-white  ">
            <h3 className="text-center font-semibold">{title}</h3>
            <button className="text-4xl  text-center items-center font-semibold text-cyan-800 hover:text-white">
              <svg
                onClick={() => {
                  setVisible(true);
                }}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                className="items-center"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-black hover:stroke-white"
                  fill="none"
                  stroke-width="2"
                  d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemParametro;
