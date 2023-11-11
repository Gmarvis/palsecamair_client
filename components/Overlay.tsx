import React from "react";

type ClickType = {
  onClick: () => void;
};

const Overlay = ({ onClick }: ClickType) => {
  return <div onClick={onClick} className=" h-[100vh] w-[100vw] fixed"></div>;
};

export default Overlay;
