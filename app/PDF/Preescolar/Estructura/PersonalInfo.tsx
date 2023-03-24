import { Document, Image, Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  data: any;
  grup: any;
};
const PersonalInfo = ({ data, grup }: Props) => {
  const style: any = {
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
      marginBottom: "1%",
    },
    foto: {
      width: "20%",
      border: 1,
      margin: "auto",
      height: 120,
      marginBottom: "1%",
    },
  };
  return (
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
            {/* PRIMERA FILA */}
            <View style={style.tableRow}>
              <View
                style={{
                  border: 1,
                  width: 80,
                  marginLeft: 30,
                  padding: 1,
                  backgroundColor: "#e7f1fe",
                }}
              >
                <Text
                  style={
                    (style.tableCell,
                    {
                      fontSize: 10,
                      fontWeight: "bold",
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
                  backgroundColor: "#e7f1fe",
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
                  backgroundColor: "#e7f1fe",
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
                  backgroundColor: "#e7f1fe",
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
            {/* SEGUNDA FILA */}
            <View style={style.tableRow}>
              <View
                style={{
                  border: 1,
                  width: 80,
                  marginLeft: 30,
                  marginTop: -1,
                  padding: 1,
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
                  {data.documento}
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 200,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
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
                  {data.nombre.toUpperCase()}
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 45,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
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
                  1
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 55,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
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
                  {grup.grupo}
                </Text>
              </View>
            </View>
            {/* TERCERA FILA */}
            <View style={style.tableRow}>
              <View
                style={{
                  border: 1,
                  width: 80,
                  marginLeft: 30,
                  marginTop: -1,
                  padding: 1,
                  backgroundColor: "#e7f1fe",
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
                  Jornada
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 40,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
                  backgroundColor: "#e7f1fe",
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
                  Año
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 50,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
                  backgroundColor: "#e7f1fe",
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
                  Matrícula
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 210,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
                  backgroundColor: "#e7f1fe",
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
                  Sede
                </Text>
              </View>
            </View>
            {/* CUARTA FILA */}
            <View style={style.tableRow}>
              <View
                style={{
                  border: 1,
                  width: 80,
                  marginLeft: 30,
                  marginTop: -1,
                  padding: 1,
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
                  {grup.jornada}
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 40,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
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
                  2023
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 50,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
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
                  {data.matricula}
                </Text>
              </View>
              <View
                style={{
                  border: 1,
                  width: 210,
                  marginLeft: -1,
                  marginTop: -1,
                  padding: 1,
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
                  {grup.sede}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;
