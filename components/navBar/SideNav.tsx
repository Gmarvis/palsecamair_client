"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiArticleMediumLight } from "react-icons/pi";
import { SlEvent } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const links = [
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    pathName: "Articles",
    url: "/",
    icon: <PiArticleMediumLight />,
  },
  {
    pathName: "Events",
    url: "/",
    icon: <SlEvent />,
  },
  {
    pathName: "Dashboard",
    url: "/",
    icon: <CgProfile />,
  },
];

export const SideNav = () => {
  return (
      <div className="flex flex-col h-[100vh] bg-slate-200 w-fit gap-20 pt-5">
      
        <div className="flex flex-col gap-5">
          {links.map((link, index) => (
            <Tippy content={link.pathName} key={index} placement="right">
              <Link
                href={link.url}
                key={index}
                className={`flex items-center text-black font-light hover:text-themecolor gap-2 p-4`}
              >
                <p className="text-3xl">{link.icon}</p>
                {/* <p>{link.pathName}</p> */}
              </Link>
            </Tippy>
          ))}
        </div>
      
      </div>
  );
};
