import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import SignupTerms from "./SignupTerms";
import SignupFormContent from "./SignupFormContent";

export default function SignupForm() {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState(false); //아이디 중복 여부 확인
  const [isCertificated, setIsCertificated] = useState(false); //핸드폰 인증 여부 확인
  const navigate = useNavigate();

  const getIsIdAvailable = (data) => {
    setIsIdAvailable(data);
  };

  const getIsCertificated = (data) => {
    setIsCertificated(data);
  };

  const handleTermsAgreement = (data) => {
    setTermsAgreement(data);
  };

  const handleInfoAgreement = (data) => {
    setInfoAgreement(data);
  };

  const { handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    if (!isIdAvailable) {
      alert("아이디 중복 확인을 해주세요.");
      // } else if (!isCertificated) {
      //   alert("휴대전화 인증을 해주세요.");
    } else if (!termsAgreement) {
      alert("이용약관에 동의해주세요.");
    } else if (!infoAgreement) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
    } else {
      axios
        .post("http://127.0.0.1:9090/member/insertMember", data)
        .then((result) => {
          if (result.data === "success") {
            navigate("/signup/complete");
          } else {
            alert(
              "예상치 못한 오류가 발생하여 회원가입에 실패했습니다.\n다시 시도해주세요.",
            );
            navigate("/");
          }
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-[90%] py-16 text-[11px] lg:w-[600px]"
    >
      <SignupFormContent
        getIsIdAvailable={getIsIdAvailable}
        getIsCertificated={getIsCertificated}
      />

      <SignupTerms
        termsAgreement={termsAgreement}
        infoAgreement={infoAgreement}
        handleTermsAgreement={handleTermsAgreement}
        handleInfoAgreement={handleInfoAgreement}
      />

      <button type="submit" className="transition-btn mb-3 h-12 w-full">
        회원가입
      </button>
      <Link
        to={"/"}
        className="block h-10 w-full border border-black text-center leading-10 transition duration-500 hover:bg-back dark:border-white dark:bg-slate-400"
      >
        취소
      </Link>
    </form>
  );
}
