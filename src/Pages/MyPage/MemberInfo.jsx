import React from "react";

export default function MemberInfo() {
  return (
    <>
      <div className="mx-auto">
        <div className="text-bold @media (min-width: 768px)  @media (min-width: 1024px) text-bold border-b-1 mx-auto border-b border-black  p-16 text-center text-3xl ">
          Profile.
        </div>

        <div className=" text-bold flex flex-col border-b border-gray-200 text-xs">
          <div className="mx-auto mt-20 flex justify-center text-xs font-bold leading-4">
            계정 정보
          </div>

          <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
            <p className="text-left text-xs font-bold leading-8">아이디</p>
            <input
              type="text"
              className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
            />
            <p className="flex-start mb-5 text-left text-xs leading-5">
              (영문소문자/숫자, 4~16자)
            </p>
          </div>

          <div className="flex-start mx-auto mt-10 w-2/5 justify-center text-center leading-8">
            <p className="text-left text-xs font-bold leading-8">
              비밀번호 변경
            </p>
            <input
              type="text"
              className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
            />
            <p className="flex-start mb-5 text-left text-xs leading-5">
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
            </p>
          </div>

          <div className="flex-start mx-auto mt-10 w-2/5 justify-center text-center leading-8">
            <p className=" text-left text-xs  font-bold leading-8">
              비밀번호 변경 확인
            </p>
            <input
              type="text"
              className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
            />
            <p className="flex-start mb-20 text-xs leading-5"></p>
          </div>
        </div>

        <div className="text-bold   text-xs  leading-8">
          <div className=" mx-auto mt-20 flex justify-center text-center text-xs font-bold  leading-8">
            개인 정보
          </div>

          <div>
            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                이름
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="mt-10 flex items-center justify-center text-center leading-8">
              <div className="mt-5 justify-center">
                <p className="text-left text-xs font-bold leading-8">
                  우편번호
                </p>
                <input
                  type="text"
                  className=" h-10 w-56 border border-gray-300 leading-8 hover:border-gray-600"
                />
              </div>

              <div className="ml-4 justify-center">
                <p className="flex-2 mt-5 text-left text-xs font-bold leading-8">
                  우편번호 찾기
                </p>
                <div
                  type=""
                  className="h-10 w-56 border border-gray-300 bg-black text-xs leading-8 text-white hover:text-gray-300"
                >
                  POSTAL CODE
                </div>
              </div>
            </div>

            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                기본주소
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                나머지 주소
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                휴대폰
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                이메일
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                생년월일
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
              <div className="mt-20 text-left text-xs font-bold leading-8">
                페이스북
              </div>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="text-center">
              <div className="flex-start mx-auto mt-20 w-2/5 justify-center text-center leading-8">
                <div className="mt-20 text-left text-xs font-bold leading-8">
                  인스타그램
                </div>
                <input
                  type="text"
                  className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                />
              </div>

              <div className="border-t-1 border-black">
                <div className="h-13 @media (min-width: 768px) @media (min-width: 1024px) ml- box-borderw-full mx-auto  	mt-20  w-2/5  cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 ">
                  수정
                </div>

                <div className="h-13 @media (min-width: 768px) @media (min-width: 1024px) ml- mx-auto mt-5  	box-border w-2/5    cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 ">
                  취소
                </div>

                <div className="bt-5 @media (min-width: 768px) @media (min-width: 1024px) ml- h-13 ㄴ mx-auto mb-10   mt-5	 box-border w-2/5 cursor-pointer border border-gray-600 bg-orange-900 p-4 text-center text-xs font-bold leading-6 text-white hover:bg-gray-100 hover:text-orange-900">
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
