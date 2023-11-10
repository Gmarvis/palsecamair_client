"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { SlEvent } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { usePathname } from "next/navigation";

export const links = [
  {
    pathName: "My articles",
    url: "/dashboard",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    pathName: "Post",
    url: "/dashboard/post",
    icon: <MdAddBox />,
  },
  {
    pathName: "Events",
    url: "/dashboard/myevents",
    icon: <SlEvent />,
  },
  {
    pathName: "Profile",
    url: "/dashboard/myprofile",
    icon: <CgProfile />,
  },
];

export const SideNav = () => {
  const pathname = usePathname();
  const paramName = pathname.split("/").slice(-1)[0];

  return (
    <>
      <div className="flex flex-col h-[100vh] items-center mobile:max-sm:hidden shadow-2xl w-[4vw] gap-20 relative pt-5">
        <div className="flex flex-col mt-20 gap-5">
          {links.map((link, index) => (
            <Tippy content={link.pathName} key={index} placement="right">
              <Link
                href={link.url}
                key={index}
                className={` ${
                  pathname === link.url
                    ? "bg-themecolor text-white"
                    : "text-slate-500 "
                } flex items-center font-light hover:text-white hover:bg-themecolor gap-2 p-4`}
              >
                <p className="text-3xl">{link.icon}</p>
                {/* <p>{link.pathName}</p> */}
              </Link>
            </Tippy>
          ))}
        </div>
      </div>
      <div className=" sm:hidden mobile:max-sm:visible">
        <div className="flex justify-between">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={` ${
                pathname === link.url
                  ? "border-t border-t-themecolor text-themecolor"
                  : "text-slate-500"
              } flex flex-col gap-0 items-center  font-light hover:border-t p-2`}
            >
              <p className="text-2xl">{link.icon}</p>
              <p className="text-xs">{link.pathName}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
