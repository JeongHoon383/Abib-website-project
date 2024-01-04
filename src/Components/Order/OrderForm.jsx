import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    postNum: "",
    address: "",
    remainADress: "",
    phone: "",
    phone2: "",
    phone3: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 주문 정보를 처리하는 로직 추가
    console.log("주문 정보:", formData);
  };
  return (
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
                이메일
                <span className="ml-[3px] text-red-500">*</span>
              </p>
              <div className="text-left">
                <input
                  type="email"
                  name="email"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-[30%] border border-solid border-gray-300 p-[5px]"
                />
                <span className="mx-[4px]">@</span>
                <input
                  type="email"
                  name="email2"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover mr-[4px] h-[40px] w-[30%] border border-solid border-gray-300 p-[5px]"
                />
                <select
                  type="email"
                  name="email3"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="form-text-hover h-[40px] w-[30%] border border-solid border-gray-300 p-[5px] lg:w-[12%]"
                >
                  <option value="">-이메일 선택-</option>
                  <option value="">naver.com</option>
                  <option value="">daum.net</option>
                  <option value="">nate.com</option>
                  <option value="">hotmail.com</option>
                  <option value="">empas.com</option>
                  <option value="">korea.com</option>
                  <option value="">dreamwiz.com</option>
                  <option value="">gmail.com</option>
                  <option value="">gmail.com</option>
                  <option value="">직접 입력</option>
                </select>
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
              <p className="w-full pb-[5px] pt-[10px] text-left">배송 메세지</p>
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
          asdasdasd
        </div>
        <div className="pb-[60px]">
          <div className="mt-[60px] text-[14px] font-bold">TOTAL PAYMENT</div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
