import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import logo2 from "../img/logo2.png";
import fawray from "../img/fawary.png";
import paymob from "../img/paymob.png";
import "../css/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container ">
          <div className="row justify-content-around m-0">
            <div className="col-lg-4 col-10">
              <img src={logo2} alt="Logo" />
            </div>
            <div className="col-lg-3 pages col">
              <h3>صفحاتنا</h3>
              <ul>
                <li>
                  <Link to="/">الصفحة الرئيسية</Link>
                </li>
                <li>
                  <Link to="/Services"> خدماتنا</Link>
                </li>
                <li>
                  <Link to="/Rooms">غرفنا </Link>
                </li>
                <li>
                  <Link to="/Contact">تواصل معنا </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-10 what">
              <h2> ما هو Sakanify؟</h2>
              <p>
                سكنيفاي هو موقع الكتروني لحجز سكن للطلاب المغتربين حيث يهدف إلى
                توفير بيئة آمنة ومريحة للطلاب. يقدم هذا الموقع خدمات تأجير
                السكن،بناءً على احتياجات كل طالب وميزانيته. يتميز الموقع بتوفير
                خيارات متنوعة ومتعددة تناسب مختلف الاحتياجات والتفضيلات، سواء
                كانت ذات ميزانية محدودة أو لطلاب يبحثون عن تجربة سكن فاخرة. كما
                يوفر الموقع معلومات شاملة حول المناطق السكنية المختلفة، بما في
                ذلك المواصلات والخدمات المحلية، لضمان اختيار الطالب للسكن الذي
                يلبي احتياجاته بشكل كامل ويوفر له الراحة والأمان خلال فترة
                دراسته.
              </p>
            </div>
          </div>
          <div className="row justify-content-center m-0">
            <div className="col-lg-2 col-6">
              <Link to="/">
                <img className="pay" src={fawray} />
              </Link>
            </div>
            <div className="col-lg-2 col-6">
              <Link to="/">
                <img className="pay" src={paymob} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
