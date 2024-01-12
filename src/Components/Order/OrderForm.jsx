import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    postNum: "",
    address: "",
    remainADress: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 주문 정보를 처리하는 로직 추가
    console.log("주문 정보:", formData);
  };
  return (
    <>
      <div className="mx-auto max-w-[1400px] border-b border-t border-solid border-black text-center text-xs">
        <div className="mx-auto flex w-[90%] max-w-[900px] flex-col pt-[40px] lg:w-full">
          <div className="border-b border-solid border-black pb-[60px]">
            <div className="mb-[28px] mt-[20px] text-[14px] font-bold">
              PERSONAL INFORMATION
            </div>
            <form onSubmit={handleSubmit}>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  이름
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
              <div className="flex">
                <label className="basis-[70%] py-[5px]">
                  <p className="w-full pb-[5px] pt-[10px] text-left">
                    우편번호
                    <span className="ml-[3px] text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="postNum"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  />
                </label>
                <label className="basis-[30%] py-[5px] pl-[12px]">
                  <p className="w-full pb-[5px] pt-[10px] text-left">
                    우편번호 찾기
                  </p>
                  <button className="transition-btn h-[40px] w-full">
                    POSTAL CODE
                  </button>
                </label>
              </div>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  기본주소
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="address"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  나머지 주소
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="remainADress"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  휴대폰
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <div className="text-left">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover w-z h-[40px] border border-solid border-gray-300 p-[5px]"
                  />
                </div>
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  이메일
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <div className="text-left">
                  <input
                    type="email"
                    name="email"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  />
                </div>
              </label>
            </form>
          </div>
          <div className="border-b border-solid border-black pb-[60px]">
            <div className="mb-[28px] mt-[60px] text-[14px] font-bold">
              BILLING INFORMATION
            </div>
            <form onSubmit={handleSubmit}>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] text-left">배송지 선택</p>
                <div className="flex items-center justify-start">
                  <input type="radio" />
                  주문자 정보와 동일
                  <input type="radio" className="ml-[20px]" />
                  새로운 배송지
                  <button className="transition-btn w-30% ml-[20px] h-[40px] md:w-[20%]">
                    배송 주소록 보기
                  </button>
                </div>
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  이름
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
              <div className="flex">
                <label className="basis-[70%] py-[5px]">
                  <p className="w-full pb-[5px] pt-[10px] text-left">
                    우편번호
                    <span className="ml-[3px] text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="postNum"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  />
                </label>
                <label className="basis-[30%] py-[5px] pl-[12px]">
                  <p className="w-full pb-[5px] pt-[10px] text-left">
                    우편번호 찾기
                  </p>
                  <button className="transition-btn h-[40px] w-full">
                    POSTAL CODE
                  </button>
                </label>
              </div>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  기본주소
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="address"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  나머지 주소
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="remainADress"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  휴대폰
                  <span className="ml-[3px] text-red-500">*</span>
                </p>
                <div className="text-left">
                  <select
                    type="tel"
                    name="phone"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover h-[40px] w-[30%] border border-solid border-gray-300 p-[5px] md:w-[10%]"
                  >
                    <option value="">010</option>
                    <option value="">011</option>
                    <option value="">016</option>
                    <option value="">017</option>
                    <option value="">018</option>
                    <option value="">019</option>
                  </select>
                  <span className="mx-[4px]">-</span>
                  <input
                    type="tel"
                    name="phone2"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover h-[40px] w-[30%] border border-solid border-gray-300 p-[5px] md:w-[10%]"
                  />
                  <span className="mx-[4px]">-</span>
                  <input
                    type="tel"
                    name="phone3"
                    value={formData.itemName}
                    onChange={handleChange}
                    className="form-text-hover ml-[4px] h-[40px] w-[30%] border border-solid border-gray-300 p-[5px] md:w-[10%]"
                  />
                </div>
              </label>
              <label className="py-[5px]">
                <p className="w-full pb-[5px] pt-[10px] text-left">
                  배송 메세지
                </p>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="h-[60px] w-full border border-solid border-gray-300 p-[5px]"
                />
              </label>
            </form>
          </div>
          <div className="border-b border-solid border-black pb-[60px]">
            <div className="mt-[60px] text-[14px] font-bold">ORDER REVIEW</div>
            <div className="mt-[40px] border-b border-t border-solid border-gray-300">
              <div className="border-b border-solid border-gray-300">
                <ul className="flex h-[43px] w-full items-center justify-between font-bold">
                  <li className="w-[70px] px-[12px] py-[5px] text-left">
                    PRODUCT
                  </li>
                  <li className="w-[409px] px-[12px] py-[5px]"></li>
                  <li className="w-[105px] px-[12px] py-[5px]">UNIT PRICE</li>
                  <li className="w-[99px] px-[12px] py-[5px]">QUANTITY</li>
                  <li className="hidden w-[96px] px-[12px] py-[5px] lg:block">
                    MILEAGE
                  </li>
                  <li className="w-[99px] px-[12px] py-[5px]">SUBTOTAL</li>
                </ul>
              </div>
              <div>
                <ul className="flex h-[133px] w-full items-center justify-between py-[5px] pl-[10px] text-center">
                  <li className="">
                    <img
                      src="../../../cart/cartCover.jpeg"
                      alt=""
                      className="h-[60px] max-w-[60px]"
                    />
                  </li>
                  <li className="transition-text w-[409px] pl-[10px] text-left">
                    여성초 스팟 패드 카밍 터치
                  </li>
                  <li className="w-[105px] min-w-[60px]">
                    <div>24,000</div>
                    <div>₩16,800</div>
                  </li>
                  <li className="w-[99px] min-w-[85px]">2</li>
                  <li className="hidden w-[96px] lg:block">₩1,680</li>
                  <li className="w-[99px] min-w-[88px]">33,600</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-[60px]">
            <div className="mt-[60px] text-[14px] font-bold">TOTAL PAYMENT</div>
            <div className="mt-[30px]">
              <div className="border-b border-t border-solid border-gray-300 py-[15px] pl-[5px] pr-[25px]">
                <div className="flex">
                  <div className="basis-[30%] py-[15px] text-left">
                    상품금액
                  </div>
                  <div className="basis-[70%] py-[15px] text-right">
                    ₩48,000
                  </div>
                </div>
                <div className="flex">
                  <div className="basis-[30%] py-[15px] text-left">배송비</div>
                  <div className="basis-[70%] py-[15px] text-right">
                    + ₩2,500
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-gray-300 py-[15px] pl-[5px] pr-[25px]">
                <div className="flex">
                  <div className="basis-[30%] py-[15px] text-left">
                    총 할인금액
                  </div>
                  <div className="basis-[70%] py-[15px] text-right">
                    - ₩14,400
                  </div>
                </div>
              </div>
              <div className="pl-[5px] pr-[25px] pt-[30px]">
                <div className="flex">
                  <div className="basis-[30%] py-[15px] text-left text-[16px]">
                    최종 결제예정 금액
                  </div>
                  <div className="basis-[70%] py-[15px] text-right text-[16px]">
                    <span>₩</span>
                    <span className="ml-[20px]">36,100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] text-center">
        <div className="mt-[50px]">
          <button
            onClick={(e) => handleSubmit(e)}
            className="transition-btn h-[60px] w-full md:w-[600px]"
          >
            ₩36,100 결제하기
          </button>
          <p className="mt-[12px] text-xs">
            *증정품은 총 실결제금액(쿠폰, 배송비 제외) 기준으로 증정됩니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
