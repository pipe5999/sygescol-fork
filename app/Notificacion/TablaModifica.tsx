import React from "react";

const tableData = [
  {
    preescolar: "Sin Asignacion",
    primaria: "Sin Asignacion",
    secundaria:
      "6-01, 6-02, 6-03, 7-01, 7-02, 7-03, 7-04, 8-01, 8-02, 8-03, 6-01, 6-02, 6-03, 7-01, 7-02, 7-03, 7-04, 8-01, 8-02, 8-03,",
    media: "11-01",
    estado: "Aprobado",
  },
];

const tableRows = tableData.map((data, index) => (
  <tr key={index} className="bg-blue-500 border-b border-blue-400">
    <th scope="row" className="px-6 py-4 text-white">
      {data.preescolar}
    </th>
    <td className="px-6 py-4 text-white font-semibold">{data.primaria}</td>
    <td className="px-6 py-4 text-white font-semibold">{data.secundaria}</td>
    <td className="px-6 py-4 text-white font-semibold">{data.media}</td>

    <td className="px-6 py-4 text-black">
      <input
        className=" p-1 rounded-full border-solid border-2 border-indigo-600"
        type="datetime-local"
        name="datetime"
      />
    </td>

    <td className="px-6 py-4 text-black">
      <input
        className="p-1 rounded-full border-solid border-2 border-indigo-600"
        type="datetime-local"
        name="datetime"
      />
    </td>

    <td className="px-6 py-4 text-white font-semibold">{data.estado}</td>
  </tr>
));

const TablaModifica = () => {
  return (
    <>
      <div className="relative font-bold m-3 overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Preescolar
              </th>
              <th scope="col" className="px-6 py-3">
                Basica Primaria
              </th>
              <th scope="col" className="px-6 py-3">
                Basica Secundaria
              </th>
              <th scope="col" className="px-6 py-3">
                Media
              </th>

              <th scope="col" className="px-6 py-3">
                Solicitud de Permiso desde
              </th>
              <th scope="col" className="px-6 py-3">
                Solicitud de Permiso hasta
              </th>
              <th scope="col" className="px-6 py-3">
                Estado Solicitud
              </th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default TablaModifica;
