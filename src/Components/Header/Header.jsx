import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderForm from "./HeaderForm";
import HeaderLink from "./HeaderLink";

const searchVars = {
  //window.innerWidth를 사용 이게 픽셀로 주는것보다 더 좋을듯
  start: {
    y: "-10vh",
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
  exit: {
    y: "-15vh",
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
};

const cateVars = {
  start: {
    y: "-70vh",
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
  exit: {
    y: "-70vh",
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
};

const Header = () => {
  const [leave, setLeave] = useState(false);
  const toggleLeave = () => setLeave((prev) => !prev);
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [hover, setHover] = useState(false);
  const [cateHover, setCateHover] = useState();
  return (
    <div
      onMouseLeave={() => setHover(false)}
      className="relative mt-[15vh] overflow-x-hidden"
    >
      <div className=" fixed top-0   z-20 h-[15vh] w-full border-b border-gray-300 bg-back">
        <div className="flex   h-[4vh] items-center justify-center bg-font text-back">
          <div className="flex items-center justify-center text-center text-[12px]">
            <span>카카오 플러스 친구 추가 시 5,000원 쿠폰 증정</span>
          </div>
        </div>
        <div className="flex h-[11vh] w-full items-center justify-between   px-8 py-4">
          <div className="hidden w-[33%] space-x-[15px] text-[12px] font-medium lg:block">
            <span
              className="cursor-pointer"
              onMouseOver={() => {
                setHover(true);
                setSearch(false);
                setCateHover("제품");
              }}
            >
              제품
            </span>
            <span
              className="cursor-pointer"
              onMouseOver={() => {
                setHover(true);
                setSearch(false);
                setCateHover("고객지원");
              }}
            >
              고객지원
            </span>
            <span
              className="cursor-pointer"
              onMouseOver={() => {
                setHover(true);
                setSearch(false);
                setCateHover("브랜드");
              }}
            >
              브랜드
            </span>
            <span
              onMouseOver={() => setHover(false)}
              className="cursor-pointer text-main hover:text-gray-400"
            >
              멤버십
            </span>
          </div>
          <div className="flex w-[33%] items-center lg:hidden">
            <span
              onClick={() => navigate("/cart")}
              className=" flex items-center justify-center text-[12px]"
            >
              카트
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-font text-xs font-bold text-white">
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
            <span
              onClick={() => {
                if (leave) return;
                setLeave(true);
                setSearch(!search);
                setHover(false);
              }}
              className="cursor-pointer"
            >
              <svg
                onClick={() => setSearch((prev) => !prev)}
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

      <AnimatePresence onExitComplete={toggleLeave}>
        {search && (
          <motion.div
            key={1}
            variants={searchVars}
            initial="start"
            animate="end"
            exit="exit"
            className="fixed  flex h-[11vh] w-screen justify-center bg-back"
          >
            <HeaderForm setSearch={setSearch} />
          </motion.div>
        )}
        {hover === true ? (
          <motion.div
            key={2}
            variants={cateVars}
            initial="start"
            animate="end"
            exit="exit"
            className="fixed z-10 h-[70vh] w-screen bg-back"
          >
            <HeaderLink cateHover={cateHover} />
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
