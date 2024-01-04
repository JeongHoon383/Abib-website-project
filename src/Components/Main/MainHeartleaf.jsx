import React from "react";

const MainHeartleaf = () => {
  return (
    <div
      className="flex h-[85vh] w-screen  flex-col  items-center justify-between overflow-x-hidden bg-cover bg-center pb-10 pt-5 text-back "
      style={{ backgroundImage: "url('./home/main_2.jpg')" }}
    >
      <div className="text-2xl font-medium md:text-3xl ">Heartleaf</div>
      <div className="w-10/12 cursor-pointer border border-back px-16 py-3 text-center text-lg md:w-[220px] lg:text-xl">
        view&nbsp;more
      </div>
    </div>
  );
};

export default MainHeartleaf;
