import React from "react";

const Footer = () => {
  return (
    <div className="flex  w-full items-center justify-center overflow-x-hidden  bg-font">
      <div className="flex h-2/3 w-10/12 flex-col justify-between text-center  lg:flex-row ">
        <div className="text-[11px]">
          <div className="my-5 flex flex-col text-back">
            <span>The digital platform for ABIB CO.</span>
            <span>Manual for Freedom, REsearch and Creativity</span>
          </div>
          <div className="text-gray-500">
            <span className="text-gray-400">About Us</span>
            <ul>
              <li>(주)포컴퍼니</li>
              <li>
                서울시 송파구 백제고분로9ㅓ길 14, 301(잠실동) 070 4131 5906
              </li>
              <li>대표자 김민우</li>
              <li>통신판매업신고 2017 서울송파 0651</li>
              <li>사업자등록번호 232 88 00610 사업자정보확인</li>
              <li>하나은행 183 910033 77004 (주)포컴퍼니</li>
              <li>호스팅제공 : 카페24(주)</li>
            </ul>
          </div>
        </div>
        <div className="my-5 hidden     space-x-32    text-[12px] text-gray-500 sm:flex  sm:flex-row  md:items-start md:justify-center md:text-[13px]">
          <ul className="w-[33%]    space-y-3">
            <li className="font-semibold text-back">주요메뉴</li>
            <li>카테고리</li>
            <li>기능</li>
            <li>브랜드스토리</li>
            <li>이벤트</li>
            <li>리뷰</li>
          </ul>
          <ul className="w-[33%] flex-col items-center    space-y-3">
            <li className="font-semibold text-back">고객 서비스</li>
            <li>주문조회</li>
            <li>문의</li>
            <li>자주 묻는 질문</li>
            <li>고객센터</li>
            <li>매장정보</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
          <ul className="w-[33%] flex-col justify-center space-y-3">
            <li className="font-semibold text-back">소설</li>
            <li>인스타그램</li>
            <li>페이스북</li>
            <li>유튜브</li>
            <li>카카오</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
