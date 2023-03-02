"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: any = useSearchParams();
  const getDatos = async () => {
    await axios
      .post("/api/Login/BaseInfoUser", {
        docente: data.get("d"),
        colegio: data.get("c"),
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem(
            "datosColegio",
            JSON.stringify(res?.data?.colegio || [])
          );
        }
      });
  };
  useEffect(() => {
    getDatos();
  }, []);
  return (
    <html>
      <head />
      <Header>{children}</Header>
    </html>
  );
}
