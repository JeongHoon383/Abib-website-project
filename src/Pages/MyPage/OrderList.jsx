import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function OrderList() {
  const [date, setDate] = useState();
  const params = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orderData"],
    queryFn: () =>
      axios
        .get(`http://127.0.0.1:9090/orderlist/${params.id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });
  console.log(data, params);
  return (
    <div className="mx-auto w-[80%]   text-center">
      <div className="  text-bold mx-auto mb-20 border-b border-black p-16 text-center text-3xl">
        주문내역
      </div>

      <div className=" mx-auto flex justify-center max-sm:flex-col">
        <div className="">
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
        </div>

        <div className="max-sm:mt-2">
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
          <button
            typ="button"
            className="h-8 w-12 border border-gray-300 bg-black text-xs text-white hover:text-gray-300"
          >
            조회
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="leading-1 text-center text-xs max-sm:tracking-tighter">
          기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을
          조회하실 수 있습니다.
        </p>

        <p className=" leading-1 text-center text-xs max-sm:tracking-tighter">
          주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인할 수 있습니다.
        </p>

        <p className=" leading-1 text-center text-xs max-sm:tracking-tighter">
          취소/교환/반품 신청은 주문 완료일 기준 30일까지 가능합니다.
        </p>
      </div>

      <Table striped bordered hover className="mt-5 w-full space-y-3 ">
        <thead className="border-b-2 border-gray-400">
          <tr className="text-xs md:text-sm">
            <th className="border border-gray-400">#DATE</th>
            <th className="border border-gray-400">ORDER</th>
            <th className="border border-gray-400">PRODUCT</th>
            <th className="border border-gray-400">PRICE</th>
            <th className="border border-gray-400">STATUS</th>
          </tr>
        </thead>
        <tbody className="text-xs md:text-sm">
          <tr className="border-b border-gray-400">
            <td>2024-01-15</td>
            <td> 3</td>
            <td>어성초 패드 크림</td>
            <td>83,000</td>
            <td>
              배송 <br className="block md:hidden" />
              준비중
            </td>
          </tr>
        </tbody>
      </Table>

      {/* <div className=" mt-8 flex justify-center gap-20 border-b border-gray-200  pb-5  pt-20 max-sm:gap-5 ">
        <div className="text-xs font-bold">DATE</div>
        <div className="text-xs font-bold">ORDER #</div>
        <div className="text-xs font-bold">PRODUCT</div>
        <div className="text-xs font-bold">PRICE</div>
        <div className="text-xs font-bold">STATUS</div>
      </div>
      <div className="  mt-4 flex justify-center gap-20 text-xs   max-sm:gap-5 ">
        <div>2024-01-15</div>
        <div>ORDER #</div>
        <div>PRODUCT</div>
        <div>PRICE</div>
        <div>STATUS</div>
      </div>
 */}
      <div className="w-110  mx-auto h-40  w-1/2 border-b   border-gray-200 pb-4 pt-20 text-xs">
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
