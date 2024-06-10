import "../css/StudentProfile.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Fav from "./Fav";
import React, { useState, useEffect } from "react";





function StudentProfile() {
  let role = localStorage.getItem("role");

  if (role) {
    try {
      role = JSON.parse(role);
    } catch (e) {
      console.error("Error parsing JSON:", e);
      role = null;
    }
  }

  let userid = localStorage.getItem("userid");

  if (userid) {
    try {
      userid = JSON.parse(userid);
    } catch (e) {
      console.error("Error parsing JSON:", e);
      userid = null;
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await fetch(
          `https://sakanify.onrender.com/api/v1/students/${userid}`
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging log

        setStudentData(data.data.Student);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    if (userid) {
      getStudent();
    }
  }, [userid]);

  return (
    <>
      <Nav></Nav>
      <div className="studentContainer">
        <div className="row studentRow">
          <div className="studentCol col-sm-11 col-md-10 mx-md-auto col-lg-4">
            <div className="student">
              <div className="studentImg">
                <img src={studentData.photoUrl} alt="" />
              </div>

              <h2> {studentData.name} </h2>
              <p> مستخدم </p>
            </div>
          </div>

          <div className="studentCol col-sm-11 col-md-10 mx-md-auto col-lg-4 ">
            <div className="studentData">
              <h2> بيانات {studentData.name} </h2>
            </div>

            <div className="studentData">
              <i class="fa-solid fa-user"></i>
              <span> {studentData.name} </span>
            </div>

            <div className="studentData">
              <i class="fa-solid fa-phone"></i>
              <span> {studentData.phone} </span>
            </div>

            <div className="studentData">
              <i class="fa-solid fa-book"></i>
              <span> كلية الحاسبات والذكاء الاصطناعي </span>
            </div>

            <div className="studentData">
              <i class="fa-solid fa-key"></i>
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="input-text pass"
                  placeholder="كلمة السر"
                  value="admin.99"
                  required
                />
                <i
                  class="fa-solid fa-eye-slash eye"
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>
          </div>

          <div className="col col-sm-11 col-md-10 mx-md-auto col-lg-4">
            <div className="studentData emptyDiv"></div>

            <div className="studentData">
              <i class="fa-solid fa-credit-card"></i>
              <span> {studentData.id} </span>
            </div>

            <div className="studentData">
              <i class="fa-solid fa-envelope"></i>
              <span> {studentData.email} </span>
            </div>
            <div className="studentData">
              <i class="fa-solid fa-hashtag"></i>
              <span> الفرقة الثالثة </span>
            </div>

            <div className="studentData">
              <i class="fa-solid fa-exclamation exclamation"></i>
              <span> {studentData.gender} </span>
            </div>
          </div>
        </div>
      </div>
      <Fav></Fav>
      <Footer></Footer>
    </>
  );
}

export default StudentProfile;
