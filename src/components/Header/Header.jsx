import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[15vh]">
      <div className=" fixed top-0 z-10 h-[15vh] w-full border-b border-gray-300 bg-back">
        <div className="flex   h-[4vh] items-center justify-center bg-font text-back">
          <div className="flex items-center justify-center text-center text-[12px]">
            <span>카카오 플러스 친구 추가 시 5,000원 쿠폰 증정</span>
          </div>
        </div>
        <div className="flex h-[11vh] w-full items-center justify-between   px-8 py-4">
          <div className="hidden w-[33%] space-x-[15px] text-[12px] font-medium lg:block">
            <span className="cursor-pointer">제품</span>
            <span className="cursor-pointer">고객지원</span>
            <span className="cursor-pointer">브랜드</span>
            <span className="cursor-pointer text-main hover:text-gray-400">
              멤버십
            </span>
          </div>
          <div className="flex w-[33%] items-center lg:hidden">
            <span
              onClick={() => navigate("/cart")}
              className=" flex items-center justify-center text-[12px]"
            >
              카트
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font text-xs font-bold text-white">
                0
              </span>
            </span>
          </div>
          <div
            onClick={() => navigate("/")}
            className="flex w-[33%] cursor-pointer justify-center text-4xl font-bold"
          >
            Abib
          </div>
          <div className="hidden w-[33%] items-center justify-end space-x-[15px] text-[12px] lg:flex">
            <span className="cursor-pointer">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <span className="cursor-pointer">언어</span>
            <span
              onClick={() => navigate("/cart")}
              className=" flex cursor-pointer items-center justify-center text-[12px]"
            >
              카트
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font text-xs font-bold text-white">
                0
              </span>
            </span>
            <span className="cursor-pointer">회원가입</span>
            <span className="cursor-pointer">로그인</span>
          </div>
          <div className="flex w-[33%]  items-center justify-end lg:hidden lg:w-0">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
