import { Outlet } from "react-router-dom";
import SignupHeader from "../../Components/Signup/SignupHeader";

const Signup = () => {
  return (
    <main>
      <SignupHeader />
      <Outlet />
    </main>
  );
};

export default Signup;
