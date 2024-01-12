import React from "react";
import { useState } from "react";

export default function PrivateInquiry() {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    const data = e.target.value.split("");
    console.log(data);

    if (data.length <= 10) {
      setVal(e.target.value);
      if (e.target.value) {
      }
    } else {
      alert("10 자 미만으로 작성해주세요");
    }
  };

  return (
    <div className="mx-auto p-1 ">
      <div className="mx-auto pt-16 text-center text-3xl font-bold">
        1:1 문의하기
      </div>
      <p className="mx-auto pt-6 text-center text-xs">
        문의사항을 남겨주시면 운영시간 내에 신속한 답변 드리겠습니다.
      </p>

      <div className=" text-bold flex flex-col border-b border-gray-200 text-xs">
        <div className="mx-auto mt-5 w-3/5 justify-center max-sm:w-screen">
          <p className="text-left text-xs font-bold leading-8">제목</p>
          <input
            type="text"
            className=" h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
          />
        </div>

        <div className="mx-auto mt-5 flex w-3/5 justify-center gap-2 max-sm:w-screen">
          <div className="w-2/4">
            <p className=" text-left text-xs font-bold leading-8">이메일</p>
            <input
              type="text"
              className="h-10 w-full border border-gray-300  leading-8 hover:border-gray-600"
            />
            <div>
              <p className="flex-start mb-5 text-left text-xs leading-5 max-sm:tracking-tighter">
                메일로 받으시겠습니까?
              </p>
            </div>
          </div>

          <div className="mt-10 tracking-tighter">@</div>
          <div className="w-1/7">
            <p className="text-left text-xs font-bold leading-8 text-white">
              비밀번호 변경 확인
            </p>
            <input
              type="text"
              className="h-10 w-full border border-gray-300 leading-8 hover:border-gray-600"
            />
          </div>
          <div className="w-2/5">
            <p className="text-left text-xs font-bold leading-8 text-white">
              비밀번호 변경 확인
            </p>
            <input
              type="text"
              className="h-10 w-full border border-gray-300  leading-8 hover:border-gray-600"
            />
            <div className="flex">
              <div className="flex pr-3 pt-1 text-center text-xs">
                <span>예 </span>
                <label>
                  <input type="radio" name="radioExample" value="" />
                </label>
              </div>

              <div className="flex pt-1 text-xs">
                <span className="mr-2 flex text-xs max-sm:tracking-tighter">
                  아니오{" "}
                </span>
                <label>
                  <input
                    className=""
                    type="radio"
                    name="radioExample"
                    value=""
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classname="">
        <div className=" text-bold flex flex-col  border-gray-200 text-xs">
          <div className="mx-auto mt-5 w-3/5 justify-center max-sm:w-screen">
            <p className="text-left text-xs font-bold leading-8">문의내용</p>
            <input
              type="text"
              value={val}
              onChange={handleChange}
              className=" h-60 w-full border border-gray-300 leading-8 hover:border-gray-600"
            />
          </div>
          <div className="mx-auto mb-10 h-1 w-full max-w-lg border pb-10 text-center text-xs">
            <h5 className="flex-left mt-3 text-xs ">문자 : {val.length}</h5>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-5 box-border h-10  	w-2/5 cursor-pointer border border-gray-600 bg-black pt-2 text-center text-xs font-bold leading-6 text-white hover:bg-gray-100 hover:text-gray-600 max-sm:w-screen">
        문의하기
      </div>
    </div>
  );
}
