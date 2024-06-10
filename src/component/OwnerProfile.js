import "../css/OwnerProfile.css";
import Nav from "./Nav";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import Fav from "./Fav";

function OwnerProfile() {
  var count = JSON.parse(localStorage.getItem("count"));
  var path = "/OwnerProfile";
  if (count >= 3) {
    path = "/plan";
  } else {
    path = "/upload";
  }

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

  const [ownerData, setOwnerData] = useState([]);
  useEffect(() => {
    const getOwner = async () => {
      try {
        const response = await fetch(
          `https://sakanify.onrender.com/api/v1/students/${userid}`
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging log

        setOwnerData(data.data.Student);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    if (userid) {
      getOwner();
    }
  }, [userid]);

  return (
    <>
      <Nav></Nav>
      <div className="ownerContainer">
        <div className="row ownerRow">
          <div className="ownnerCol col-sm-11 mx-md-auto col-lg-4">
            <div className="ownerData">
              <div className="ownerImg">
                <img src={ownerData.photoUrl} alt="" />
              </div>

              <h2> {ownerData.name} </h2>
              <p> صاحب عقار </p>
            </div>
          </div>

          <div className="ownnerCol col-sm-11  mx-md-auto col-lg-4">
            <div className="dataForOwner">
              <h2> بيانات {ownerData.name} </h2>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-user"></i>
              <span> {ownerData.name} </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-envelope"></i>
              <span> {ownerData.email} </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-phone"></i>
              <span> {ownerData.phone} </span>
            </div>

            <div className="dataForOwner">
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
                  class="fa-solid fa-eye-slash"
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>

            <Link to={path}>
              {" "}
              <button className="toPost"> ارفع مسكنك علي Sakanify </button>
            </Link>
          </div>

          <div className="ownnerCol col-sm-11 mx-md-auto col-lg-4"></div>
        </div>
      </div>
      <Fav></Fav>
      <Footer></Footer>
    </>
  );
}

export default OwnerProfile;
