import { Link } from "react-router-dom";

export default function SignupComplete() {
  return (
    <div className="mx-auto w-[90%] py-14 text-center lg:w-[600px]">
      <p className="mb-2 text-2xl">아비브 회원가입이 완료되었습니다.</p>
      <p className="mb-5 text-[14px]">
        로그인하여 다양한 서비스를 이용해보세요.{" "}
      </p>
      <Link
        to={"/login"}
        className="transition-btn mb-2 block h-12 w-full text-[13px] leading-[48px] dark:bg-slate-400"
      >
        로그인
      </Link>
      <Link
        to={"/"}
        className="block h-8 w-full border border-black text-[13px] leading-8 transition duration-500 hover:bg-back dark:border dark:border-white dark:hover:text-black"
      >
        메인 페이지
      </Link>
    </div>
  );
}
