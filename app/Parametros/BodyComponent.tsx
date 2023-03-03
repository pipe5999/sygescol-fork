"use client";
import React, { useState } from "react";
import Header from "./Header";
import ItemParametro from "./ItemParametro";
import ShowModal from "./ShowModal";

function BodyComponent() {
  const [visibelModal, setVisible] = useState(false as any);
  return (
    <>
      {visibelModal && (
        <>
          <ShowModal setVisible={setVisible} />
        </>
      )}
      <Header />
      <ItemParametro setVisible={setVisible} />
    </>
  );
}

export default BodyComponent;
