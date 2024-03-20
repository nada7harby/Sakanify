import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MainSec.css";
import Main1 from "../img/main1.jpeg";
import Main2 from "../img/main2.jpeg";
import Main3 from "../img/main3.jpeg";
function MainSec() {
  return (
    <>
      <div className="container mainSec">
        <div className="row m-0 justify-content-between mainSec-content ">
          <div className="col-lg-6 row-img">
            <div className="row cols-img  ">
              <div className="col-6 col1-img"> 
                <div className="row images1 justify-content-between">
                  <div className="col-6 ">
                    <img src={Main1} alt="img" className="Main1" />
                  </div>
                  <div className="col-6">
                    <img src={Main3} alt="img" className="Main1" />
                  </div>
                </div>
              </div>
              <div className="col-6 images2">
                <div className="row ">
                  <div className="col-6 ">
                    <img src={Main2} alt="img" className="Main3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 main_content">
            <h1>Sakanify</h1>
            <p>
              سكنيفاي هو موقع الكتروني لحجز سكن للطلاب المغتربين حيث يهدف إلى
              توفير بيئة آمنة ومريحة للطلاب. يتميز الموقع بتوفير خيارات متنوعة
              ومتعددة تناسب مختلف الاحتياجات والتفضيلات، سواء كانت ذات ميزانية
              محدودة أو لطلاب يبحثون عن تجربة سكن فاخرة. كما يوفر الموقع معلومات
              شاملة حول المناطق السكنية المختلفة، بما في ذلك المواصلات والخدمات
              المحلية، لضمان اختيار الطالب للسكن الذي يلبي احتياجاته بشكل كامل
              ويوفر له الراحة والأمان خلال فترة دراسته.
            </p>
            <button>تصفح</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainSec;
