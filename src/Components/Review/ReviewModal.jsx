import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Modules/Modal";
import { getProductDetail } from "../../Modules/Products";
import ReviewModalStar from "./ReviewModalStar";

export default function ReviewModal({ pid, modalTop }) {
  const [rate, setRate] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [uploadedImg, setUploadedImg] = useState({ preview: "", data: "" });
  const [reviewText, setReviewText] = useState("");
  const dispatch = useDispatch();

  const memberInfo = useSelector((state) => state.persistedReducer);
  const product = useSelector((state) => state.product.productDetail.data);
  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(getProductDetail(pid));
  }, [dispatch, pid]);

  const handleImgChange = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl)
        setUploadedImg({ data: e.target.files[0], preview: previewImgUrl });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(); // 서버로 이미지를 보낼 때 폼 데이터라는 객체에 담아서 보내야함
    formData.append("rcover", uploadedImg.data || undefined);
    formData.append("pid", product.pid);
    formData.append("mid", memberInfo.memberId);
    if (rate !== 0) formData.append("point", rate);
    else return alert("별점을 매겨주세요");
    if (reviewText !== "") formData.append("content", reviewText);
    else return alert("리뷰를 남겨주세요!");

    axios
      .post("http://127.0.0.1:9090/review/save-review", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        if (result.data === "success") {
          alert("리뷰가 등록되었습니다");
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  const handleTextChange = (e) => {
    setTextCount(e.target.value.length);
    setReviewText(e.target.value);
  };

  const handleModalClose = () => {
    dispatch(closeModal());
    document.body.style.overflow = "unset";
  };

  return (
    <div
      style={{
        top: "calc(50% + 50px)",
      }}
      className="fixed left-1/2 w-[22rem] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-5 sm:w-[30rem] md:w-[45rem] lg:w-[60rem]"
    >
      <div className="flex border-b-2 border-black pb-2">
        <h3>리뷰 작성</h3>
        <button
          onClick={handleModalClose}
          type="button"
          className="end-2.5 ms-auto bg-transparent text-sm text-gray-400"
        >
          <svg
            className="h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div className="mt-2 flex items-center border-b p-2">
        <div className="mr-2 w-1/6 md:w-1/12">
          <img
            src={`http://127.0.0.1:9090/uploads/${product.cover}`}
            className="w-full"
            alt=""
          />
        </div>
        <span className="text-xs">
          {product.title.includes("/")
            ? product.title.replace("/", " ")
            : product.title}
        </span>
      </div>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="border-b p-2 min-[360px]:flex min-[360px]:flex-wrap min-[360px]:justify-center md:flex-nowrap md:justify-between">
          <div className="min-[360px]:align-center mb-1 mt-2 text-sm">
            <span className="mr-1 font-semibold">상품은 어떠셨나요?</span>
            <span className="text-stone-700">별점을 매겨주세요</span>
          </div>
          <div className="flex items-center justify-center">
            <ReviewModalStar rate={rate} setRate={setRate} />
          </div>
        </div>
        <div className="flex border-b p-2">
          <label htmlFor="uploadImg" className="flex cursor-pointer">
            <div className="mr-2 h-[84px] w-[84px]">
              <img
                className="w-full"
                src={`${process.env.PUBLIC_URL}/product/uploadImg.png`}
                alt=""
              />
            </div>
            {uploadedImg.preview && (
              <div className="h-[84px] w-[84px]">
                <img
                  className="h-full w-full"
                  src={uploadedImg.preview}
                  alt=""
                />
              </div>
            )}
          </label>
          <input
            type="file"
            id="uploadImg"
            onChange={handleImgChange}
            accept="image/jpg, image/png, image/jpeg"
            className="absolute -m-1 h-0 w-0 overflow-hidden border-0 p-0"
          />
        </div>
        <div className="relative border-b p-2">
          <textarea
            minLength={15}
            onChange={handleTextChange}
            className="h-[100px] w-full resize-none border-0 bg-white p-2 placeholder:text-sm"
            rows="10"
            placeholder="최소 15자 이상 작성해주세요."
          />
          <span className="absolute right-3 top-4 text-xs text-gray-600">
            {textCount}
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium text-white"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
