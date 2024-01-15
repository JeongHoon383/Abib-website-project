import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HeaderForm from "./HeaderForm";
import HeaderLink from "./HeaderLink";
import HeaderMLink from "./HeaderMLink";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Modules/Member";
import { persistor } from "../../Modules/rootReducer";
import * as cookies from "../../util/cookie";
import { getCart } from "../../Modules/cart";

const searchVars = {
  //window.innerWidth를 사용 이게 픽셀로 주는것보다 더 좋을듯
  start: {
    /*     y: "-15vh", */
    height: "0vh",
    opacity: 0,
  },
  end: {
    /*     y: 0, */
    opacity: 1,
    height: "11vh",
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
  exit: {
    /*     y: "-15vh", */
    opacity: 0,
    height: "0",
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

const mCateVars = {
  start: {
    x: "100vw",
    opacity: 0.5,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "linear" },
  },
};

const Header = ({ setDark, dark }) => {
  const [leave, setLeave] = useState(false);
  const toggleLeave = () => setLeave((prev) => !prev);
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState(false);
  const [hover, setHover] = useState(false);
  const [cateHover, setCateHover] = useState();
  const [mToggle, setMToggle] = useState(false);
  const memberInfo = useSelector((state) => state.persistedReducer);
  const purge = async () => await persistor.purge();
  const dispatch = useDispatch();
  const cart = useSelector(getCart).list;

  const handleLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      cookies.removeCookie("prevPage");
      cookies.removeCookie("currentPage");
      await dispatch(logout());
      await setTimeout(() => purge(), 200);
    }
  };

  return (
    <div
      onMouseLeave={() => setHover(false)}
      className="relative z-[101] mt-[15vh] w-full overflow-x-hidden transition ease-in-out dark:bg-black dark:text-white "
    >
      <div className=" fixed top-0   z-20 h-[15vh] w-full border-b border-gray-300 bg-back dark:bg-black dark:text-white">
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
          <div className="flex w-[33%] items-center space-x-4 lg:hidden">
            <motion.span
              layout
              onClick={() => {
                setDark((dark) => !dark);
              }}
              className="cursor-pointer"
            >
              {dark ? (
                <IoMoonSharp style={{ fontSize: "15px" }} />
              ) : (
                <IoSunnySharp style={{ fontSize: "15px" }} />
              )}
            </motion.span>
            <span
              onClick={() => navigate("/cart")}
              className=" flex items-center justify-center text-[12px]"
            >
              <span className="flex h-full items-center">
                카트
                <span className="relative bottom-[0.5px] flex h-4 w-4   items-center justify-center rounded-full   bg-font text-xs font-bold text-white">
                  {cart.length}
                </span>
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
            <span
              onClick={() => {
                setDark((dark) => !dark);
              }}
              className="cursor-pointer"
            >
              {dark ? (
                <IoMoonSharp style={{ fontSize: "15px" }} />
              ) : (
                <IoSunnySharp style={{ fontSize: "15px" }} />
              )}
            </span>
            <span
              onClick={() => navigate("/cart")}
              className=" flex cursor-pointer items-center justify-center space-x-0.5 text-[12px]"
            >
              <span>카트</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-font text-xs font-bold text-white">
                {cart.length}
              </span>
            </span>
            {memberInfo.isLogin ? (
              <>
                <span onClick={handleLogout} className="cursor-pointer">
                  로그아웃
                </span>
                <span>
                  <Link to={"/mypage"}>마이페이지</Link>
                </span>
              </>
            ) : (
              <>
                <span
                  onClick={() => navigate("/signup")}
                  className="cursor-pointer"
                >
                  회원가입
                </span>
                <span
                  onClick={() => {
                    navigate("/login");
                    cookies.setCookie(
                      "currentPage",
                      JSON.stringify(location.pathname),
                    );
                  }}
                  className="cursor-pointer"
                >
                  로그인
                </span>
              </>
            )}
          </div>
          <div className="flex w-[33%]  items-center justify-end lg:hidden lg:w-0">
            <span>
              {mToggle === false && (
                <svg
                  onClick={() => {
                    setMToggle(true);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 cursor-pointer "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
              {mToggle === true && (
                <svg
                  onClick={() => {
                    setMToggle(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-7 w-7 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {search && (
          <motion.div
            key={1}
            variants={searchVars}
            initial="start"
            animate="end"
            exit="exit"
            className="fixed z-[100] hidden h-[11vh] w-screen  justify-center bg-back  lg:flex dark:bg-black dark:text-white"
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
            <HeaderLink setHover={setHover} cateHover={cateHover} />
          </motion.div>
        ) : (
          <></>
        )}
        {mToggle && (
          <motion.div
            key={3}
            variants={mCateVars}
            initial="start"
            animate="end"
            exit="exit"
            className="fixed z-10 h-[85vh] w-screen bg-back dark:bg-black lg:hidden"
          >
            <HeaderMLink setMToggle={setMToggle} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
