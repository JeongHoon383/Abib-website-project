import React, { useState } from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CartModal from "../Cart/CartModal";
import "swiper/css";
import "swiper/css/scrollbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../Modules/Cart";
import { addToCart } from "./../../Modules/Cart";

const MainPromotion = ({ title, titleArr }) => {
  const [modalOpen, setModalOpen] = useState(false);
  /* const [product, setProduct] = useState({}); */

  const dispatch = useDispatch();

  const cart = useSelector(getCart).list;

  const showModal = async (value) => {
    const isProductAdded = cart.some((item) => item.pid === value.pid);
    if (isProductAdded) {
      alert("이미 추가한 상품입니다.");
    } else {
      dispatch(addToCart(value));
      setModalOpen(true);
      // await dispatch(insert(value));
    }
  };

  const navigate = useNavigate();
  const {
    isPending: promotionLoading,

    data: promotionData,
  } = useQuery({
    queryKey: ["promotionData", title],
    queryFn: () =>
      axios
        .get(`http://127.0.0.1:9090`, {
          params: {
            data: title,
          },
        })
        .then((res) => res.data),
  });
  return (
    <div className="w-screen overflow-x-hidden  pb-5 dark:bg-black    dark:text-white ">
      {/* modal */}
      {modalOpen && <CartModal setModalOpen={setModalOpen} />}
      {promotionLoading ? (
        "로딩중"
      ) : (
        <>
          <div className="mx-auto  mt-16 text-center text-4xl font-bold lg:mt-32">
            {title}
          </div>
          <div>
            <Swiper
              className="my-custom-swiper"
              modules={[Scrollbar]}
              spaceBetween={20}
              slidesPerView={1.5}
              scrollbar={{ draggable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
              }}
            >
              <ul className="flex w-7/12 ">
                {promotionData &&
                  title === "프로모션" &&
                  promotionData
                    .filter((v) => v.priceSales > 0)
                    .map((value, index) => (
                      <SwiperSlide key={index}>
                        <li className="group w-full pb-8">
                          <div
                            onClick={() =>
                              navigate(`/product/detail/${value.pid}`)
                            }
                          >
                            <figure className=" mt-14 h-[50vw] w-full md:h-[30vw]   lg:h-[25vw]">
                              <img
                                alt=""
                                className="h-full w-full  cursor-pointer"
                                src={`http://127.0.0.1:9090/uploads/${value.cover}`}
                              />
                            </figure>
                            <figcaption className="mt-6 flex cursor-pointer flex-col text-xs md:text-sm">
                              <span>
                                {value.title && value.title.split("/")[0]}
                              </span>
                              <span className="mt-2 font-bold">
                                {value.title && value.title.split("/")[1]}
                              </span>
                              <span className="mt-3 text-xs text-gray-400 md:text-xs">
                                {value.productVolume && value.productVolume}
                              </span>
                              <span className="mt-3 flex items-center justify-start space-x-2">
                                <span className="line-through ">
                                  ₩
                                  {value.originalPrice &&
                                    Number(
                                      value.originalPrice,
                                    ).toLocaleString()}
                                </span>{" "}
                                <span className="text-main hover:text-accent">
                                  ₩
                                  {value.priceSales || value.originalPrice
                                    ? Number(value.priceSales).toLocaleString()
                                    : Number(
                                        value.originalPrice,
                                      ).toLocaleString()}
                                </span>
                              </span>
                            </figcaption>
                          </div>
                          <div
                            onClick={() => showModal(value)}
                            className="mx-auto my-4 w-full cursor-pointer border  py-2 text-center text-xs hover:bg-font hover:text-back md:opacity-0 md:group-hover:opacity-100 lg:text-sm"
                          >
                            카트에 담기
                          </div>
                        </li>
                      </SwiperSlide>
                    ))}
                {promotionData &&
                  title === "베스트" &&
                  promotionData
                    .filter((v) => v.title.includes("어성초"))
                    .map((value, index) => (
                      <SwiperSlide key={index}>
                        <li className="group w-full  pb-8">
                          <div
                            onClick={() =>
                              navigate(`/product/detail/${value.pid}`)
                            }
                          >
                            <figure className=" mt-14 h-[50vw] w-full md:h-[30vw]   lg:h-[25vw] ">
                              <img
                                className="h-full w-full  cursor-pointer"
                                src={`http://127.0.0.1:9090/uploads/${value.cover}`}
                              />
                            </figure>
                            <figcaption className="mt-6 flex cursor-pointer flex-col text-xs md:text-sm">
                              <span>
                                {value.title && value.title.split("/")[0]}
                              </span>
                              <span className="mt-2 font-bold">
                                {value.title && value.title.split("/")[1]}
                              </span>
                              <span className="mt-3 text-xs text-gray-400 md:text-xs">
                                {value.productVolume && value.productVolume}
                              </span>
                              <span className="mt-3 flex items-center justify-start space-x-2">
                                <span
                                  className={
                                    value.priceSales
                                      ? `line-through`
                                      : `font-bold`
                                  }
                                >
                                  ₩
                                  {value.originalPrice &&
                                    Number(
                                      value.originalPrice,
                                    ).toLocaleString()}
                                </span>{" "}
                                <span className="text-main hover:text-accent">
                                  {value.priceSales &&
                                    "₩" +
                                      Number(value.priceSales).toLocaleString()}
                                </span>
                              </span>
                            </figcaption>
                          </div>
                          <div
                            onClick={() => showModal(value)}
                            className="mx-auto my-4 w-full cursor-pointer border  py-2 text-center text-xs hover:bg-font hover:text-back md:opacity-0 md:group-hover:opacity-100 lg:text-sm"
                          >
                            카트에 담기
                          </div>
                        </li>
                      </SwiperSlide>
                    ))}
                {promotionData &&
                  title === "추천제품" &&
                  promotionData
                    .filter((v) => v.title.includes("부활초"))
                    .map((value, index) => (
                      <SwiperSlide key={index}>
                        <li className="group w-full  pb-8 ">
                          <div
                            onClick={() =>
                              navigate(`/product/detail/${value.pid}`)
                            }
                          >
                            <figure className=" mt-14 h-[50vw] w-full md:h-[30vw]   lg:h-[25vw] ">
                              <img
                                className="h-full w-full  cursor-pointer"
                                src={`http://127.0.0.1:9090/uploads/${value.cover}`}
                              />
                            </figure>
                            <figcaption className="mt-6 flex cursor-pointer flex-col text-xs md:text-sm">
                              <span>
                                {value.title && value.title.split("/")[0]}
                              </span>
                              <span className="mt-2 font-bold">
                                {value.title && value.title.split("/")[1]}
                              </span>
                              <span className="mt-3 text-xs text-gray-400 md:text-xs">
                                {value.productVolume && value.productVolume}
                              </span>
                              <span className="mt-3 flex items-center justify-start space-x-2">
                                <span
                                  className={
                                    value.priceSales
                                      ? `line-through`
                                      : `font-bold`
                                  }
                                >
                                  ₩
                                  {value.originalPrice &&
                                    Number(
                                      value.originalPrice,
                                    ).toLocaleString()}
                                </span>{" "}
                                <span className="text-main hover:text-accent">
                                  {value.priceSales &&
                                    "₩" +
                                      Number(value.priceSales).toLocaleString()}
                                </span>
                              </span>
                            </figcaption>
                          </div>
                          <div
                            onClick={() => showModal(value)}
                            className="mx-auto my-4 w-full cursor-pointer border  py-2 text-center text-xs hover:bg-font hover:text-back md:opacity-0 md:group-hover:opacity-100 lg:text-sm"
                          >
                            카트에 담기
                          </div>
                        </li>
                      </SwiperSlide>
                    ))}
              </ul>
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPromotion;
