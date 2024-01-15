import React from "react";

import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Shipping from "../../Components/Admins/Shipping";
import Products from "../../Components/Admins/Products";
import Members from "../../Components/Admins/Members";
import DashboardView from "../../Components/Admins/DashboardView";

export default function Admin() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Shipping", src: "Chartfill" },
    { title: "Products", src: "Folder" },
    { title: "Members", src: "User" },
  ];

  return (
    <>
      <div className="flex h-[100vh]  overflow-scroll">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } relative h-screen bg-gray-200  p-5 pt-8 duration-300`}
        >
          <img
            src="../AdminImage/control.png"
            className={`border-dark-purple absolute -right-3 top-9 w-7 cursor-pointer
           rounded-full border-2  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex items-center gap-x-4">
            <RiAdminFill
              className={`transform cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`origin-left text-xl font-medium text-gray-600 duration-200 ${
                !open && "scale-0"
              }`}
            >
              Admin Page
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`hover:bg-light-white  flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-400 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              >
                <NavLink
                  to={`/${Menu.title.toLowerCase()}`}
                  activeClassName="active"
                >
                  <img src={`../AdminImage/${Menu.src}.png`} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </NavLink>

                {/* <img src={`../AdminImage/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span> */}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-screen flex-1 p-7">
          <div className="overflow-scroll-white h-[100vh] basis-[88%]">
            <DashboardView />
          </div>

          <div>
            <Outlet></Outlet>
          </div>

          <Routes>
            <Route
              path="/shipping"
              element={<Shipping />} // 대시보드 컴포넌트로 대체
            />
            <Route
              path="/product"
              element={<Products />} // 제품 컴포넌트로 대체
            />
            <Route
              path="/member"
              element={<Members />} // 멤버 컴포넌트로 대체
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
