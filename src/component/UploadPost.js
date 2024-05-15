import { useState } from "react";
import "../css/UploadPost.css";
import image from "../img/Image.jpg";
import upload from "../img/upload_img.jpg";
import Nav from "./Nav"
import Footer from "./Footer";
function UploadPost() {
  let [featureCounter1, setFeatureCounter1] = useState(1);
  let [featureCounter2, setFeatureCounter2] = useState(1);
  let [featureCounter3, setFeatureCounter3] = useState(1);

  return (
    <>
    <Nav></Nav>
      <div className="uploadPostContainer">
        <h5> اعرض مسكنك علي Sakanify </h5>
        <form
          action="https://sakanify.onrender.com/api/v1/posts"
          method="post"
          enctype="multipart/form-data"
        >
          <div className="uploadRow row">
            <div className="uploadCol col-lg-4 white">
              <img src={upload} />
              <h5> اسحب صورك هنا </h5>
              <p> اختر 5 صور على الأقل </p>
              <input type="file" />
            </div>

            <div className="uploadCol col-lg-5 blue">
              <img src={image} />
              <button> ارفع صورة شخصية </button>
            </div>
          </div>

          <h5> ما نوع المسكن الذي سيكون متاحًا ؟ </h5>
          <div className="uploadRow row">
            <div className="col col-lg-2 col-md-2 col-sm-1">
              <button>
                <i class="fa-solid fa-building"></i>
                غرفة لفرد واحد
              </button>
            </div>

            <div className="col col-lg-2 col-md-2 col-sm-1">
              <button>
                <i class="fa-solid fa-door-open"></i>
                غرفة لفردين
              </button>
            </div>

            <div className="col col-lg-2 col-md-2 col-sm-1">
              <button>
                <i class="fa-solid fa-door-closed"></i>
                غرفة ل 3 افراد
              </button>
            </div>

            <div className="col col-6"></div>
          </div>

          <h5> اين يقع مسكنك ؟ </h5>
          <div className="uploadRow row addressData">
            <input placeholder="المدينة/سوهاج" />
            <input placeholder="العنوان" />
            <input placeholder="اسم الشارع ورقمه" />
            <input placeholder="رقم الدور والشقة" />
          </div>

          <h5> أعطنا بعض المعلومات الرئيسية عن مسكنك </h5>
          <div className="dashFeatures ">
            <div className="d-flex">
              <button
                className="btnn"
                onClick={() => {
                  setFeatureCounter1(++featureCounter1);
                }}
              >
                +
              </button>

              <p> {featureCounter1} </p>

              <button
                className="btnn"
                onClick={() => {
                  if (featureCounter1 > 1) {
                    setFeatureCounter1(--featureCounter1);
                  } else {
                    setFeatureCounter1(1);
                  }
                }}
              >
                -
              </button>
            </div>

            <div className="featureTitle">
              <p> غرف النوم </p>
            </div>
          </div>

          <div className="dashFeatures ">
            <div className="d-flex">
              <button
                className="btnn"
                onClick={() => {
                  setFeatureCounter2(++featureCounter2);
                }}
              >
                +
              </button>

              <p> {featureCounter2} </p>

              <button
                className="btnn"
                onClick={() => {
                  if (featureCounter2 > 1) {
                    setFeatureCounter2(--featureCounter2);
                  } else {
                    setFeatureCounter2(1);
                  }
                }}
              >
                -
              </button>
            </div>

            <div className="featureTitle">
              <p> الأسرّة </p>
            </div>
          </div>

          <div className="dashFeatures ">
            <div className="d-flex">
              <button
                className="btnn"
                onClick={() => {
                  setFeatureCounter3(featureCounter3++);
                }}
              >
                +
              </button>

              <p> {featureCounter3} </p>

              <button
                className="btnn"
                onClick={() => {
                  if (featureCounter3 > 1) {
                    setFeatureCounter3(--featureCounter3);
                  } else {
                    setFeatureCounter3(1);
                  }
                }}
              >
                -
              </button>
            </div>

            <div className="featureTitle">
              <p> الحمامات </p>
            </div>
          </div>

          <h5> أخبرنا بالميزات الموجودة في مسكنك </h5>
          <p> يمكنك إضافة المزيد من الميزات بعد نشر إعلانك. </p>
          <div className="uploadRow row">
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-wifi"></i>
                واي فاي
              </button>
            </div>
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-taxi"></i>
                موقف سيارات
              </button>
            </div>
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-stapler"></i>
                مكتب
              </button>
            </div>
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-kitchen-set"></i>
                مطبخ
              </button>
            </div>
          </div>

          <div className="uploadRow row">
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-fire-burner"></i>
                بوتوجاز
              </button>
            </div>
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-snowflake"></i>
                ثلاجة
              </button>
            </div>
            <div className="col col-lg-2 col-md-2 ol-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-fan"></i>
                مكيف
              </button>
            </div>
            <div className="col col-lg-2 col-md-2 col-sm-1 fIcon">
              <button>
                <i class="fa-solid fa-briefcase-medical"></i>
                اسعافات اولية
              </button>
            </div>
          </div>

          <h5> اختر عنوان للشقه </h5>
          <p>
            {" "}
            العناوين القصيرة أكثر فعالية. لا تقلق، يمكنك دائمًا تغييره لاحقًا.{" "}
          </p>
          <div className="uploadRow row">
            <textarea id="message" name="message" rows="10"></textarea>
          </div>

          <h5> اكتب وصفًا للمسكن </h5>
          <p> أخبرنا ما الذي يميز مسكنك عن غيره. </p>
          <div className="uploadRow row">
            <textarea id="message" name="message" rows="10"></textarea>
          </div>

          <h5> والآن، حدد السعر للسرير </h5>
          <div className="uploadRow row">
            <input className="price" />
          </div>

          <h5> هل يوجد اى ضرائب اخرى ، اكتب هنا </h5>
          <p> (كهرباء ، مياه ، غاز ، خدمات تنظيف ، فاتورة نت) </p>
          <div className="uploadRow row">
            <textarea id="message" name="message" rows="10"></textarea>
          </div>

          <button className="post"> نشر </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default UploadPost;
