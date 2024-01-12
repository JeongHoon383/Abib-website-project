import { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import AddressSearch from "./AddressSearch";

export default function SignupFormContent({
  getIsIdAvailable,
  getIsCertificated,
}) {
  const [showCertificationInput, setShowCertificationInput] = useState(false); //인증번호 input 보여주기 여부
  const [certificationCode, setCertificationCode] = useState(""); //발송된 인증 번호
  const certificationCodeRef = useRef(null);

  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();

  const phoneValue = watch("phone");
  const idValue = watch("id");

  const checkIdAvailable = () => {
    axios(`http://127.0.0.1:9090/member/isIdAvailable/${idValue}`).then(
      (result) => {
        if (result.data === 1) {
          alert("이미 사용 중인 아이디입니다.");
          getIsIdAvailable(false);
        } else if (result.data === 0) {
          alert("사용 가능한 아이디입니다.");
          getIsIdAvailable(true);
        }
      },
    );
  };

  const sendCertificationCode = () => {
    axios
      .post("http://127.0.0.1:9090/member/certification", { phoneValue })
      .then((result) => {
        if (result.data === "failure") {
          alert("인증 번호 전송에 실패했습니다. 다시 시도해주세요.");
        } else {
          alert("인증 번호가 전송되었습니다.");
          setShowCertificationInput(true);
          setCertificationCode(result.data);
        }
      });
  };

  const checkCertificationCode = () => {
    if (certificationCodeRef.current.value === certificationCode) {
      alert("휴대폰 인증이 완료되었습니다.");
      getIsCertificated(true);
    } else {
      alert("인증번호가 일치하지 않습니다. 다시 입력해주세요.");
      getIsCertificated(false);
    }
  };

  const getPostalcode = (postalcode) => {
    setValue("postalcode", postalcode);
    trigger("postalcode");
  };

  const getAddress1 = (address1) => {
    setValue("address1", address1);
    trigger("address1");
  };

  return (
    <div>
      <h3 className="mb-7 text-center font-bold">LOGIN INFORMATION</h3>

      <div className="mb-7 w-full">
        <div className="mb-7 w-full">
          <label htmlFor="id" className="block text-[12px] font-semibold">
            아이디
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              id="id"
              name="id"
              className="transition-input w-[73%]"
              maxLength={16}
              placeholder="영문 소문자/숫자, 4~16자"
              {...register("id", {
                required: true,
                onChange: () => getIsIdAvailable(false),
              })}
            />
            <button
              type="button"
              onClick={checkIdAvailable}
              className={`h-10 font-normal ${
                errors.id || !idValue
                  ? "pointer-events-none border border-black bg-back"
                  : "transition-btn"
              }    w-1/4 dark:bg-slate-400`}
            >
              중복 확인
            </button>
          </div>
          <p className=" text-rose-400">{errors.id && errors.id.message}</p>
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
            <p className=" text-rose-400">
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
          <p className=" text-rose-400">
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
            className="transition-input w-full"
            {...register("name", { required: true })}
          />
          <p className=" text-rose-400">{errors.name && errors.name.message}</p>
        </div>

        <div className="mb-7">
          <label
            htmlFor="phone"
            className="block w-full text-[12px] font-semibold"
          >
            휴대전화
          </label>
          <div className="flex justify-between">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="transition-input w-[73%]"
              placeholder="'-'를 제외하고 입력해주세요."
              maxLength={11}
              {...register("phone", {
                required: true,
                onChange: () => getIsCertificated(false),
              })}
            />
            <button
              type="button"
              onClick={sendCertificationCode}
              className={`h-10 w-1/4 dark:bg-slate-400 ${
                errors.phone || !phoneValue
                  ? "pointer-events-none border border-black bg-back"
                  : "transition-btn"
              }`}
            >
              인증 번호 전송
            </button>
          </div>

          <p className=" text-rose-400">
            {errors.phone && errors.phone.message}
          </p>
        </div>
        {showCertificationInput && (
          <div className="mb-7 ">
            <label
              htmlFor="certificationCode"
              className="block text-[12px] font-semibold"
            >
              인증번호 입력
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                id="certificationCode"
                name="certificationCode"
                className="transition-input w-[73%]"
                ref={certificationCodeRef}
              />
              <button
                type="button"
                onClick={checkCertificationCode}
                className="transition-btn h-10 w-1/4"
              >
                인증하기
              </button>
            </div>
          </div>
        )}

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
            className="transition-input w-full"
            placeholder="YYYYMMDD"
            maxLength={8}
            {...register("birthdate", { required: true })}
          />
          <p className=" text-rose-400">
            {errors.birthdate && errors.birthdate.message}
          </p>
        </div>

        <div className="mb-7">
          <label htmlFor="email" className="block text-[12px] font-semibold">
            이메일
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="transition-input w-full"
            {...register("email", { required: true })}
          />
          <p className=" text-rose-400">
            {errors.email && errors.email.message}
          </p>
        </div>

        <div className="mb-7 flex w-full justify-between">
          <div className="w-[73%]">
            <label
              htmlFor="postalcode"
              className="block text-[12px] font-semibold"
            >
              우편번호
            </label>
            <input
              type="text"
              id="postalcode"
              name="postalcode"
              readOnly
              className="transition-input h-10 w-full"
              {...register("postalcode", { required: true })}
            />
            <p className=" text-rose-400">
              {errors.postalcode && errors.postalcode.message}
            </p>
          </div>
          <div className="w-1/4">
            <span className="text-[12px] font-semibold">우편번호 찾기</span>
            <AddressSearch
              getPostalcode={getPostalcode}
              getAddress1={getAddress1}
            />
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
          <p className=" text-rose-400">
            {errors.address1 && errors.address1.message}
          </p>
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
          <p className=" text-rose-400">
            {errors.address2 && errors.address2.message}
          </p>
        </div>
      </div>
    </div>
  );
}
