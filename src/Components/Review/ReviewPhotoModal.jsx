import React, { useContext } from "react";
import { ProductContext } from "../../Pages/Product/ProductDetail";
import { ReviewContext } from "./Review";

export default function ReviewPhotoModal({
  setModalOpen,
  review,
  setSelectedReview,
  ReviewListStar,
}) {
  let product = useContext(ProductContext);
  let { reviewList, average } = useContext(ReviewContext);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedReview(null);
    document.body.style.overflow = "unset";
  };

  return (
    // container
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col items-center">
      {/* background */}
      <div className="fixed h-full w-full bg-black/90 "></div>
      {/* modal */}
      <div className="absolute top-52 flex w-[22rem] flex-col rounded bg-white text-black sm:w-[30rem] md:w-[45rem] md:flex-row lg:w-[62rem]">
        <div className="bg-black">
          <img
            className="mx-auto w-1/2 object-contain"
            src={`/${review.rcover}`}
            alt=""
          />
        </div>
        <div className="bg-white">
          <div className="flex border-b pb-3">
            <div className="h-[50px] w-[50px]">
              <img
                src={`http://127.0.0.1:9090/uploads/${product.cover}`}
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="">
              <span className="block">{product.title}</span>
              <div className="flex">
                <div className="mr-3">
                  <span className="text-gray-500">평점</span>
                  <span className="">{average}</span>
                </div>
                <div>
                  <span className="text-gray-500">리뷰</span>
                  <span className="">{reviewList.length}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <ReviewListStar rate={review.point} />
            <span>{review.point}</span>
          </div>
          <p className="mb-5">{review.content}</p>
          <div>
            <span>{review.mid.slice(0, -3) + "*".repeat(3)}</span>
            <span>{review.rdate.split("T")[0]}</span>
          </div>
        </div>
      </div>

      <button
        onClick={closeModal}
        type="button"
        className="absolute top-60 bg-transparent text-sm text-gray-400"
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
