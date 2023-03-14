"use client";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera";

function BodyComponent() {
  const [data, setData] = useState(null as any);
  const GetInfoBase = () => {
    setData(JSON.parse(localStorage?.datosColegio || {}));
  };
  useEffect(() => {
    GetInfoBase();
  }, []);
  const style: any = {
    marginDocument: {
      border: "2px solid black",
      height: "95%",
      width: "90%",
      margin: "auto",
      display: "block",
    },
    imageContainer: {
      margin: "auto",
      display: "flex",
      gap: "5%",
      marginLeft: "2%",
      marginTop: "2%",
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
    student: {
      height: "20Vh",
      display: "grid",
      justifyContent: "center",
      alignContent: "center",
      border: "1px solid black",
      width: "12%",
    },
    parent: {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
      gridColumnGap: "0px",
      gridRowGap: "0px",
      border: "1px solid black",
    },
    div1: {
      gridArea: "1 / 1 / 2 / 3",
      fontWeight: "bold",
      border: "1px solid black",
      padding: "2%",
      backgroundColor: "#dcdcdc",
    },
    div2: {
      gridArea: "1 / 3 / 2 / 6",
      fontWeight: "bold",
      border: "1px solid black",
      backgroundColor: "#dcdcdc",
      padding: "2%",
    },
    div3: {
      gridArea: "1 / 6 / 2 / 7",
      fontWeight: "bold",
      border: "1px solid black",
      backgroundColor: "#dcdcdc",
      padding: "2%",
    },
    div4: {
      gridArea: "1 / 7 / 2 / 9",
      fontWeight: "bold",
      border: "1px solid black",
      backgroundColor: "#dcdcdc",
    },
    div5: {
      gridArea: "2 / 1 / 3 / 3",
      border: "1px solid black",
      padding: "2%",
    },
    div6: {
      gridArea: "2 / 3 / 3 / 6",
      border: "1px solid black",
      padding: "2%",
    },
    div7: {
      gridArea: "2 / 6 / 3 / 7",
      border: "1px solid black",
      padding: "2%",
    },
    div8: {
      gridArea: "2 / 7 / 3 / 9",
      border: "1px solid black",
      padding: "2%",
    },
    div9: {
      gridArea: "3 / 1 / 4 / 3",
      border: "1px solid black",
      padding: "2%",
      backgroundColor: "#dcdcdc",
      fontWeight: "bold",
    },
    div10: {
      gridArea: "3 / 3 / 4 / 4",
      border: "1px solid black",
      padding: "2%",
      backgroundColor: "#dcdcdc",
      fontWeight: "bold",
    },
    div11: {
      gridArea: "3 / 4 / 4 / 6",
      border: "1px solid black",
      padding: "2%",
      backgroundColor: "#dcdcdc",
      fontWeight: "bold",
    },
    div12: {
      gridArea: "3 / 6 / 4 / 9",
      border: "1px solid black",
      padding: "2%",
      backgroundColor: "#dcdcdc",
      fontWeight: "bold",
    },
    div13: {
      gridArea: "4 / 1 / 5 / 3",
      border: "1px solid black",
      padding: "2%",
    },
    div14: {
      gridArea: "4 / 3 / 5 / 4",
      border: "1px solid black",
      padding: "2%",
    },
    div15: {
      gridArea: "4 / 4 / 5 / 6",
      border: "1px solid black",
      padding: "2%",
    },
    div16: {
      gridArea: "4 / 6 / 5 / 9",
      border: "1px solid black",
      padding: "2%",
    },
  };
  return (
    <>
      {/* {data && <Cabecera data={data} />} */}
      {data && (
        <PDFViewer style={{ width: "100%", height: "100Vh" }}>
          <Cabecera data={data} />
        </PDFViewer>
      )}
    </>
  );
}

export default BodyComponent;
