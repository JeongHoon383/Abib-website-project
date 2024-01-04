import { Link } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";
import "../../index.css";

export default function SignupMain() {
  return (
    <div className="mb-20 w-full border-b border-black py-16 text-center text-[13px]">
      <Link
        to={"/signup/join"}
        className="transition-btn mx-auto block  h-10 w-[90%] leading-10 sm:w-[600px]"
      >
        일반 회원가입
      </Link>

      <p className="relative mx-auto my-8 w-[90%] border-t border-[#CCC] sm:w-[600px]">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white px-3.5 font-semibold text-[#AAA]">
          또는
        </span>
      </p>

      <Link className="mx-auto mb-5 flex h-10 w-[90%] items-center justify-center bg-[#FEE500] sm:w-[600px]">
        <RiKakaoTalkFill className="mr-[5px] h-[20px] w-[20px]" />
        카카오 회원가입
      </Link>

      <Link className=" mx-auto mb-5 block h-10 w-[90%] bg-[#00C73C] leading-10 text-white transition duration-500 hover:text-[#DDD] sm:w-[600px]">
        네이버 회원가입
      </Link>

      <Link className=" mx-auto block h-10 w-[90%] bg-[#3B5998] leading-10 text-white transition duration-500 hover:text-[#DDD] sm:w-[600px]">
        페이스북 회원가입
      </Link>
    </div>
  );
}
