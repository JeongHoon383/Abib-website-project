import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewContext } from "./Review";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../Modules/Products";

export default function ReviewPhotoModal({
  closeModal,
  review,
  setSelectedReview,
  ReviewListStar,
}) {
  const { pid } = useParams();
  const dispatch = useDispatch();
  let { reviewList, average } = useContext(ReviewContext);
  const product = useSelector((state) => state.product.productDetail.data);

  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getProductDetail(pid));
  }, [dispatch, pid]);

  return (
    <div className="absolute top-28 flex h-96 w-[22rem] flex-col rounded bg-white text-black min-[390px]:top-52 sm:w-[30rem] md:top-[28rem] md:w-[45rem] md:flex-row lg:top-[35rem] lg:w-[55rem] xl:top-64 xl:w-[62rem]">
      {/* photo */}
      <div className="bg-black">
        <img
          className="mx-auto object-contain md:h-full"
          src={`/${review.rcover}`}
          alt=""
        />
      </div>
      {/* content */}
      <div className="bg-white p-2 xl:mx-auto">
        <div className="flex border-b p-2">
          <div className="mr-1 h-[50px] w-[50px]">
            <img
              src={`http://127.0.0.1:9090/uploads/${product.cover}`}
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="">
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
        onClick={closeModal}
        type="button"
        className="absolute right-4 top-32 bg-transparent text-sm text-white min-[390px]:top-48 md:right-12 md:top-[26rem] lg:right-24 lg:top-[33rem] xl:right-56 xl:top-56"
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
