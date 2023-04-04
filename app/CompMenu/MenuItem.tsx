"use client";
import Link from "next/link";
import React from "react";
import SubMenu from "./SubMenu";

type Props = {
  icono: any;
  submenu: any;
  link: any;
  active: any;
  setActive: any;
  id: any;
  target?: any;
};

const MenuItem = ({
  icono,
  submenu,
  link,
  active,
  setActive,
  id,
  target,
}: Props) => {
  return (
    <>
      <Link
        href={link}
        onClick={() => setActive(id)}
        target={`${target ? "_blank" : "_self"}`}
      >
        <div
          className={`cursor-pointer border-2 ${
            active == id && "bg-green-700"
          } border-blue-600 p-2 hover:bg-blue-600 hover:border-l-4 hover:border-l-white text-white rounded flex items-center gap-2 transition-all duration-200`}
        >
          <div>{icono}</div>
          <h1 className="truncate uppercase lg:text-sm !leading-none">
            {submenu}
          </h1>
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
