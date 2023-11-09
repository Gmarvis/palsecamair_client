"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { PiArticleMediumFill } from "react-icons/pi";
import { SlEvent } from "react-icons/sl";

const links = [
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    pathName: "Articles",
    url: "/",
    icon: <PiArticleMediumFill />,
  },
  {
    pathName: "Events",
    url: "/",
    icon: <SlEvent />,
  },
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
];

export const SideNav = () => {
  return (
    <div className="absolute">
      <div className="flex flex-col bg-gray-400 h-[100vh] gap-20 absolute">
      <Image 
      src="/newslogochanged.png"
      alt="pulse camair logo"
      width={30}
      height={30}
      className="self-center mt-5"
      />
        <div className="flex flex-col gap-5">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={`flex items-center text-dark gap-2 hover:bg-green-600 p-4`}
            >
              <p className="text-3xl">{link.icon}</p>
              {/* <p>{link.pathName}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
