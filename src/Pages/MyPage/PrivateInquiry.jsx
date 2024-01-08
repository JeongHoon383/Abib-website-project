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
    <>
      <div className="mx-auto pt-16 text-center text-3xl font-bold">
        1:1 문의하기
      </div>
      <p className="mx-auto pt-6 text-center text-xs">
        문의사항을 남겨주시면 운영시간 내에 신속한 답변 드리겠습니다.
      </p>

      <div className="">
        <div className="">
          <p className="-ml-96 pb-2 pt-10 text-center text-xs font-bold">
            제목
          </p>
          <input
            type="text"
            className="mx-auto flex h-10 w-full max-w-lg border border-gray-300 hover:border-gray-600"
          />
        </div>

        <div>
          <p className="mr-96 pb-2 pt-10 text-center text-xs font-bold">
            이메일
          </p>

          <div className="flex justify-center gap-3 ">
            <div>
              <input
                type="text"
                className="mx-auto ml-5 flex h-10 w-40 border border-gray-300  hover:border-gray-600"
              />
            </div>
            <div className="pt-3 text-xs">@</div>
            <div>
              <input
                type="text"
                className="mx-auto flex h-10  w-40 border border-gray-300  hover:border-gray-600"
              />
            </div>
            <div>
              <input
                type="text"
                className="mx-auto flex h-10 w-40 border border-gray-300  hover:border-gray-600"
              />
            </div>
          </div>

          <div className="flex justify-center ">
            <p className="flex pb-3 pl-10 pr-52 pt-3 text-xs">
              답변여부를 이메일로 받으시겠습니까?{" "}
            </p>

            <div className="pr-3 pt-3 text-center text-xs">
              예{" "}
              <label>
                <input type="radio" name="radioExample" value="" />
              </label>
            </div>

            <div className="pr-10 pt-3 text-xs">
              아니오{" "}
              <label>
                <input type="radio" name="radioExample" value="" />
              </label>
            </div>
          </div>
        </div>

        <div>
          <p className="mr-96 pb-2 pt-10 text-center text-xs font-bold">
            문의내용
          </p>

          <input
            type="text"
            value={val}
            onChange={handleChange}
            className="mx-auto flex h-60 w-full max-w-lg border border-gray-300  hover:border-gray-600"
          ></input>
        </div>
      </div>

      <div className="mx-auto mb-10 h-1 w-full max-w-lg border pb-10 text-center text-xs">
        <h5 className="flex-left mt-3 text-xs ">문자 : {val.length}</h5>
      </div>
    </>
  );
}

// 게사판
// https://bigexecution.tistory.com/8
