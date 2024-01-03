import React from "react";

const MainLastCover = ({ image, title }) => {
  return (
    <div
      className="flex h-[85vh] w-screen flex-col items-center justify-end overflow-x-hidden border bg-cover bg-center pb-12 pt-16  text-white"
      style={{ backgroundImage: `url('./home/main_${image}.jpg')` }}
    >
      <span className="text text-2xl md:text-3xl">{title}</span>
    </div>
  );
};

export default MainLastCover;
