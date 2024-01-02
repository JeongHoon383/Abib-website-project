import React from "react";

const MainBrandStory = () => {
  return (
    <div className="w-screen h-[45vh]">
      <div className="w-full h-full   flex flex-col items-center justify-center space-y-10  font-medium">
        <div className="md:text-3xl text-2xl flex flex-col items-center space-y-2  ">
          <span> 첫번째 달을 만나다.</span>
          <span className="flex flex-col sm:flex-row">
            <span>아비브를 만나는 순간 </span>
            <span>시작되는 새로운 당신</span>
          </span>
        </div>
        <div className="lg:text-xl md:w-[220px] text-center w-10/12 text-lg border border-font py-3 px-10 cursor-pointer">
          브랜드 스토리
        </div>
      </div>
    </div>
  );
};

export default MainBrandStory;
