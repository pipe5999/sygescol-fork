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
      height: "12%",
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
    table: {
      display: "table" as any,
      width: "auto",
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      margin: "1%",
    },
    table2: {
      display: "table" as any,
      width: "auto",
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      margin: "1%",
    },
    tableRow: {
      // margin: "auto",
      flexDirection: "row",
    },
    tableColImage: {
      width: "10%",
      height: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableColText: {
      width: "90%",
      margin: "auto",
      borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: {
      margin: "auto",
      marginTop: 5,
      fontSize: 10,
      padding: "3%",
      fontWeight: "bold",
    },
    containerFoto: {
      width: "20%",
      height: 120,
      border: 1,
      marginLeft: "2%",
      marginTop: "3%",
    },
    foto: {
      width: 105,
      border: 1,
      margin: "auto",
      height: 120,
    },
  };
  return (
    <View style={style.marginHeader}>
      <View style={style.table}>
        <View style={style.tableRow}>
          <View style={style.tableColImage}>
            <View style={style.tableCell}>
              <Image
                src={`/Escudos/escudo${localStorage?.colegio}.jpg`}
                style={{ width: 100, height: 100 }}
              />
            </View>
          </View>
          <View style={style.tableColText}>
            <Text
              style={
                (style.tableCell,
                {
                  fontSize: 20,
                  marginLeft: 60,
                  fontWeight: 700,
                  textAlign: "center",
                })
              }
            >
              {data?.nombreInst}
            </Text>
            <Text
              style={
                (style.tableCell,
                {
                  fontSize: 16,
                  marginLeft: 80,
                  fontWeight: 700,
                })
              }
            >
              {data?.resolucionSem}
            </Text>
            <Text
              style={
                (style.tableCell,
                {
                  fontSize: 15,
                  marginLeft: 110,
                  fontWeight: 700,
                })
              }
            >
              Nit:
              {data?.nit} Dane: {data?.dane}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cabecera;
