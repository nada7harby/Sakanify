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

function LoginForAll() {
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 570) {
        setLogoSrc(loginunder);
      } else {
        setLogoSrc(loginunder2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("formData", JSON.stringify(formData));
   

    fetch("https://sakanify.onrender.com/api/v1/students/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        console.log(data.data.student.role);
        var tok = data.token;
        localStorage.setItem("formData", JSON.stringify(data.token));
        localStorage.setItem("userid", JSON.stringify(data.data.student.id));
        localStorage.setItem("role", JSON.stringify(data.data.student.role));
        localStorage.setItem("count", JSON.stringify(data.data.student.postCounter));
        // //  localStorage.setItem('formData', JSON.stringify({ key: 'value' }));
        // console.log(localStorage.getItem("formData"));
        if(data.status==="success")
          {
            Swal.fire("لقد تم تسجيل الدخول");
          }
          else{
            console.log("no")
          }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Nav />
      <div>
        <div className="container login">
          <div className="row justify-content-between form-v6-content">
            <div className="col-lg-6">
              <form
                className="form-detail"
                id="myFormId"
                onSubmit={handleSubmit}
              >
                <div className="logo_users">
                  {logoSrc && (
                    <img id="logo" className="logo" src={logoSrc} alt="Logo" />
                  )}
                  <div className="users">
                    <Link to="/register">
                      <div className="user" style={{ border: "none" }}>
                        <img src={user} alt="User" />
                        المستخدم
                      </div>
                    </Link>
                    <Link to="/registerOwner">
                      <div
                        className="owner"
                        // style={{
                        //   borderBottom: "4px solid #ddb20c",
                        //   width: "30%",
                        // }}
                      >
                        <img src={owner} alt="Owner" />
                        صاحب العقار
                      </div>
                    </Link>
                  </div>
                </div>
                <h1 className="login_word">تسجيل</h1>
                <div className="row content-form">
                  <div className="form-row col-6" style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="email"
                      id="your-email"
                      className="input-text"
                      placeholder="رقم التليفون / البريد الالكتروني"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className="form-row col-6 password"
                    style={{ width: "100%" }}
                  >
                    <input
                      value={formData.password}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="input-text pass"
                      placeholder="كلمة السر"
                      required
                      onChange={handleChange}
                    />
                    <i
                      className="fa-solid fa-eye"
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                  <Link to="/check_email">
                    <span className="forget">هل نسيت كلمه السر ؟</span>
                  </Link>
                  <div className="form-row col-6-last">
                    <input
                      type="submit"
                      name="register"
                      className="register"
                      value="تسجيل"
                    />
                  </div>
                 
                </div>
              </form>
            </div>
            <div className="form-left col-lg-6 form-right">
              <div className="users">
                <Link to="/register">
                  <div className="user" style={{ border: "none" }}>
                    <img src={user} alt="User" />
                    المستخدم
                  </div>
                </Link>
                <Link to="/registerOwner">
                  <div
                    className="owner"
                    //  style={{ borderBottom: "4px solid #ddb20c", width: "30%" }}
                  >
                    <img src={owner} alt="Owner" />
                    صاحب العقار
                  </div>
                </Link>
              </div>
              <div className="Button-login">
                <Link to="/register">
                  <div>تسجيل </div>
                </Link>
                <Link to="/login">
                  <div style={{ color: "#DDB20C" }}>تسجيل الدخول</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForAll;
