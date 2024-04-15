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

function LoginOwner() {
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
              <form className="form-detail " action="#" method="post">
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
                      name="full-name"
                      id="full-name"
                      className="input-text user"
                      placeholder="الاسم"
                      required
                    />
                  </div>
                  <div className=" form-row  col-6" style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="your-email"
                      id="your-email"
                      className="input-text "
                      placeholder="البريد الالكتروني"
                      pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    />
                  </div>
                  <div className=" form-row   col-6" style={{ width: "100%" }}>
                    <input
                      type={showPassword ? "password" : "text"}
                      name="password"
                      id="password"
                      className="input-text pass"
                      placeholder="Password"
                      required
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <div className=" form-row  col-6 " style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="number"
                      id="full-name"
                      className="input-text user"
                      placeholder="رقم الهاتف"
                      required
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
                  <div style={{ color: "#DDB20C" }}>تسجيل الدخول</div>
                </Link>
                <Link to="/login">
                  {" "}
                  <div>تسجيل </div>
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