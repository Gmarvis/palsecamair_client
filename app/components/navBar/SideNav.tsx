"use client"
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import {PiArticleMediumFill} from "react-icons/pi"
import {SlEvent} from "react-icons/sl"

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
      <div className="flex flex-col bg-white w-[10vw] h-[100vh] gap-20 absolute">
        <h1>Hello Sam</h1>
        <div className="flex flex-col gap-5">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="flex items-center gap-2 hover:bg-green-600 p-3"
            >
              <p className="text-3xl">{link.icon}</p>
              {link.pathName}
            </Link>
          ))}
        </div>
      
      </div>
    
    </div>
  );
};
