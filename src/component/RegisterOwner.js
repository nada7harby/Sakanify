import "../css/Login.css";
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
import Swal from "sweetalert2";

function LoginOwner() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   Swal.fire("Your Register in Done");

  //   //localStorage.setItem("password", password);
  // };
  const [formData, setFormData] = useState({
    name: "",
    password: "",

    phone: "",

    email: "",

    role: "owner",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value,

      [e.target.email]: e.target.value,

      // [e.target.role]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("password", password);
    // Swal.fire("Your Login is Done");
    // Send data to API
    fetch("https://sakanify.onrender.com/api/v1/students/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
              <form
                className="form-detail "
                id="myFormId"
                action="https://sakanify.onrender.com/api/v1/students/signup"
                method="post"
                onSubmit={handleSubmit}
              >
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
                  <div className=" form-row  col-6 " style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="name"
                      id="full-name"
                      className="input-text user"
                      placeholder="الاسم"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setFormData({ ...formData, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className=" form-row  col-6" style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="email"
                      id="your-email"
                      className="input-text "
                      placeholder="البريد الالكتروني"
                      pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                      value={formData.email}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setFormData({ ...formData, email: e.target.value });
                      }}
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
                      placeholder="كلمة السر"
                      required
                      //onChange={handlePasswordChange}
                      value={formData.password}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setFormData({ ...formData, password: e.target.value });
                      }}
                    />
                    <i
                      class="fa-solid fa-eye"
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                  <div className=" form-row  col-6 " style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="number"
                      id="full-name"
                      className="input-text user"
                      placeholder="رقم الهاتف"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setFormData({ ...formData, phone: e.target.value });
                      }}
                    />
                    <input
                      type="text"
                      name="role"
                      value="owner"
                      className="d-none"
                    />
                  </div>

                  <div className=" form-row  col-6-last">
                    <input
                      type="submit"
                      name="register"
                      className="register"
                      value="تسجيل"
                    />
                  </div>
                  <div className="contact">
                    <img src={face} alt="img" />
                    <img src={gmail} alt="img" />
                    <img src={insta} alt="img" />
                    <img src={twiter} alt="img" />
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
                  <div style={{ color: "#DDB20C" }}>تسجيل </div>
                </Link>
                <Link to="/login">
                  {" "}
                  <div>تسجيل الدخول </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginOwner;
