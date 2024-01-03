import React from "react";

export default function Review() {
  return (
    <div className="mx-auto mb-12 w-11/12">
      <h3 className="mt-16 text-center text-2xl lg:mt-32">Review.</h3>
      <div className="border border-gray-200 p-4 text-center">
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
            <div class="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div class="h-14 w-2 bg-black" style={{ width: "95%" }}></div>
            </div>
            <span className="block text-sm font-semibold">5점</span>
            <span class="text-sm text-gray-300 dark:text-gray-400">95%</span>
          </div>
          <div className="flex flex-col items-center">
            <div class="mb-1 flex h-14 w-2 items-end bg-gray-100 dark:bg-gray-700">
              <div class="h-14 w-2 bg-black" style={{ width: "4%" }}></div>
            </div>
            <span className="block text-sm font-semibold">4점</span>
            <span class="text-sm text-gray-300 dark:text-gray-400">4%</span>
          </div>
          <div className="flex flex-col items-center">
            <div class="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div class="h-14 w-2 bg-black" style={{ width: "0%" }}></div>
            </div>
            <span className="block text-sm font-semibold">3점</span>
            <span class="text-sm text-gray-300 dark:text-gray-400">0%</span>
          </div>
          <div className="flex flex-col items-center">
            <div class="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div class="h-14 w-2 bg-black" style={{ width: "0%" }}></div>
            </div>
            <span className="block text-sm font-semibold">2점</span>
            <span class="text-sm text-gray-300 dark:text-gray-400">0%</span>
          </div>
          <div className="flex flex-col items-center">
            <div class="mb-1 h-14 w-2 bg-gray-100 dark:bg-gray-700">
              <div class="h-14 w-2 bg-black" style={{ width: "0%" }}></div>
            </div>
            <span className="block text-sm font-semibold">1점</span>
            <span class="text-sm text-gray-300 dark:text-gray-400">0%</span>
          </div>
        </div>
        <div>
          <p className="mb-1 mt-4 text-xs text-neutral-800">
            당신의 경험을 공유해주세요!
          </p>
          <button
            type="button"
            class="me-2 rounded-md border border-gray-200 bg-white px-5 py-1 text-xs font-light text-neutral-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            리뷰 작성하기
          </button>
        </div>
      </div>
    </div>
  );
}
