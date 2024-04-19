import './ContactUs.css'
import image from './imgs/bluePhone.png';

function ContactUs() 
{

        return (
        <>
                <div className="container">
                        <div className="contactUsRow row">
                                <div className="form">
                                        <form> 
                                                <h1> تحتاج مساعدة؟ </h1>
        
                                                <p>
                                                        <label for="name"> الاسم </label>
                                                </p>
                                                <input type="text" id="name" name="name"/>
                                                <p> 
                                                        <label for="email"> البريد الالكتروني </label>
                                                </p>
                                                <input type="email" id="email" name="email"/>
                                        
                                                <p>
                                                        <label for="message"> رجاءا ادخل تفاصيل طلبك </label>
                                                </p>
                                                <textarea id="message" name="message" rows="10"></textarea>
        
                                                <button type="submit"> تسجيل </button>
                                        </form>
                                </div>
                                
                                <div className="img">
                                        <img src={image} alt=""/>
                                </div>
                        </div>
                </div>
        </>
        );
}


export default ContactUs;