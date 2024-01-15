import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Modules/Products";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const { pid } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail.data);

  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getProductDetail(pid));
  }, [dispatch, pid]);

  return (
    <ul className="text-left text-[10px] sm:text-[14px]">
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">제품명</span>
        <span className="text-neutral-600">
          {product.title && product.title.includes("/")
            ? product.title.replace("/", " ")
            : product.title}
        </span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">용량</span>
        <span className="text-neutral-600">{product.productVolume}</span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">가격</span>
        <span className="text-neutral-600">
          KRW {product.originalPrice && product.originalPrice.toLocaleString()}
        </span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">기능성</span>
        <span className="text-neutral-600">{product.functional}</span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">화장품제조업자</span>
        <span className="text-neutral-600">제품 내 별도 표기</span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">화장품책임판매업자</span>
        <span className="text-neutral-600">(주)포컴퍼니</span>
      </li>
      <li className="mb-3">
        <span className="mb-3 block w-52 font-bold sm:mb-0 sm:inline-block">
          유통기한
        </span>
        <span className="text-neutral-600">
          상품 발송일 기준으로 유통기한 180 이상 남은 상품만을 판매합니다.
        </span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">제조국</span>
        <span className="text-neutral-600">한국</span>
      </li>
      <li className="mb-3">
        <span className="inline-block w-52 font-bold">제품유지기간</span>
        <span className="text-neutral-600">개봉일로부터 12개월</span>
      </li>
      <li className="mb-3">
        <span className="mb-3 block w-52 font-bold sm:mb-0 sm:inline-block">
          주의사항
        </span>
        <span className="text-neutral-600">
          고온 또는 저온의 장소 및 직사광선이 닿는 곳에는 보관하지 말 것
        </span>
      </li>
    </ul>
  );
}
