import "../css/plans.css";
import { useState } from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Plans() {
  var token = JSON.parse(localStorage.getItem("formData"));
  var tok2 = `Bearer ${token}`;
  const [formData, setFormData] = useState({
    postType: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        services: checked
          ? [...formData.services, value]
          : formData.services.filter((service) => service !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = new FormData();
    for (const key in formData) {
      if (key === "images" || key === "imageCover") {
        for (let i = 0; i < formData[key].length; i++) {
          postData.append(key, formData[key][i]);
        }
      } else {
        postData.append(key, formData[key]);
      }
    }

    fetch("https://sakanify.onrender.com/api/v1/students/changePlan", {
      method: "POST",
      headers: {
        Authorization: tok2,
      },
      body: postData,
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

  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit} className="plans">
        <div className="plansContainer container">
          <h1 className="business"> خطط Sakanify </h1>

          <motion.div
            className="row plansParent "
            initial={{scale: .5}}
            animate={{ scale: 1 }} 
            transition={{duration:.8}}
          >
            <div className="col-sm-11 col-md-4 my-3">
              <div className="plan mx-auto">
                <div className="planHeader plan1Header">
                  <h3> الخطة الأساسية </h3>
                  <p> 464 جنيهًا شهريًا </p>
                </div>
                <div className="planBody">
                  <div className="d-flex mb-3">
                    <div>
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div>
                      <span> السعر : </span>
                      464 جنيهًا شهريًا أو 4635 جنيهًا سنويًا
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div>
                      <span> القوائم : </span>
                      حتى 5 شقق
                    </div>
                  </div>

                  <input
                    type="radio"
                    name="postPlan"
                    value="upgrade 1"
                    id="up1"
                    onChange={handleChange}
                  />
                  <label className="planBtn plan2Btn" for="up1">
                    أختر
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-11 col-md-4 my-3">
              <div className="plan mx-auto">
                <div className="planHeader plan2Header">
                  <h3> الخطة القياسية </h3>
                  <p> 927 جنيهًا شهريًا </p>
                </div>
                <div className="planBody">
                  <div className="d-flex mb-3">
                    <div>
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div>
                      <span> السعر : </span>
                      927 جنيهًا شهريًا أو 9270 جنيهًا سنويًا
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div>
                      <span> المميزات : </span>
                      حتى 10 شقق
                    </div>
                  </div>

                  <input
                    type="radio"
                    name="postPlan"
                    value="upgrade 2"
                    id="up2"
                    onChange={handleChange}
                  />
                  <label className="planBtn plan2Btn" for="up2">
                    أختر
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-11 col-md-4 my-3">
              <div className="plan mx-auto">
                <div className="planHeader plan1Header">
                  <h3> الخطة المميزة </h3>
                  <p> 1854 جنيهًا شهريًا </p>
                </div>
                <div className="planBody">
                  <div className="d-flex mb-3">
                    <div>
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div>
                      <span> السعر : </span>
                      1854 جنيهًا شهريًا أو 18540 جنيهًا سنويًا
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div>
                      <span> المميزات : </span>
                      شقق غير محدودة
                    </div>
                  </div>

                  <input
                    type="radio"
                    name="postPlan"
                    value="upgrade 3"
                    id="up3"
                    onChange={handleChange}
                  />
                  <label className="planBtn plan2Btn" for="up3">
                    أختر
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <button className=" btnSend"> ارسال</button>
      </form>
      <Footer />
    </>
  );
}

export default Plans;
