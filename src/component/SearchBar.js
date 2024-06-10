import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../css/SearchBar.css";
import sett from "../img/sett.png";
import sec from "../img/sec.png";
import home from "../img/home.png";
import block from "../img/block.png";
import { useState } from "react";

function SearchBar() {
  const [serviceType, setServiceType] = useState("");
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');

  const handleServiceTypeChange = (selectedType) => {
    setServiceType(selectedType);
  };

  const handleSearch = () => {
    // Here you can use the selected serviceType for further actions, such as filtering search results
    console.log("Selected Service Type:", serviceType);
  };
  const handleDropdownItemClick = (value) => {
    setSelectedValue(value);
    localStorage.setItem("selectedDropdownValue", value); // Optional: Store in localStorage
  };
  const handleDropdownItemClick2 = (value2) => {
    setSelectedValue2(value2);
    localStorage.setItem("selectedDropdownValue2", value2); // Optional: Store in localStorage
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col">
            <div className="row cols-search justify-content-around  ">
              <div className="col-lg-3 col-6 mt-2 mb-2">
                <Link to="/RoomsSearch">
                  <button className="btn-search" onClick={handleSearch}>بحث</button>
                </Link>
              </div>
              <div className="col-lg-3 col-6 mt-2 mb-2">
                <div
                  className="nav-link dropdown-toggle type-search"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  نوع الخدمة
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick2('غرفة لفرد')}>غرفة لفرد</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick2('غرفة لفردين')}>غرفة لفردين</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick2('غرفة لثلاث افراد')}>غرفة لثلاث افراد</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 mt-2 mb-2">
                <div
                  className="nav-link dropdown-toggle type-search"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  منطقتك{" "}
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick('كوامل')}>كوامل</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick('محافظة')}>محافظة </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick('الترعة المردومة')}>الترعة المردومة</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick('الزهراء')}> الزهراء </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={() => handleDropdownItemClick('شارع الجمهورية')}> شارع الجمهورية </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 mt-2 mb-2">
                <div className="sohag">
                  <span>سوهاج</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row why-chosse ">
          <div className="col-lg-4 col-10 why-chosse-content ">
            <h1>لماذا تختارنا؟</h1>
            <p>
              اخترنا لاحتياجات سكنك لأننا نولي اهتمامًا خاصًا لراحتك، أمانك،
              وسلامة عقلك. يتجلى التفاني الذي نثبته في التفوق في جودة خصائصنا،
              حيث يتم اختيار كل منها بعناية فائقة لتلبية التفضيلات وأساليب
              الحياة المتنوعة لعملائنا. <br />
              <br /> مع التركيز على خلق روح المجتمع، تم تصميم أحيائنا لتعزيز
              الاتصالات وتحسين تجربتك اليومية للعيش.
              <br />
              <br /> نحن نفتخر بنهجنا الشفاف والموجه نحو العميل، مضمونين من
              خلاله أن يتم سماع احتياجاتك ومعالجتها بسرعة. من وسائل الراحة
              الحديثة إلى خدمة العملاء الاهتمامة، نسعى لجعل منزلك ليس مجرد مكان
              للعيش، ولكن ملاذًا حيث يمكنك الازدهار.
              <br />
              <br /> ثق بنا لتوفير أكثر من مجرد منزل؛ اخترنا لأسلوب حياة يتجاوز
              توقعاتك.
            </p>
            <Link to="/Rooms">
              <button>تسوق الان</button>
            </Link>
          </div>
          <div className="col-lg-7 col-10 ">
            <div className="row prons">
              <div className="col-lg-5 col-sm-5 col-11 first-prons">
                <div className="img-prond">
                  {" "}
                  <img src={home} alt="img" />{" "}
                </div>
                <div>
                  <h4>الراحة</h4>
                  <p>
                    في موقعنا الإلكتروني للإسكان، نتفهم أهمية الراحة والاسترخاء
                    عند البحث عن سكن مثالي. نقدم تجربة فريدة ومريحة للمستخدمين،
                    حيث يمكنهم بسهولة استعراض مجموعة واسعة من العقارات. يتيح لك
                    موقعنا الوصول السهل إلى معلومات شاملة حول العقارات المتاحة.
                  </p>
                  <h5 className="more">اقرأ المزيد</h5>
                </div>
              </div>
              <div className="col-lg-5 col-sm-5 col-11">
                <div className="img-prond">
                  {" "}
                  <div className="img-prond">
                    {" "}
                    <img src={sett} alt="img" />{" "}
                  </div>{" "}
                </div>
                <div>
                  <h4>حول المسكن</h4>
                  <p>
                    في موقعنا الإلكتروني للإسكان، نقدم مجموعة واسعة من الخدمات
                    لضمان تجربة مميزة لمستخدمينا. سنوفر خدمات بحث متقدمة تتيح
                    للمستخدمين استكشاف واختيار العقارات وفقًا لاحتياجاتهم
                    الفردية. ستشمل خدماتنا تقديم معلومات شاملة ودقيقة حول كل
                    عقار، مع صور عالية الجودة.
                  </p>
                  <h5 className="more">اقرأ المزيد</h5>
                </div>
              </div>
              <div className="col-lg-5 col-sm-5 col-11">
                <div className="img-prond">
                  {" "}
                  <img src={block} alt="img" />{" "}
                </div>
                <div>
                  <h4>الأمان</h4>
                  <p>
                    في موقعنا الإلكتروني للإسكان، نولي أهمية قصوى للأمان
                    والحماية. نحن نفهم أن السكن هو جزء حيوي من حياة الأفراد،
                    ولذلك نسعى جاهدين لضمان بيئة آمنة ومأمونة للمستخدمين. تتيح
                    لك خدماتنا المبتكرة والمتقدمة الوصول الآمن إلى معلوماتك
                    الشخصية، مع اتخاذ تدابير أمان.{" "}
                  </p>
                  <h5 className="more">اقرأ المزيد</h5>
                </div>
              </div>
              <div className="col-lg-5 col-sm-5 col-11">
                <div className="img-prond">
                  {" "}
                  <img src={sec} alt="img" />{" "}
                </div>
                <div>
                  <h4>خدمات الدفع</h4>
                  <p>
                    في موقعنا الإلكتروني للإسكان، نقدم مجموعة من الخدمات
                    المبتكرة لتسهيل عمليات الدفع وتوفير تجربة مريحة للمستخدمين.
                    سنقدم خيارات دفع متنوعة تتيح للعملاء اختيار الأسلوب الذي
                    يناسبهم، سواء كان ذلك عن طريق بطاقات الائتمان، الحوالات
                    البنكية، أو طرق الدفع الإلكترونية الأخرى.{" "}
                  </p>
                  <h5 className="more">اقرأ المزيد</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBar;
