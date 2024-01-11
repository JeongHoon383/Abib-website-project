import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ cateHover, setHover }) => {
  const category = ["스킨케어", "에센스", "크림", "패드", "마스크팩"];
  const fc = ["진정", "수분", "미백", "탄력_보습"];

  return (
    <>
      {" "}
      <div className="flex h-full  w-full items-start space-x-[10%] px-8 pt-10 text-gray-400 dark:bg-black dark:text-white">
        {cateHover === "제품" ? (
          <>
            {" "}
            <ul className="space-y-1 text-xs">
              <li className="my-3 font-bold text-font">카테고리</li>
              <li className="font-semibold text-main">신규회원한정</li>
              <li className="font-semibold text-main">베스트</li>
              <li className="font-semibold text-main">이벤트</li>
              {category.map((v, i) => (
                <li onClick={() => setHover(false)} key={i}>
                  <Link to={`/product/list/${v}`}>{v}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1 text-xs">
              <li className="my-3 font-bold text-font">기능</li>
              {fc.map((v, i) => (
                <li onClick={() => setHover(false)} key={i}>
                  <Link to={`/product/list/${v}`}>
                    {v.includes("_") ? v.replace("_", "/") : v}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {cateHover === "고객지원" ? (
          <>
            <ul className="space-y-1 text-xs">
              <li className="my-3 font-bold text-font">고객지원</li>
              <li>이벤트</li>
              <li>공지사항</li>
              <li>리뷰</li>
              <li>문의하기</li>
              <li>자주 묻는 질문</li>
            </ul>
          </>
        ) : null}
        {cateHover === "브랜드" ? (
          <>
            <ul className="space-y-1 text-xs">
              <li className="my-3 font-bold text-font">브랜드</li>
              <li>브랜드</li>
              <li>콜라보레이션</li>
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HeaderLink;
