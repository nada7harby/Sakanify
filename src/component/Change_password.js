import "../css/Login.css";
import Swal from "sweetalert2";

import Nav from "./Nav";
import React, { useState, useEffect } from "react";
import loginunder from "../img/logounder.png";
import loginunder2 from "../img/logo2.png";
import Plogin from "../img/BGlogin.jpeg";
import owner from "../img/owner-image.png";
import user from "../img/User-owner.png";
import twiter from "../img/twitter.png";
import insta from "../img/inst.png";
import face from "../img/face.png";
import gmail from "../img/gmail.png";
import { Link } from "react-router-dom";

function Change_password() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("لقد تم تغير الرقم السري");

    // localStorage.setItem("formData", JSON.stringify(formData));
    fetch("https://sakanify.onrender.com/api/v1/students/resetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.status)
        if(data.status==="success")
          {
           Swal.fire("your password is changed")
          }
          else{
            console.log("no")
          }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  var pass = document.getElementById("password");
  var pass_sure = document.getElementById("password-sure");
  var check = document.getElementById("check");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
    
  //   event.preventDefault();
   
  //   localStorage.setItem("password", password);

  // };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [logoSrc, setLogoSrc] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 570) {
        setLogoSrc(loginunder);
      } else {
        setLogoSrc(loginunder2); // Reset logoSrc if condition doesn't meet
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav></Nav>
      <div>
        <div className="container login">
          <div className="row justify-content-between form-v6-content">
            <div className="col-lg-6">
              <form className="form-detail " onSubmit={handleSubmit}>
                <div className="logo_users">
                  {/* <img id="logo" src={loginunder} className="logo" alt="img" /> */}
                  {logoSrc && (
                    <img id="logo" className="logo" src={logoSrc} alt="Logo" />
                  )}

                  <div className="users">
                    <Link to="/register">
                      <div className="user" style={{ border: "none" }}>
                        <img src={user} />
                        المستخدم{" "}
                      </div>
                    </Link>
                    <Link to="/registerOwner">
                      <div
                        className="owner"
                        style={{
                          borderBottom: "4px solid #ddb20c",
                          width: "30%",
                        }}
                      >
                        {" "}
                        <img src={owner} />
                        صاحب العقار
                      </div>
                    </Link>
                  </div>
                </div>
                <h1 className="login_word"> تسجيل</h1>
                <div className="row content-form">
                  <div
                    className=" form-row   col-6 password"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="input-text pass"
                      placeholder=" ادخل الرمز"
                      required
                    />
                  </div>
                  <div
                    className=" form-row   col-6 password"
                    style={{ width: "100%" }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="input-text pass"
                      placeholder=" كلمة السر الجديدة"
                      required
                      onChange={handlePasswordChange}
                    />
                    <i
                      class="fa-solid fa-eye"
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>

                  <div className=" form-row  col-6-last">
                    <input
                      type="submit"
                      name="register"
                      className="register"
                      value="تسجيل"
                      // onClick={}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="form-left col-lg-6 form-right">
              <div className="users">
                <Link to="/register">
                  <div className="user" style={{ border: "none" }}>
                    <img src={user} />
                    المستخدم{" "}
                  </div>
                </Link>
                <Link to="/registerOwner">
                  <div
                    className="owner"
                    style={{ borderBottom: "4px solid #ddb20c", width: "30%" }}
                  >
                    {" "}
                    <img src={owner} />
                    صاحب العقار
                  </div>
                </Link>
              </div>
              <div className="Button-login">
                <Link to="/register">
                  {" "}
                  <div>تسجيل الدخول</div>
                </Link>
                <Link to="/login">
                  {" "}
                  <div style={{ color: "#DDB20C" }}>تسجيل </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Change_password;
