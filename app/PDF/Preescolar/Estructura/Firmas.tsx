import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  firma: any;
};
const Firmas = ({ firma }: Props) => {
  return (
    <>
      <View style={{ width: "100%" }}>
        {(firma && (
          <Text style={{ margin: "auto" }}>_________________</Text>
        )) || <Text style={{ margin: "auto" }}>_________________</Text>}
        <Text style={{ margin: "auto", fontSize: 12, marginTop: 3 }}>
          {JSON.parse(localStorage?.datosUsu)?.nombre}
        </Text>
        <Text style={{ margin: "auto", fontSize: 12 }}>
          Director/a de Grupo
        </Text>
        <View style={{ marginHorizontal: "auto", border: 2 }}>
          {firma && <Image style={{ width: 150 }} src={firma || ""} />}
        </View>
      </View>
    </>
  );
};

export default Firmas;
