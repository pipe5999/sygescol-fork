import React from "react";

type Props = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  ParametroCliked: any;
};

export default function ShowModal({ setVisible, ParametroCliked }: Props) {
  console.log("ParametroCliked", ParametroCliked);

  return (
    <>
      <div
        onClick={() => {
          setVisible(false);
        }}
        className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center"
      >
        <div className="overflow-auto max-h-screen p-3">
          <div className="rounded-lg border border-gray-400 shadow-md m-5">
            <div className="flex justify-center  text-gray-300  bg-cyan-900 border-solid rounded-md text-md font-bold   px-4 py-1">
              <h1 className="fond-bold text-lg text-center ">
                {ParametroCliked.Title}
              </h1>
            </div>
            <table className="min-w-full table-auto rounded-lg ">
              <thead className="bg-gray-50">
                <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                  <th className="px-4 py-2 border">
                    <span className="text-gray-700 uppercase">Id</span>
                  </th>
                  <th className="px-4 py-2 border">
                    <span className="text-gray-700 uppercase">
                      Tipo Parámetro
                    </span>
                  </th>
                  <th className="px-4 py-2">
                    <span className="text-gray-700 uppercase">operaciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
                {ParametroCliked?.Interno?.map((item: any) => {
                  if (item?.idParametro) {
                    return (
                      <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                        <td className="px-16 py-2 border">
                          <span className="text-center text-gray-700 font-semibold">
                            {item.idParametro}
                          </span>
                        </td>
                        <td className="px-16 py-2 border">
                          <span className="text-center text-gray-700 font-semibold">
                            {item.tipoParametro}
                          </span>
                        </td>
                        <td className="px-16 py-2 text-gray-700">
                          {" "}
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            className="items-center"
                            viewBox="0 0 24 24"
                            height="2.0em"
                            width="2.0em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="stroke-black hover:stroke-green-500"
                              fill="none"
                              stroke-width="2"
                              d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"
                            ></path>
                          </svg>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
            <div className="flex items-center justify-center py-1 bg-gray-200">
              <button
                onAuxClick={() => {
                  setVisible(false);
                }}
                className=" w28 rounded-full bg-cyan-900 p-2 px-4 text-white hover:bg-red-600 "
              >
                {" "}
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
