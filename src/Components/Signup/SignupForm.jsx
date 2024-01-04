import { useState, useEffect } from "react";
import { IoCheckboxSharp } from "react-icons/io5";
import axios from "axios";

export default function SignupForm() {
  const [domainValue, setDomainValue] = useState("");
  const [isDomainReadOnly, setIsDomainReadOnly] = useState(false);
  const [terms, setTerms] = useState([]);
  const [termsToggle, setTermsToggle] = useState(false);
  const [infoToggle, setInfoToggle] = useState(false);

  const handleSelectDomain = (e) => {
    if (e.target.value !== "") {
      setDomainValue(e.target.value);
      setIsDomainReadOnly(true);
    } else {
      setDomainValue("");
      setIsDomainReadOnly(false);
    }
  };

  useEffect(() => {
    axios.get("/terms/terms.json").then((result) => setTerms(result.data));
  }, []);

  return (
    <form className="mx-auto w-[90%] py-16 text-[11px] lg:w-[600px]">
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

        <div className="mb-7 w-full border-b border-[#CCC]">
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
            <div className="mb-5 w-full lg:w-[49%]">
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
            <div className="mb-5 w-full lg:mb-14 lg:w-[49%]">
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
              <button className="transition-btn h-10 w-full">
                POSTAL CODE
              </button>
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

      <div className="py-14">
        <div className="mb-7">
          <h3 className="mb-7 text-center font-bold">이용약관 동의</h3>
          <div
            className="border border-black"
            onClick={() => setTermsToggle(!termsToggle)}
          >
            <span className="block w-full border-b border-black text-center leading-5">
              전체보기
            </span>
            <div
              className={`overflow-hidden text-[12px] ${
                termsToggle ? "h-auto" : "h-[100px]"
              }`}
            >
              {terms.map((data, i) => (
                <p key={i}>
                  <span className="block">{data.article}</span>
                  <span>{data.content}</span>
                </p>
              ))}
              <span className="block w-full text-center">
                부 칙(시행일) 이 약관은 년 월 일부터 시행합니다.
              </span>
            </div>
          </div>
          <p className="my-1 flex items-center justify-center text-[13px]">
            <span>이용약관에 동의하시겠습니까?</span>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mx-2 h-[17px] w-[17px]"
            />
            <label htmlFor="terms">동의함</label>
          </p>
        </div>

        <div>
          <h3 className="mb-7 text-center font-bold">
            개인정보 수집 및 이용 동의
          </h3>
          <div
            className="border border-black"
            onClick={() => setInfoToggle(!infoToggle)}
          >
            <span className="block w-full border-b border-black text-center leading-5">
              전체보기
            </span>
            <div
              className={`overflow-hidden text-[12px] ${
                infoToggle ? "h-auto" : "h-[100px]"
              }`}
            >
              <p>
                <strong>개인정보 수집목적 및 이용목적</strong>
                <br />
                <span>
                  ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
                  콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송,
                  금융거래 본인 인증 및 금융 서비스
                </span>
                <br />
                <span>
                  ο 회원 관리 - 회원제 서비스 이용에 따른 본인확인, 개인 식별,
                  불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인,
                  연령확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인
                  동의여부 확인, 불만처리 등 민원처리, 고지사항 전달
                </span>
                <br />
                <span>
                  ο 마케팅 및 광고에 활용 - 접속 빈도 파악 또는 회원의 서비스
                  이용에 대한 통계
                </span>
              </p>

              <p>
                <strong>수집하는 개인정보 항목</strong>
                <br />
                <span>
                  회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은
                  개인정보를 수집하고 있습니다.
                </span>
                <br />
                <span>
                  ο 수집항목: 이름, 생년월일, 로그인ID, 비밀번호, 배송지 주소,
                  휴대전화번호, 이메일, 페이스북ID, 인스타그램ID,
                  법정대리인정보, 서비스 이용기록, 접속 로그, 접속 IP 정보,
                  결제기록
                </span>
                <br />
                <span>ο 개인정보 수집방법: 홈페이지(회원가입), 서면양식</span>
              </p>

              <p>
                <strong>개인정보의 보유기간 및 이용기간</strong>
                <br />
                <span>
                  원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당
                  정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의
                  이유로 명시한 기간 동안 보존합니다.
                </span>
                <br />
                <strong>가. 회사 내부 방침에 의한 정보 보유 사유</strong>
                <br />
                <span>o 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관: 3년</span>
                <br />
                <strong>나. 관련 법령에 의한 정보보유 사유</strong>
                <br />
                <span>o 계약 또는 청약철회 등에 관한 기록</span>
                <br />
                <span>
                  - 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                </span>
                <br />
                <span>- 보존기간: 5년</span>
                <br />
                <span>o 대금 결제 및 재화 등의 공급에 관한 기록</span>
                <br />
                <span>
                  - 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                </span>
                <br />
                <span>- 보존기간: 5년</span>
                <br />
                <span>o 소비자 불만 또는 분쟁처리에 관한 기록</span>
                <br />
                <span>
                  - 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                </span>
                <br />
                <span>- 보존기간: 3년</span>
                <br />
                <span>o 웹사이트 방문기록</span>
                <br />
                <span>- 보존이유: 통신비밀보호법</span>
                <br />
                <span>- 보존기간: 3개월</span>
                <br />
                <span>
                  ※ 동의를 거부할 수 있으나 거부시 회원 가입이 불가능합니다.
                </span>
              </p>
            </div>
          </div>
          <p className="my-1 flex items-center justify-center text-[13px]">
            <span>개인정보 수집 및 이용에 동의하십니까?</span>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mx-2 h-[17px] w-[17px]"
            />
            <label htmlFor="terms">동의함</label>
          </p>
        </div>
      </div>
    </form>
  );
}

//signupForm은 컴포넌트로 반응형으로 만들고

//이용약관은 컴포넌트로 분리해서 컴퓨터는 signupForm이랑 같이 넣고 모바일에서는 이용약관 동의하고 버튼 클릭시 signupForm 컴포넌트 띄우기
