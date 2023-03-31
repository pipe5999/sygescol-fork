"use client";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cabecera from "./Estructura/Cabecera";
import Comportamiento from "./Estructura/Comportamiento";
import Dimension from "./Estructura/Dimension";
import Firmas from "./Estructura/Firmas";
import PersonalInfo from "./Estructura/PersonalInfo";

function BodyComponent() {
  const [data, setData] = useState(null as any);
  const [dataInfo, setInfo] = useState(null as any);
  const [firma, setFirma] = useState(null as any);

  const GetInfoBase = () => {
    setData(JSON.parse(localStorage?.datosColegio || {}));
    setFirma(JSON.parse(localStorage?.datosUsu)?.firma);
  };
  const GetDataStudents = async () => {
    axios
      .get(
        `/api/PDF/Boletines/Preescolar/GetStudents?c=${
          localStorage.colegio
        }&g=${JSON.parse(localStorage?.Grupo)?.grupo_id}`
      )
      .then((res) => {
        if (res.status == 200) {
          // alert("Información consultada con exito");
          setInfo(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Existe un error al consultar la información");
      });
  };
  useEffect(() => {
    GetInfoBase();
    GetDataStudents();
  }, []);
  return (
    <>
      {/* {data && <Cabecera data={data} />} */}
      {(data && dataInfo && (
        <PDFViewer style={{ width: "100%", height: "100Vh" }}>
          <Document>
            {dataInfo?.estudiante.map((inf: any, key: number) => {
              return (
                <Page size={"A4"} key={key}>
                  <View
                    style={
                      {
                        border: "2px solid black",
                        height: "96%",
                        width: "90%",
                        margin: "auto",
                        display: "block",
                      } as any
                    }
                  >
                    <Cabecera data={data} />
                    <PersonalInfo data={inf} grup={dataInfo?.grupo} />
                    <Dimension dimensiones={dataInfo?.cga} data={inf} />
                    {/* <Comportamiento data={inf} /> */}
                    <Firmas firma={firma} />
                  </View>
                </Page>
              );
            })}
          </Document>
        </PDFViewer>
      )) ||
        "Cargando Información del Grupo"}
    </>
  );
}

export default BodyComponent;
