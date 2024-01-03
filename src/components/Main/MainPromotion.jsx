import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

const MainPromotion = ({ title }) => {
  return (
    <div className="w-full xl:h-[110vh] lg:h-[85vh] md:h-[75vh] h-[65vh]  ">
      <div className="text-center mx-auto lg:mt-32 mt-16 text-4xl font-bold">
        {title}
      </div>
      <div>
        <Swiper
          className="my-custom-swiper"
          modules={[Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          scrollbar={{ draggable: true }}>
          <ul className="flex w-7/12 border border-red-500">
            {[1, 2, 3, 4, 5, 6].map((v, i) => (
              <SwiperSlide>
                <li className="w-full group  pb-8" key={i}>
                  <figure className=" w-[25vw] mt-14">
                    <img
                      className="w-full  cursor-pointer"
                      src="https://www.abib.com/web/product/medium/202312/154ef9d7e3ea2fd080510e6c2f00636f.jpg"
                      alt=""
                    />
                  </figure>
                  <figcaption className="flex flex-col mt-6 text-xs md:text-sm cursor-pointer">
                    <span>어성초 카밍 토너</span>
                    <span className="mt-2 font-bold">스킨부스터</span>
                    <span className="text-[0.5rem] md:text-xs mt-3 text-gray-400">
                      200ml
                    </span>
                    <span className="mt-3 space-x-2 flex items-center justify-start">
                      <span className="line-through ">$23,000</span>{" "}
                      <span className="text-main hover:text-accent">
                        $16,000
                      </span>
                    </span>
                  </figcaption>
                  <div className="mx-auto my-4 py-2 md:opacity-0 md:group-hover:opacity-100  border w-full text-xs lg:text-sm text-center hover:text-back hover:bg-font cursor-pointer">
                    카트에 담기
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default MainPromotion;
