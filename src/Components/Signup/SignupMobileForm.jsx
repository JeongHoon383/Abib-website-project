import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import SignupTerms from "./SignupTerms";
import SignupFormContent from "./SignupFormContent";

export default function SignupMobileForm() {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false); 
  const [isShowSignupForm, setIsShowSignupForm] = useState(false);
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

  const handleShowSignForm = () => {
    if (termsAgreement && infoAgreement) {
      setIsShowSignupForm(true);
    } else if (!termsAgreement) {
      alert("이용약관에 동의해주세요.");
    } else if (!infoAgreement) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
    }
  };

  const { handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    if (!isIdAvailable) {
      alert("아이디 중복 확인을 해주세요.");
      // } else if (!isCertificated) {
      //   alert("휴대전화 인증을 해주세요.");
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
    <>
      {!isShowSignupForm ? (
        <section className="mx-auto w-[90%] pb-14">
          <SignupTerms
            termsAgreement={termsAgreement}
            infoAgreement={infoAgreement}
            handleTermsAgreement={handleTermsAgreement}
            handleInfoAgreement={handleInfoAgreement}
          />
          <div className="mx-auto flex w-[60%] justify-between">
            <button
              onClick={handleShowSignForm}
              className="h-10 w-[49%] border border-black bg-black text-white dark:border-white"
            >
              다음
            </button>
            <Link
              to={"/"}
              className="h-10 w-[49%] border border-black text-center leading-10 dark:border-white"
            >
              취소
            </Link>
          </div>
        </section>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-[90%] py-14 text-[11px]"
        >
          <SignupFormContent
            getIsIdAvailable={getIsIdAvailable}
            getIsCertificated={getIsCertificated}
          />
          <div className="mx-auto mt-7 flex w-[60%] justify-between">
            <button className="h-10 w-[49%] border border-black bg-black text-white dark:border-white">
              회원가입
            </button>
            <Link
              to={"/"}
              className="h-10 w-[49%] border border-black text-center leading-10 dark:border-white"
            >
              취소
            </Link>
          </div>
        </form>
      )}
    </>
  );
}
