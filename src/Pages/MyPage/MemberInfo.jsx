import React from "react";

export default function MemberInfo() {
  return (
    <>
      <div className=" mx-auto ">
        <div className="text-bold text-bold border-b-1 mx-auto border-b border-black  p-16 text-center text-3xl ">
          Profile.
        </div>

        <div className="text-bold flex flex-col border-b border-gray-200 text-xs">
          <div className="mx-auto mt-5 w-4/5 justify-center ">
            <p className="mt-5 text-left text-xs leading-8 ">개인</p>
          </div>
          <div className="mx-auto mt-20 flex justify-center text-xs font-bold leading-4">
            계정 정보
          </div>

          <div className="mx-auto mt-5 w-4/5 justify-center max-sm:w-screen max-sm:p-1">
            <p className="text-left text-xs font-bold leading-8">아이디</p>
            <input
              type="text"
              className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
            />
            <p className="flex-start mb-5 text-left text-xs leading-5">
              (영문소문자/숫자, 4~16자)
            </p>
          </div>

          <div className="mx-auto mt-5 flex w-4/5 justify-center gap-2 max-sm:w-screen max-sm:p-1">
            <div className="w-1/2">
              <p className=" text-left text-xs font-bold leading-8">
                비밀번호 변경
              </p>
              <input
                type="text"
                className="h-10 w-full border border-gray-300 bg-gray-100 leading-8 hover:border-gray-600"
              />
              <p className="flex-start mb-5 text-left text-xs leading-5">
                (영문소문자/숫자, 4~16자)
              </p>
            </div>

            <div className="w-1/2">
              <p className="text-left text-xs font-bold leading-8">
                비밀번호 변경 확인
              </p>
              <input
                type="text"
                className="h-10 w-full border border-gray-300 bg-gray-100 leading-8 hover:border-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="text-bold   text-xs  leading-8">
          <div className=" mx-auto mt-20 flex justify-center text-center text-xs font-bold  leading-8">
            개인 정보
          </div>

          <div>
            <div className="mx-auto mt-5 w-4/5 justify-center max-sm:w-screen max-sm:p-1">
              <p className="text-left text-xs font-bold leading-8">이름</p>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="mx-auto mt-5 flex w-4/5 justify-center gap-2 max-sm:w-screen max-sm:p-1">
              <div className="w-2/3">
                <p className=" text-left text-xs font-bold leading-8">
                  우편번호
                </p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                />
              </div>

              <div className="w-1/3">
                <p className="text-left text-xs font-bold leading-8">
                  우편번호 찾기
                </p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 bg-black text-center font-bold leading-8 text-white  hover:cursor-pointer hover:border-black hover:bg-gray-200 hover:text-gray-200"
                  placeholder="POSTAL CODE"
                />
              </div>
            </div>

            <div className="mx-auto mt-5 w-4/5 justify-center max-sm:w-screen max-sm:p-1">
              <p className="text-left text-xs font-bold leading-8">기본주소</p>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="mx-auto mt-5 w-4/5 justify-center max-sm:w-screen max-sm:p-1">
              <p className="text-left text-xs font-bold leading-8">
                나머지주소
              </p>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="mx-auto mt-5 flex w-4/5 gap-2  max-sm:w-screen">
              <div className="flex ">
                <div className="max-xm:w-1/3 w-2/6 max-sm:p-1">
                  <p className=" text-left text-xs font-bold leading-8">
                    휴대폰
                  </p>
                  <input
                    type="text"
                    className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                  />
                </div>
                <div className="mt-10">-</div>
                <div className="max-xm:w-1/3 w-2/6">
                  <p className="text-left text-xs font-bold leading-8 text-white">
                    우편번호
                  </p>
                  <input
                    type="text"
                    className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                  />
                </div>
                <div className="mt-10">-</div>

                <div className="max-xm:w-1/3 w-2/6">
                  <p className="text-left text-xs font-bold leading-8 text-white">
                    우편번호
                  </p>
                  <input
                    type="text"
                    className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto w-4/5  justify-center max-sm:w-screen max-sm:p-1">
              <p className="text-left text-xs leading-8">
                쇼핑몰에서 제공하는 이벤트 소식을 SMS로 받으시겠습니까?
              </p>
            </div>

            <div className="mx-auto  w-4/5 justify-center max-sm:w-screen">
              <p className="text-left text-xs leading-8">
                <div className="flex max-sm:ml-2">
                  <div className="ml-0 pr-3 text-center text-xs">
                    예{" "}
                    <label>
                      <input type="radio" name="radioExample" value="" />
                    </label>
                  </div>

                  <div className="text-xs">
                    아니오{" "}
                    <label>
                      <input type="radio" name="radioExample" value="" />
                    </label>
                  </div>
                </div>
              </p>
            </div>

            <div className="mx-auto mt-5 flex w-4/5 gap-2 max-sm:w-screen  max-sm:p-1">
              <div className="w-1/6 max-sm:w-2/6">
                <p className="text-left text-xs font-bold leading-8">이메일</p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                />
              </div>
              <div className="mt-10">@</div>
              <div className="w-1/6  max-sm:w-3/6">
                <p className="text-left text-xs font-bold leading-8 text-white">
                  우편번호
                </p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
                />
              </div>
            </div>

            <div className="mx-auto mt-5 w-4/5 justify-center max-sm:w-screen max-sm:p-1">
              <p className="text-left text-xs font-bold leading-8">생년월일</p>
              <input
                type="text"
                className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
              />
            </div>

            <div className="mx-auto mt-5 flex w-4/5 justify-center gap-2 max-sm:w-screen max-sm:p-1">
              <div className="w-1/2">
                <p className=" text-left text-xs font-bold leading-8">
                  페이스북
                </p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300  leading-8 hover:border-gray-600"
                />
                <p className="flex-start mb-5 text-left text-xs leading-5"></p>
              </div>

              <div className="w-1/2">
                <p className="text-left text-xs font-bold leading-8">
                  인스타그램
                </p>
                <input
                  type="text"
                  className="h-10 w-full border border-gray-300  leading-8 hover:border-gray-600"
                />
              </div>
            </div>

            <div className="mt-10 border border-b-black border-t-white text-white"></div>

            <div className="text-center">
              <div className="border-t-1 border-black">
                <div className="h-13  box-borderw-full mx-auto mt-20  	w-2/5  cursor-pointer  border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 max-sm:w-screen ">
                  수정
                </div>

                <div className="h-13 mx-auto mt-5 box-border  	w-2/5 cursor-pointer    border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 max-sm:w-screen ">
                  취소
                </div>

                <div className="bt-5 h-13 ㄴ mx-auto mb-10 mt-5   box-border	 w-2/5 cursor-pointer border border-gray-600 bg-orange-900 p-4 text-center text-xs font-bold leading-6 text-white hover:bg-gray-100 hover:text-orange-900 max-sm:w-screen">
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
