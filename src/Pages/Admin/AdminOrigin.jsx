import React from "react";

import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "../../Components/Admins/Shipping";
import Products from "./Products";
import Members from "../../Components/Admins/Members";
import ImageUpload from "../ImageUpload";

export default function Admin() {
  const [open, setOpen] = useState(true);
  const [image, setImage] = useState(null);

  const [title, setTitle] = useState(0);
  const [engTitle, setEngTitle] = useState(0);
  const [productVolume, setProductVolume] = useState(0);
  const [prodOption, setProdOption] = useState(0);
  const [functional, setFunctional] = useState(0);
  const [category, setCategory] = useState(0);
  const [description, setDescription] = useState(0);

  const handleInput = (maxLength, setCountFn) => (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.value.length > maxLength) {
      alert(`${maxLength.toLocaleString()}자 이내로 작성해주세요`);
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setCountFn(e.target.value.length);
  };

  const [form, setForm] = useState({
    title: "",
    engTitle: "",
    productVolume: "",
    originalPrice: "",
    priceSales: "",
    prodOption: "",
    functional: "",
    category: "",
    description: "",
  });

  const Menus = [
    { title: "Dashboard", src: "Chartfill" },
    { title: "Products", src: "Folder" },
    { title: "Members", src: "User" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleRegister = (e) => {
    const registerConfirm = window.confirm("등록하실래요?");
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", form["title"]);
    formData.append("engTitle", form["engTitle"]);
    formData.append("productVolume", form["productVolume"]);
    formData.append("originalPrice", form["originalPrice"]);
    formData.append("priceSales", form["priceSales"]);
    formData.append("prodOption", form["prodOption"]);
    formData.append("cover", image);
    formData.append("functional", form["functional"]);
    formData.append("category", form["category"]);
    formData.append("description", form["description"]);

    //    FormData를 이용하여 name, value를 얻어올 수 있음
    for (let pair of formData.entries()) {
      console.log(`${pair[0]} : ${pair[1]}`);
    }

    if (registerConfirm) {
      axios({
        method: "post",
        url: "http://192.168.50.16:9091/newproducts",
        data: formData,
      })
        // .post("http://192.168.50.16:9091/newproducts", formData)

        .then((result) => {
          console.log("Response from server:", result.data);

          if (result.data === "ok") {
            alert("상품등록이 완료되었습니다");
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  // [image, setImage] => setImage은행원 , image돈 혹은 통장.. 돈이 자꾸 바뀜 최종만 찍힘//

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
          <p>
            title :
            <input
              value={form.title}
              className="mb-3 h-7 border"
              type="text"
              name="title"
              placeholder="title"
              onChange={handleInput(100, setTitle)}
            />
            <span>{title.toLocaleString()}</span>
            <span>/100</span>
          </p>
          <p>
            eng title :
            <input
              value={form.engTitle}
              className="mb-3 h-7  border"
              type="text"
              name="engTitle"
              placeholder="eng title"
              onChange={handleInput(100, setEngTitle)}
            />
            <span>{engTitle.toLocaleString()}</span>
            <span>/100</span>
          </p>
          <p>
            product volume :
            <input
              value={form.productVolume}
              className="mb-3 h-7  border"
              type="text"
              name="productVolume"
              placeholder="product volume"
              onChange={handleInput(10, setProductVolume)}
            />
            <span>{productVolume.toLocaleString()}</span>
            <span>/10</span>
          </p>
          <p>
            original price :
            <input
              value={form.originalPrice}
              className="mb-3 h-7  border"
              type="text"
              name="originalPrice"
              placeholder="original price"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </p>
          <p>
            price sales :
            <input
              value={form.priceSales}
              className="mb-3 h-7  border"
              type="text"
              name="priceSales"
              placeholder="price sales"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
          </p>
          <p>
            prod option :
            <input
              value={form.prodOption}
              className="mb-3 h-7  border"
              type="text"
              name="prodOption"
              placeholder="prod option"
              onChange={handleInput(100, setProdOption)}
            />
            <span>{prodOption.toLocaleString()}</span>
            <span>/100</span>
          </p>

          <p>
            functional :
            <input
              type="text"
              placeholder="functional"
              name="functional"
              onChange={handleInput(100, setFunctional)}
            />
            <span>{functional.toLocaleString()}</span>
            <span>/100</span>
          </p>
          <p>
            category :
            <input
              value={form.category}
              className="mb-3 h-7 border"
              type="text"
              name="category"
              placeholder="category"
              onChange={handleInput(50, setCategory)}
            />
            <span>{category.toLocaleString()}</span>
            <span>/50</span>
          </p>
          <p>
            description :
            <input
              value={form.description}
              className="mb-3 h-7  border"
              type="text"
              name="description"
              placeholder="description"
              onChange={handleInput(100, setDescription)}
            />
            <span>{description.toLocaleString()}</span>
            <span>/100</span>
          </p>

          <p>
            imageFile :
            <input
              className="mb-3 h-7  border"
              type="file"
              onChange={handleImageChange}
            />
          </p>

          <button
            type="submit"
            className="focus:shadow-outline-blue rounded bg-gray-500 px-3 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800"
            onClick={handleRegister}
          >
            Upload
          </button>

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
