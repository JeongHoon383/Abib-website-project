import React from "react";

export default function ProductInfo({ product }) {
  return (
    <ul>
      <li>
        <span>제품명</span>
        <span>{product.title}</span>
      </li>
      <li>
        <span>용량</span>
        <span>{product.productVolume}</span>
      </li>
      <li>
        <span>가격</span>
        <span>
          KRW {product.originalPrice && product.originalPrice.toLocaleString()}
        </span>
      </li>
      <li>
        <span>기능성</span>
        <span>{product.functional}</span>
      </li>
      <li>
        <span>화장품제조업자</span>
        <span>제품 내 별도 표기</span>
      </li>
      <li>
        <span>화장품책임판매업자</span>
        <span>(주)포컴퍼니</span>
      </li>
      <li>
        <span>유통기한</span>
        <span>
          상품 발송일 기준으로 유통기한 180 이상 남은 상품만을 판매합니다.
        </span>
      </li>
      <li>
        <span>제조국</span>
        <span>한국</span>
      </li>
      <li>
        <span>제품유지기간</span>
        <span>개봉일로부터 12개월</span>
      </li>
      <li>
        <span>주의사항</span>
        <span>
          고온 또는 저온의 장소 및 직사광선이 닿는 곳에는 보관하지 말 것
        </span>
      </li>
    </ul>
  );
}
