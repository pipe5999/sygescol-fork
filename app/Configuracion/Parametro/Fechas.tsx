import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // Importar estilos CSS
import "react-date-range/dist/theme/default.css"; // Importar tema por defecto
type DataRange = {
  strarDate: Date;
  endDate: Date;
};

export default function Fechas() {
  const [FechaInciocalificacion, setFechaInciocalificacion] = useState("");
  const [FechaFinal, setFechaFinal] = useState("");
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  function handleSelect(ranges) {
    console.log("Rango", ranges.selection);
  }

  return <Calendar ranges={[selectionRange]} onChange={handleSelect} />;
}
