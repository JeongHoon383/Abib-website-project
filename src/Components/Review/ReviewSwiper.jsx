import React, { useState } from "react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { openModal } from "../../Modules/Modal";
import ReviewListStar from "./ReviewListStar";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function ReviewSwiper({ photoReview }) {
  const dispatch = useDispatch();

  const handleOpenPhotoReviewModal = (pid, review) => {
    dispatch(
      openModal({
        modalType: "ReviewPhotoModal",
        isOpen: true,
        review,
        pid,
      }),
    );
    document.body.style.overflow = "hidden";
  };
  return (
    <div>
      <Swiper
        className="reviewSwiper"
        modules={[Navigation, Pagination, Grid]}
        spaceBetween={10}
        slidesPerView={2}
        grid={{ rows: 2, fill: "row" }}
        navigation={true}
        pagination={false}
        breakpoints={{
          768: {
            slidesPerView: 5,
            grid: { rows: 1 },
          },
        }}
      >
        <>
          {photoReview
            .slice()
            .reverse()
            .map((v) => (
              <SwiperSlide key={v.rid}>
                <div
                  onClick={() => handleOpenPhotoReviewModal(v.pid, v)}
                  className="w-full cursor-pointer border border-gray-200"
                >
                  {v.rcover && (
                    <div className="">
                      <img
                        className="h-full w-full"
                        src={`/${v.rcover}`}
                        alt=""
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <ReviewListStar rate={v.point} />
                    <p className="... mb-1 mt-1 truncate font-thin text-neutral-700 sm:text-sm">
                      {v.content}
                    </p>
                    <span className="... mr-3 inline-block w-10 truncate align-bottom font-thin text-gray-500 sm:align-text-top sm:text-sm">
                      {v.mid.substring(0, 3) + "..."}
                    </span>
                    <span className="font-thin text-gray-500 sm:text-sm">
                      {v.rdate.split("T")[0]}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </>
      </Swiper>
    </div>
  );
}
