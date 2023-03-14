"use client";
import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
// import Image from "next/image";

import React from "react";
export type Props = {
  data: any;
};
const Cabecera = ({ data }: Props) => {
  const style: any = {
    marginDocument: {
      border: "2px solid black",
      height: "96%",
      width: "90%",
      margin: "auto",
      display: "block",
    },

    marginHeader: {
      border: "2px solid black",
      width: "96%",
      height: "18%",
      marginTop: "2%",
      marginLeft: "2%",
      display: "flex",
    },
    containerHeader: {
      display: "grid",
      justifyItems: "center",
      margin: "auto",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    grid: {
      display: "grid",
      "grid-template-columns": "1fr 1fr",
      "grid-template-rows": "1fr 1fr 1fr",
      gap: "0px 0px",
      height: "100%",
      padding: "2%",
      // border: "1px solid black",
    },
    ImageClass: {
      "grid-area": " 1 / 1 / 4 / 2",
      width: "100px",
      height: "100px",
      border: "1px solid black",
    },
    Colegio: {
      "grid-area": "1 / 2 / 2 / 3",
      fontWeight: "bold",
      fontSize: "15px",
      border: "1px solid black",
    },
  };
  return (
    <Document>
      <Page size={"LEGAL"} style={{ padding: "1rem" }}>
        <View style={style.marginDocument}>
          <View style={style.marginHeader}>
            <View style={style.grid}>
              <Image src="/Escudos/escudo.jpg" style={style.ImageClass} />
              <Text style={style.Colegio}>{data?.nombreInst}</Text>
              {/* <div class="Image"></div>
  <div class="Colegio"></div>
  <div class="Resolucion"></div>
  <div class="Nit-Dane"></div> */}
            </View>
            {/* <
            <View style={style.containerHeader}>
              
              <Text style={{ fontSize: "12px" } as any}>
                {data?.resolucionSem}
              </Text>
              <Text style={{ fontSize: "12px", width: "57%" }}>
                Nit:
                {data?.nit}
                Dane: {data?.dane}
              </Text>
            </View> */}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Cabecera;
