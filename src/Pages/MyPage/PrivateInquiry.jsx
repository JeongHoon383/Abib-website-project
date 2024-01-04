import React from "react";
import { useState } from "react";

export default function PrivateInquiry() {
  const [val, setVal] = useState("");
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    const data = e.target.value.split("");
    console.log(data);

    if (data.length <= 10) {
      setVal(e.target.value);
      setWord(data.length);
      if (e.target.value) {
        setWord(0);
      }
    } else {
      alert("10 자 미만으로 작성해주세요");
    }
  };

  return (
    <>
      <div className="mx-auto pt-16 text-center text-3xl font-bold">
        1:1 문의하기
      </div>
      <p className="mx-auto pt-3 text-center text-xs">
        문의사항을 남겨주시면 운영시간 내에 신속한 답변 드리겠습니다.
      </p>

      <div className="pt-5 text-center text-xs font-bold">제목</div>
      <input
        type="text"
        className="mx-auto flex h-10 w-full max-w-lg border border-gray-300 hover:border-gray-600"
      />

      <div className="pt-5 text-center text-xs font-bold">이메일</div>
      <input
        type="text"
        className="mx-auto flex h-10 w-full max-w-lg border border-gray-300 text-center hover:border-gray-600"
      />

      <div className="pt-5 text-center text-xs font-bold">문의내용</div>

      <input
        type="text"
        value={val}
        onChange={handleChange}
        className="mx-auto flex h-60 w-full max-w-lg border border-gray-300 text-center hover:border-gray-600"
      />

      <div className="text-center">
        <h5>Letters counted : {val.length}</h5>
        <h5>Words counted : {word}/5</h5>
      </div>
    </>
  );
}

/*
<div className="mx-auto text-center">
<h5>Letters counted : {val.length}</h5>
<h5>Words counted : {word}/5</h5>
<input type="text" />
</div>
*/
