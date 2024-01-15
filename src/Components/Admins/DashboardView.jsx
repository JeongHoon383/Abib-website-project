import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import MainDashBoard from "./MainDashBoard";
//import aquaprofile from "../../../public/AdminImage/aquaprofile.png";

export default function DashboardView() {
  return (
    <div>
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="h-[40px] w-[350] rounded-[5px] bg-[#F89F9Fc] pl-[13px] font-normal leading-[20px] outline-none placeholder:text-[14px]"
          placeholder="Search for..."
        />

        <div className="rounded-br[5px] flex h-[40px] cursor-pointer items-center justify-center rounded-br-[5px] rounded-tr-[5px] bg-[#4e73df] px-[14px]">
          <FaSearch color="white" />
        </div>
      </div>

      <div className="relative flex items-center gap-[15px]">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          {/* <FaRegBell />
          <FaEnvelope /> */}
        </div>
      </div>

      {/* <div className="relative flex items-center gap-[15px]">
        <p>Douglas McGee</p>
      </div> */}

      <div className="relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-[$4e73df]">
        <img src="" alt="" />
      </div>

      <MainDashBoard />
    </div>
  );
}
