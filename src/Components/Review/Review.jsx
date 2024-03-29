import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReviewSwiper from "./ReviewSwiper";
import ReviewListStar from "./ReviewListStar";
import { getReview } from "../../Modules/Review";
import { openModal } from "../../Modules/Modal";
import * as cookies from "../../util/cookie.js";

import "rc-pagination/assets/index.css";
import "../../custom.css";

export default function Review() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const textLimit = useRef(150);
  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getReview(pid));
  }, [dispatch, pid]);

  //data 가져오기
  const reviewList = useSelector((state) => state.review.list) || [];
  const memberInfo = useSelector((state) => state.persistedReducer);
  //사진이 있는 리뷰만 가져오기
  const photoReview = reviewList.filter((review) => review.rcover !== null);

  const [isShowMores, setIsShowMores] = useState(
    reviewList.reduce((acc, item) => {
      acc[item.rid] = false;
      return acc;
    }, {}),
  );

  const [sortList, setSortList] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const sortedData = [...reviewList];
    if (sortOption === "point") {
      setSortList(sortedData.sort((a, b) => b.point - a.point));
    } else {
      setSortList(sortedData);
    }
  }, [reviewList, sortOption]);

  //페이징처리
  const [page, setPage] = useState(1); //현재 페이지 수
  const totalReview = reviewList.length; //총 게시물 수
  const pageRange = 5; //페이지 당 보여줄 게시물 수
  const btnRange = parseInt(totalReview / pageRange + 1); //보여질 페이지 버튼의 개수

  const currentSet = Math.ceil(page / btnRange); // 현재 버튼이 몇번째 세트인지 나타내는 수
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 보여질 버튼의 첫번째 수
  const endPage = startPage + btnRange - 1; // 현재 보여질 끝 버튼의 수
  const totalSet = Math.ceil(Math.ceil(totalReview / pageRange) / btnRange); // 전체 버튼 세트 수
  const startPost = (page - 1) * pageRange + 1; // 시작 게시물 번호
  const endPost = startPost + pageRange - 1; // 끝 게시물 번호

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

  const toggleShowMore = (id) => {
    setIsShowMores((prevIsShowMores) => ({
      ...prevIsShowMores,
      [id]: !prevIsShowMores[id],
    }));
  };

  const handleOpenReviewModal = (pid) => {
    if (memberInfo.isLogin) {
      dispatch(
        openModal({
          modalType: "ReviewModal",
          isOpen: true,
          pid,
        }),
      );
      document.body.style.overflow = "hidden";
    } else {
      alert("로그인 후 작성 가능합니다.");
      cookies.setCookie("prevPage", JSON.stringify(location.pathname));
      navigate("/login");
    }
  };

  const handleOpenReviewPhotoModal = (pid, review) => {
    dispatch(
      openModal({
        modalType: "ReviewPhotoModal",
        isOpen: true,
        pid,
        review,
      }),
    );
    document.body.style.overflow = "hidden";
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
                  style={{ height: `${isNaN(rate.ratio) ? 0 : rate.ratio}%` }}
                ></div>
              </div>
              <span className="block text-sm font-semibold">{`${rate.point}점`}</span>
              <span className="text-sm text-gray-300 dark:text-gray-400">
                {isNaN(rate.ratio) ? 0 : rate.ratio}%
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
              onClick={() => handleOpenReviewModal(pid)}
              className="me-2 rounded-md border border-gray-200 bg-white px-5 py-1 text-xs font-light text-neutral-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              리뷰 작성하기
            </button>
          </div>
        </div>
      </div>
      <ReviewSwiper photoReview={photoReview} />
      <div className="my-5 flex items-center">
        <div className="mr-4 text-xs">
          <span className="mr-1 font-semibold">상품평수</span>
          <span className="text-neutral-400">{`${reviewList.length}개`}</span>
        </div>
        <div className="selectFilter ml-auto">
          <select
            id="order"
            defaultValue="date"
            className="text-xs"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="date">최신순</option>
            <option value="point">별점순</option>
          </select>
        </div>
      </div>
      {sortList.slice(startPost - 1, endPost).map((item) => (
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
              <div
                className="size-14 cursor-pointer"
                onClick={() => handleOpenReviewPhotoModal(pid, item)}
              >
                <img
                  src={`http://192.168.50.16:9091/${item.rcover}`}
                  alt=""
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        </div>
      ))}
      <nav className="mt-6">
        <ul className="flex h-8 items-center justify-center -space-x-px text-sm">
          <li>
            {currentSet > 1 && (
              <button
                onClick={() => setPage(startPage - 1)}
                className="ms-0 flex h-8 items-center justify-center px-3 leading-tight text-gray-500"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-2.5 w-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            )}
          </li>
          {Array(btnRange)
            .fill(startPage)
            .map((_, i) => {
              return (
                <li key={i}>
                  <button
                    className={`flex h-8 items-center justify-center px-3 leading-tight ${
                      page === startPage + i
                        ? `font-bold text-black`
                        : "text-gray-500"
                    }`}
                    onClick={() => setPage(startPage + i)}
                  >
                    {startPage + i}
                  </button>
                </li>
              );
            })}
          <li>
            {totalSet > currentSet && (
              <button
                className="flex h-8 items-center justify-center px-3 leading-tight text-gray-500"
                onClick={() => setPage(endPage + 1)}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-2.5 w-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
