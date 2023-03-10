const getDataParametro = async (idparametro: number, idColegio: number) => {
  const res = await fetch(
    `/api/Configuracion/Parametros/${idparametro}?colegio=${idColegio}`
  ).then((res) => res.json());

  return res;
};

export default getDataParametro;
