import React from "react";
import HeaderForm from "./HeaderForm";
import { Link } from "react-router-dom";

const HeaderMLink = () => {
  const category = ["스킨케어", "에센스", "크림", "패드", "마스크팩"];
  const fc = ["진정", "수분", "미백", "탄력/보습"];
  return (
    <div className="mx-auto w-10/12">
      <HeaderForm />
      <div className="flex h-full  w-full items-start space-x-[10%] px-8 pt-10 text-gray-400">
        <>
          <ul className="space-y-1 text-xs">
            <li className="my-3 font-bold text-font">카테고리</li>
            <li className="font-semibold text-main">
              신규회원
              <br className="block sm:hidden" />
              한정
            </li>
            <li className="font-semibold text-main">베스트</li>
            <li className="font-semibold text-main">이벤트</li>
            {category.map((v, i) => (
              <li key={i}>
                <Link to={`/product/list/${v}`}>{v}</Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 text-xs">
            <li className="my-3 font-bold text-font">기능</li>
            {fc.map((v, i) => (
              <li key={i}>
                <Link to={`/product/list/${v}`}>{v}</Link>
              </li>
            ))}
          </ul>
        </>

        <div>
          <ul className="space-y-1 text-xs">
            <li className="my-3 font-bold text-font">고객지원</li>
            <li>이벤트</li>
            <li>공지사항</li>
            <li>리뷰</li>
            <li>문의하기</li>
            <li>자주 묻는 질문</li>
          </ul>
          <ul className="space-y-1 text-xs">
            <li className="my-3 font-bold text-font">브랜드</li>
            <li>브랜드</li>
            <li>콜라보레이션</li>
          </ul>
        </div>

        <></>
      </div>
    </div>
  );
};

export default HeaderMLink;
