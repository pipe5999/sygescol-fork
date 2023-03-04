"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  icono: any;
  submenu: any;
  link: any;
};

const SubMenu = ({ icono, submenu, link }: Props) => {
  //   const router = useRouter();

  return (
    <>
      {/* <Link href={link}>
        <div
          // onClick={() => router.push("")}
          className="cursor-pointer border-2 border-blue-600 p-2 hover:bg-blue-600 hover:border-l-4 hover:border-l-white text-white rounded flex items-center gap-2 transition-all duration-200"
        >
          <div>{icono}</div>
          <h1 className="hidden md:block uppercase lg:text-sm">{submenu}</h1>
        </div>
      </Link> */}
    </>
  );
};

export default SubMenu;
