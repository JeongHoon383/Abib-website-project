import { useState } from "react";
import SignupTerms from "./SignupTerms";
import { Link } from "react-router-dom";
import SignupFormContent from "./SignupFormContent";

export default function SignupForm() {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [infoAgreement, setInfoAgreement] = useState(false);

  const handleTermsAgreement = (data) => {
    setTermsAgreement(data);
  };

  const handleInfoAgreement = (data) => {
    setInfoAgreement(data);
  };

  return (
    <form className="mx-auto w-[90%] py-16 text-[11px] lg:w-[600px]">
      <SignupFormContent />

      <SignupTerms
        termsAgreement={termsAgreement}
        infoAgreement={infoAgreement}
        handleTermsAgreement={handleTermsAgreement}
        handleInfoAgreement={handleInfoAgreement}
      />

      <button className="transition-btn mb-3 h-12 w-full">회원가입</button>
      <Link
        to={"/"}
        className="block h-10 w-full border border-black text-center leading-10 transition duration-500 hover:bg-back"
      >
        취소
      </Link>
    </form>
  );
}
