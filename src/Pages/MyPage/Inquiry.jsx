import React from "react";

const options = [
  { label: "제목", value: 1 },
  { label: "내용", value: 2 },
  { label: "글쓴이", value: 3 },
  { label: "아이디", value: 4 },
  { label: "별명", value: 5 },
];

export default function Inquiry() {
  return (
    <div>
      <div className="@media (min-width: 768px)  @media (min-width: 1024px) text-bold gray-800 mx-auto border-b p-16 text-center text-3xl ">
        문의내역
      </div>
      <div className="mb-4 mt-8 flex justify-center gap-20  pt-20 ">
        <div className="text-xs font-bold">NO</div>
        <div className="text-xs font-bold">BOARD</div>
        <div className="text-xs font-bold">SUBJECT</div>
        <div className="text-xs font-bold">NAME</div>
        <div className="text-xs font-bold">DATE</div>
      </div>

      <div className="w-110 mx-auto  h-40 w-1/2  border-b border-t border-gray-200 pb-4 pt-20 text-center text-xs">
        주문내역이 없습니다
      </div>

      <div className="mb-6 mt-4 flex justify-center text-center">
        <select className=" form-select pr-4 text-center text-xs hover:border-gray-600">
          {options.map((option) => (
            <option className="text-left" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="w-61 mr-4 h-10 border border-gray-300 pl-4 hover:border-gray-600"
        />
        <div className="h-10 w-32 cursor-pointer border border-gray-300 bg-black pt-3 text-xs font-bold text-white hover:border-gray-100">
          찾기
        </div>
      </div>
    </div>
  );
}
