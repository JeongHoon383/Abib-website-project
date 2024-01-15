import React from "react";
import OrderForm from "./OrderForm";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  orName: yup
    .string()
    .required("주문자의 이름을 입력해주세요.")
    .min(2, "이름은 2글자 이상 입력해주세요."),

  orPostalcode: yup.string().required("주문자의 우편 번호를 입력해주세요."),

  orAddress1: yup.string().required("주문자의 기본 주소를 입력해주세요."),

  orAddress2: yup.string(),

  orPhone: yup
    .string()
    .required("주문자의 휴대폰 번호를 입력해주세요.")
    .matches(/^[0-9]{10,11}$/, "올바른 핸드폰 번호를 입력해주세요."),

  orEmail: yup
    .string()
    .required("주문자의 이메일을 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "유효한 이메일 형식이 아닙니다.",
    ),

  deliveryName: yup
    .string()
    .required("배송 받을 분의 이름을 입력해주세요.")
    .min(2, "이름은 2글자 이상 입력해주세요."),

  deliveryPostalcode: yup
    .string()
    .required("배송 받을 분의 우편 번호를 입력해주세요."),

  deliveryAddress1: yup.string().required("주문자의 기본 주소를 입력해주세요."),

  deliveryAddress2: yup.string(),

  deliveryPhone: yup
    .string()
    .required("배송 받을 분의 휴대폰 번호를 입력해주세요.")
    .matches(/^[0-9]{10,11}$/, "올바른 핸드폰 번호를 입력해주세요."),

  deliveryMessage: yup.string(),
});

const OrderMain = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <div>
        <img
          src="../../../cart/orderMainImage.jpeg"
          alt=""
          className="pb-[60px]"
        />
      </div>
      <FormProvider {...methods}>
        <OrderForm />
      </FormProvider>
    </div>
  );
};

export default OrderMain;
