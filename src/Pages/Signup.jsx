import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";

const Signup = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div className="relative flex w-full items-center justify-center pt-[20px] lg:pt-[70px]">
        <button
          className={`absolute left-[20px] ${
            windowWidth <= 1024 ? "block" : "hidden"
          }`}
          onClick={() => navigate(-1)}
        >
          <MdArrowBackIos className="h-[20px] w-[20px]" />
        </button>
        <h2 className="mt-auto text-[20px] lg:text-[32px]">회원가입</h2>
      </div>

      <div className="mb-[40px] mt-[20px] w-full border-b border-t border-black pb-[60px] pt-[60px] text-center text-[13px] lg:mt-[40px]">
        <Link className="mx-auto block h-[40px]  w-[90%] bg-black leading-[40px] text-white sm:w-[600px]">
          일반 회원가입
        </Link>

        <p className="relative mx-auto mb-[30px] mt-[30px] w-[90%] border-t border-[#CCC] sm:w-[600px]">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white pl-[13px] pr-[13px] font-semibold text-[#AAA]">
            또는
          </span>
        </p>

        <Link className="mx-auto mb-[20px] flex h-[50px] w-[90%] items-center justify-center bg-[#FEE500] sm:w-[600px]">
          <RiKakaoTalkFill className="mr-[5px] h-[20px] w-[20px]" />
          카카오 회원가입
        </Link>

        <Link className=" mx-auto mb-[20px] block h-[50px] w-[90%] bg-[#00C73C] leading-[50px] text-white sm:w-[600px]">
          네이버 회원가입
        </Link>

        <Link className=" mx-auto block h-[50px] w-[90%] bg-[#3B5998] leading-[50px] text-white sm:w-[600px]">
          페이스북 회원가입
        </Link>
      </div>
    </section>
  );
};

export default Signup;
