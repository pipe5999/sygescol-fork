"use client";
import "../styles/globals.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "./Header";
import Login from "./Login";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [User, setUser] = useState(null);
  useEffect(() => {
    // if (!User && !localStorage?.datosUsu) {
    //   getDatos();
    // }
    if (User || localStorage?.datosUsu != "undefined") {
      setUser(User || localStorage?.datosUsu);
    }
  }, [User]);
  return (
    <html lang="es">
      <Head />
      <head />
      <body>
        {/* {User && (
          <>
            <Header>{children}</Header>
          </>
        )} */}
        {!User && <Login set={setUser} />}

        {/* {!User && <p>no loged</p>} */}

        {User && <Header>{children}</Header>}

        {/* <Header>{children}</Header> */}
      </body>
    </html>
  );
}
