"use client";
import "../styles/globals.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "./Header";
import Login from "./Login";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [User, setUser] = useState(null);
  const props: any = useSearchParams();
  const getDatos = async () => {
    let col = props?.get("c");
    let doc = props?.get("d");
    // console.log("Estos son los props-->", doc, col);
    await fetch(`/api/Login?docente=${doc}&colegio=${col}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("datosColegio", JSON.stringify(res.colegio));
        localStorage.setItem("datosUsu", JSON.stringify(res.datosUsu));
        localStorage.setItem("Dimesiones", JSON.stringify(res.dimesion));
        localStorage.setItem("Grupo", JSON.stringify(res.Grupo));
        setUser(res.datosUsu);
      });
  };
  useEffect(() => {
    // if (!User && !localStorage?.datosUsu) {
    //   getDatos();
    // }
    if (User || localStorage?.datosUsu) {
      setUser(User || localStorage?.datosUsu);
    }
  }, [User]);
  return (
    <html lang="es">
      <head />
      <body>
        {/* {User && (
          <>
            <Header>{children}</Header>
          </>
        )}
        {/* {!User && <Login />} */}

        {/* {!User && <p>no loged</p>} */}

        <Header>{children}</Header>
      </body>
    </html>
  );
}
