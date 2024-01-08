import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <Header dark={dark} setDark={setDark} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
