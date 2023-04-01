"use client";
import { Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  data: any;
};
function Comportamiento({ data }: Props) {
  const style: any = {
    table: {
      display: "table" as any,
      width: "auto",
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      margin: "1%",
      marginTop: -11,
    },
    table2: {
      display: "table" as any,
      width: "30%",
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      marginLeft: -1,
      marginTop: 5,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableColText: {
      width: "90%",
      margin: "auto",
      borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCellTitle: {
      border: 1,
      width: "73.7%",
      marginTop: 5,
      textAlign: "center",
      fontSize: 10,
      padding: "2%",
      fontWeight: "bold",
    },
    tableCell: {
      width: "26.5%",
      border: 1,
      marginTop: 5,
      textAlign: "center",
      fontSize: 10,
      padding: "2%",
      fontWeight: "bold",
      marginLeft: -1,
    },
    tableCell2: {
      width: "100%",
      border: 1,
      marginTop: -1,
      textAlign: "left",
      fontSize: 10,
      padding: "2%",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <View style={style.table}>
        <View style={style.tableRow}>
          <Text style={style.tableCellTitle}>COMPORTAMIENTO</Text>
          <Text style={style.tableCell}>
            {data?.comportamiento?.esca_nac_nombre || ""}
          </Text>
        </View>
        <View style={style.tableRow}>
          <Text style={style.tableCell2}>
            {data?.comportamiento?.compo_observacion || ""}
          </Text>
        </View>
      </View>
    </>
  );
}

export default Comportamiento;
