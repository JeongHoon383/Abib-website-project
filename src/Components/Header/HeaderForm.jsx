import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderForm = ({ setSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`, { state: { query: query } });
    window.location.reload();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-end p-5 lg:h-full lg:w-1/2 lg:items-center lg:p-0 dark:bg-black dark:text-white"
    >
      <div className="hidden h-1/2 w-[6%] items-end justify-center border-b border-black pb-1 lg:flex">
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
      <div className="h-1/2 w-[6%] items-end justify-center border-b border-black pb-1 lg:hidden">
        <svg
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
      <div className="flex h-1/2 w-full items-end justify-center border-b border-black pb-1 pl-3 sm:pl-0 dark:border-white">
        <input
          className="w-full border-none bg-transparent outline-none  "
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="hidden"></button>
      </div>
      <div className="hidden h-1/2 w-[6%] items-end justify-center border-b border-black pb-1 lg:flex">
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
  );
};

export default HeaderForm;
