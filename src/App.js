import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./img/Final_2_with_less_ distance.png";
import Home from "./component/Home";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Rooms from "./component/Rooms";
import Login from "./component/Register.js";
import LoginOwner from "./component/RegisterOwner.js";
import LoginForAll from "./component/Login.js";
import { Triangle, Vortex, ThreeDots } from "react-loader-spinner";
import React, { useState, useEffect } from "react";

function App() {
  const [load, Setload] = useState(false);
  useEffect(() => {
    Setload(true);
    setTimeout(() => {
      Setload(false);
    }, 2000);
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
              <Route index path="/Contact" Component={Contact} />
              <Route index path="/Rooms" Component={Rooms} />
              <Route index path="/register" Component={Login} />
              <Route index path="/registerOwner" Component={LoginOwner} />
              <Route index path="/login" Component={LoginForAll} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
