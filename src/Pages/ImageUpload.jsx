import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function ImageUpload({ getImage }) {
  const formData = new FormData();

  const fileUpload = (e) => {
    console.log(e.target.files);

    formData.append("file", e.target.files[0]);
    for (const key of formData)
      console.log(`key---->>> ${JSON.stringify(key)}`);

    //선택한 파일을 서버로 전송
    axios
      .post("http://192.168.50.16:9091/upload/admin", formData)
      .then((result) => {
        getImage(result.data);
      });
  };

  return (
    <div>
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => {
          fileUpload(e);
        }}
      ></Form.Control>
    </div>
  );
}
