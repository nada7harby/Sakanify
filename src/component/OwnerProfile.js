import "../css/OwnerProfile.css";
import Nav from "./Nav";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";

import userImage from "../img/Ellipse 41.png";

function OwnerProfile() {
   const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Nav></Nav>
      <div className="ownerContainer">
        <div className="row ownerRow">
          
          <div className="ownnerCol col-sm-11 mx-md-auto col-lg-4">
            <div className="ownerData">
              <div className="ownerImg">
                <img src={userImage} alt="" />
              </div>

              <h2> محمود احمد </h2>
              <p> صاحب عقار </p>
            </div>
          </div>

          <div className="ownnerCol col-sm-11  mx-md-auto col-lg-4">
            <div className="dataForOwner">
              <h2> بيانات محمود احمد </h2>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-user"></i>
              <span> محمود احمد </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-envelope"></i>
              <span> abc@gmail.com </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-phone"></i>
              <span> 0123456789 </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-key"></i>
              <span>
               <div className="password>
                  <input
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  id="password"
                                  className="input-text pass"
                                  placeholder="كلمة السر"
                                  required
                                />
                            <i class="fa-solid fa-eye-slash"  onClick={togglePasswordVisibility}></i>
                 </div>
              </span>
            </div>

            <button className="toPost"> ارفع مسكنك علي Sakanify </button>
          </div>

          <div className="ownnerCol col-sm-11 mx-md-auto col-lg-4">
          </div>

        </div>
      </div>
     <Footer></Footer>
    </>
  );
}

export default OwnerProfile;
