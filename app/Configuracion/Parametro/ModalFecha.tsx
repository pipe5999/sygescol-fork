const ModalFecha = ({ setShowModalFecha }: any) => {
  return (
    <div className=" fixed inset-0 z-50  bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="sm:max-h-[50%] sm:w-full lg:max-h-screen p-3   ">
        <div className="rounded-lg border border-gray-400 shadow-md m-5 ">
          <table className=" table-auto rounded-lg p-4">
            <thead className="bg-gray-50">
              <tr className="bg-cyan-700 border-4 border-gray-200 ">
                <th className="px-4 py-2 border text-gray-100 uppercase">
                  Periodo
                </th>
                <th className="px-4 py-2 border text-gray-100 uppercase">
                  Inicio y Cierre Ingreso Calificaciones
                </th>
                <th className="px-4 py-2 border text-gray-100 uppercase">
                  Porcentaje Perido
                </th>
                <th className="px-4 py-2 border text-gray-100 uppercase">
                  Inicio y Cierre Ingreso Recupueraciones
                </th>
                <th className="px-4 py-2 border text-gray-100 uppercase">
                  Fecha Entrega Boletines
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-200  border-gray-100 hover:bg-violet-300">
              <tr className="bg-white border-4 border-gray-200 hover:bg-gray-50">
                <td className="px-16 py-2 border  text-gray-700 font-semibold text-center">
                  Periodo Uno
                </td>
                <td className="px-16 py-2 border  text-gray-700 font-semibold text-center"></td>
                <td className="px-16 py-2 border  text-gray-700 font-semibold text-center"></td>
                <td className="px-16 py-2 border  text-gray-700 font-semibold text-center"></td>
                <td className="px-16 py-2 border  text-gray-700 font-semibold text-center"></td>
              </tr>
            </tbody>
          </table>

          <div className="flex items-center justify-center py-1 bg-gray-200">
            <button
              onClick={(e) => {
                e.preventDefault;
                setShowModalFecha(false);
              }}
              className=" w28 rounded-full bg-cyan-900 p-2 px-4 text-white hover:bg-red-600 "
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFecha;
