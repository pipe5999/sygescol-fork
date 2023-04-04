import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type TextProps = {
  TextObservador?: string;

  setTextObservador?: any;
  VaribableEdit?: string | any;
  TextBase?: any;
  TextoMensaje?: string | any;
  setTextoMensaje?: string | any;
};

export default function WysWyget({
  TextObservador,
  setTextObservador,
  VaribableEdit,
  TextBase,
  TextoMensaje,
  setTextoMensaje,
}: TextProps) {
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={TextObservador}
        // onChange={(e) => {
        //   // setTextObservador({
        //   //   ...TextBase,
        //   //   [VaribableEdit]: e,
        //   });
        // }}
        defaultValue=""
      />
    </div>
  );
}
