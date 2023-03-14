"use client";
import React from "react";

type Props = {
  image: any;
  alt: any;
  title: any;
  titleCompleto: any;
};

const CompRazones = ({ image, alt, title, titleCompleto }: Props) => {
  return (
    <>
      <li className="bg-[#1e3a8a] cursor-pointer border-2 border-white">
        <img src={image} alt={alt} />
        <div
          style={{ fontSize: "clamp(18px,2.5vw,22px)" }}
          className="myDIV font-medium h-8"
        >
          {title}
        </div>
        <div
          style={{ fontSize: "clamp(18px,2.5vw,22px)" }}
          className="hide lg:whitespace-normal font-medium"
        >
          {titleCompleto}
        </div>
      </li>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        img {
          display: block;
          width: 100%;
          max-width: 100%;
          margin-bottom: 1.5rem;
        }
        li {
          position: -webkit-sticky;
          position: sticky;
          left: 0;
          width: 26%;
          display: inline-block;
          text-align: center;
          color: #ffffff;
          padding-bottom: 1.5rem;
          font-size: clamp(18px, 2.5vw, 22px);
          box-shadow: -10px 0 30px 0 rgba(#000, 0.25);
          margin-left: -4px;
        }

        .hide {
          display: none;
          transition: visibility 15s, opacity 0.5s linear;
        }

        .myDIV:hover + .hide {
          display: block;
          color: white;
        }

        .content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 10px;
        }

        @keyframes waves {
          .hide {
            display: none;
            transition: visibility 15s, opacity 0.5s linear;
          }

          .myDIV:hover + .hide {
            display: block;
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default CompRazones;
