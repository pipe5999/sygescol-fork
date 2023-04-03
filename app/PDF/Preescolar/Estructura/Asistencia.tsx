"use client";
import { Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  data: any;
};
function Asistencia({ data }: Props) {
  const style: any = {
    table: {
      display: "table" as any,
      width: "auto",
      heigth: "25%",
      borderStyle: "solid",
      borderWidth: 0,
      margin: "1%",
      marginTop: -4,
    },
    tableRow: {
      flexDirection: "row",
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
      fontWeight: "bold",
      marginLeft: -1,
    },
  };
  return (
    <>
      <View style={style.table}>
        <View style={style.tableRow}>
          <Text style={style.tableCellTitle}>Fallas</Text>
          <Text style={style.tableCell}>{data?.asistencia?.length || 0}</Text>
        </View>
      </View>
    </>
  );
}

export default Asistencia;
