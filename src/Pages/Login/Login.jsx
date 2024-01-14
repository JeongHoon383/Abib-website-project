import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../../Modules/Member.js";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";

export default function Login() {
  const [tabSwitch, setTabSwitch] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("아이디를 입력해주세요.");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      axios
        .post("http://127.0.0.1:9090/member/login", {
          id: id,
          password: password,
        })
        .then((result) => {
          if (result.data.isIdExist) {
            if (result.data.isLogin) {
              const memberInfo = jwtDecode(result.data.token);
              dispatch(
                login({ token: result.data.token, memberId: memberInfo.id }),
              );
              alert("로그인에 성공했습니다.");
              navigate("/");
            } else {
              alert("비밀번호가 일치하지 않습니다.");
            }
          } else {
            alert("존재하지 않는 계정입니다.");
          }
        });
    }
  };

  return (
    <main className="pb-[50px] lg:mb-[150px] lg:border-b lg:border-black">
      <div className="mb-5 w-full border-b border-black py-4 lg:mb-[100px] lg:pb-10 lg:pt-[70px]">
        <button
          className={"absolute left-5 lg:hidden"}
          onClick={() => navigate(-1)}
        >
          <MdArrowBackIos className="h-5 w-5" />
        </button>
        <h2 className="text-center text-xl lg:text-3xl">로그인</h2>
      </div>

      <div className="mx-auto w-[90%] text-[13px] lg:w-[600px]">
        <div className="mb-5">
          <button
            onClick={() => setTabSwitch(false)}
            className={`h-12 w-1/2 border ${
              tabSwitch
                ? "border-[#CCC] bg-[#FCFCFC] text-[#AAA]"
                : "border-black"
            }`}
          >
            회원 로그인
          </button>
          <button
            onClick={() => setTabSwitch(true)}
            className={`h-12 w-1/2 border ${
              tabSwitch
                ? "border-black"
                : "border-[#CCC] bg-[#FCFCFC] text-[#AAA]"
            }`}
          >
            비회원 배송조회
          </button>
        </div>
        {tabSwitch ? (
          <form>
            <label htmlFor="orderName" className="hidden">
              주문명
            </label>
            <input
              type="orderName"
              name="orderName"
              className="transition-input mb-2.5 w-full"
              placeholder="주문명"
            />
            <label htmlFor="orderId" className="hidden">
              주문번호
            </label>
            <input
              type="orderId"
              name="orderId"
              className="transition-input mb-2.5 w-full"
              placeholder="주문번호"
            />
            <label htmlFor="orderPassword" className="hidden">
              비회원 주문 비밀번호
            </label>
            <input
              type="orderPassword"
              name="orderPassword"
              className="transition-input mb-8 w-full"
              placeholder="비회원 주문 비밀번호"
            />

            <button className="transition-btn mb-2 h-12 w-full">
              비회원 주문 조회
            </button>
          </form>
        ) : (
          <>
            <form onSubmit={(e) => handleLogin(e)}>
              <label htmlFor="id" className="hidden">
                아이디
              </label>
              <input
                type="id"
                name="id"
                className="transition-input mb-2.5 w-full"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <label htmlFor="password" className="hidden">
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                className="transition-input mb-8 w-full"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="transition-btn mb-2 h-12 w-full">
                로그인
              </button>
            </form>

            <div className="font-semibold text-[#999] lg:flex lg:justify-between">
              {/* <div className="flex items-center">
                <input
                  type="checkbox"
                  id="keepLogin"
                  name="keepLogin"
                  className="mr-1 h-[15px] w-[15px] translate-y-[-1px]"
                  onChange={() => setIsKeepLogin(!isKeepLogin)}
                />
                <label htmlFor="keepLogin">로그인 상태 유지</label>
              </div> */}
              <div className="mt-5 text-center lg:mt-0">
                <button className="mr-2 border-r border-[#999] pr-2 font-semibold transition duration-300 hover:text-[#DDD]">
                  아이디 찾기
                </button>
                <button className="mr-2 border-r border-[#999] pr-2 transition duration-300 hover:text-[#DDD]">
                  비밀번호 찾기
                </button>
                <Link
                  to={"/signup"}
                  className="transition duration-300 hover:text-[#DDD]"
                >
                  회원가입
                </Link>
              </div>
            </div>

            <p className="relative mx-auto my-10 w-[90%] border-t border-[#CCC] sm:w-[600px] lg:my-[60px]">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white px-3.5 font-semibold text-[#AAA]">
                또는
              </span>
            </p>

            <Link className="mx-auto mb-2 flex h-12 items-center justify-center bg-[#FEE500] transition duration-500 hover:text-[#AAA]">
              <RiKakaoTalkFill className="mr-[5px] h-[20px] w-[20px]" />
              카카오 로그인/회원가입
            </Link>
            <div className="flex justify-between">
              <Link className="h-12 w-[49%] bg-[#00C73C] text-center leading-[48px] text-white transition duration-500 hover:text-[#DDD]">
                네이버 로그인
              </Link>

              <Link className="h-12 w-[49%] bg-[#3B5998] text-center leading-[48px] text-white transition duration-500 hover:text-[#DDD]">
                페이스북 로그인
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
