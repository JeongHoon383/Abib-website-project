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
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full flex-col items-center">
      {/* background */}
      <div className="fixed h-full w-full bg-black/90" />
      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 w-[22rem] -translate-x-1/2 -translate-y-1/2 bg-white p-5 sm:w-[30rem] md:w-[45rem] lg:w-[62rem]">
        <div className="flex pb-2">
          <button
            onClick={closeModal}
            type="button"
            className="ms-auto bg-transparent text-sm text-gray-400"
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
        <div className="flex justify-evenly">
          <div className="w-2/">
            <img
              className="mx-auto object-contain"
              src={`/${review.rcover}`}
              alt=""
            />
          </div>
          <div>
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
      </div>
    </div>
  );
}
