export default function SignupSignupForm() {
  return (
    <form className="mx-auto w-[90%] py-16 text-[11px] lg:w-[600px]">
      <h3 className="mb-7 text-center font-bold">MOBILE IDENTIFICATION</h3>

      <div className="mb-7">
        <p className="flex align-middle">
          <input type="checkbox" name="phoneVerification" checked readOnly />
          <label
            id="phoneVerification"
            htmlFor="phoneVerification"
            className="text-black"
          >
            휴대폰인증
          </label>
        </p>
        <button className="transition-btn w-full">휴대폰 인증</button>
        <p>본인 명의의 휴대폰으로 본인인증을 진행합니다.</p>
      </div>

      <h3 className="mb-7 text-center font-bold">LOGIN INFORMATION</h3>

      <div className="mb-7 w-full border-b border-[#CCC]">
        <div className="mb-5 w-full">
          <label htmlFor="id" className="block text-[12px] font-semibold">
            아이디
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="transition-input w-[80%]"
          />
          <button className="transition-btn w-[20%] font-normal">
            중복 확인
          </button>
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
            />
          </div>
        </div>
      </div>

      <h3 className="mb-7 text-center font-bold">PERSONAL IDENTIFICATION</h3>

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

        <div>
          <div>
            <label
              htmlFor="postalCode"
              className="block text-[12px] font-semibold"
            >
              우편번호
            </label>
            <input type="text" className="transition-input h-10" />
          </div>
          <div>
            <span>우편번호 찾기</span>
            <button>POSTAL CODE</button>
          </div>
        </div>
      </div>
    </form>
  );
}

//signupForm은 컴포넌트로 반응형으로 만들고

//이용약관은 컴포넌트로 분리해서 컴퓨터는 signupForm이랑 같이 넣고 모바일에서는 이용약관 동의하고 버튼 클릭시 signupForm 컴포넌트 띄우기
