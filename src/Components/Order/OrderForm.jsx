import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import AddressSearch from "./../Signup/AddressSearch";
import { useSelector } from "react-redux";
import axios from "axios";

const OrderForm = () => {
  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const deliveryMessageValue = watch("deliveryMessage");

  const getOrPostalcode = (postalcode) => {
    setValue("orPostalcode", postalcode);
    trigger("orPostalcode");
  };

  const getOrAddress1 = (address1) => {
    setValue("orAddress1", address1);
    trigger("orAddress1");
  };

  const getDeliveryPostalcode = (postalcode) => {
    setValue("deliveryPostalcode", postalcode);
    trigger("deliveryPostalcode");
  };

  const getDeliveryAddress1 = (address1) => {
    setValue("deliveryAddress1", address1);
    trigger("deliveryAddress1");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const memberInfo = useSelector((state) => state.persistedReducer);

  useEffect(() => {
    if (memberInfo.isLogin) {
      axios(
        `http://127.0.0.1:9090/order/getOrdererInfo/${memberInfo.memberId}`,
      ).then((result) => {
        console.log(result.data);
        setValue("orName", result.data.name);
        trigger("orName");
        setValue("orPostalcode", result.data.postalcode);
        trigger("orPostalcode");
        setValue("orAddress1", result.data.address1);
        trigger("orAddress1");
        setValue("orAddress2", result.data.address2);
        trigger("orAddress2");
        setValue("orPhone", result.data.phone);
        trigger("orPhone");
        setValue("orEmail", result.data.email);
        trigger("orEmail");
      });
    }
  }, [memberInfo]);

  // const [count, setCount] = useState(1);

  // const [formData, setFormData] = useState({
  //   itemName: "",
  //   postNum: "",
  //   address: "",
  //   remainADress: "",
  //   phone: "",
  //   email: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(formData);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // 주문 정보를 처리하는 로직 추가
  //   console.log("주문 정보:", formData);
  // };

  // const handleQuantity = (type) => {
  //   if (type === "plus") {
  //     setCount(count + 1);
  //   } else {
  //     if (count === 1) return;
  //     setCount(count - 1);
  //   }
  // };

  return (
    <>
      <div className="mx-auto max-w-[1400px] border-b border-t border-solid border-black text-xs">
        <div className="mx-auto w-[90%] max-w-[900px] pt-[40px] lg:w-full">
          <div className="border-b border-solid  border-black pb-[60px]">
            <div className="mb-[28px] mt-[20px] text-center text-[14px] font-bold">
              PERSONAL INFORMATION
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-[20px] ">
                <label htmlFor="orName" className="mb-[5px] block">
                  <span>이름</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orName"
                  name="orName"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  {...register("orName", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.orName && errors.orName.message}
                </p>
              </div>

              <div className="relative mb-[20px] flex justify-between">
                <div className="w-[70%]">
                  <label htmlFor="orPostalcode" className="mb-[5px] block">
                    <span>우편번호</span>
                    <span className="ml-[3px] text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="orPostalcode"
                    name="orPostalcode"
                    className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                    readOnly
                    {...register("orPostalcode", { required: true })}
                  />
                </div>
                <div className="w-[29%]">
                  <p className="mb-[5px]">우편번호 찾기</p>
                  <AddressSearch
                    getPostalcode={getOrPostalcode}
                    getAddress1={getOrAddress1}
                  />
                </div>
                <p className="absolute top-full  text-rose-400">
                  {errors.orPostalcode && errors.orPostalcode.message}
                </p>
              </div>

              <div className="relative mb-[20px]">
                <label htmlFor="orAddress1">
                  <span>기본주소</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orAddress1"
                  name="orAddress1"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  readOnly
                  {...register("orAddress1", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.orAddress1 && errors.orAddress1.message}
                </p>
              </div>

              <div className="mb-[20px]">
                <label htmlFor="orAddress2">
                  <span>나머지 주소</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orAddress2"
                  name="orAddress2"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  {...register("orAddress2")}
                />
              </div>

              <div className="relative mb-[20px]">
                <label htmlFor="orPhone">
                  <span>휴대폰</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="orPhone"
                  name="orPhone"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  placeholder="'-'를 제외하고 입력해주세요."
                  maxLength={11}
                  {...register("orPhone", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.orPhone && errors.orPhone.message}
                </p>
              </div>

              <div className="relative mb-[20px]">
                <label htmlFor="orEmail">
                  <span>이메일</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="orEmail"
                  name="orEmail"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  {...register("orEmail", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.orEmail && errors.orEmail.message}
                </p>
              </div>

              <div className="mb-[28px] mt-[70px] border-t border-solid  border-black pt-[60px] text-center text-[14px] font-bold">
                BILLING INFORMATION
              </div>

              <div className="mb-[10px] py-[5px]">
                <p className=" mb-[5px] ">배송지 선택</p>
                <div className="flex items-center justify-start">
                  <input
                    id="addressOption1"
                    name="addressOption"
                    type="radio"
                    className=" mr-[3px]"
                  />
                  <label htmlFor="addressOption">주문자 정보와 동일</label>
                  <input
                    id="addressOption2"
                    name="addressOption"
                    type="radio"
                    className="ml-[20px] mr-[3px]"
                    defaultChecked
                  />
                  <label htmlFor="addressOption">새로운 배송지</label>
                  <button className="transition-btn w-30% ml-[20px] h-[40px] md:w-[20%]">
                    배송 주소록 보기
                  </button>
                </div>
              </div>

              <div className="relative mb-[20px]">
                <label htmlFor="deliveryName">
                  <span>이름</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="deliveryName"
                  name="deliveryName"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300"
                  {...register("deliveryName", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.deliveryName && errors.deliveryName.message}
                </p>
              </div>

              <div className="relative mb-[20px] flex justify-between">
                <div className="w-[70%]">
                  <label
                    htmlFor="deliveryPostalcode"
                    className="mb-[5px] block"
                  >
                    <span>우편번호</span>
                    <span className="ml-[3px] text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="deliveryPostalcode"
                    name="deliveryPostalcode"
                    className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                    readOnly
                    {...register("deliveryPostalcode", { required: true })}
                  />
                </div>
                <div className="w-[29%]">
                  <p className="mb-[5px]">우편번호 찾기</p>
                  <AddressSearch
                    getPostalcode={getDeliveryPostalcode}
                    getAddress1={getDeliveryAddress1}
                  />
                </div>
                <p className="absolute top-full  text-rose-400">
                  {errors.deliveryPostalcode &&
                    errors.deliveryPostalcode.message}
                </p>
              </div>

              <div className="relative mb-[20px]">
                <label htmlFor="deliveryAddress1">
                  <span>기본주소</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="deliveryAddress1"
                  name="deliveryAddress1"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  readOnly
                  {...register("deliveryAddress1", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.deliveryAddress1 && errors.deliveryAddress1.message}
                </p>
              </div>

              <div className="mb-[20px]">
                <label htmlFor="orAddress2">
                  <span>나머지 주소</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orAddress2"
                  name="orAddress2"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  {...register("orAddress2")}
                />
              </div>

              <div className="relative mb-[20px]">
                <label htmlFor="deliveryPhone">
                  <span>휴대폰</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="deliveryPhone"
                  name="deliveryPhone"
                  className="form-text-hover h-[40px] w-full border border-solid border-gray-300 p-[5px]"
                  {...register("deliveryPhone", { required: true })}
                />
                <p className="absolute top-full  text-rose-400">
                  {errors.deliveryPhone && errors.deliveryPhone.message}
                </p>
              </div>

              <div className="relative">
                <label htmlFor="deliveryMessage">
                  <span>배송 메세지</span>
                  <span className="ml-[3px] text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  id="deliveryMessage"
                  name="deliveryMessage"
                  className="h-[60px] w-full border border-solid border-gray-300 p-[5px]"
                  {...register("deliveryMessage")}
                />
                <p className="absolute right-0 top-full text-[13px]">
                  {deliveryMessageValue ? deliveryMessageValue.length : 0} / 200
                </p>
              </div>
            </form>
          </div>
          <div className="border-b border-solid border-black pb-[60px]">
            <div className="mt-[60px] text-center text-[14px] font-bold">
              ORDER REVIEW
            </div>
            <div className="mt-[40px] border-b border-t border-solid border-gray-300">
              <div className="border-b border-solid border-gray-300">
                <ul className="flex h-[43px] w-full items-center justify-between font-bold">
                  <li className="w-[70px] px-[12px] py-[5px] ">PRODUCT</li>
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
            <div className="mt-[60px] text-center text-[14px] font-bold">
              TOTAL PAYMENT
            </div>
            <div className="mt-[30px]">
              <div className="border-b border-t border-solid border-gray-300 py-[15px] pl-[5px] pr-[25px]">
                <div className="flex">
                  <div className="basis-[30%] py-[15px] ">상품금액</div>
                  <div className="basis-[70%] py-[15px] text-right">
                    ₩48,000
                  </div>
                </div>
                <div className="flex">
                  <div className="basis-[30%] py-[15px] ">배송비</div>
                  <div className="basis-[70%] py-[15px] text-right">
                    + ₩2,500
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-gray-300 py-[15px] pl-[5px] pr-[25px]">
                <div className="flex">
                  <div className="basis-[30%] py-[15px] ">총 할인금액</div>
                  <div className="basis-[70%] py-[15px] text-right">
                    - ₩14,400
                  </div>
                </div>
              </div>
              <div className="pl-[5px] pr-[25px] pt-[30px]">
                <div className="flex">
                  <div className="basis-[30%] py-[15px]  text-[16px]">
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
            onClick={handleSubmit(onSubmit)}
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
