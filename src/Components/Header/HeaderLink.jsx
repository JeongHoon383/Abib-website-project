import React from "react";

const HeaderLink = ({ cateHover }) => {
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
              <li>스킨케어</li>
              <li>에센스</li>
              <li>크림</li>
              <li>패드</li>
              <li>마스크팩</li>
              <li>클렌저</li>
              <li>선케어</li>
              <li>바디케어</li>
              <li>파운데이션</li>
              <li>립</li>
              <li>세트</li>
            </ul>
            <ul className="space-y-1 text-xs">
              <li className="my-3 font-bold text-font">기능</li>
              <li>진정</li>
              <li>수분</li>
              <li>미백</li>
              <li>탄력/보습</li>
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
