const YesOrNot = [
  {
    value: "S",
    label: "Si",
  },
  {
    value: "N",
    label: "No",
  },
];

const EstadoAcdemico = [
  {
    value: "aprobado",
    label: "Aprobado",
  },
  {
    value: "promovido",
    label: "Promovido",
  },
  {
    value: "PrimeraNivelacion",
    label: "Va a Primera Nivelación",
  },
  {
    value: "SegundaNivelación",
    label: "Va a Segunda Nivelación",
  },
  {
    value: "NoPromovido",
    label: "No Promovido",
  },
  {
    value: "reprobado",
    label: "Reprobado",
  },
];

const Niveles = [
  {
    value: "1",
    label: "Preescolar",
  },
  {
    value: "2",
    label: "Básica Primaria",
  },
  {
    value: "3",
    label: "Básica Secundaria",
  },
  {
    value: "4",
    label: "Media Décimo",
  },
  {
    value: "5",
    labe: "Media Once",
  },
  {
    value: "6",
    label: "Ciclos Básica Primaria",
  },
  {
    value: "7",
    label: "Ciclos Básica Secundaria",
  },
  {
    value: "8",
    label: "Ciclos de la Media",
  },
];
const Reincidencia = [
  {
    value: "Continua",
    label: "Continua",
  },
  {
    value: "Aleatoria",
    label: "Aleatoria",
  },
];
const TipoInasistencia = [
  {
    value: "1",
    label: "Anecdotario",
  },
  {
    value: "2",
    label: "Injustificada",
  },
  {
    value: "3",
    label: "Justificada",
  },
];

// const ColorTituloPreguntas = () => {
//   const random: any = () => Math.floor(Math.random() * 3);
//   const numero: number = random;
//   const Colors = ["blue", "sky", "cyan"];
//   console.log("randomrandom", random);

//   return numero;
// };

export { YesOrNot, EstadoAcdemico, Niveles, Reincidencia, TipoInasistencia };
