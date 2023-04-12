export const getDataParametro = async (
  idparametro: number,
  idColegio: number
) => {
  const res = await fetch(
    `/api/Configuracion/Parametros/${idparametro}?colegio=${idColegio}`
  ).then((res) => res.json());

  return res;
};
export const getInforParametro = async (
  idparametro: number,
  idColegio: number
) => {
  const res = await fetch(
    `/api/Configuracion/GetInfo?parametro=${idparametro}&colegio=${idColegio}`
  ).then((res) => res.json());
  return res;
};
