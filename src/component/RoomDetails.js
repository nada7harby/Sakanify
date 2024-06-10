import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import CloseButton from "react-bootstrap/CloseButton";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

import starImg from "../img/Full-star.png";
import wifi from "../img/wifi.png";
import WashingMachine from "../img/washing machine.png";
import f1 from "../img/conditioning.png";
import f2 from "../img/stove.png";
import f3 from "../img/screen.png";
import f4 from "../img/fridge.png";
import f5 from "../img/bus.png";
import f6 from "../img/f1.png";
import f7 from "../img/f2.png";
import f8 from "../img/f3.png";
import RightFlower from "../img/Rate-flower-rightpng.png";
import LeftFlower from "../img/Rate-flower-left.png";
import clean from "../img/clean.png";
import location from "../img/location.png";
import price from "../img/price.png";
import communication from "../img/comm.png";

import Nav from "./Nav";
import Footer from "./Footer";

import HostIcon from "../img/host-icon.png";
import {
  faPhoneVolume,
  faEnvelope,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

import "../css/RoomDetails.css";
import { useParams } from "react-router-dom";
function RoomDetails() {
  const [HeartColor, setHeartColor] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const HandleHeartColor = () => {
    setHeartColor(!HeartColor);
  };

  let params = useParams();
  const [RoomData, setRoomData] = useState({});

  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await fetch(
          `https://sakanify.onrender.com/api/v1/posts/${params.roomId}`
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging log
        setRoomData(data.data.Post);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    getRoom();
  }, [params.roomId]);
  if (!RoomData) {
    return <div>Loading...</div>; // or a spinner
  }

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  const HostTilteFunc = (HostRate) => (HostRate > 4 ? "مضيف متميز" : "مضيف");

  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        // alert('URL copied to clipboard!');
        Swal.fire("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <>
    <Nav/>
    <div className="Room-Details d-flex justify-content-center">
      <Container>
        <Row>
          <Col sm={11}>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper Rooms-details-Swiper mb-3"
            >
              <SwiperSlide>
                <img
                  src={RoomData.imageCoverUrl}
                  alt="Room Cover"
                  className="Swiper-Img"
                />
              </SwiperSlide>
              {RoomData.imagesUrl &&
                RoomData.imagesUrl.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={image}
                      alt={`room image ${idx + 1}`}
                      className="Swiper-Img"
                    />
                  </SwiperSlide>
                ))}

              {/* <SwiperSlide>
                <img
                  src={Room12}
                  alt="Room 1 image 2 "
                  className="Swiper-Img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Room13}
                  alt="Room 1 image 3 "
                  className="Swiper-Img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Room14}
                  alt="Room 1 image 4 "
                  className="Swiper-Img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={Room15}
                  alt="Room 1 image 5 "
                  className="Swiper-Img"
                />
              </SwiperSlide> */}
            </Swiper>
          </Col>
        </Row>

        <Row>
          <Col sm={11} className="d-flex justify-content-between">
            <div>
              <h4 style={{ fontSize: "32px" }}>{RoomData.addressUp}</h4>
            </div>
            <div className="Div-Info-Details">
              <p className="ms-4" onClick={copyToClipboard}>
                <FontAwesomeIcon
                  icon={faArrowUpFromBracket}
                  style={{ marginLeft: "5px" }}
                  onClick={copyToClipboard}
                />
                مشاركة
              </p>
              <p
                onClick={() => HandleHeartColor()}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    marginLeft: "5px",
                    color: HeartColor ? "rgb(208, 39, 39)" : "black",
                  }}
                />
                حفظ
              </p>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-3 mb-3 Room-Img-md-View">
          <Col md={6} className="Room-Details-Imgs1">
            <img
              src={Room11}
              alt="Room-1 1 Details"
              style={{
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            />
          </Col>
          <Col md={6} className="Room-Details-Imgs2">
            <Row>
              <Col md={5} className="ms-2 mb-2">
                <img src={Room12} alt="Room-1 2 Details" />
              </Col>
              <Col md={5} className="mb-2">
                <img
                  src={Room13}
                  style={{ borderTopLeftRadius: "20px" }}
                  alt="Room-1 3 Details"
                />
              </Col>
            </Row>

            <Row>
              <Col md={5} className="ms-2">
                <img src={Room14} alt="Room-1 4 Details" />
              </Col>
              <Col md={5}>
                <img
                  src={Room15}
                  style={{ borderBottomLeftRadius: "20px" }}
                  alt="Room-1 5 Details"
                />
              </Col>
            </Row>
          </Col>
        </Row> */}
        {/* <Row className="mt-3 mb-3 Room-Img-md-View">
          <Col md={6} className="Room-Details-Imgs1">
            <img
              src={RoomData.imageCoverUrl}
              alt="Room-1 1 Details"
              style={{
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            />
          </Col>
          <Col md={6} className="Room-Details-Imgs2">
            <Row>
              <Col md={5} className="ms-2 mb-2">
                {
                  RoomData.imagesUrl.slice(0,1).map((room,id)=>(
                    <img key={id} src={room} alt={`room ${id}`} />
                  ))
                }
              </Col>
              <Col md={5} className="mb-2">
                {
                  RoomData.imagesUrl.slice(1,2).map((room,id)=>(
                    <img
                    key={id}
                    src={room}
                    style={{ borderTopLeftRadius: "20px" }}
                    alt={`room ${id}`}
                  />
                  ))
                }
                
              </Col>
            </Row>

            <Row>
              <Col md={5} className="ms-2">
              {
                RoomData.imagesUrl.slice(2,3).map((room,id)=>(
                  <img key={id}
                  src={room} 
                  alt={`room ${id}`} />
                ))
              }
              </Col>
              <Col md={5}>
                {
                  RoomData.imagesUrl.slice(3,4).map((room,id)=>(
                    <img
                    key={id}
                    src={room}
                    style={{ borderBottomLeftRadius: "20px" }}
                    alt={`room ${id}`}
                  />
                  ))
                }
                
                
              </Col>
            </Row>
          </Col>
        </Row> */}

        <Row className="mt-3 mb-3 Room-Img-md-View">
          <Col md={6} className="Room-Details-Imgs1">
            <img
              src={RoomData.imageCoverUrl}
              alt="Room-1 1 Details"
              style={{
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                
              }}
            />
          </Col>
          <Col md={6} className="Room-Details-Imgs2">
            {RoomData.imagesUrl && RoomData.imagesUrl.length > 0 && (
              <>
                <Row>
                  <Col md={5} className="ms-2 mb-2">
                    {RoomData.imagesUrl.slice(0, 1).map((room, idx) => (
                      <img
                        key={room + idx}
                        src={room}
                        alt={`room ${idx}`}
                        // style={{ width: "100%", height: "auto" }} // Ensure images cover their containers
                      />
                    ))}
                  </Col>
                  <Col md={5} className="mb-2">
                    {RoomData.imagesUrl.slice(1, 2).map((room, idx) => (
                      <img
                        key={room + idx}
                        src={room}
                        style={{
                          borderTopLeftRadius: "20px",
                          // width: "100%",
                          // height: "auto",
                        }}
                        alt={`room ${idx}`}
                      />
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col md={5} className="ms-2">
                    {RoomData.imagesUrl.slice(2, 3).map((room, idx) => (
                      <img
                        key={room + idx}
                        src={room}
                        alt={`room ${idx}`}
                        // style={{ width: "100%", height: "auto" }}
                      />
                    ))}
                  </Col>
                  <Col md={5}>
                    {RoomData.imagesUrl.slice(3, 4).map((room, idx) => (
                      <img
                        key={room + idx}
                        src={room}
                        style={{
                          borderBottomLeftRadius: "20px",
                          // width: "100%",
                          // height: "auto",
                        }}
                        alt={`room ${idx}`}
                      />
                    ))}
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} className="ms-3">
            <h6 style={{ fontSize: "25px", fontWeight: "590" }}>
              وحدة تأجير بالكامل فى سوهاج مصر
            </h6>
            <p className="RoomDescription">{RoomData.description}</p>
            <img src={starImg} alt="Rate star" className="Star-imggg" />
            <span className="NumOfRates">10 تقييمات</span>

            <div className="Host-Details d-flex">
              <img
                src={RoomData.userImage}
                alt="owner image"
                className="HostImage"
              />
              <div className="me-4 mt-3">
                <h6 style={{ fontWeight: "850", fontSize: "22px" }}>
                  {/* المضيف : احمد محمد{" "} */}
                  {RoomData.name}
                </h6>
                <p style={{ fontWeight: "380" }}>10 أشهر فى مجال الاستضافه</p>
              </div>
            </div>
            <h5
              className="mt-4 mb-3"
              style={{ fontWeight: "780", fontSize: "25px" }}
            >
              ما يقدمه هذا السكن
            </h5>
          </Col>

          <Col md={5} className="d-flex justify-content-end">
            <div className="mt-3 RoomDetailsPrice">
              <p style={{ fontSize: "25px" }}>
                {/* <span style={{ fontWeight: "800" }}>{RoomData.price} ج .م </span>للسرير */}
                <span style={{ fontWeight: "800" }}>
                  {RoomData.price} ج .م{" "}
                </span>
              </p>
              <button className="contactOwner" onClick={handleModalShow}>
                تواصل مع صاحب العقار
              </button>
              <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Body
                  style={{ backgroundColor: "#f3f3f3" }}
                  className="rounded-3 border-0"
                >
                  <CloseButton
                    onClick={() => handleModalClose()}
                    className="mb-3"
                  />
                  <Container>
                    <Row className="owner-model-div p-3 d-flex">
                      <Col sm={6} className="text-center">
                        <img
                          src={RoomData.userImage}
                          alt="Owner img"
                          className="Owner-Model-Img"
                        />
                        <h3 className="mt-3 font-Weigth">{RoomData.name}</h3>
                        <p className="text-center">
                          <img
                            src={HostIcon}
                            className="host-icon"
                            alt="host title"
                          />
                          {HostTilteFunc(RoomData.ratingsAverage)}
                        </p>
                      </Col>
                      <Col sm={6} className="text-center mt-4">
                        <div>
                          <h4 className="font-Weigth">50</h4>
                          <p className="Font-Color">تعليقا</p>
                        </div>
                        <div>
                          <h4 className="font-Weigth">
                            <FontAwesomeIcon
                              // icon={faStar}
                              style={{ fontSize: "18px", marginBottom: "3px" }}
                            />
                            4.6
                          </h4>
                          <p className="Font-Color">تقييما</p>
                        </div>
                        <div>
                          <h4 className="font-Weigth">3</h4>
                          <p className="Font-Color">سنوات استضافة</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={11} className="p-4 Owner-model-personal-data">
                        <p>
                          <FontAwesomeIcon
                            icon={faPhoneVolume}
                            style={{ marginLeft: "6px" }}
                          />{" "}
                          {RoomData.phone}
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ marginLeft: "6px" }}
                          />{" "}
                          {RoomData.email}
                        </p>
                        {/* <p>
                          <FontAwesomeIcon
                            icon={faAward}
                            style={{ marginLeft: "6px" }}
                          />{" "}
                          ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في
                          بيتك
                        </p> */}
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
              </Modal>
              <div>
                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>خدمات تنظيف</p>
                  <p>50 ج.م</p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>كهرباء و مياه</p>
                  <p>100 ج.م</p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>نت</p>
                  <p>70 ج.م</p>
                </div>
              </div>

              <hr />
              <div
                className="d-flex justify-content-between"
                style={{ fontWeight: "700" }}
              >
                <p>الاجمالى</p>
                <p>{RoomData.price + 220} ج.م</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="ms-3">
            <div className="mb-5 RoomFeatures d-sm-flex-column d-md-flex justify-content-between">
              <div className="d-flex-column justify-content-between ">
                <div className=" mb-3">
                  <img src={wifi} />
                  <span>انترنت</span>
                </div>
                <div className=" mb-3">
                  <img src={WashingMachine} />
                  <span>غسالة</span>
                </div>
                <div className=" mb-3">
                  <img src={f1} />
                  <span>تكييف</span>
                </div>
                <div className=" mb-3">
                  <img src={f2} />
                  <span>بوتجاز</span>
                </div>

                <div className=" mb-3">
                  <img src={f3} />
                  <span>شاشة</span>
                </div>
              </div>

              <div className="d-flex-column justify-content-between">
                <div className=" mb-3">
                  <img src={f4} />
                  <span>ثلاجة</span>
                </div>

                <div className=" mb-3">
                  <img src={f5} />
                  <span>موقف قريب</span>
                </div>
                <div className=" mb-3">
                  <img src={f6} />
                  <span> ركنة</span>
                </div>

                <div className=" mb-3">
                  <img src={f7} />
                  <span>اسعافات اولية</span>
                </div>
                <div className=" mb-3">
                  <img src={f8} />
                  <span> مكتب</span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={5} className="d-flex justify-content-end">
            <div>
              <button
                className="contactOwner my-3 me-3"
                style={{ marginBottom: "0px" }}
              >
                حمل التطبيق الخاص بنا
              </button>

              <div className="mt-3 RoomDetailsPrice RoomDetailsRate">
                <h6
                  className="mb-3"
                  style={{ color: "rgba(26, 40, 78, 1)", fontWeight: "800" }}
                >
                  قيم الشقة
                </h6>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>تقييم النظافة</p>
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>تقييم التواصل</p>
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>تقييم الموقع</p>
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ fontWeight: "400" }}
                >
                  <p>تقييم القيمة</p>
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} className="Responsive-price mt-3">
            <hr />
            <div
              className=" d-flex justify-content-between py-2"
              style={{ fontWeight: "400" }}
            >
              <h5>
                {" "}
                {RoomData.price} ج.م{" "}
                <span
                  style={{ fontWeight: "350", color: "rgba(26, 40, 78, 1)" }}
                ></span>{" "}
              </h5>
              <button className="Booking-button">حجز</button>
            </div>
          </Col>
          <hr className="mt-sm-2 mt-md-5" />
        </Row>

        <Row>
          <Col sm={12} className="mt-3 mb-5">
            <div>
              <div className="d-flex justify-content-center">
                <img
                  src={RightFlower}
                  alt="Right Flower"
                  className="Flower flower2"
                />
                <h2 className="RoomDetailsRate2">{RoomData.ratingsAverage}</h2>
                <img src={LeftFlower} alt="Left Flower" className="Flower " />
              </div>
              <div className="text-center mb-5">
                <p className="text-center">
                  {" "}
                  أحد أكثر البيوت التي أحبها الضيوف على Sakanify <br /> بناءً
                  على التقييمات والمراجعات والموثوقية
                </p>
              </div>
            </div>
            <div className="d-flex  justify-content-evenly">
              <div style={{ lineHeight: "15px" }}>
                <h6>النظافة</h6>
                <p className="text-center">{RoomData.cleanOverall}</p>
                <img src={clean} alt="Clean" className="Rate-details" />
              </div>

              <div style={{ lineHeight: "15px" }} className="DetailsRate">
                <h6>التواصل</h6>
                <p className="text-center">{RoomData.communicationOverall}</p>
                <img
                  src={communication}
                  alt="communication"
                  className="Rate-details"
                />
              </div>

              <div style={{ lineHeight: "15px" }} className="DetailsRate">
                <h6>الموقع</h6>
                <p className="text-center">{RoomData.locationOverall}</p>
                <img src={location} alt=" location" className="Rate-details" />
              </div>

              <div style={{ lineHeight: "15px" }} className="DetailsRate">
                <h6>القيمة</h6>
                <p className="text-center">{RoomData.valueOverall}</p>
                <img src={price} alt="price" className="Rate-details" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer/>
    </>
    
  );
}
export default RoomDetails;
