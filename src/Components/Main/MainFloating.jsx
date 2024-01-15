import { AnimatePresence, motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import React, { useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const MainFloating = ({ constraintsRef }) => {
  const [toggle, setToggle] = useState(true);
  const [toggleQna, setToggleQna] = useState(false);
  const handleToggleQna = () => {
    return setToggleQna((prev) => !prev);
  };
  function cls(...a) {
    return a.join(" ");
  }
  const memberInfo = useSelector((state) => state.persistedReducer);
  /* 
  3. memberInfo의 값
  - 로그인 했을 때 : {isLogin: true, token: (토큰값), memberId: (로그인한 아이디)}*/
  return (
    <div>
      <AnimatePresence>
        {toggle ? (
          <motion.div
            key={1}
            transition={{ duration: 1, ease: "linear" }}
            layoutId="qna"
            onClick={() => setToggle(false)}
            className={cls(
              `fixed  bottom-5 right-5 z-50 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-[0.5px] border-gray-300 bg-white text-xl font-bold shadow-md`,
            )}
          >
            abib
          </motion.div>
        ) : (
          <motion.div
            key={1}
            layoutId="qna"
            transition={{ duration: 1, ease: "linear" }}
            className={cls(
              `fixed bottom-5 right-5 z-50 mx-auto h-[510px] w-[375px] cursor-pointer  space-y-3 rounded-2xl   border-[0.5px]   border-gray-300 bg-gray-300 px-5 py-4 text-xl font-bold shadow-md`,
            )}
          >
            {toggleQna ? (
              <motion.div
                /*             drag
                dragConstraints={constraintsRef} */
                key={3}
                layoutId="3"
                className="flex h-full w-full flex-col rounded-2xl bg-white p-5"
                initial={{
                  borderRadius: "100%",
                  scale: 0.5,
                }}
                animate={{
                  scale: 1,
                  borderRadius: "16px",
                  transition: { duration: 1, ease: "linear" },
                }}
              >
                <div className="flex items-center justify-between">
                  <span onClick={handleToggleQna}>
                    <MdOutlineNavigateBefore className="text-3xl" />{" "}
                  </span>
                  <span
                    onClick={() => {
                      setToggle(true);
                      setToggleQna(false);
                    }}
                  >
                    X
                  </span>
                </div>
                <div className="mt-4">
                  <fieldset>
                    {/*       <legend className="text-center text-3xl">문의하기</legend> */}
                    <form method="post" action="">
                      <label>
                        제목
                        <input
                          className="mb-3 w-full border-b p-1 outline-none focus:border-b-[1px]"
                          type="text"
                          placeholder="제목을 입력해주세요"
                        />
                      </label>
                      <label className="  w-full">
                        내용
                        <textarea
                          className="block h-[200px] w-full resize-none border px-2 py-4 outline-none"
                          type="text"
                          placeholder="제목을 입력해주세요"
                        />
                      </label>
                      <button className="mt-3 flex w-full items-center justify-center rounded-lg bg-black px-2 py-4 text-white shadow-lg">
                        전송
                      </button>
                    </form>
                  </fieldset>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.7, ease: "linear", duration: 1 },
                    }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-2  "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-7 text-xl shadow-sm">
                      abib
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">abib</span>
                      <span className="rounded-xl px-2 py-1 text-xs font-medium text-gray-400 hover:bg-gray-500">
                        운영시간 보기 &gt;
                      </span>
                    </div>
                  </motion.div>
                  <div
                    onClick={() => {
                      setToggle(true);
                      setToggleQna(false);
                    }}
                  >
                    X
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1.7, ease: "linear", duration: 1 },
                  }}
                  exit={{ opacity: 0 }}
                  className="grid w-full grid-cols-5 space-y-2 rounded-2xl bg-white px-2 py-4"
                >
                  <>
                    <div className="col-span-1  flex h-12 w-12 items-center justify-center rounded-full border bg-white p-4 text-xl shadow-sm">
                      abib
                    </div>
                    <div className="col-span-4">
                      <div className="flex flex-col space-x-0 py-0 font-light ">
                        <span className="py-0 text-xs font-semibold">abib</span>
                        <span className="py-0 text-[16px] leading-[110%]">
                          고객님 안녕하세요
                          <br /> abib cosmetic 입니다.
                        </span>
                      </div>
                    </div>
                  </>
                  <>
                    <div className="col-span-1 "></div>
                    <div className="col-span-4">
                      <div className="flex flex-col space-x-0 py-0 font-light ">
                        <span className="py-0 text-[16px] leading-[110%]">
                          문의하기를 선택해주세요!
                          <br /> 빠르게 안내해드리겠습니다🙂
                        </span>
                      </div>
                    </div>
                  </>
                  <>
                    <div className="col-span-1"></div>
                    <div className="col-span-4">
                      <div className="flex flex-col space-x-0 py-0 font-light ">
                        <span className="py-0 text-[16px] font-semibold">
                          🎈CS고객센터 운영시간
                        </span>
                        <span className="py-0 text-[16px] leading-[150%]">
                          월 07:30 - 18:00 <br />
                          화 07:30 - 18:00
                          <br />
                          수 07:30 - 18:40
                          <br />
                          목 09:00 - 18:00
                          <br />
                          금 09:00 - 18:00
                          <br />
                          토 07:30 - 18:00
                          <br />
                          일 07:30 - 18:00
                          <br />
                        </span>
                      </div>
                    </div>
                  </>
                  <div className="col-span-5 w-full">
                    {memberInfo.isLogin ? (
                      <Link
                        to={"/privateinquiry"}
                        onClick={() => setToggle(true)}
                      >
                        <motion.button
                          /*    onClick={() => handleToggleQna()} */
                          type="button"
                          key={3}
                          layoutId="3"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{
                            scale: 10,
                            transition: { duration: 1, ease: "linear" },
                          }}
                          className="flex w-full items-center justify-center rounded-2xl bg-black px-1 py-3 text-center font-semibold text-white"
                        >
                          문의하기
                          <BsFillSendFill className="ml-2" />
                        </motion.button>
                      </Link>
                    ) : (
                      <Link to={"/login"} onClick={() => setToggle(true)}>
                        <motion.button
                          type="button"
                          key={3}
                          layoutId="3"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{
                            scale: 10,
                            transition: { duration: 1, ease: "linear" },
                          }}
                          className="flex w-full items-center justify-center rounded-2xl bg-black px-1 py-3 text-center font-semibold text-white"
                        >
                          문의하기
                          <BsFillSendFill className="ml-2" />
                        </motion.button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainFloating;
