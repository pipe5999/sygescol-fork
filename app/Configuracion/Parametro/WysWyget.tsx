import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type TextProps = {
  TextDefault: string;
  TextChange: any;
};

export default function WysWyget({ TextDefault, TextChange }: TextProps) {
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={TextDefault}
        onChange={TextChange}
        defaultValue=""
      />
      ;
    </div>
  );
}
