import "./OwnerProfile.css";
import userImage from "./imgs/Ellipse 41.png";

function OwnerProfile() {
  return (
    <>
      <div className="ownerContainer">
        <div className="row ownerRow">
          
          <div className="ownnerCol col-sm-11 mx-md-auto col-lg-4">
            <div className="ownerData">
              <div className="ownerImg">
                <img src={userImage} alt="" />
              </div>

              <h2> محمود احمد </h2>
              <p> صاحب عقار </p>
            </div>
          </div>

          <div className="ownnerCol col-sm-11  mx-md-auto col-lg-4">
            <div className="dataForOwner">
              <h2> بيانات محمود احمد </h2>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-user"></i>
              <span> محمود احمد </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-envelope"></i>
              <span> abc@gmail.com </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-phone"></i>
              <span> 0123456789 </span>
            </div>

            <div className="dataForOwner">
              <i class="fa-solid fa-key"></i>
              <span>
                <i class="fa-solid fa-circle"></i>
                <i class="fa-solid fa-eye-slash"></i>
              </span>
            </div>

            <button className="toPost"> ارفع مسكنك علي Sakanify </button>
          </div>

          <div className="ownnerCol col-sm-11 mx-md-auto col-lg-4">
          </div>

        </div>
      </div>
    </>
  );
}

export default OwnerProfile;
