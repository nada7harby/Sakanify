import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./img/Final_2_with_less_ distance.png";
import Home from "./component/Home";
import Services from "./component/Services";
import Rooms from "./component/Rooms";
import Login from "./component/Register.js";
import LoginOwner from "./component/RegisterOwner.js";
import RoomDetails from "./component/RoomDetails.js";
import ContactUs from "./component/ContactUs.js";
import StudentProfile from "./component/StudentProfile.js";
import OwnerProfile from "./component/OwnerProfile.js";
import LoginForAll from "./component/Login.js";
import Forget from "./component/Forget.js";
import { Triangle, Vortex, ThreeDots } from "react-loader-spinner";
import React, { useState, useEffect } from "react";

function App() {
  localStorage.setItem("password", "");
  const [load, Setload] = useState(false);
  useEffect(() => {
    Setload(true);
    setTimeout(() => {
      Setload(false);
    }, 2500);
  }, []);
  return (
    <>
      {load ? (
        <div className="row justify-content-center align-items-center load p-5">
          <div className="col-lg-5">
            <img src={logo} alt="no" /> <br></br>
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#1a284e"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Routes>
              <Route index path="/" Component={Home} />
              <Route index path="/Services" Component={Services} />
              {/* <Route index path="/Contact" Component={Contact} /> */}
              <Route index path="/Rooms" Component={Rooms} />
              <Route index path="/register" Component={Login} />
              <Route index path="/registerOwner" Component={LoginOwner} />
              <Route index path="/login" Component={LoginForAll} />
              <Route index path="/RoomDetails" Component={RoomDetails} />
              <Route index path="/ContactUs" Component={ContactUs} />
              <Route index path="/OwnerProfile" Component={OwnerProfile} />
              <Route index path="/StudentProfile" Component={StudentProfile} />
              <Route index path="/forget_password" Component={Forget} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
