"use client";

import { useTheme } from "next-themes";

// react icon imports
import { LuSearch } from "react-icons/lu";
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const [toggleOn, setToggleOn] = useState(false);

  const setLight = () => {
    setToggleOn(!toggleOn);
    setTheme("light");
    // document.documentElement.classList.toggle("dark");
  };

  const setDark = () => {
    setToggleOn(!toggleOn);
    setTheme("dark");
    // document.documentElement.classList.toggle("dark");
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
        {/* <div className="links flex justify-around gap-2 font-normal">
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
        </div> */}

        <div className="flex items-center gap-2">
          <button className="text-2xl text-themecolor">
            <LuSearch />
          </button>

          <div className="actionB flex items-center gap-2" text-cyan-600>
            {toggleOn ? (
              <button className="text-2xl text-themecolor" onClick={setDark}>
                <MdLightMode />
              </button>
            ) : (
              <button className="text-2xl text-themecolor" onClick={setLight}>
                <CiLight />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
