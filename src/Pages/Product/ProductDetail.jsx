import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAccordion from "../../Components/Product/ProductAccordion";
import Review from "../../Components//Review/Review";
import ProductRecommendSwiper from "../../Components/Product/ProductRecommendSwiper";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Modules/Products";
import { changeQuantity } from "../../Modules/cart";
import ProductCounter from "../../Components/Product/ProductCounter";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { pid } = useParams();
  const product = useSelector((state) => state.product.productDetail.data);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getProductDetail(pid));
  }, [dispatch, pid]);

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
            <p className="mb-2">
              {product.title && product.title.includes("/")
                ? product.title.replace("/", " ")
                : product.title}
            </p>
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
            <ProductCounter quantity={quantity} />
            <button className="mb-2 me-2 w-full border border-black bg-white px-5 py-2.5 text-xs font-medium text-gray-900 lg:hover:bg-gray-100 lg:focus:outline-none lg:focus:ring-4 lg:focus:ring-gray-200 lg:dark:border-gray-600 lg:dark:bg-gray-800 lg:dark:text-white lg:dark:hover:border-gray-600 lg:dark:hover:bg-gray-700 lg:dark:focus:ring-gray-700">
              장바구니 담기 - ₩16,100 ({quantity}개)
            </button>
            <button className="mb-2 me-2 w-full border border-black bg-black px-5 py-2.5 text-xs font-medium text-white lg:dark:border-gray-600 lg:dark:bg-gray-800 lg:dark:text-white lg:dark:hover:border-gray-600 lg:dark:hover:bg-gray-700 lg:dark:focus:ring-gray-700">
              구매하기
            </button>
          </div>
        </div>
      </div>
      <div className="mb-24 text-center lg:mx-auto lg:w-4/5">
        {product.cover && (
          <img
            className="mb-8 sm:mx-auto lg:mx-auto lg:w-full"
            src={`/uploads/${product.cover}`}
            alt=""
          />
        )}

        <p className="mb-4 text-4xl font-bold">{product.engTitle}</p>
        <p className="text-base sm:text-xl">
          {product.description && product.description.split("/")[0]}
        </p>
        <p className="text-base sm:text-xl">
          {product.description && product.description.split("/")[1]}
        </p>
        <div className="acco-wrap divide-y divide-black">
          <ProductAccordion />
        </div>
      </div>
      <div className="recommend-wrap">
        <ProductRecommendSwiper />
      </div>
      <div className="review-wrap ">
        <Review />
      </div>
    </>
  );
}
