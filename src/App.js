import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import MainFloating from "./Components/Main/MainFloating";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { login } from "./Modules/Member.js";
import { useDispatch } from "react-redux";

function App() {
  const constraintsRef = useRef(null);
  const [dark, setDark] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 이전에 로그인한 정보가 로컬 스토리지에 있다면 Redux 스토어에 저장
  const savedMemberInfo = JSON.parse(localStorage.getItem("member"));
  if (savedMemberInfo) {
    dispatch(login(savedMemberInfo));
  }

  return (
    <motion.div ref={constraintsRef} className={dark ? "dark" : ""}>
      <Header dark={dark} setDark={setDark} />
      <Outlet />
      <Footer />
      <MainFloating constraintsRef={constraintsRef} />
    </motion.div>
  );
}

export default App;
