import { Link } from "react-router-dom";
import logo from "../img/Final_2_with_less_ distance.png";
import logo_user from "../img/user.png";
import "../css/Nav.css";

function BasicExample() {
  var role = JSON.parse(localStorage.getItem("role"));
  // var role = localStorage.getItem("role")
  var userLink = "/"; // القيمة الافتراضية إذا لم يكن هناك دور محدد

  if (role === "owner") {
    userLink = "/Ownerprofile";
  } else if (role === "student") {
    userLink = "/studentProfile";
  } 
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {" "}
          <img src={logo} alt="img" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                الصفحة الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                {" "}
                خدماتنا
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Rooms">
                {" "}
                غرفنا
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                {" "}
                تواصل معنا
              </Link>
            </li>
          </ul>
          <div className=" Login_tab nav-link " href="#">
            <span
              className="navbar-toggler-icon dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/login">
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/register">
                  انشاء حساب جديد
                </Link>
              </li>
            </ul>
            <Link to={userLink}>
              <img src={logo_user} alt="img" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
