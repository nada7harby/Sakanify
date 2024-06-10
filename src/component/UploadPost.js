import { useState } from "react";
import "../css/UploadPost.css";
import image from "../img/Image.jpg";
import upload from "../img/upload_img.jpg";
import Nav from "./Nav";
import Footer from "./Footer";

function UploadPost() {
  var token = JSON.parse(localStorage.getItem("formData"));
  var tok2 = `Bearer ${token}`;

  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const [formData, setFormData] = useState({
    images: [],
    imageCover: "",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    postType: "",
    price: "",
    services: [],
    address: "",
    city: "",
    addressUp: "",
    street: "",
    floorNum: "",
    description: "",
    postGender: "male",
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  const handleFeatureChange = (feature, value) => {
    setFormData({
      ...formData,
      [feature]: value,
    });
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

    fetch("https://sakanify.onrender.com/api/v1/posts", {
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
      <div className="uploadPostContainer container" >
        <h5> اعرض مسكنك علي Sakanify </h5>
        <form className="uploaddd" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="uploadRow row">
            <div className="uploadCol col-lg-4 white">
              <img src={upload} alt="img" />
              <h5> اسحب صورك هنا </h5>
              <p> اختر 5 صور على الأقل </p>
              <input
                type="file"
                multiple
                name="images"
                onChange={handleFileChange}
              />
            </div>
            <div className="uploadCol col-lg-5 blue">
              <img src={image} alt="img" />
              <div>
                <span> ارفع صورة الرئيسية </span>
                <input
                  type="file"
                  name="imageCover"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <h5> ما نوع المسكن الذي سيكون متاحًا ؟ </h5>
          <div className="uploadRow row ">
            <div className=" col-lg-2 col-md-4  m-2 type-room" id="type1">
              <input
                type="radio"
                value="apartment"
                id="t1"
                name="postType"
                onChange={handleChange}
              />
              <label className="typeValue" htmlFor="t1">
                غرفة لفرد واحد
              </label>
              <i className="fa-solid fa-building"></i>
            </div>
            <div className=" col-lg-2 col-md-4 m-2  type-room" id="type2">
              <input
                type="radio"
                value="room"
                id="t2"
                name="postType"
                onChange={handleChange}
              />
              <label className="typeValue" htmlFor="t2">
                غرفة لفردين
              </label>
              <i className="fa-solid fa-door-open"></i>
            </div>
            <div className=" col-lg-2 col-md-4 m-2 type-room" id="type3">
              <input
                type="radio"
                value="mixedRoom"
                id="t3"
                name="postType"
                onChange={handleChange}
              />
              <label className="typeValue" htmlFor="t3">
                غرفة ل 3 افراد
              </label>
              <i className="fa-solid fa-door-closed"></i>
            </div>
            <div className="col col-6"></div>
          </div>

          <h5> اين يقع مسكنك ؟ </h5>
          <div className="uploadRow row addressData">
            <input
              placeholder="المدينة/سوهاج"
              name="city"
              onChange={handleChange}
            />
            <input
              placeholder="العنوان"
              name="addressUp"
              onChange={handleChange}
            />
            <input
              placeholder="اسم الشارع ورقمه"
              name="street"
              onChange={handleChange}
            />
            <input
              placeholder="رقم الدور والشقة"
              name="floorNum"
              onChange={handleChange}
            />
          </div>

          <h5> أعطنا بعض المعلومات الرئيسية عن مسكنك </h5>
          <div className="dashFeatures ">
            <div className="d-flex">
              <p
                className="btnn"
                onClick={() => {
                  handleFeatureChange('bedrooms', formData.bedrooms + 1);
                }}
              >
                +
              </p>
              <input
                type="text"
                value={formData.bedrooms}
                disabled
                name="bedrooms"
              />
              <p
                className="btnn"
                onClick={() => {
                  if (formData.bedrooms > 1) {
                    handleFeatureChange('bedrooms', formData.bedrooms - 1);
                  }
                }}
              >
                -
              </p>
            </div>
            <div className="featureTitle">
              <p> غرف النوم </p>
            </div>
          </div>

          <div className="dashFeatures ">
            <div className="d-flex">
              <p
                className="btnn"
                onClick={() => {
                  handleFeatureChange('beds', formData.beds + 1);
                }}
              >
                +
              </p>
              <input
                type="text"
                value={formData.beds}
                disabled
                name="beds"
              />
              <p
                className="btnn"
                onClick={() => {
                  if (formData.beds > 1) {
                    handleFeatureChange('beds', formData.beds - 1);
                  }
                }}
              >
                -
              </p>
            </div>
            <div className="featureTitle">
              <p> الأسرّة </p>
            </div>
          </div>

          <div className="dashFeatures ">
            <div className="d-flex">
              <p
                className="btnn"
                onClick={() => {
                  handleFeatureChange('bathrooms', formData.bathrooms + 1);
                }}
              >
                +
              </p>
              <input
                type="text"
                value={formData.bathrooms}
                disabled
                name="bathrooms"
              />
              <p
                className="btnn"
                onClick={() => {
                  if (formData.bathrooms > 1) {
                    handleFeatureChange('bathrooms', formData.bathrooms - 1);
                  }
                }}
              >
                -
              </p>
            </div>
            <div className="featureTitle">
              <p> الحمامات </p>
            </div>
          </div>

          <h5> أخبرنا بالميزات الموجودة في مسكنك </h5>
          <p> يمكنك إضافة المزيد من الميزات بعد نشر إعلانك. </p>
          <div className="uploadRow row">
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="واي فاي"
                type="checkbox"
                id="fu7"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu7">واي فاي</label>
              <i className="fa-solid fa-wifi"></i>
            </div>
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="موقف سيارات"
                type="checkbox"
                id="fu1"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu1">موقف سيارات </label>
              <i className="fa-solid fa-taxi"></i>
            </div>
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="مكتب"
                type="checkbox"
                id="fu2"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu2">مكتب</label>
              <i className="fa-solid fa-stapler"></i>
            </div>
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="مطبخ"
                type="checkbox"
                id="fu3"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu3">مطبخ</label>
              <i className="fa-solid fa-kitchen-set"></i>
            </div>
          
          
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="بوتوجاز"
                type="checkbox"
                id="fu4"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu4">بوتوجاز</label>
              <i className="fa-solid fa-fire-burner"></i>
            </div>
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="ثلاجه"
                type="checkbox"
                id="fu5"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu5">ثلاجه</label>
              <i className="fa-solid fa-snowflake"></i>
            </div>
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="مكيف"
                type="checkbox"
                id="fu8"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu8">مكيف</label>
              <i className="fa-solid fa-fan"></i>
            </div>
            <div className="col-lg-3  col-md-4 fIcon col-10">
              <input
                value="اسعافات اولية"
                type="checkbox"
                id="fu6"
                name="services"
                onChange={handleChange}
              />
              <label htmlFor="fu6">اسعافات اولية</label>
              <i className="fa-solid fa-briefcase-medical"></i>
            </div>
          </div>

          <h5> اختر عنوان للشقه </h5>
          <p> العناوين القصيرة أكثر فعالية. لا تقلق، يمكنك دائمًا تغييره لاحقًا. </p>
          <div className="uploadRow row">
            <textarea
              id="message"
              name="address"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>

          <h5> اكتب وصفًا للمسكن </h5>
          <p> أخبرنا ما الذي يميز مسكنك عن غيره. </p>
          <div className="uploadRow row">
            <textarea
              id="message"
              name="description"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>

          <h5> والآن، حدد السعر للسرير </h5>
          <div className="uploadRow row">
            <input
              className="price"
              name="price"
              onChange={handleChange}
            />
          </div>

          <h5> هل يوجد اى ضرائب اخرى ، اكتب هنا </h5>
          <p> (كهرباء ، مياه ، غاز ، خدمات تنظيف ، فاتورة نت) </p>
          <div className="uploadRow row">
            <textarea id="message" name="message" rows="10"></textarea>
          </div>

          <button className="post"> نشر </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UploadPost;
