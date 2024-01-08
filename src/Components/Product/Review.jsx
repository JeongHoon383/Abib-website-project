import Pagination from "rc-pagination";
import React, { useRef, useState } from "react";
import ReviewSwiper from "./ReviewSwiper";
import ReviewStar from "./ReviewStar";

import "rc-pagination/assets/index.css";
import "../../custom.css";

export default function Review() {
  const textLimit = useRef(150);
  const reviewItems = [
    {
      id: 1,
      content: "Lorem ipsum, dolor sit amet consectetur",
      img: "https://i.pinimg.com/564x/6b/2c/d6/6b2cd67bb34ca4ad57ab98a9d64e74fd.jpg",
    },
    {
      id: 2,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi pariatur vel ducimus fugit expedita vero optio, laborum, natus, veniam ipsum dolorum nulla suscipit voluptate at. Blanditiis iure rem facere.",
      img: "https://i.pinimg.com/564x/6b/2c/d6/6b2cd67bb34ca4ad57ab98a9d64e74fd.jpg",
    },
    {
      id: 3,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi pariatur vel ducimus fugit expedita vero optio, laborum, natus, veniam ipsum dolorum nulla suscipit voluptate at. Blanditiis iure rem facere.",
    },
    {
      id: 4,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi pariatur vel ducimus fugit expedita vero optio, laborum, natus, veniam ipsum dolorum nulla suscipit voluptate at. Blanditiis iure rem facere.",
      img: "https://i.pinimg.com/564x/6b/2c/d6/6b2cd67bb34ca4ad57ab98a9d64e74fd.jpg",
    },
    {
      id: 5,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi pariatur vel ducimus fugit expedita vero optio, laborum, natus, veniam ipsum dolorum nulla suscipit voluptate at. Blanditiis iure rem facere.",
    },
    {
      id: 6,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi pariatur vel ducimus fugit expedita vero optio, laborum, natus, veniam ipsum dolorum nulla suscipit voluptate at. Blanditiis iure rem facere.",
    },
  ];

  const [isShowMores, setIsShowMores] = useState(
    reviewItems.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {}),
  );

  const toggleShowMore = (id) => {
    setIsShowMores((prevIsShowMores) => ({
      ...prevIsShowMores,
      [id]: !prevIsShowMores[id],
    }));
  };

  //페이징 처리
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [totalCount, setTotalCount] = useState(6); //전체 데이터 수
  const [pageSize, setPageSize] = useState(5); //페이지 당 데이터 수

  return (
    <div className="mx-auto mb-12 w-11/12 sm:w-10/12">
      <h3 className="mt-16 text-center text-2xl lg:mt-32">Review.</h3>
      <div className="mb-4 border border-gray-200 p-4 text-center">
        <p className="text-sm font-light text-neutral-800">상품만족도</p>
        <div id="rateNum">
          <svg
            className="inline-block h-6 w-6 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 30"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="text-2xl font-bold text-black">4.9</span>{" "}
          <span className="text-2xl text-neutral-400"> /5</span>
        </div>
        <p className="mb-4 text-xs font-light text-neutral-800">
          <span>1194</span>
          <span className="text-neutral-400"> 개의 리뷰가 있습니다</span>
        </p>
        <div
          id="rateChart"
          className="flex justify-evenly border-y border-gray-200 py-4"
        >
          <div className="flex flex-col items-center">
            <div className="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div className="h-14 w-2 bg-black" style={{ width: "95%" }}></div>
            </div>
            <span className="block text-sm font-semibold">5점</span>
            <span className="text-sm text-gray-300 dark:text-gray-400">
              95%
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 flex h-14 w-2 items-end bg-gray-100 dark:bg-gray-700">
              <div className="h-14 w-2 bg-black" style={{ height: "4%" }}></div>
            </div>
            <span className="block text-sm font-semibold">4점</span>
            <span className="text-sm text-gray-300 dark:text-gray-400">4%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div className="h-14 w-2 bg-black" style={{ width: "0%" }}></div>
            </div>
            <span className="block text-sm font-semibold">3점</span>
            <span className="text-sm text-gray-300 dark:text-gray-400">0%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div className="h-14 w-2 bg-black" style={{ width: "0%" }}></div>
            </div>
            <span className="block text-sm font-semibold">2점</span>
            <span className="text-sm text-gray-300 dark:text-gray-400">0%</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div className="h-14 w-2 bg-black" style={{ width: "0%" }}></div>
            </div>
            <span className="block text-sm font-semibold">1점</span>
            <span className="text-sm text-gray-300 dark:text-gray-400">0%</span>
          </div>
        </div>
        <div>
          <p className="mb-1 mt-4 text-xs text-neutral-800">
            당신의 경험을 공유해주세요!
          </p>
          <button
            type="button"
            className="me-2 rounded-md border border-gray-200 bg-white px-5 py-1 text-xs font-light text-neutral-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            리뷰 작성하기
          </button>
        </div>
      </div>
      <ReviewSwiper />
      <div className="my-5 flex items-center">
        <div className="mr-4 text-xs">
          <span className="mr-1 font-semibold">상품평수</span>
          <span className="text-neutral-400">554개</span>
        </div>
        <div className="reviewSearch">
          <form>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="mx-auto block rounded-sm border border-gray-300 bg-gray-50 px-3 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="text-md absolute end-0 top-0 mr-2 h-full font-medium text-gray-700 dark:bg-blue-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>
        <div className="selectFilter ml-auto">
          <select id="order" defaultValue="최신순" className="text-xs">
            <option value="추천순">추천순</option>
            <option value="별점순">별점순</option>
            <option value="최신순">최신순</option>
          </select>
        </div>
      </div>
      {reviewItems.map((item) => (
        <div className="border-y border-gray-200 py-3" key={item.id}>
          <div className="flex">
            <ReviewStar />
            <span className="ml-2 text-sm font-thin">5.0</span>
            <span className="ml-auto text-sm text-gray-400">2023-12-14</span>
          </div>
          <span className="text-sm text-gray-400">36423***</span>
          <div>
            <span className="mb-1 inline-block text-sm">
              {item.content.length > textLimit.current
                ? isShowMores[item.id]
                  ? item.content
                  : item.content.slice(0, textLimit.current)
                : item.content}
            </span>
            <div
              id="content-toggle"
              className="mb-2 inline-block cursor-pointer text-sm text-gray-400"
              onClick={() => toggleShowMore(item.id)}
            >
              {item.content.length > textLimit.current &&
                (isShowMores[item.id] ? "[접기]" : " ...[더보기]")}
            </div>
            {item.img && <img src={item.img} alt="" className="size-14" />}
          </div>
        </div>
      ))}
      <Pagination
        total={totalCount}
        current={currentPage}
        pageSize={pageSize}
        onChange={
          (page) => setCurrentPage(page) //클릭시 현페이지로 바꾸기
        }
        className="flex justify-center"
      />
    </div>
  );
}
