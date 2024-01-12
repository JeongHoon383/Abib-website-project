import React from "react";
// import ImageUpload from "../ImageUpload";
import { Form } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
import { FaCloud, FaFileUpload, FaQq } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Axios from "axios";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "../../Components/Admins/Dashboard";
import Products from "../../Components/Admins/Products";
import Members from "../../Components/Admins/Members";
import ImageUpload from "../ImageUpload";
export default function Admin() {
  const [open, setOpen] = useState(true);
  const [image, setImage] = useState(null);

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
    { title: "Products", src: "Folder" },
    { title: "Members", src: "User" },
    // { title: "Inbox", src: "Chat" },
    // { title: "Schedule", src: "Calendar" },
    // { title: "Search", src: "search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Setting", src: "Setting" },
  ];

  const fileUpload = (e) => {
    const files = e.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      // cover: [...prevForm.cover, ...files],
      cover: files,
    }));
  };
  console.log();

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

  const getImage = (e) => {
    setImage(e);
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

        <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold text-gray-400">New Product</h1>
          <br></br>

          {/* <form action="" onSubmit={handleSubmit}> */}
          <form action="">
            <p>
              title :{" "}
              <input
                className="mb-3 h-7 border"
                type="text"
                name="title"
                placeholder="title"
              />
            </p>
            <p>
              eng title :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                name="eng title"
                placeholder="eng title"
              />
            </p>
            <p>
              product volume :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                name="product volume"
                placeholder="product volume"
              />
            </p>
            <p>
              original price :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                name="original price"
                placeholder="original price"
              />
            </p>
            <p>
              price sales :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                name="price sales"
                placeholder="price sales"
              />
            </p>
            <p>
              prod option :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                name="prod option"
                placeholder="prod option"
              />
            </p>
            {/* <p>
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
              <ImageUpload getImage={getImage} />
            </p> */}
            <p>
              <input
                type="file"
                className="mb-3  shadow-none"
                accept="image/*"
                multiple
                onChange={(e) => {
                  fileUpload(e);
                }}
              />
              {/* <ImageUpload getImage={getImage} /> */}
            </p>

            <ImageUpload />

            <p>
              functional :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                placeholder="functional"
              />
            </p>
            <p>
              category :{" "}
              <input
                className="mb-3 h-7 border"
                type="text"
                placeholder="category"
              />
            </p>
            <p>
              description :{" "}
              <input
                className="mb-3 h-7  border"
                type="text"
                placeholder="description"
              />
            </p>

            <button
              type="submit"
              className="focus:shadow-outline-blue rounded bg-gray-500 px-3 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800"
            >
              Upload
            </button>
          </form>

          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />} // 대시보드 컴포넌트로 대체
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

//이미지 path에 이미지를 넣고
// src에 이미지 path
