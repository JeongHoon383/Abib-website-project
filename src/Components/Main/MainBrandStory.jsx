import React from "react";

const MainBrandStory = () => {
  return (
    <div className=" h-[45vh] w-screen overflow-x-hidden dark:border-t dark:border-white dark:bg-black dark:text-white">
      <div className="flex h-full   w-full flex-col items-center justify-center space-y-10  font-medium">
        <div className="flex flex-col items-center space-y-2 text-2xl md:text-3xl  ">
          <span> 첫번째 달을 만나다.</span>
          <span className="flex flex-col sm:flex-row">
            <span>아비브를 만나는 순간 </span>
            <span>시작되는 새로운 당신</span>
          </span>
        </div>
        <div className="w-10/12 cursor-pointer border border-font px-10 py-3 text-center text-xs hover:font-semibold md:w-[220px] lg:text-lg">
          브랜드 스토리
        </div>
      </div>
    </div>
  );
};

export default MainBrandStory;
