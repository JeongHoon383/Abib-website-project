import Pagination from "rc-pagination";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReviewSwiper from "./ReviewSwiper";
import ReviewListStar from "./ReviewListStar";
import ReviewModal from "./ReviewModal";
import { getReview } from "../../Modules/Review";

import "rc-pagination/assets/index.css";
import "../../custom.css";

export const ReviewContext = createContext({});

export default function Review() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const textLimit = useRef(150);
  const reviewList = useSelector((state) => state.review.reviews.list);
  const [modalOpen, setModalOpen] = useState(false);
  const [isShowMores, setIsShowMores] = useState(
    reviewList.reduce((acc, item) => {
      acc[item.rid] = false;
      return acc;
    }, {}),
  );

  //페이징 처리
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [totalCount, setTotalCount] = useState(6); //전체 데이터 수
  const [pageSize, setPageSize] = useState(5); //페이지 당 데이터 수

  const photoReview = reviewList.filter((review) => review.rcover !== null);

  // 별점 평균 계산
  const sum = reviewList.reduce((sum, review) => sum + review.point, 0);
  const average = (sum / reviewList.length).toFixed(1);

  // point의 개수를 저장할 객체
  const pointCounts = {};

  // point 개수 계산
  reviewList.forEach((review) => {
    const { point } = review;
    pointCounts[point] = (pointCounts[point] || 0) + 1;
  });

  // 1점부터 5점까지의 정보를 가진 객체 배열 생성
  const allPoints = Array.from({ length: 5 }, (_, index) => ({
    point: index + 1,
    count: pointCounts[index + 1] || 0,
  }));

  // 전체 리뷰 개수
  const totalReviews = reviewList.length;

  // 역순으로 정렬
  const sortedPoints = allPoints.reverse();

  // 각 점수의 비율 계산
  const pointRatios = sortedPoints.map((pointInfo) => ({
    point: pointInfo.point,
    ratio: parseInt((pointInfo.count / totalReviews) * 100),
  }));

  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getReview(pid));
  }, [dispatch, pid]);

  const showModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const toggleShowMore = (id) => {
    setIsShowMores((prevIsShowMores) => ({
      ...prevIsShowMores,
      [id]: !prevIsShowMores[id],
    }));
  };

  return (
    <div className="mx-auto mb-12 w-11/12 sm:w-10/12 lg:w-8/12">
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
          <span className="text-2xl font-bold text-black">
            {isNaN(average) ? 0 : average}
          </span>
          <span className="text-2xl text-neutral-400"> /5</span>
        </div>
        <p className="mb-4 text-xs font-light text-neutral-800">
          <span>{reviewList.length}</span>
          <span className="text-neutral-400"> 개의 리뷰가 있습니다</span>
        </p>
        <div
          id="rateChart"
          className="flex justify-evenly border-y border-gray-200 py-4"
        >
          {pointRatios.map((rate) => (
            <div key={rate.point} className="flex flex-col items-center">
              <div className="mb-1 flex h-14 w-2 items-end bg-gray-100 dark:bg-gray-700">
                <div
                  className="h-14 w-2 bg-black"
                  style={{ height: `${rate.ratio}%` }}
                ></div>
              </div>
              <span className="block text-sm font-semibold">{`${rate.point}점`}</span>
              <span className="text-sm text-gray-300 dark:text-gray-400">
                {rate.ratio}%
              </span>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-1 mt-4 text-xs text-neutral-800">
            당신의 경험을 공유해주세요!
          </p>
          <div>
            <button
              type="button"
              onClick={showModal}
              className="me-2 rounded-md border border-gray-200 bg-white px-5 py-1 text-xs font-light text-neutral-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              리뷰 작성하기
            </button>
            {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
          </div>
        </div>
      </div>
      <ReviewContext.Provider value={{ reviewList, average }}>
        <ReviewSwiper photoReview={photoReview} />
      </ReviewContext.Provider>
      <div className="my-5 flex items-center">
        <div className="mr-4 text-xs">
          <span className="mr-1 font-semibold">상품평수</span>
          <span className="text-neutral-400">{`${reviewList.length}개`}</span>
        </div>
        <div className="selectFilter ml-auto">
          <select id="order" defaultValue="최신순" className="text-xs">
            <option value="추천순">추천순</option>
            <option value="별점순">별점순</option>
            <option value="최신순">최신순</option>
          </select>
        </div>
      </div>
      {reviewList
        .slice()
        .reverse()
        .map((item) => (
          <div className="border-y border-gray-200 py-3" key={item.rid}>
            <div className="flex">
              <ReviewListStar rate={item.point} />
              <span className="ml-2 text-sm font-thin">{item.point}.0</span>
              <span className="ml-auto text-sm text-gray-400">
                {item.rdate.split("T")[0]}
              </span>
            </div>
            <span className="text-sm text-gray-400">
              {item.mid.slice(0, -3) + "*".repeat(3)}
            </span>
            <div>
              <span className="mb-1 inline-block text-sm">
                {item.content.length > textLimit.current
                  ? isShowMores[item.rid]
                    ? item.content
                    : item.content.slice(0, textLimit.current)
                  : item.content}
                <span
                  id="content-toggle"
                  className="mb-2 cursor-pointer text-sm text-gray-400"
                  onClick={() => toggleShowMore(item.rid)}
                >
                  {item.content.length > textLimit.current &&
                    (isShowMores[item.rid] ? "[접기]" : " ...[더보기]")}
                </span>
              </span>

              {item.rcover && (
                <div className="size-14">
                  <img src={`/${item.rcover}`} alt="" className="w-full" />
                </div>
              )}
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
