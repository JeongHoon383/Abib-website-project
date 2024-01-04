import React from "react";

export default function MyPageMain() {
  return (
    <div className="mx-auto">
      <p className="@media (min-width: 768px)  @media (min-width: 1024px) p-16 text-center text-3xl">
    
        Account.
      </p>
      <div className="borer-t w-100 mx-auto border border-gray-600">
        <div className="mx-auto p-16 text-center text-xs leading-8 ">
          <p>à plus 님은 [신규회원] 회원이십니다. </p>
          <br></br>
          <p className="leading-6">
            구매금액 ₩0으로 회원님의 예상등급은 [신규회원] 입니다.{" "}
          </p>
          <p className="leading-6">
            [신규회원] 유지를 위해서 구매금액 ₩0이 추가로 필요합니다.
          </p>
          <p className="leading-6">
            또한 [White] 승급을 원하시면 구매금액 ₩2,500이 추가로 필요합니다
          </p>
        </div>

        <div>
          <div>
            <div className="h-25 @media (min-width: 768px) @media (min-width: 1024px) ml- mx-auto 	box-border w-96 cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100">
              주문내역
            </div>
            <p className="text-center text-xs leading-4">
              {" "}
              고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.{" "}
            </p>
            <p className="text-center text-xs leading-4">
              비회원의 경우, 주문서의 주문번호와 비밀번호로 주문조회가
              가능합니다.
            </p>
          </div>

          <div>
            <div className=" leading h-25 @media (min-width: 768px) @media (min-width: 1024px) mx-auto 	box-border w-96 cursor-pointer border border-gray-600 p-4 text-center text-xs hover:bg-gray-100">
              회원정보
            </div>
            <p className="text-center text-xs leading-4">
              회원이신 고객님의 개인정보를 관리하는 공간입니다.
            </p>

            <p className="text-center text-xs leading-4">
              개인정보를 최신 정보로 유지하시면 보다 간편히 쇼핑을 즐기실 수
              있습니다.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div className="leading h-25 @media (min-width: 768px) @media (min-width: 1024px) mx-auto 	box-border w-96  cursor-pointer border border-gray-600 p-4 text-center text-xs hover:bg-gray-100">
              문의내역
            </div>
            <p className="text-center text-xs leading-4">
              고객님께서 작성하신 게시물을 관리하는 공간입니다.
            </p>

            <p className="text-center text-xs leading-4">
              고객님께서 작성하신 글을 한눈에 관리하실 수 있습니다.
            </p>
          </div>

          <div>
            <div className="h-25 @media (min-width: 768px) @media (min-width: 1024px) 	mx-auto box-border  w-96 cursor-pointer border border-gray-600 p-4 text-center text-xs hover:bg-gray-100">
              1:1 문의내역
            </div>
            <p className="text-center text-xs">
              궁금하신 사항을 1:1로 문의할 수 있는 공간입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
