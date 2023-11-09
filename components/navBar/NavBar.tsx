"use client";

// react icon imports
import { LuSearch } from "react-icons/lu";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const NavBar = () => {
  const [toggleOn, setToggleOn] = useState(false);
  const toggleTheme = () => {
    setToggleOn(!toggleOn);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="h-16 flex items-center justify-between  border-b border-slate-300 ">
      <div className="logocontainer flex items-center">
        {/* <Image
          src="/newslogochanged.png"
          alt="pulse camair logo"
          width={20}
          height={20}
        /> */}
        <h3 className="font-bold">
          Pulse<span className="text-themecolor">Camair</span>
        </h3>
      </div>

      <div className="subContainer flex justify-between gap-10">
        <div className="links flex justify-around gap-2 font-normal">
          <Link href="/" className="hover:text-themecolor">
            Events
          </Link>
          <Link href="/" className="hover:text-themecolor">
            Fintech
          </Link>
          <Link href="/" className="hover:text-themecolor">
            Startups
          </Link>
          <Link href="/" className="hover:text-themecolor">
            Govenment
          </Link>
        </div>

        <div className="actionB flex items-center gap-2" text-cyan-600>
          <button className="text-2xl text-themecolor">
            <LuSearch />
          </button>

          <button className="text-2xl text-themecolor" onClick={toggleTheme}>
            {toggleOn ? <BsToggleOn /> : <BsToggleOff />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
