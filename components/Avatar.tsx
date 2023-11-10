"use client";

import Image from "next/image";
import React from "react";
type AvatarProps = {
  profilePicture: string;
  size: number;
};

const Avatar = ({ profilePicture, size }: AvatarProps) => {
  return (
    <button
      style={{ backgroundImage: `url(${profilePicture})`, width: `${size*10}px`, height: `${size*10}px` }}
      className={`bg-cover bg-center object-fill rounded-[50%] h-${size} w-${size}`}
    >
      {/* <Image
        src={dp}
        width={50}
        height={50}
        alt={""}
        className="rounded-full object-"
      /> */}
      
    </button>
  );
};

export default Avatar;