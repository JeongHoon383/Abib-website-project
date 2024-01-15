import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PrivateInquiry() {
  const { register, handleSubmit, setValue, control } = useForm();
  const navigate = useNavigate();
  const memberInfo = useSelector((state) => state.persistedReducer);

  /* 
  3. memberInfo의 값
  - 로그인 했을 때 : {isLogin: true, token: (토큰값), memberId: (로그인한 아이디)}*/
  const onValid = (data) => {
    const { qTitle, qContent } = data;
    axios.post("http://127.0.0.1:9090", {
      qTitle: qTitle,
      qContent: qContent,
      mid: memberInfo.memberId,
    });
    alert("문의 등록 완료");
    navigate("/mypage");
  };

  if (!memberInfo.isLogin) navigate("/login");
  return (
    <div className="lg: mx-auto h-full w-full p-4 lg:w-[50%]">
      <div className="mx-auto pt-16 text-center text-3xl font-bold">
        1:1 문의하기
      </div>
      <p className="mx-auto pt-6 text-center text-xs">
        문의사항을 남겨주시면 운영시간 내에
        <br className="block md:hidden" />
        신속한 답변 드리겠습니다.
      </p>
      <form onSubmit={handleSubmit(onValid)} className="my-5" action="">
        <div>
          <span className="text-left text-xs font-bold leading-8">제목</span>
          <input
            type="text"
            {...register("qTitle", { required: true })}
            className="  h-8 w-full border border-gray-300 leading-8 hover:border-gray-600"
          />
        </div>
        <div className="w-full">
          <span className="text-left text-xs font-bold leading-8">이메일</span>
          <div className="flex w-full items-center space-x-2">
            <input
              value={memberInfo.memberId}
              disabled={true}
              type="text"
              className=" h-8  w-full border   border-gray-300 pl-2 leading-8 hover:border-gray-600"
            />
            <span className="text-sm">@</span>
            <input
              value={`naver.com`}
              type="text"
              disabled={true}
              className="  h-8  w-full border   border-gray-300 pl-2 leading-8 hover:border-gray-600"
            />

            <div className=" flex h-8   w-full items-center border border-gray-300">
              <input
                value={`@naver.com`}
                type="text"
                readOnly
                className="  h-8  w-full   border border-r-0 border-gray-300 leading-8  outline-none"
              />
              <FaAngleDown className="h-full" />
            </div>
          </div>
          <span className="mt-2 flex items-center space-x-1 text-xs">
            답변여부를 받으시겠습니까?
            <small className="flex items-center space-x-1">
              <input checked type="radio" name="yesorno" className="mx-1" />예
            </small>
            <small className="flex items-center space-x-1">
              <input type="radio" name="yesorno" className="mx-1" />
              아니오
            </small>
          </span>
        </div>
        <div className="mt-4">
          <span className=" text-left text-xs font-bold leading-8">
            문의내용
          </span>
          <Controller
            name="qContent"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <SimpleMdeReact {...field} />}
          />
        </div>
        <div className="mt-5 w-full   border-t border-black">
          <button type="submit"></button>
          <div className="mx-auto mt-5 w-full bg-black px-8 py-4 text-center text-xs text-white lg:w-1/2">
            <button className="h-full w-full"> 문의하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

/*   <div className="mx-auto border border-red-500 p-1">
 
      <p className="mx-auto pt-6 text-center text-xs">
        문의사항을 남겨주시면 운영시간 내에 신속한 답변 드리겠습니다.
      </p>

      <div className=" text-bold flex w-full flex-col border-b border-gray-200 text-xs">
        <div className="mx-auto mt-5 w-3/5 justify-center ">
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
    </div> */
