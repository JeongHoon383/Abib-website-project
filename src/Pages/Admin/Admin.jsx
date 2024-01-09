import React from "react";

import { Form } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
import { FaCloud, FaFileUpload, FaQq } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Axios from "axios";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [open, setOpen] = useState(true);

  const [form, setForm] = useState({
    title: "",
    engTitle: "",
    productVolume: "",
    originalPrice: "",
    priceSales: "",
    prodOption: "",
    cover: [],
    functional: "",
    category: "",
    description: "",
  });
  const navigate = useNavigate();

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

  const FileUpload = (e) => {
    const files = e.target.files;
    setForm((prevForm) => ({
      ...prevForm,
      // cover: [...prevForm.cover, ...files],
      cover: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("upload 버튼 클릭햇다!!!!!!");

    try {
      const formData = new FormData();
      for (const key in form) {
        if (key === "cover") {
          // 이미지 여러개면 반복 추가

          formData.append(key, form[key]);
        } else {
          formData.append(key, form[key]);
        }
      }

      const result = axios.post("http://localhost:9090/admin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (result.data === "insert success") {
        alert("제품이 등록되었습니다");

        navigate("/");
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

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
          <br></br>

          <form action="" onSubmit={handleSubmit}>
            <p>
              title : <input type="text" name="title" placeholder="title" />
            </p>
            <p>
              eng title :{" "}
              <input type="text" name="eng title" placeholder="eng title" />
            </p>
            <p>
              product volume :{" "}
              <input
                type="text"
                name="product volume"
                placeholder="product volume"
              />
            </p>
            <p>
              original price :{" "}
              <input
                type="text"
                name="original price"
                placeholder="original price"
              />
            </p>
            <p>
              price sales :{" "}
              <input type="text" name="price sales" placeholder="price sales" />
            </p>
            <p>
              prod option :{" "}
              <input type="text" name="prod option" placeholder="prod option" />
            </p>
            <p>
              cover :{" "}
              <Form.Control
                type="file"
                className="shadow-none"
                accept="image/*"
                multiple
                onChange={(e) => {
                  FileUpload(e);
                }}
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
              type="submit"
              onSubmit={handleSubmit}
              className="focus:shadow-outline-blue rounded bg-gray-500 px-3 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
