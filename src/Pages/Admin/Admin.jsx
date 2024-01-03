import React from "react";

import { Form } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { useState } from "react";

import { RiAdminFill } from "react-icons/ri";

export default function Admin() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Chartfill" },
    { title: "Product", src: "Folder" },
    { title: "Member", src: "User" },
    { title: "Inbox", src: "Chat" },
    { title: "Schedule", src: "Calendar" },
    { title: "Search", src: "search" },
    { title: "Analytics", src: "Chart" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <>
      <div className="flex">
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
                <img src={`../AdminImage/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Product</h1>

          <form action="">
            <p>
              title : <input type="text" placeholder="title" />
            </p>
            <p>
              eng title : <input type="text" placeholder="eng title" />
            </p>
            <p>
              product volume :{" "}
              <input type="text" placeholder="product volume" />
            </p>
            <p>
              original price :{" "}
              <input type="text" placeholder="original price" />
            </p>
            <p>
              price sales : <input type="text" placeholder="price sales" />
            </p>
            <p>
              prod option : <input type="text" placeholder="prod option" />
            </p>
            <p>
              cover :{" "}
              <Form.Control
                type="file"
                className="shadow-none"
                accept="image/*"
              ></Form.Control>
            </p>

            <p>
              functional : <input type="text" placeholder="functional" />
            </p>
            <p>
              category : <input type="text" placeholder="category" />
            </p>
            <p>
              description : <input type="text" placeholder="description" />
            </p>

            <button
              type="button"
              className="focus:shadow-outline-blue rounded bg-gray-500 px-3 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
