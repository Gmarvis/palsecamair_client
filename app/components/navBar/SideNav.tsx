import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";

const links = [
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    pathName: "Articles",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    pathName: "Events",
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
  {
    pathName: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
];

export const SideNav = () => {
  return (
    <div>
      <div className="flex flex-col bg-red-600 w-[10vw] h-[100vh]">
        {links.map((link, index) => (
          <Link href={link.url} key={index}>
            {link.icon}
            {link.pathName}
          </Link>
        ))}
      </div>
    </div>
  );
};
