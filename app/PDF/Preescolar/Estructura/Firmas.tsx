import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  firma: any;
};
const Firmas = ({ firma }: Props) => {
  return (
    <>
      <View style={{ width: "100%" }}>
        <View style={{ marginHorizontal: "30%", marginTop: -30 }}>
          {firma && <Image style={{ width: 200 }} src={firma || ""} />}
        </View>
        {/* {(firma && <Text style={{ margin: "1%" }}>_________________</Text>) || (
          <Text style={{ margin: "10%" }}>_________________</Text>
        )} */}

        <Text style={{ margin: "auto", fontSize: 12, marginTop: -15 }}>
          {JSON.parse(localStorage?.datosUsu)?.nombre}
        </Text>
        <Text style={{ margin: "auto", fontSize: 12 }}>
          Director/a de Grupo
        </Text>
        {/* <View style={{ marginHorizontal: "auto", border: 2 }}>
          {firma && <Image style={{ width: 150 }} src={firma || ""} />}
        </View> */}
      </View>
    </>
  );
};

export default Firmas;
