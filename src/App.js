import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [dark, setDark] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={dark ? "dark" : ""}>
      <Header dark={dark} setDark={setDark} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
