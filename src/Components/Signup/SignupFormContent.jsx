import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import axios from "axios";

export default function SignupFormContent() {
  const [isDomainReadOnly, setIsDomainReadOnly] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [domain, setDomain] = useState("");

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const phoneValue = watch("phone");

  const handleSelectDomain = (e) => {
    if (e.target.value !== "") {
      setDomain(e.target.value);
      setIsDomainReadOnly(true);
    } else {
      setDomain("");
      setIsDomainReadOnly(false);
    }
  };

  const handlePhoneCertification = () => {
    axios
      .post("http://127.0.0.1:9090/certification/", { phoneValue })
      .then((result) => {
        if (result.data === "failure") {
          alert("인증 번호 전송에 실패했습니다. 다시 시도해주세요.");
        } else {
          alert("인증 번호가 전송되었습니다.");
          //인증번호 입력란, 확인버튼 활성화
          //인증번호 비교
          //맞으면 맞았다고 하기 틀리면 틀렸다고 하기
        }
      });
  };

  useEffect(() => {
    setValue("email", emailId + "@" + domain);
  }, [emailId, domain]);

  return (
    <div>
      <h3 className="mb-7 text-center font-bold">LOGIN INFORMATION</h3>

      <div className="mb-7 w-full">
        <div className="mb-7 w-full">
          <label htmlFor="id" className="block text-[12px] font-semibold">
            아이디
          </label>
          <div className="flex">
            <input
              type="text"
              id="id"
              name="id"
              className="transition-input w-[80%]"
              maxLength={16}
              placeholder="영문 소문자/숫자, 4~16자"
              {...register("id", { required: true })}
            />
            <button className="transition-btn h-10 w-[20%] font-normal   dark:bg-slate-400">
              중복 확인
            </button>
          </div>
          <p className="absolute">{errors.id && errors.id.message}</p>
        </div>

        <div className="w-full">
          <div className="mb-7 w-full">
            <label htmlFor="password" className="text-[12px] font-semibold">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="transition-input w-full"
              maxLength={16}
              placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자"
              {...register("password", { required: true })}
            />
            <p className="absolute">
              {errors.password && errors.password.message}
            </p>
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
              maxLength={16}
              placeholder="********"
              {...register("confirmPassword", { required: true })}
            />
          </div>
          <p className="absolute">
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>
        </div>
      </div>

      <h3 className="mb-7 text-center font-bold">PERSONAL INFORMATION</h3>

      <div>
        <div className="mb-7">
          <label htmlFor="name" className="block text-[12px] font-semibold">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="transition-input w-1/2"
            {...register("name", { required: true })}
          />
          <p className="absolute">{errors.name && errors.name.message}</p>
        </div>

        <div className="mb-7">
          <label htmlFor="phone" className="block text-[12px] font-semibold">
            휴대폰
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="transition-input w-1/2"
            maxLength={11}
            {...register("phone", { required: true })}
          />
          <button
            type="button"
            onClick={handlePhoneCertification}
            className="transition-btn h-10 w-1/4 "
          >
            인증 번호 전송
          </button>
          <p className="absolute">{errors.phone && errors.phone.message}</p>
        </div>

        <div className="mb-7">
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
            maxLength={8}
            {...register("birthdate", { required: true })}
          />
          <p className="absolute">
            {errors.birthdate && errors.birthdate.message}
          </p>
        </div>

        <div className="mb-7">
          <label htmlFor="email" className="block text-[12px] font-semibold">
            이메일
          </label>

          <div className="flex items-center lg:w-3/4">
            <input
              type="hidden"
              id="email"
              name="email"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              className="transition-input w-[31.6%]"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <span className="inline-block w-[4%] text-center">@</span>
            <input
              type="text"
              className="transition-input mr-[1%] w-[31.6%]"
              readOnly={isDomainReadOnly}
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <select
              name="domain2"
              id="domain2"
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

        <div className="mb-7 flex w-full">
          <div className="w-3/4">
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
              {...register("postalCode", { required: true })}
            />
          </div>
          <div className="w-1/4">
            <span className="text-[12px] font-semibold">우편번호 찾기</span>
            <button type="button" className="transition-btn h-10 w-full">
              POSTAL CODE
            </button>
          </div>
        </div>

        <div className="mb-7">
          <label htmlFor="address1" className="text-[12px] font-semibold">
            기본주소
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            readOnly
            className="transition-input w-full"
            {...register("address1", { required: true })}
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
            {...register("address2", { required: true })}
          />
        </div>
      </div>
    </div>
  );
}
