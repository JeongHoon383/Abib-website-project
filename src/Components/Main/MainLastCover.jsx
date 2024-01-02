import React from "react";

const MainLastCover = ({ image, title }) => {
  return (
    <div
      className="flex flex-col text-white items-center justify-end pt-16 pb-12 w-screen border h-[85vh] bg-center  bg-cover"
      style={{ backgroundImage: `url('./home/main_${image}.jpg')` }}>
      <span className="md:text-3xl text-2xl text">{title}</span>
    </div>
  );
};

export default MainLastCover;
