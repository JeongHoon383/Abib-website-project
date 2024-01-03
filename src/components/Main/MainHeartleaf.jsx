import React from "react";

const MainHeartleaf = () => {
  return (
    <div
      className="h-[85vh] w-screen  bg-center  bg-cover flex flex-col items-center justify-between pt-5 pb-10 text-back "
      style={{ backgroundImage: "url('./home/main_2.jpg')" }}>
      <div className="md:text-3xl text-2xl font-medium ">Heartleaf</div>
      <div className="lg:text-xl md:w-[220px] text-center w-10/12 text-lg border border-back py-3 px-16 cursor-pointer">
        view&nbsp;more
      </div>
    </div>
  );
};

export default MainHeartleaf;
