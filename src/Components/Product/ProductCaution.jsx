import React from "react";

export default function ProductCaution() {
  return (
    <ul className="text-left text-[10px] leading-loose sm:text-[14px]">
      <li className="mb-2 font-semibold">
        <p>[사용할 때의 주의사항]</p>
      </li>
      <li className="text-neutral-600 ">
        1. 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점,
        부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우에는 전문의
        등과 상담할 것
      </li>
      <li className="text-neutral-600">
        2. 상처가 있는 부위 등에는 사용을 자제할 것
      </li>
      <li className="text-neutral-600">
        3. 보관 및 취급 시 주의사항
        <div className="ml-3">
          <p>가) 어린이의 손이 닿지 않는 곳에 보관할 것</p>
          <p>나) 직사광선을 피해서 보관할 것</p>
        </div>
      </li>
      <li className="text-neutral-600">
        4. 눈 주위를 피하여 사용할 것
        <p className="ml-3">
          기타. 붙이는 반창고나 습포에 자극이 심한 분은 주의하십시오.
        </p>
      </li>
      <li className="text-neutral-600">
        *본 상품에 이상이 있을 경우 공정거래위원회 고시 ‘소비자 분쟁 해결
        기준’에 의거하여 교환 또는 보상 받을 수 있습니다.
      </li>
    </ul>
  );
}
