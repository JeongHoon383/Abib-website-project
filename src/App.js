import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import MainFloating from "./Components/Main/MainFloating";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const constraintsRef = useRef(null);
  const [dark, setDark] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
