import React from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

export default function ProductRecommendSwiper() {
  return (
    <div className="mx-auto mb-12 w-11/12">
      <h3 className="my-8 text-center text-2xl lg:mt-32">Related products.</h3>
      <div>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={10}
          slidesPerView={1.5}
          scrollbar={{ draggable: true }}
        >
          <ul>
            {[1, 2, 3, 4, 5].map((v, i) => (
              <SwiperSlide key={i}>
                <li className="w-full pb-6">
                  <img
                    src="https://www.abib.com/web/product/medium/202312/154ef9d7e3ea2fd080510e6c2f00636f.jpg"
                    alt=""
                  />
                  <div className="mt-2 flex flex-col items-center text-sm">
                    <span>어성초 스팟 패드</span>
                    <span className="font-semibold">카밍 터치</span>
                    <p className="text-gray-500 line-through">₩24,000</p>
                    <p className="text-blue-500">₩16,800</p>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  );
}
