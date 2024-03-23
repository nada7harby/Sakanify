import Nav from "./Nav";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Services.css";
import sav1 from "../img/sav1.png";
import sav2 from "../img/sav2.png";
import sav3 from "../img/sav3.png";
import sav4 from "../img/sav4.png";
import sav5 from "../img/sav5.png";
import sav6 from "../img/sav6.png";
import sav7 from "../img/sav7.png";
import sav8 from "../img/sav8.png";
import sav9 from "../img/sav9.png";
import sav10 from "../img/sav10.png";
function Services() {
  return (
    <>
      <Nav></Nav>
      <div>
        <div className="container content-service">
          <h1>خدماتنا</h1>
          <p>
            يسرنا أن نقدم لكم خدمة مبتكرة ومتكاملة تهدف إلى تسهيل عملية البحث عن
            السكن للطلاب وتأجير الوحدات السكنية لأصحاب العقارات. يُعتبر موقعنا
            والابلكيشن الخاص بنا رابطًا حيويًا بين صاحب عقار والطلاب.
          </p>
        </div>
        <div className="container">
          <div className="row service-row">
            <div className="col-6 left">
              <div className="row">
                <div className="col-9 child child1">
                  <img src={sav2} alt="img" />
                  <h4> نظام تقييم وتعليق</h4>
                  <p>
                    - توجيهات للتحسين: توفير توجيهات بناءة من التقييمات للأطراف
                    المعنية لتحسين الخدمة والشقق المتاحة.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
                <div className="col-9 child child2">
                  <img src={sav4} alt="img" />
                  <h4> إشعارات مخصصة</h4>
                  <p>
                    - تخصيص الإشعارات: إعدادات تخصيص للإشعارات لتناسب احتياجات
                    كل مستخدم. - تذكيرات دورية: إرسال تذكيرات دورية للطلاب
                    بتحديث معلوماتهم واستعدادهم للتجديد.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>

                <div className="col-9 child child3">
                  <img src={sav6} alt="img" />
                  <h4> طرق دفع آمنة</h4>
                  <p>
                    - تشفير متقدم: استخدام تقنيات تشفير متقدمة لضمان سلامة وأمان
                    معلومات الدفع.  خيارات دفع متعددة: توفير مجموعة متنوعة
                    من طرق الدفع لتناسب تفضيلات المستخدمين.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
                <div className="col-9 child child4">
                  <img src={sav8} alt="img" />
                  <h4>ملفات شخصية للطلاب وأصحاب العقارات </h4>
                  <p>
                    - توثيق الهوية: إمكانية توثيق هوية أصحاب العقارات والطلاب
                    لزيادة مصداقية المستخدمين
                     نظام تقييم مزدوج: تقييم الطلاب للشقق وتقييم أصحاب
                    العقارات للطلاب لضمان تجربة إيجابية للجميع.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
                <div className="col-9 child child5">
                  <img src={sav10} alt="img" />
                  <h4>دعم فني </h4>
                  <p>
                    - أوقات دعم موسعة: توفير دعم فني ذو أوقات موسعة للرد السريع
                    على استفسارات المستخدمين. - قاعدة معرفية: إنشاء قاعدة معرفية
                    شاملة تشرح كيفية استخدام الموقع وحل المشكلات الشائعة.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 right">
              <div className="row">
                <div className="col-9 child child1">
                  <img src={sav1} alt="img" />
                  <h4>إعلانات الشقق</h4>
                  <p>
                    - فحص وتوثيق الشقق: نقوم بفحص وتوثيق جميع الشقق المدرجة على
                    الموقع للتحقق من ملاءمتها وجودتها. - خيارات بحث متقدمة:
                    توفير أدوات بحث متقدمة تتيح للطلاب تحديد معايير البحث، مثل
                    الميزانية، عدد الغرف، والموقع.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
                <div className="col-9 child child2">
                  <img src={sav3} alt="img" />
                  <h4> حماية الخصوصية </h4>
                  <p>
                    - سياسة خصوصية صارمة: توضيح وتفصيل سياسة الخصوصية لضمان
                    حماية بيانات المستخدمين.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>

                <div className="col-9 child child3">
                  <img src={sav5} alt="img" />
                  <h4> دعم متعدد للغات</h4>
                  <p>
                    - ترجمة آلية: إمكانية ترجمة المحتوى تلقائيًا لتوفير تجربة
                    مستخدم سلسة للطلاب من مختلف الثقافات.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
                <div className="col-9 child child4">
                  <img src={sav7} alt="img" />
                  <h4>حلول تواصل متقدمة </h4>
                  <p>
                    {" "}
                    - دردشة نصية وصوتية: إمكانية إجراء مكالمات صوتية ودردشة نصية
                    
                    داخل التطبيق لتسهيل التواصل بين الطلاب وأصحاب العقارات. نظام
                    إشعارات فوري: إشعارات فورية لتنبيه الطلاب وأصحاب العقارات
                    حول رسائل جديدة أو تحديثات هامة.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
                <div className="col-9 child child5">
                  <img src={sav9} alt="img" />
                  <h4>تحسينات مستقبلية </h4>
                  <p>
                    استطلاعات الرضا: إجراء استطلاعات دورية لاستلام تعليقات
                    المستخدمين وتحديد مناطق التحسين المستقبلية.
                     تحديثات منتظمة: إطلاق تحديثات دورية لتحسين وتوسيع
                    نطاق الخدمات المقدمة.
                  </p>
                  <span className="point1"></span>
                  <span className="parent-span">
                    {" "}
                    <span className="point2"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Services;
