import "../css/ContactUs.css";
import image from "../img/bluePhone.png";
import Swal from "sweetalert2";

import Nav from "./Nav";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

function ContactUs() {
  var token = JSON.parse(localStorage.getItem("formData"));
  var tok2 = `Bearer ${token}`;
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    yourComment: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const postData = new FormData();
  for (const key in formData) {
    if (key === "images" || key === "imageCover") {
      for (let i = 0; i < formData[key].length; i++) {
        postData.append(key, formData[key][i]);
      }
    } else {
      postData.append(key, formData[key]);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("formData", JSON.stringify(formData));
    Swal.fire("Your comment is sended");

    fetch("https://sakanify.onrender.com/api/v1/comments", {
      method: "POST",
      headers: {
        Authorization: tok2,
      },
      body: postData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Nav></Nav>
      <div className="contactUsContainer">
        <div className="contactUsRow row">
          <div className="form">
            <form id="myFormId" onSubmit={handleSubmit}>
              <h1> تحتاج مساعدة؟ </h1>

              <p>
                <label for="name"> الاسم </label>
              </p>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
              <p>
                <label for="email"> البريد الالكتروني </label>
              </p>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />

              <p>
                <label for="message"> رجاءا ادخل تفاصيل طلبك </label>
              </p>
              <textarea
                id="message"
                name="yourComment"
                rows="10"
                onChange={handleChange}
              ></textarea>

              <button type="submit"> تسجيل </button>
            </form>
          </div>

          <div className="img">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ContactUs;
