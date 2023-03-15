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
    <Document>
      <Page size={"LEGAL"} style={{ padding: "1rem" }}>
        <View style={style.marginDocument}>
          <View style={style.marginHeader}>
            <View style={style.table}>
              <View style={style.tableRow}>
                <View style={style.tableColImage}>
                  <View style={style.tableCell}>
                    <Image
                      src="/Escudos/escudo.jpg"
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
          <View style={style.table}>
            <View style={style.tableRow}>
              <View style={style.containerFoto}>
                <View>
                  <Image src="/no_imagen.jpg" />
                </View>
              </View>
              <View style={style.tableColText}>
                <Text
                  style={
                    (style.tableCell,
                    {
                      fontSize: 15,
                      marginLeft: 60,
                      fontWeight: 700,
                    })
                  }
                >
                  DESARROLLO DEL PROCESO PEDAGÓGICO
                </Text>
                <View style={(style.table2, { marginTop: "3%" })}>
                  <View style={style.tableRow}>
                    <View
                      style={{
                        border: 1,
                        width: 60,
                        marginLeft: 40,
                        padding: 1,
                        backgroundColor: "#EBEBEB",
                      }}
                    >
                      <Text
                        style={
                          (style.tableCell,
                          {
                            fontSize: 10,
                            fontWeight: 700,
                            margin: "auto",
                          })
                        }
                      >
                        Documento
                      </Text>
                    </View>
                    <View
                      style={{
                        border: 1,
                        width: 200,
                        marginLeft: -1,
                        padding: 1,
                        backgroundColor: "#EBEBEB",
                      }}
                    >
                      <Text
                        style={
                          (style.tableCell,
                          {
                            fontSize: 10,
                            fontWeight: 700,
                            margin: "auto",
                          })
                        }
                      >
                        Nombres y Apellidos
                      </Text>
                    </View>
                    <View
                      style={{
                        border: 1,
                        width: 45,
                        marginLeft: -1,
                        padding: 1,
                        backgroundColor: "#EBEBEB",
                      }}
                    >
                      <Text
                        style={
                          (style.tableCell,
                          {
                            fontSize: 10,
                            fontWeight: 700,
                            margin: "auto",
                          })
                        }
                      >
                        Periodo
                      </Text>
                    </View>
                    <View
                      style={{
                        border: 1,
                        width: 55,
                        marginLeft: -1,
                        padding: 1,
                        backgroundColor: "#EBEBEB",
                      }}
                    >
                      <Text
                        style={
                          (style.tableCell,
                          {
                            fontSize: 10,
                            fontWeight: 700,
                            margin: "auto",
                          })
                        }
                      >
                        Grupo
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Cabecera;
