import '../css/StudentProfile.css'
import Nav from "./Nav"
import Footer from "./Footer";
import userImage from '../img/Ellipse 40.png';



function StudentProfile() {
const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
        return (<>
                <Nav></Nav>
                <div className="studentContainer">
                        <div className="row studentRow">
                                
                                
                                <div className="studentCol col-sm-11 col-md-10 mx-md-auto col-lg-4"> 
                                        <div className="student">
                                                <div className="studentImg">
                                                        <img src={userImage} alt=""/>
                                                </div>

                                                <h2> عبدالرحمن محمود </h2>
                                                <p> مستخدم </p>

                                        </div>
                                </div>

                                <div className="studentCol col-sm-11 col-md-10 mx-md-auto col-lg-4 "> 
                                        <div className="studentData">
                                                <h2> بيانات عبد الرحمن </h2>
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-user"></i>
                                                <span> عبدالرحمن محمود </span>
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-phone"></i>
                                                <span> 0123456789 </span>
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-book"></i>
                                                <span> كلية الحاسبات والذكاء الاصطناعى </span>
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-key"></i>
                                                <span> 
                                                        // <i class="fa-solid fa-circle"></i>
                                                         <input
                                                              type={showPassword ? "text" : "password"}
                                                              name="password"
                                                              id="password"
                                                              className="input-text pass"
                                                              placeholder="كلمة السر"
                                                              required
                                                              
                                                            />
                                                        <i class="fa-solid fa-eye-slash"></i>
                                                </span>
                                        </div>
                                </div>

                                <div className="col col-sm-11 col-md-10 mx-md-auto col-lg-4"> 
                                        <div className="studentData emptyDiv">
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-credit-card"></i>
                                                <span> 10203040506070 </span>
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-envelope"></i>
                                                <span> abc@gmail.com </span>
                                        </div>
                                        <div className="studentData">
                                                <i class="fa-solid fa-hashtag"></i>
                                                <span> الفرقة الثالة </span>
                                        </div>

                                        <div className="studentData">
                                                <i class="fa-solid fa-exclamation exclamation"></i>
                                                <span> ذكر </span>
                                        </div>
                                </div>


                                
                        </div>

                        




                </div>
                <Footer></Footer>
        </>);
}


export default StudentProfile;
