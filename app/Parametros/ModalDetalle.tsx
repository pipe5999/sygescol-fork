const ModalDetalle = ({ infoParams }: any) => {
  console.log("infoParams", infoParams);

  return (
    <div className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className=" max-h-screen p-3 bg">
        <div className="rounded-lg border border-gray-400 shadow-md m-5">
          <div className="flex justify-center flex-col    bg-gray-300 border-solid rounded-md text-md font-bold   px-4 py-1">
            <h1 className="fond-bold text-lg text-center ">
              {infoParams?.infoParametros?.TipoParam || "aja"}
            </h1>
            <p className="text-justify place-self-center px-8  ">
              {infoParams?.infoParametros?.Description || "Hola"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalle;
