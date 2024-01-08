import { useState } from "react";
import { IoCheckboxSharp } from "react-icons/io5";

export default function SignupFormContent() {
  const [domainValue, setDomainValue] = useState("");
  const [isDomainReadOnly, setIsDomainReadOnly] = useState(false);

  const handleSelectDomain = (e) => {
    if (e.target.value !== "") {
      setDomainValue(e.target.value);
      setIsDomainReadOnly(true);
    } else {
      setDomainValue("");
      setIsDomainReadOnly(false);
    }
  };

  return (
    <div>
      <h3 className="mb-7 text-center font-bold">MOBILE IDENTIFICATION</h3>

      <div className="mb-7">
        <p className="flex items-center">
          <IoCheckboxSharp className="h-4 w-4" />
          휴대폰인증
        </p>
        <button className="transition-btn h-10 w-full">휴대폰 인증</button>
        <p>본인 명의의 휴대폰으로 본인인증을 진행합니다.</p>
      </div>

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
              maxLength={16}
            />
            <button className="transition-btn h-10 w-[20%] font-normal">
              중복 확인
            </button>
          </p>
          <p className="text-[10px]">(영문소문자/숫자, 4~16자)</p>
        </div>

        <div className="w-full justify-between lg:flex">
          <div className="w-full lg:w-[49%]">
            <label htmlFor="password" className="text-[12px] font-semibold">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="transition-input w-full"
              maxLength={16}
            />
            <p className="text-[10px]">
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
            </p>
          </div>
          <div className="w-full lg:w-[49%]">
            <label
              htmlFor="passwordRepeat"
              className="text-[12px] font-semibold"
            >
              비밀번호확인
            </label>
            <input
              type="password"
              id="passwordRepeat"
              name="passwordRepeat"
              className="transition-input w-full"
              maxLength={16}
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
            className="transition-input"
          />
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
              readOnly
              className="transition-input h-10 w-full"
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
            className="transition-input w-full"
            readOnly
          />
        </div>

        <div className="mb-5">
          <label htmlFor="address2" className="text-[12px] font-semibold">
            나머지주소
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            className="transition-input w-full"
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
            maxLength={11}
          />
          <p className="text-[10px]">('-'를 제외하고 입력해주세요.)</p>
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
            />
            <span className="inline-block w-[4%] text-center">@</span>
            <input
              type="text"
              id="domain"
              name="domain"
              className="transition-input mr-[1%] w-[31.6%]"
              readOnly={isDomainReadOnly}
              value={domainValue}
              onChange={(e) => setDomainValue(e.target.value)}
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

        <div>
          <span className="block text-[12px] font-semibold">생년월일</span>

          <select
            name="year"
            id="year"
            className="transition-input mr-1 lg:w-[20%]"
            defaultValue="출생연도"
          >
            <option value="출생연도" disabled>
              출생연도
            </option>
          </select>
          <label htmlFor="year" className="hidden">
            년
          </label>
          <select
            name="month"
            id="month"
            className="transition-input mr-1 lg:w-[12%]"
            defaultValue="월"
          >
            <option value="월" disabled>
              월
            </option>
          </select>
          <label htmlFor="month" className="hidden">
            월
          </label>
          <select
            name="day"
            id="day"
            className="transition-input lg:w-[12%]"
            defaultValue="일"
          >
            <option value="일" disabled>
              일
            </option>
          </select>
          <label htmlFor="day" className="hidden">
            일
          </label>
        </div>
      </div>
    </div>
  );
}
