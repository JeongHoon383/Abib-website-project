import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAccordion from "../../Components/Product/ProductAccordion";
import Review from "../../Components/Product/Review";

export default function ProductDetail() {
  const [product, setProduct] = useState({});

  const { pid } = useParams();
  const url = `http://127.0.0.1:9090/product/detail/${pid}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setProduct(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return (
    <>
      <img className="mb-8" src={product.cover} alt="" />
      <div className="m-auto mb-36 w-11/12">
        <p className="mb-2">{product.title}</p>
        <p className="mb-4 text-xs font-medium text-neutral-400">
          {product.productVolume}
        </p>
        {product.priceSales ? (
          <p className="border-y py-3">
            <p className="text-base line-through">
              ₩{product.originalPrice && product.originalPrice.toLocaleString()}
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
          </p>
        ) : (
          <p className="border-y py-3 text-base">
            ₩{product.originalPrice && product.originalPrice.toLocaleString()}
          </p>
        )}

        <p className="my-4 text-xs">{product.engTitle}</p>

        <form className="mb-16">
          <div className="relative flex max-w-[8rem] items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-3 w-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              data-input-counter-min="1"
              data-input-counter-max="50"
              aria-describedby="helper-text-explanation"
              className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="999"
              value="5"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-3 w-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>
        <button className="mb-2 me-2 w-full border border-black bg-white px-5 py-2.5 text-sm font-medium text-gray-900 lg:hover:bg-gray-100 lg:focus:outline-none lg:focus:ring-4 lg:focus:ring-gray-200 lg:dark:border-gray-600 lg:dark:bg-gray-800 lg:dark:text-white lg:dark:hover:border-gray-600 lg:dark:hover:bg-gray-700 lg:dark:focus:ring-gray-700">
          장바구니 담기 - ₩32,000 (1개)
        </button>
        <button className="mb-2 me-2 w-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white lg:dark:border-gray-600 lg:dark:bg-gray-800 lg:dark:text-white lg:dark:hover:border-gray-600 lg:dark:hover:bg-gray-700 lg:dark:focus:ring-gray-700">
          구매하기
        </button>
      </div>
      <div className="mb-24">
        <img src={product.detailCover} alt="" />
      </div>
      <div className="acco-wrap divide-y divide-black">
        <ProductAccordion product={product} />
      </div>
      <div className="review-wrap">
        <Review />
      </div>
    </>
  );
}
