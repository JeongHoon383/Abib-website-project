import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Modules/Products";
import { closeModal } from "../../Modules/Modal";
import { getReview } from "../../Modules/Review";
import ReviewListStar from "./ReviewListStar";

export default function ReviewPhotoModal({ review, pid, modalTop }) {
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.review.list);
  const product = useSelector((state) => state.product.productDetail.data);
  const average = (
    reviewList.reduce((sum, review) => sum + review.point, 0) /
    reviewList.length
  ).toFixed(1);

  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getProductDetail(pid));
    dispatch(getReview(pid));
  }, [dispatch, pid]);

  const handleModalClose = () => {
    dispatch(closeModal());
    document.body.style.overflow = "unset";
  };

  return (
    <div
      style={{
        top: "50%",
      }}
      className="fixed left-1/2 flex h-96 w-64 -translate-x-1/2 -translate-y-1/2 transform flex-col rounded bg-white text-black sm:w-[30rem] md:w-[45rem] md:flex-row lg:w-[55rem] xl:w-[62rem]"
    >
      {/* photo */}
      <div className="h-48 bg-black md:h-auto">
        <img
          className="mx-auto h-full w-full object-contain"
          src={`http://192.168.50.16:9091/${review.rcover}`}
          alt=""
        />
      </div>
      {/* content */}
      <div className="bg-white p-2 xl:mx-auto">
        <div className="flex border-b p-2">
          <div className="mr-1 h-[50px] w-[50px]">
            <img
              src={`http://192.168.50.16:9091/uploads/${product.cover}`}
              className="rounded-full"
              alt=""
            />
          </div>
          <div>
            <span className="block text-sm">
              {product.title.includes("/")
                ? product.title.replace("/", " ")
                : product.title}
            </span>
            <div className="flex">
              <div className="mr-3">
                <span className="mr-1 text-sm font-thin text-gray-500">
                  평점
                </span>
                <span className="text-sm font-thin">{average}</span>
              </div>
              <div>
                <span className="mr-1 text-sm font-thin text-gray-500">
                  리뷰
                </span>
                <span className="text-sm font-thin">{reviewList.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex">
            <ReviewListStar rate={review.point} />
            <span className="ml-1">{review.point}</span>
          </div>
          <p className="mb-20 text-sm md:mb-44">{review.content}</p>
          <div className="flex text-sm">
            <span>{review.mid.slice(0, -3) + "*".repeat(3)}</span>
            <span className="ml-auto">{review.rdate.split("T")[0]}</span>
          </div>
        </div>
      </div>
      <button
        onClick={handleModalClose}
        type="button"
        className="min-[390px]: absolute -top-4 right-0 bg-transparent text-sm text-white md:right-0 md:top-[-2rem] lg:right-0 lg:top-[-2rem]"
      >
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}
