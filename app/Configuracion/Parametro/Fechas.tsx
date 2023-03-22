import { useState } from "react";
import "react-date-range/dist/styles.css"; // Importar estilos CSS
import "react-date-range/dist/theme/default.css"; // Importar tema por defecto
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";

type DataRange = {
  strarDate: Date;
  endDate: Date;
};

export default function Fechas() {
  const [FechaInciocalificacion, setFechaInciocalificacion] = useState(
    new Date()
  );

  const [FechaFinal, setFechaFinal] = useState(new Date());

  const selectionRange = {
    startDate: FechaInciocalificacion,
    endDate: FechaFinal,
    key: "selection",
  };

  function handleSelect(ranges: any) {
    setFechaInciocalificacion(ranges.selection.startDate);
    setFechaFinal(ranges.selection.endDate);
  }

  return (
    <DateRange
      ranges={[selectionRange]}
      // minDate={new Date()}
      rangeColors={["#3b82f6"]}
      onChange={handleSelect}
      locale={es}
    />
  );
}
