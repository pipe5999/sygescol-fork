import React, { useState } from "react";

export default function CardsPreguntas({ children, titulo, parrafo }: any) {
  const [ShowPreguntas, setShowPreguntas] = useState(false);

  return (
    <div className="">
      <div className="w-full md:w-72 justify-center items-center bg-gray-50  border-gray-300 shadow-lg rounded-lg flex flex-col ">
        <div className="w-full flex items-center justify-center bg-sky-900 p-4 rounded-t-lg rounded-b-lg border-dotted border-2 border-white ">
          <div
            onClick={() => {
              setShowPreguntas(!ShowPreguntas);
            }}
            className="flex flex-col  items-center"
          >
            <svg
              className="fill-white"
              viewBox="0 0 448 512"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path>
            </svg>
            <h3 className="text-center w-60 font-bold mt-2 text-white  ">
              {titulo}
            </h3>
          </div>
        </div>
        {ShowPreguntas && (
          <div>
            <div className="w-full p-4 justify-start grid ">
              <div>
                <p className="max-w-72 p-2">{parrafo}</p>
              </div>
            </div>
            <div className="max-w-72 p-2">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// <svg
// className="cursor-pointer fill-teal-900"
// stroke="currentColor"
// fill=""
// strokeWidth={0}
// viewBox="0 0 24 24"
// aria-hidden="true"
// height="1.5em"
// width="2em"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   fillRule="evenodd"
//   d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
//   clipRule="evenodd"
// />
// </svg>
