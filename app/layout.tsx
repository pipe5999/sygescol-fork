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
        {User && (
          <>
            <Header>{children}</Header>
          </>
        )}
        {!User && <Login />}

        {/* {!User && <p>no loged</p>} */}
      </body>
    </html>
  );
}
