import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import HeaderBox from "./Components/Header/HeaderBox";

function App() {
  return (
    <>
      <Header>
        <HeaderBox />
      </Header>
      <Outlet />
    </>
  );
}

export default App;
