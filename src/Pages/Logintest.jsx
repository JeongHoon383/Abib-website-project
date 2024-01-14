/* 
로그인 정보 가져오기

1. useSelector import하기;

2. const const memberInfo = useSelector((state) => state.persistedReducer);

3. memberInfo의 값
  - 로그인 했을 때 : {isLogin: true, token: (토큰값), memberId: (로그인한 아이디)}
  - 로그인 안 했을 때 {isLogin: false, token: null, memberId: null}
*/

//1. useSelector import하기;
import { useSelector } from "react-redux";

export default function Logintest() {
  //2. 회원 정보 가져와서 memberInfo에 할당하기
  const memberInfo = useSelector((state) => state.persistedReducer);
  /* 
  3. memberInfo의 값
  - 로그인 했을 때 : {isLogin: true, token: (토큰값), memberId: (로그인한 아이디)}
  - 로그인 안 했을 때 {isLogin: false, token: null, memberId: null} */

  //4. 사용하기
  return (
    <div>
      <p>
        로그인 여부:{" "}
        {memberInfo.isLogin ? "로그인 함(true)" : "로그인 안함(false)"}
      </p>
      <p>
        토큰값 : {memberInfo.token ? memberInfo.token : "로그인 안함(null)"}
      </p>
      <p>
        아이디 : {memberInfo.memerId ? memberInfo.memerId : "로그인 안함(null)"}
      </p>
    </div>
  );
}
