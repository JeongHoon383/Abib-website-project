import React from "react";

export default function MemberInfo() {
  return (
    <>
      <div className="mx-auto">
        <div className="text-bold @media (min-width: 768px)  @media (min-width: 1024px) text-bold border-b-1 mx-auto  border-black  p-16 text-center text-3xl ">
          Profile.
        </div>

        <div className="text-bold text-xs">
          <div className="mx-auto flex justify-center text-xs font-bold leading-4">
            계정 정보
          </div>

          <div className="mt-20 text-center">
            <div className="mx-auto ">
              <p className="flex-start justify-start  text-center text-xs  font-bold leading-8">
                아이디
              </p>
              <input
                type="text"
                className=" h-10 w-full max-w-lg border border-gray-300 hover:border-gray-600"
              />
              <p className="flex-start mb-5 text-xs leading-5">
                (영문소문자/숫자, 4~16자)
              </p>
            </div>

            <div className="item-center mr-32 flex justify-between ">
              <div className="mx-auto">
                <p className="ml-16 flex text-xs font-bold leading-8">
                  비밀번호 변경
                </p>
                <input
                  type="text"
                  className=" h-10 w-64 border border-gray-300 leading-8  hover:border-gray-600"
                />
                <p className="mb-5 ml-16 text-xs leading-5">
                  (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
                </p>
              </div>

              <div className="item-center -ml-32">
                <p className="ml-2 flex text-xs font-bold leading-8">
                  비밀번호 변경 확인
                </p>
                <input
                  type="text"
                  className=" h-10 w-64 border border-gray-300 leading-8  hover:border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-bold   text-xs  leading-8">
          <div className=" mx-auto ml-16 mt-20 flex justify-center text-left text-xs font-bold  leading-8">
            개인 정보
          </div>

          <div>
            <div className="flex-start mx-auto mt-20 justify-center text-center leading-8">
              <div className="text-center text-xs font-bold leading-8">
                이름
              </div>
              <input
                type="text"
                className=" h-10 w-full max-w-lg border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="flex items-center justify-center text-center leading-8">
              <div className="mt-5 justify-center">
                <p className="text-xs font-bold leading-8">우편번호</p>
                <input
                  type="text"
                  className=" h-10 w-64 border border-gray-300 leading-8 hover:border-gray-600"
                />
              </div>

              <div className="justify-center">
                <p className="flex-2 mt-5 text-xs font-bold leading-8">
                  우편번호 찾기
                </p>
                <div
                  type=""
                  className="ml-4 h-10 w-64 border border-gray-300 bg-black text-xs leading-8 text-white hover:text-gray-300"
                >
                  POSTAL CODE
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">
                기본주소
              </p>
              <input
                type="text"
                className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
              />
            </div>

            <div className="text-center">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">
                나머지 주소
              </p>
              <input
                type="text"
                className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
              />
            </div>

            <div className="text-center">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">휴대폰</p>
              <input
                type="text"
                className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
              />
            </div>

            <div className="text-center">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">이메일</p>
              <input
                type="text"
                className="  h-10 w-full max-w-lg border border-gray-300 font-bold hover:border-gray-600"
              />
            </div>

            <div className="text-center">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">
                생년월일
              </p>
              <input
                type="text"
                className=" h-10 w-full max-w-lg border border-gray-300  hover:border-gray-600"
              />
            </div>

            <div className="text-center leading-8">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">
                페이스북
              </p>
              <input
                type="text"
                className=" h-10 w-full max-w-lg border border-gray-300  hover:border-gray-600"
              />
            </div>

            <div className="text-center">
              <p className="flex-2 mt-5 text-xs font-bold leading-8">
                인스타그램
              </p>
              <input
                type="text"
                className=" mb-20 h-10 w-full max-w-lg border  border-gray-300 hover:border-gray-600"
              />

              <div className="border-t-1 border-black">
                <div className="h-13 @media (min-width: 768px) @media (min-width: 1024px) ml- box-borderw-full mx-auto  	mt-5 max-w-lg cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 ">
                  수정
                </div>

                <div className="h-13 @media (min-width: 768px) @media (min-width: 1024px) ml- mx-auto mt-5  	box-border w-full max-w-lg cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 ">
                  취소
                </div>

                <div className="bt-5 @media (min-width: 768px) @media (min-width: 1024px) ml- h-13 mx-auto mb-10 mt-5   box-border	w-full max-w-lg cursor-pointer border border-gray-600 bg-orange-900 p-4 text-center text-xs font-bold leading-6 text-white hover:bg-gray-100 hover:text-orange-900">
                  탈퇴
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
