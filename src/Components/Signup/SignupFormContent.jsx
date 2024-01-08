import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function SignupFormContent() {
  const [domainValue, setDomainValue] = useState("");
  const [isDomainReadOnly, setIsDomainReadOnly] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSelectDomain = (e) => {
    if (e.target.value !== "") {
      setDomainValue(e.target.value);
      setIsDomainReadOnly(true);
    } else {
      setDomainValue("");
      setIsDomainReadOnly(false);
    }
  };

  const handlePhoneCertification = () => {
    console.log("phone" + phone);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h3 className="mb-7 text-center font-bold">LOGIN INFORMATION</h3>

      <div className="mb-7 w-full">
        <div className="mb-5 w-full">
          <label htmlFor="id" className="block text-[12px] font-semibold">
            아이디
          </label>
          <p className="flex">
            <input
              type="text"
              id="id"
              name="id"
              className="transition-input w-[80%]"
              placeholder="영문 소문자/숫자, 4~16자"
              {...register("id")}
            />
            <button className="transition-btn h-10 w-[20%] font-normal">
              중복 확인
            </button>
          </p>
        </div>

        <div className="w-full">
          <div className="mb-5 w-full">
            <label htmlFor="password" className="text-[12px] font-semibold">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="transition-input w-full"
              placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
              {...register("password")}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="confirmPassword"
              className="text-[12px] font-semibold"
            >
              비밀번호확인
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="transition-input w-full"
              placeholder="********"
              {...register("confirmPassword")}
            />
          </div>
        </div>
      </div>

      <h3 className="mb-7 text-center font-bold">PERSONAL INFORMATION</h3>

      <div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-[12px] font-semibold">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            readOnly
            className="transition-input w-1/2"
            {...register("name")}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block text-[12px] font-semibold">
            휴대폰
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="transition-input w-1/2"
            onChange={(e) => setPhone(e.target.value)}
            {...register("phone")}
          />
          <button
            type="button"
            onClick={handlePhoneCertification}
            className="transition-btn h-10"
          >
            인증 번호 전송
          </button>
        </div>

        <div className="mb-5">
          <label
            htmlFor="birthdate"
            className="block text-[12px] font-semibold"
          >
            생년월일
          </label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            className="transition-input w-1/2"
            placeholder="YYYYMMDD"
            {...register("birthdate")}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-[12px] font-semibold">
            이메일
          </label>

          <div className="flex items-center lg:w-3/4">
            <input
              type="email"
              id="email"
              name="email"
              className="transition-input w-[31.6%]"
              {...register("email")}
            />
            <span className="inline-block w-[4%] text-center">@</span>
            <label htmlFor="domain" className="hidden">
              도메인
            </label>
            <input
              type="text"
              id="domain"
              name="domain"
              className="transition-input mr-[1%] w-[31.6%]"
              readOnly={isDomainReadOnly}
              value={domainValue}
              onChange={(e) => setDomainValue(e.target.value)}
              {...register("domain")}
            />
            <select
              name="domain"
              id="domain"
              className="transition-input w-[31.6%]"
              onChange={(e) => handleSelectDomain(e)}
              defaultValue=""
            >
              <option value="">직접입력</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
              <option value="kakao.com">kakao.com</option>
            </select>
          </div>
        </div>

        <div className="mb-5 flex w-full justify-between">
          <div className="w-[70%]">
            <label
              htmlFor="postalCode"
              className="block text-[12px] font-semibold"
            >
              우편번호
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              readOnly
              className="transition-input h-10 w-full"
              {...register("postalCode")}
            />
          </div>
          <div className="w-[28%]">
            <span className="text-[12px] font-semibold">우편번호 찾기</span>
            <button className="transition-btn h-10 w-full">POSTAL CODE</button>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="address1" className="text-[12px] font-semibold">
            기본주소
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            readOnly
            className="transition-input w-full"
            {...register("address1")}
          />
        </div>

        <div>
          <label htmlFor="address2" className="text-[12px] font-semibold">
            나머지주소
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            className="transition-input w-full"
            {...register("address2")}
          />
        </div>
      </div>
    </div>
  );
}
