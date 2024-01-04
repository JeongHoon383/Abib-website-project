import React from "react";
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
          type: "bullets",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        style={{
          "--swiper-navigation-size": "22px",
          "--swiper-navigation-sides-offset": "3px",
          "--swiper-pagination-bottom": "-12px",
        }}
      >
        <>
          {[1, 2, 3, 4, 5].map((v, i) => (
            <SwiperSlide key={i}>
              <div className="w-full border border-gray-200">
                <img
                  className="w-full"
                  src="https://i.pinimg.com/564x/6b/2c/d6/6b2cd67bb34ca4ad57ab98a9d64e74fd.jpg"
                  alt=""
                />
                <div className="p-3">
                  <ReviewStar />
                  <p className="... mb-1 truncate text-neutral-800">
                    샘플 한 번 써보고 괜찮아서 세일하길래 구매해봤어요 트러블
                    없이 잘 맞네요
                  </p>
                  <span className="... mr-3 inline-block w-10 truncate align-bottom text-gray-500">
                    sjaglaemfek
                  </span>
                  <span className="text-gray-500">12.19</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}
