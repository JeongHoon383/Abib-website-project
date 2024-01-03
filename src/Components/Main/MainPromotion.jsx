import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

const MainPromotion = ({ title }) => {
  return (
    <div className="  h-[90vh] w-screen overflow-x-hidden overflow-y-clip md:h-[95vh] lg:h-[100vh] xl:h-[110vh] ">
      <div className="mx-auto  mt-16 text-center text-4xl font-bold lg:mt-32">
        {title}
      </div>
      <div>
        <Swiper
          className="my-custom-swiper"
          modules={[Scrollbar]}
          spaceBetween={10}
          slidesPerView={4.5}
          scrollbar={{ draggable: true }}
        >
          <ul className="flex w-7/12 border border-red-500">
            {[1, 2, 3, 4, 5, 6].map((v, i) => (
              <SwiperSlide>
                <li className="group w-full  pb-8" key={i}>
                  <figure className=" mt-14  w-[20vw]">
                    <img
                      className="w-full  cursor-pointer"
                      src="https://www.abib.com/web/product/medium/202312/154ef9d7e3ea2fd080510e6c2f00636f.jpg"
                      alt=""
                    />
                  </figure>
                  <figcaption className="mt-6 flex cursor-pointer flex-col text-xs md:text-sm">
                    <span>어성초 카밍 토너</span>
                    <span className="mt-2 font-bold">스킨부스터</span>
                    <span className="mt-3 text-[0.5rem] text-gray-400 md:text-xs">
                      200ml
                    </span>
                    <span className="mt-3 flex items-center justify-start space-x-2">
                      <span className="line-through ">$23,000</span>{" "}
                      <span className="text-main hover:text-accent">
                        $16,000
                      </span>
                    </span>
                  </figcaption>
                  <div className="mx-auto my-4 w-full cursor-pointer border  py-2 text-center text-xs hover:bg-font hover:text-back md:opacity-0 md:group-hover:opacity-100 lg:text-sm">
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
