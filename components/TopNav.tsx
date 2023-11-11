"use client";

import { useTheme } from "next-themes";

import React, { useState } from "react";
import Avatar from "./Avatar";
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Link from "next/link";
import Overlay from "./Overlay";

const TopNav = () => {
  const { theme, setTheme } = useTheme();
  const [toggleOn, setToggleOn] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const setLight = () => {
    setToggleOn(!toggleOn);
    setTheme("light");
    setShowProfile(!showProfile);
  };

  const setDark = () => {
    setToggleOn(!toggleOn);
    setTheme("dark");
    setShowProfile(!showProfile);
  };

  const goToProfile = () => {
    setShowProfile(false);
  };

  return (
    <>
      {showProfile && (
        <Overlay
          onClick={() => {
            setShowProfile(false);
          }}
        />
      )}
      <div className="flex items-center self-center content-center justify-between mobile:max-sm:w-full w-[96vw] p-2">
        Creators section
        <div className="">
          <Avatar
            onClick={() => setShowProfile(!showProfile)}
            size={4}
            profilePicture="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />

          {showProfile && (
            <div className="w-[10rem] bg-white dark:bg-darkmode flex flex-col gap-5 fixed right-0 mr-2 shadow-lg p-2">
              <div className="">
                <div className="flex justify-between">
                  <h3 className="text-sm text-dark dark:text-slate-300">
                    Mode
                  </h3>
                  {toggleOn ? (
                    <button
                      className="text-2xl text-themecolor"
                      onClick={setDark}
                    >
                      <MdLightMode />
                    </button>
                  ) : (
                    <button
                      className="text-2xl text-themecolor"
                      onClick={setLight}
                    >
                      <CiLight />
                    </button>
                  )}
                </div>
              </div>
              <Link
                href="/dashboard/myprofile"
                className="bg-slate-300 w-full dark:text-darkmode text-sm py-1 text-center"
              >
                view profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopNav;
