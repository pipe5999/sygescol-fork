import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";
import src from "react-select/dist/declarations/src";

const Firmas = () => {
  return (
    <>
      <View style={{ width: "100%" }}>
        <Text style={{ margin: "auto" }}>_________________</Text>
        <Text style={{ margin: "auto", fontSize: 12, marginTop: 3 }}>
          {JSON.parse(localStorage?.datosUsu)?.nombre}
        </Text>
        {/* <Image
          style={{ width: 150, border: 1 }}
          src={JSON.parse(localStorage?.datosUsu)?.firma}
        /> */}
        <Text style={{ margin: "auto", fontSize: 12 }}>
          Director/a de Grupo
        </Text>
      </View>
    </>
  );
};

export default Firmas;
