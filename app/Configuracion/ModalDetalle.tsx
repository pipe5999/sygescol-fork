import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ModalDetalle = ({
  infoParams,
  setShowModalDetalle,
  ShowModalDetalle,
}: any) => {
  console.log("infoParams", infoParams);
  const handleOpen = () => setShowModalDetalle(!ShowModalDetalle);

  const [open, setOpen] = useState(false);

  return (
    <div></div>

    // <div className=" fixed inset-0 z-50  bg-black bg-opacity-50 flex justify-center items-center">
    //   <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen p-3 lg:w-1/2  ">
    //     <div className="rounded-lg border border-gray-400 shadow-md m-5">
    //       <div className="flex justify-center flex-col   bg-gray-100 border-solid rounded-md text-md font-bold   px-4 py-1  ">
    //         <div className="flex justify-end bg-cyan-800 rounded-t-md p-4">
    //           <svg
    //             onClick={(e) => {
    //               e.preventDefault();
    //               setShowModalDetalle(false);
    //             }}
    //             stroke="currentColor"
    //             fill="currentColor"
    //             strokeWidth={0}
    //             viewBox="0 0 512 512"
    //             height="1.5em"
    //             width="1.5em"
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="stroke-gray-50 text-gray-50 hover:stroke-red-900 hover:text-red-800"
    //           >
    //             <title className="">Cerrar Detalles del Parámetro </title>
    //             <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
    //           </svg>
    //         </div>
    //         <div className="bg-cyan-800 rounded-b-md mb-2 text-gray-100 font-bold p-2">
    //           <div
    //             dangerouslySetInnerHTML={{
    //               __html: `${infoParams?.infoParametros?.TipoParam || ""}`,
    //             }}
    //             className="sm:text-sm  lg:fond-bold lg:text-lg text-center uppercase"
    //           ></div>
    //         </div>
    //
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ModalDetalle;
