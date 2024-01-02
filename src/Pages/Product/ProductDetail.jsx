import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="m-auto w-11/12">
        <p className="mb-2">{product.title}</p>
        <p className="mb-4 text-xs font-medium text-neutral-400">
          {product.productVolume}
        </p>
        {product.priceSales && (
          <p className="border-y py-3">
            <p className="text-base line-through">
              ₩{product.originalPrice.toLocaleString()}
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
        )}
        {/* <p className="text-base">₩{product.originalPrice.toLocaleString()}</p> */}
        <p className="mt-4 text-xs">{product.engTitle}</p>

        <form>
          <div class="relative flex max-w-[8rem] items-center">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                class="h-3 w-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
