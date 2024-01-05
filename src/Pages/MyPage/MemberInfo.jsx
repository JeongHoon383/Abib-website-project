import React from "react";

export default function MemberInfo() {
  return (
    <>
      <div className="text-bold @media (min-width: 768px)  @media (min-width: 1024px) text-bold mx-auto border-t  border-b-black p-16 text-center text-3xl ">
        Profile.
      </div>
      <div className="text-bold text-xs">
        <div className="mx-auto flex justify-center text-xs font-bold leading-4">
          계정 정보
        </div>

        <div className="mt-20 text-center">
          <div>
            <div className=" text-xs font-bold leading-8">아이디</div>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300 hover:border-gray-600"
            />
            <p className=" text-xs leading-8">(영문소문자/숫자, 4~16자)</p>
          </div>

          <div>
            <p className=" text-xs font-bold  leading-8">비밀번호 변경</p>
            <input
              type="text"
              className=" h-10 w-full max-w-lg  border border-gray-300  leading-8 hover:border-gray-600"
            />
            <p className=" text-xs leading-8">
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
            </p>
          </div>

          <div>
            <p className=" text-xs font-bold leading-8">비밀번호 변경 확인</p>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300 leading-8  hover:border-gray-600"
            />
          </div>
        </div>
      </div>

      <div className="text-bold   text-xs  leading-8">
        <div className=" mx-auto mt-20 flex justify-center text-xs font-bold  leading-8">
          개인 정보
        </div>

        <div>
          <div className=" mx-auto mt-20 justify-center text-center leading-8">
            <div className="flex-2  text-xs font-bold leading-8">이름</div>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300 leading-8 hover:border-gray-600"
            />
          </div>

          <div className="mx-auto  justify-between text-center leading-8">
            <p className=" text-xs font-bold leading-8 ">우편번호</p>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300 leading-8  hover:border-gray-600"
            />

            <div className="">
              <p className=" text-xs font-bold leading-8">우편번호 찾기</p>
              <button
                type="button"
                className="ml-4 h-10 w-96 border border-gray-300 bg-black text-xs leading-8 text-white hover:text-gray-300"
              >
                POSTAL CODE
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className=" text-xs font-bold leading-8">기본주소</p>
            <input
              type="text"
              className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
            />
          </div>

          <div className="text-center">
            <p className=" text-xs font-bold leading-8">나머지 주소</p>
            <input
              type="text"
              className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
            />
          </div>

          <div className="text-center">
            <p className=" text-xs font-bold leading-8">휴대폰</p>
            <input
              type="text"
              className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
            />
          </div>

          <div className="text-center">
            <p className=" text-xs font-bold leading-8">이메일</p>
            <input
              type="text"
              className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
            />
          </div>

          <div className="text-center">
            <p className="  text-xs font-bold leading-8">생년월일</p>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300  hover:border-gray-600"
            />
          </div>

          <div className="text-center leading-8">
            <p className="  text-xs font-bold leading-8">페이스북</p>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300  hover:border-gray-600"
            />
          </div>

          <div className="text-center">
            <p className="  text-xs font-bold leading-8">인스타그램</p>
            <input
              type="text"
              className=" h-10 w-full max-w-lg border border-gray-300  hover:border-gray-600"
            />
          </div>
        </div>
      </div>
    </>
  );
}
