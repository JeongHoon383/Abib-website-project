import React from "react";

const MainCover = () => {
  return (
    <div
      className="flex flex-col items-center justify-between pt-16 pb-12 w-screen border h-[85vh] bg-center  bg-cover"
      style={{ backgroundImage: "url('./home/main_1.jpg')" }}>
      <div className="flex flex-col items-center font-medium text-back">
        <span className="text-3xl">진정케어할인프로모션</span>
        <div className="flex flex-col items-center text-xl mt-8">
          <span>Up to 40% off</span>
          <span>23.12.27 - 24.01.15</span>
        </div>
      </div>
      <div className="border border-back text-[15px] font-medium text-center text-back py-3 px-16 md:w-[200px] w-10/12">
        shop now
      </div>
    </div>
  );
};

export default MainCover;
