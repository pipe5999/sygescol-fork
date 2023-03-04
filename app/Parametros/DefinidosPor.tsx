import React from "react";
type Props = {
  Titulo: string;
};
export default function DefinidosPor({ Titulo }: Props) {
  return (
    <>
      {/* <div className="container mx-auto w-1/2 text-center mb-4"> */}
      <h1 className="text-center capitalize font-bold text-cyan-900 animate-bounce text-xl my-4">
        {Titulo}
      </h1>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 container mx-auto text-center capitalize font-bold text-cyan-900 animate-bounce text-xl mb-4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </span>
      {/* </div> */}
    </>
  );
}
