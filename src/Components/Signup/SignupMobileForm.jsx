import SignupTerms from "./SignupTerms";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignupFormContent from "./SignupFormContent";
import { useFormContext } from "react-hook-form";

export default function SignupMobileForm() {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [infoAgreement, setInfoAgreement] = useState(false);
  const [isShowSignupForm, setIsShowSignupForm] = useState(false);

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
    console.log(data);
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
              className="h-10 w-[49%] border border-black bg-black text-white"
            >
              다음
            </button>
            <Link
              to={"/"}
              className="h-10 w-[49%] border border-black text-center leading-10"
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
          <SignupFormContent />
          <div className="mx-auto mt-7 flex w-[60%] justify-between">
            <button className="h-10 w-[49%] border border-black bg-black text-white">
              회원가입
            </button>
            <Link
              to={"/"}
              className="h-10 w-[49%] border border-black text-center leading-10"
            >
              취소
            </Link>
          </div>
        </form>
      )}
    </>
  );
}
