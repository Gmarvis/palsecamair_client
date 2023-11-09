import React from "react";
import Avatar from "./Avatar";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between w-full p-2">
      TopNav
      <Avatar
        size={4}
        profilePicture="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
};

export default TopNav;
