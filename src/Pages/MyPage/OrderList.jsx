import React from "react";
import { useState } from "react";

export default function OrderList() {
  const [date, setDate] = useState();

  console.log("date", date);
  return (
    <div className="mx-auto text-center">
      <div className="@media (min-width: 768px)  @media (min-width: 1024px) text-bold mx-auto border-b p-16 text-center text-3xl ">
        주문내역
      </div>

      <div className=" mx-auto flex justify-center">
        <button
          type="button"
          className="mr-1 h-8 w-12 border border-gray-300 text-xs hover:text-gray-300"
        >
          오늘
        </button>
        <button
          type="button"
          className="mr-1 h-8 w-12 border border-gray-300 text-xs hover:text-gray-300"
        >
          일주일
        </button>
        <button
          type="button"
          className="mr-1 h-8 w-12 border border-gray-300 text-xs hover:text-gray-300"
        >
          1개월
        </button>
        <button
          type="button"
          className="mr-1 h-8 w-12 border border-gray-300 text-xs hover:text-gray-300"
        >
          3개월
        </button>
        <button
          type="button"
          className="mr-1 h-8 w-12 border border-gray-300 text-xs hover:text-gray-300"
        >
          6개월
        </button>

        <div>
          <input
            type="date"
            className="mr-1 h-8 border border-gray-300 text-center text-xs "
            onChange={(e) => setDate(e.target.value)}
          />
          ~
          <input
            type="date"
            className="mr-1 h-8 border border-gray-300 text-center text-xs "
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          typ="button"
          className="h-8 w-12 border border-gray-300 bg-black text-xs text-white hover:text-gray-300"
        >
          조회
        </button>
      </div>

      <div className="mt-4">
        <p className="text-center text-xs  leading-6">
          기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을
          조회하실 수 있습니다.
        </p>

        <p className="text-center text-xs leading-6">
          주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수
          있습니다.
        </p>

        <p className="text-center text-xs leading-6">
          취소/교환/반품 신청은 주문 완료일 기준 30일까지 가능합니다.
        </p>
      </div>

      <div className="mb-4 mt-8 flex justify-center gap-20  pt-20 ">
        <div className="text-xs font-bold">DATE</div>
        <div className="text-xs font-bold">ORDER #</div>
        <div className="text-xs font-bold">PRODUCT</div>
        <div className="text-xs font-bold">PRICE</div>
        <div className="text-xs font-bold">STATUS</div>
      </div>

      <div className="w-110  mx-auto h-40  w-1/2 border-b border-t border-gray-200 pb-4 pt-20 text-xs">
        주문내역이 없습니다
      </div>

      <div className="mx-auto flex justify-center gap-10 pb-20 pt-4  ">
        <div className=" text-bold cursor-pointer text-gray-300 hover:text-black">
          Previous
        </div>
        <div>1</div>
        <div className="text-bold cursor-pointer text-gray-300  hover:text-black">
          Next
        </div>
      </div>
    </div>
  );
}
