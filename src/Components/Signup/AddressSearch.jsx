import { useDaumPostcodePopup } from "react-daum-postcode";

export default function AddressSearch({ getAddress1, getPostalcode }) {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let postalcode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    getAddress1(fullAddress);
    getPostalcode(postalcode);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={"transition-btn h-10 w-full font-normal dark:bg-slate-400"}
    >
      우편 번호 찾기
    </button>
  );
}
