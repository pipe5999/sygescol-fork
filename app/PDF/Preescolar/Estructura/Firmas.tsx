import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  firma: any;
};
const Firmas = ({ firma }: Props) => {
  return (
    <>
      <View style={{ width: "100%" }}>
        <View style={{ marginHorizontal: "auto" }}>
          <Image style={{ width: 150, height: "auto" }} src={firma} />
        </View>
        <Text style={{ margin: "auto", marginTop: -50 }}>
          _________________
        </Text>
        <Text style={{ margin: "auto", fontSize: 12, marginTop: 3 }}>
          {JSON.parse(localStorage?.datosUsu)?.nombre}
        </Text>
        <Text style={{ margin: "auto", fontSize: 12 }}>
          Director/a de Grupo
        </Text>
      </View>
    </>
  );
};

export default Firmas;
