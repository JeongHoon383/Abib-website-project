import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAccordion from "../../Components/Product/ProductAccordion";
import Review from "../../Components//Review/Review";
import ProductRecommendSwiper from "../../Components/Product/ProductRecommendSwiper";
import ProductCounter from "../../Components/Product/ProductCounter";

export const ProductContext = createContext({}); // 조부모->자식 전달 용도

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState({});

  const { pid } = useParams();
  const url = `http://127.0.0.1:9090/product/detail/${pid}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setProduct(result.data);
        if (result.data.priceSales) setTotal(result.data.priceSales);
        else setTotal(result.data.originalPrice);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  const handleClickCounter = (num) => {
    setQuantity((prev) => prev + num);
    if (product.priceSales) setTotal((prev) => prev + product.priceSales * num);
    else setTotal((prev) => prev + product.originalPrice * num);
  };

  // input이 포커스를 상실했을 때 상태값을 업데이트하기 위한 이벤트 핸들러 함수
  const handleBlurInput = (quantity) => {
    const newQuantity = quantity;
    setQuantity(newQuantity);
    if (product.priceSales) setTotal(product.priceSales * quantity);
    else setTotal(product.originalPrice * quantity);
  };

  return (
    <>
      <div className="sm:p-16 lg:p-20 xl:px-96">
        <div className="sm:flex sm:w-full">
          <div className="imgBox sm:mr-4">
            <img
              className="mb-8 w-full sm:m-0"
              src={`http://127.0.0.1:9090/uploads/${product.cover}`}
              alt=""
            />
          </div>
          <div className="m-auto mb-36 w-11/12">
            <p className="mb-2">{product.title}</p>
            <p className="mb-4 text-xs font-medium text-neutral-400">
              {product.productVolume}
            </p>
            {product.priceSales ? (
              <div className="border-y py-3">
                <p className="text-base line-through">
                  ₩
                  {product.originalPrice &&
                    product.originalPrice.toLocaleString()}
                </p>
                <p>
                  <span className="mr-1 text-blue-500">
                    ₩{product.priceSales.toLocaleString()}
                  </span>
                  <span className="text-[0.6rem] text-neutral-600">
                    ({100 - (product.priceSales / product.originalPrice) * 100}%
                    OFF)
                  </span>
                </p>
              </div>
            ) : (
              <p className="border-y py-3 text-base">
                ₩
                {product.originalPrice &&
                  product.originalPrice.toLocaleString()}
              </p>
            )}

            <p className="my-4 text-xs">{product.engTitle}</p>
            <ProductCounter
              quantity={quantity}
              onClick={handleClickCounter}
              onBlur={handleBlurInput}
            />
            <button className="mb-2 me-2 w-full border border-black bg-white px-5 py-2.5 text-xs font-medium text-gray-900 lg:hover:bg-gray-100 lg:focus:outline-none lg:focus:ring-4 lg:focus:ring-gray-200 lg:dark:border-gray-600 lg:dark:bg-gray-800 lg:dark:text-white lg:dark:hover:border-gray-600 lg:dark:hover:bg-gray-700 lg:dark:focus:ring-gray-700">
              장바구니 담기 - ₩{total.toLocaleString()} ({quantity}개)
            </button>
            <button className="mb-2 me-2 w-full border border-black bg-black px-5 py-2.5 text-xs font-medium text-white lg:dark:border-gray-600 lg:dark:bg-gray-800 lg:dark:text-white lg:dark:hover:border-gray-600 lg:dark:hover:bg-gray-700 lg:dark:focus:ring-gray-700">
              구매하기
            </button>
          </div>
        </div>
      </div>
      <div className="mb-24 text-center">
        <img
          className="mb-8 sm:mx-auto lg:mx-auto lg:w-full"
          src={`http://127.0.0.1:9090/uploads/${product.cover}`}
          alt=""
        />
        <p className="mb-4 text-xl font-bold">{product.engTitle}</p>
        <p className="text-base sm:text-xl">
          {product.description && product.description.split("/")[0]}
        </p>
        <p className="text-base sm:text-xl">
          {product.description && product.description.split("/")[1]}
        </p>
      </div>
      <div className="acco-wrap divide-y divide-black">
        <ProductContext.Provider value={product}>
          <ProductAccordion />
        </ProductContext.Provider>
      </div>
      <div className="recommend-wrap">
        <ProductRecommendSwiper />
      </div>
      <div className="review-wrap">
        <ProductContext.Provider value={product}>
          <Review />
        </ProductContext.Provider>
      </div>
    </>
  );
}
