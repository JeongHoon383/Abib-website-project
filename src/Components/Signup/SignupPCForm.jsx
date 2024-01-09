import { useState } from "react";
import SignupTerms from "./SignupTerms";
import { Link } from "react-router-dom";
import SignupFormContent from "./SignupFormContent";
import { useFormContext } from "react-hook-form";

export default function SignupForm() {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [infoAgreement, setInfoAgreement] = useState(false);

  const handleTermsAgreement = (data) => {
    setTermsAgreement(data);
  };

  const handleInfoAgreement = (data) => {
    setInfoAgreement(data);
  };

  const { handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-[90%] py-16 text-[11px] lg:w-[600px]"
    >
      <SignupFormContent />

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
