import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="relative flex w-full items-center justify-center border-b border-black py-4 lg:pb-10 lg:pt-[70px]">
        <button
          className={"absolute left-5 lg:hidden"}
          onClick={() => navigate(-1)}
        >
          <MdArrowBackIos className="h-5 w-5" />
        </button>
        <h2 className="mt-auto text-xl lg:text-3xl">회원가입</h2>
      </div>
      <Outlet />
    </section>
  );
};

export default Signup;
