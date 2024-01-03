import React from "react";

const HeaderForm = ({ setSearch }) => {
  return (
    <>
      {" "}
      <form action="" className="flex h-full w-1/2 items-center  ">
        <div className="flex h-1/2 w-[6%] items-end justify-center border-b border-black pb-1">
          {" "}
          <svg
            onClick={() => setSearch((prev) => !prev)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex h-1/2 w-full items-end justify-center border-b border-black pb-1">
          <input
            className="w-full border-none bg-transparent outline-none"
            type="text"
          />
          <button type="submit" className="hidden"></button>
        </div>
        <div className="flex h-1/2 w-[6%] items-end justify-center border-b border-black pb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7 cursor-pointer"
            onClick={() => setSearch(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </form>
    </>
  );
};

export default HeaderForm;
