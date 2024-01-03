import React from "react";
import { Form } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import axios from "axios";
import ImageUpload from "./ImageUpload";
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

  const currentLocation = window.location.href;
  const [form, setForm] = useState({
    title: "",
    engTitle: "",
    productVolume: "",
    originalPrice: "",
    priceSales: "",
    prodOption: "",
    cover: "",
    detailCover: "",
    functional: "",
    category: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getImage = (e) => {
    setImage(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //FormData를 직접 객체로 변환할 수도 있음
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("FormData as object:", formDataObject);

    // //FormData를 이용하여 name, value를 얻어올 수 있음
    // for (let pair of FormData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}}`);
    // }

    //문제 확인중
    //   axios({
    //     method: "post",
    //     url: "http://localhost:9090/admin",
    //     data: formDataObject,
    //   })
    //     .then((result) => {
    //       if (result.data == "insert success") {
    //         alert("제품이 등록되었습니다");
    //         //location.reload();
    //         window.location.reload(true);
    //       }
    //     })
    //     .catch((error) => console.error(error));
    // };

    axios({
      method: "post",
      url: "http://localhost:9090/upload", // 기존에 "http://localhost:9090/admin"로 보내고 있었습니다.
      data: formDataObject,
    })
      .then((result) => {
        if (result.data === "insert success") {
          alert("제품이 등록되었습니다");
          window.location.reload(true);
        }
      })
      .catch((error) => console.error(error));
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

          <form className="newProduct" onSubmit={handleSubmit}>
            <div>
              <p>
                title : <input name="title" placeholder="title" />
              </p>
              <p>
                engTitle :
                <input name="engTitle" placeholder="engTitle" />
              </p>

              <p>
                productVolume :{" "}
                <input name="productVolume" placeholder="productVolume" />
              </p>
              <p>
                originalPrice :
                <input name="originalPrice" placeholder="originalPrice" />
              </p>
              <p>
                priceSales :
                <input name="priceSales" placeholder="priceSales" />
              </p>
              <p>
                prodOption :
                <input name="prodOption" placeholder="prodOption" />
              </p>
              <p>
                cover :{" "}
                <input
                  type="hidden"
                  name="image"
                  placeholder="cover"
                  value={image}
                />
                <ImageUpload getImage={getImage} />
              </p>
              <p>
                detailCover :{" "}
                <input
                  type="hidden"
                  name="image"
                  placeholder="cover"
                  value={image}
                />
                <ImageUpload getImage={getImage} />
              </p>
              <p>
                functional :
                <input name="functional" placeholder="functional" />
              </p>
              <p>
                category :
                <input name="category" placeholder="category" />
              </p>
              <p>
                description :
                <input name="description" placeholder="description" />
              </p>
            </div>
            <button
              type="submit"
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
