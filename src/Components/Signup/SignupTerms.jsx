import axios from "axios";
import { useState, useEffect } from "react";

export default function SignupTerms({
  termsAgreement,
  infoAgreement,
  handleTermsAgreement,
  handleInfoAgreement,
}) {
  const [terms, setTerms] = useState([]);
  const [termsToggle, setTermsToggle] = useState(false);
  const [infoToggle, setInfoToggle] = useState(false);

  useEffect(() => {
    axios.get("/terms/terms.json").then((result) => setTerms(result.data));
  }, []);

  return (
    <div className="py-14">
      <div className="mb-7">
        <h3 className="mb-7 text-center font-bold">이용약관 동의</h3>
        <div
          className="border border-black dark:border-white"
          onClick={() => setTermsToggle(!termsToggle)}
        >
          <span className="block w-full cursor-pointer border-b border-black text-center text-[11px] leading-5 dark:border-white">
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
            onChange={() => handleTermsAgreement(!termsAgreement)}
          />
          <label htmlFor="terms">동의함</label>
        </p>
      </div>

      <div className="mb-7">
        <h3 className="mb-7 text-center font-bold">
          개인정보 수집 및 이용 동의
        </h3>
        <div
          className="border border-black dark:border-white"
          onClick={() => setInfoToggle(!infoToggle)}
        >
          <span className="block w-full cursor-pointer border-b border-black text-center text-[11px] leading-5 dark:border-white">
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
                연령확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부
                확인, 불만처리 등 민원처리, 고지사항 전달
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
                휴대전화번호, 이메일, 페이스북ID, 인스타그램ID, 법정대리인정보,
                서비스 이용기록, 접속 로그, 접속 IP 정보, 결제기록
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
            onChange={() => handleInfoAgreement(!infoAgreement)}
          />
          <label htmlFor="terms">동의함</label>
        </p>
      </div>
    </div>
  );
}
