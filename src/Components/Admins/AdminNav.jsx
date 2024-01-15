import React from "react";

import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { NavLink, Route, Routes } from "react-router-dom";

export default function Admin() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Shipping", src: "Chartfill" },
    { title: "Products", src: "Folder" },
    { title: "Members", src: "User" },
  ];

  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } relative h-screen min-w-[200px]  bg-gray-200 p-5 pt-8 duration-300`}
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
