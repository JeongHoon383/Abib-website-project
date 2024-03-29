import React from "react";
import { Link } from "react-router-dom";

const MainCover = () => {
  return (
    <div
      className="flex h-[85vh] w-screen flex-col items-center justify-between overflow-x-hidden border bg-cover bg-center pb-12 pt-16  "
      style={{ backgroundImage: "url('./home/main_1.jpg')" }}
    >
      <div className="flex flex-col items-center font-medium text-back dark:text-black">
        <span className="text-3xl">진정케어할인프로모션</span>
        <div className="mt-8 flex flex-col items-center text-xl">
          <span>Up to 40% off</span>
          <span>23.12.27 - 24.01.15</span>
        </div>
      </div>
      <div className="w-10/12 cursor-pointer border border-back px-16 py-3 text-center text-[15px] font-medium text-back md:w-[200px] dark:border-black dark:text-black">
        <Link to={"product/list/스킨케어"}> shop now</Link>
      </div>
    </div>
  );
};

export default MainCover;
