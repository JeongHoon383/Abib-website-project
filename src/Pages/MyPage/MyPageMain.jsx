import React from "react";
import { Link } from "react-router-dom";

export default function MyPageMain() {
  return (
    <div className="justify-content mx-auto mb-20 flex ">
      <div className="mx-auto ">
        <div className="mx-auto pt-16 text-center text-xs leading-8 ">
          <div className="mx-auto pb-16 pt-16 text-center  text-3xl ">
            Account.
          </div>
          {/*           
          <h2 className="mt-[15vh] lg:mt-[10vh]">마이페이지</h2> */}

          <div className="w-full border-b border-t border-gray-600 p-10 pb-8 pt-8">
            <div className="max-sm:tracking-tightest mx-auto max-sm:text-xs max-sm:leading-5 ">
              <p>à plus 님은 [신규회원] 회원이십니다. </p>
              <br></br>
              <p className="mx-auto leading-6 max-sm:text-xs max-sm:tracking-tighter">
                구매금액 ₩0으로 회원님의 예상등급은 [신규회원] 입니다.{" "}
              </p>
              <p className="mx-auto leading-6 max-sm:text-xs max-sm:tracking-tighter">
                [신규회원] 유지를 위해 구매금액 ₩0이 추가로 필요합니다.
              </p>
              <p className="mx-auto leading-6 max-sm:text-xs max-sm:tracking-tighter">
                또한 [White] 승급을 원하시면 구매금액 ₩2,500이 추가로 필요합니다
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="w-9/10">
              <div className="max-sm:w-9/10 flex gap-5 max-sm:flex-col">
                <div className="pb-20 max-sm:pb-0">
                  <Link to="/orderlist">
                    <div className="h-25 box-border cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 max-sm:mx-auto ">
                      주문내역
                    </div>
                  </Link>
                  <p className="mx-auto pt-8 text-center text-xs leading-6 max-sm:text-xs">
                    고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.
                  </p>
                  <p className="max-sm:tracking-tightest text-center text-xs leading-4 max-sm:text-xs">
                    비회원의 경우, 주문서의 주문번호와 비밀번호로 주문조회가
                    가능합니다.
                  </p>
                </div>

                <div>
                  <Link to="/memberinfo">
                    <div className=" h-25 box-border cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 max-sm:mx-auto">
                      회원정보
                    </div>
                  </Link>
                  <p className="max-sm:tracking-tightest pt-8 text-center text-xs leading-6 max-sm:text-xs">
                    회원이신 고객님의 개인정보를 관리하는 공간입니다.
                  </p>

                  <p className="max-sm:tracking-tightest text-center text-xs leading-4 max-sm:text-xs">
                    개인정보를 최신 정보로 유지하시면 보다 간편히 쇼핑을 즐기실
                    수 있습니다.
                  </p>
                </div>
              </div>

              <div className="mt-15 max-sm:w-9/10 flex gap-5 max-sm:flex-col max-sm:pt-8">
                <div className="">
                  <Link to="/inquiry">
                    <div className="mx-sm:text-center h-25 box-border cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 max-sm:mx-auto">
                      문의내역
                    </div>
                  </Link>
                  <p className="max-sm:tracking-tightest justify-end pl-12 pr-12 pt-8 text-center text-xs leading-6 max-sm:text-xs">
                    고객님께서 작성하셨던 게시물을 관리하는 공간입니다.
                  </p>

                  <p className="max-sm:tracking-tightest justify-end text-center  text-xs leading-4 max-sm:text-xs ">
                    고객님께서 작성한 글을 한눈에 관리하실 수 있습니다.
                  </p>
                </div>

                <div>
                  <Link to="/privateinquiry">
                    <div className="h-25 box-border cursor-pointer border border-gray-600 p-4 text-center text-xs leading-6 hover:bg-gray-100 max-sm:text-center">
                      1:1 문의내역
                    </div>
                  </Link>
                  <p className="mx-sm:p-0 mx-sm:p-0 mx-xs:m-0 justify-end pl-12 pr-12 pt-8 text-center text-xs  max-sm:text-xs">
                    궁금하셨던 사항들을 1:1 로 문의하실 수 있는 공간입니다.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

// div 박스들 세로정렬 <div className="flex flex-col gap-5">
