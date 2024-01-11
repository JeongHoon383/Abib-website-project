import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Modules/Member";

export default function Logintest() {
  const dispatch = useDispatch();
  const memberInfo = useSelector((state) => state.memberSlice) || {};
  //memberInfo.id => 로그인한 회원 아이디
  //로그아웃 함수
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div>{memberInfo.id ? memberInfo.id : "[회원 아이디(현재 로그인x)]"}</div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
