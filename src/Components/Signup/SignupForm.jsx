import SignupPCForm from "./SignupPCForm.jsx";
import SignupMobileForm from "./SignupMobileForm";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  id: yup
    .string()
    .required("아이디를 입력해주세요.")
    .matches(/^[a-z0-9]+$/, "영문 소문자와 숫자만 입력 가능합니다.")
    .min(4, "아이디는 최소 4자 이상이어야 합니다."),

  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .matches(
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/,
      "비밀번호는 영문 대소문자, 숫자, 특수문자 중에서 최소 2가지 이상의 조합이어야 합니다.",
    )
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다."),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
    ),

  name: yup
    .string()
    .required("이름을 입력해주세요.")
    .min(2, "이름은 최소 2글자 이상이어야 합니다."),

  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^[0-9]{10,11}$/, "올바른 핸드폰 번호를 입력해주세요."),

  birthdate: yup
    .string()
    .required("생년월일을 입력해주세요.")
    .matches(/^[0-9]{8}$/, "올바른 생년월일을 입력해주세요.")
    .test("isValidate", "올바른 생년월일을 입력해주세요.", (value, context) => {
      const year = parseInt(value.substring(0, 4), 10);
      const month = parseInt(value.substring(4, 6), 10);
      const day = parseInt(value.substring(6, 8), 10);
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const currentDay = new Date().getDate();

      const isValidate =
        month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= new Date(year, month, 0).getDate();

      const isPastDate =
        year < currentYear ||
        (year === currentYear &&
          (month < currentMonth ||
            (month === currentMonth && day <= currentDay)));

      if (isValidate && isPastDate) {
        return true;
      } else {
        return false;
      }
    })
    .test("isUnder14", "만 14세 미만은 가입할 수 없습니다.", (value) => {
      const year = parseInt(value.substring(0, 4), 10);
      const currentYear = new Date().getFullYear();
      return currentYear - year >= 14;
    }),
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "유효한 이메일 형식이 아닙니다.",
    ),

  postalcode: yup.string().required("우편 번호를 입력해주세요."),

  address1: yup.string().required("기본 주소를 입력해주세요."),

  address2: yup.string().required(" 나머지 주소를 입력해주세요."),
});

export default function SignupForm() {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      {window.innerWidth > 1024 ? <SignupPCForm /> : <SignupMobileForm />}
    </FormProvider>
  );
}
