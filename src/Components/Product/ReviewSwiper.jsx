import React, { useState } from "react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

import ReviewStar from "./ReviewStar";

export default function ReviewSwiper() {
  return (
    <div>
      <Swiper
        className="reviewSwiper"
        modules={[Navigation, Pagination, Grid]}
        spaceBetween={10}
        slidesPerView={2}
        grid={{ rows: 2, fill: "row" }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
            grid: { rows: 1 },
          },
        }}
      >
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((v, i) => (
            <SwiperSlide key={i}>
              <div className="w-full border border-gray-200">
                <img
                  className="w-full"
                  src="https://i.pinimg.com/564x/6b/2c/d6/6b2cd67bb34ca4ad57ab98a9d64e74fd.jpg"
                  alt=""
                />
                <div className="p-3">
                  <ReviewStar />
                  <p className="... mb-1 mt-1 truncate font-thin text-neutral-700 sm:text-sm">
                    샘플 한 번 써보고 괜찮아서 세일하길래 구매해봤어요 트러블
                    없이 잘 맞네요
                  </p>
                  <span className="... mr-3 inline-block w-10 truncate align-bottom font-thin text-gray-500 sm:align-text-top sm:text-sm">
                    sjaglaemfek
                  </span>
                  <span className="font-thin text-gray-500 sm:text-sm">
                    12.19
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
