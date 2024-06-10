import { Container, Card, Row, Col } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "./Nav";
import Footer from "./Footer";
import CloseButton from "react-bootstrap/CloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faPhoneVolume, faEnvelope, faAward } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import starImg from "../img/Full-star.png";
import HalfStar from "../img/Half-star.png";
import BookImg from "../img/Book.png";
import SearchIcon from "../img/Search.png";
import HostIcon from "../img/host-icon.png";
import "../css/OurRooms.css";

function Rooms() {
  const [roomData, setRoomData] = useState([]);
  const [showModal, setShowModal] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [placeSearch, setPlaceSearch] = useState("");
  const [priceSearch, setPriceSearch] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]); // State for filtered rooms

  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem('searchParams')); // Get search data from localStorage
    if (searchParams) {
      setPlaceSearch(searchParams.area || "");
      setPriceSearch(searchParams.serviceType || "");
    }

    const getRoom = async () => {
      try {
        const response = await fetch("https://sakanify.onrender.com/api/v1/posts");
        const data = await response.json();
        console.log("Fetched data:", data);
        setRoomData(data.data.posts);
        setShowModal(Array(data.data.posts.length).fill(false));
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    getRoom();
  }, []);

  useEffect(() => {
    const filtered = roomData.filter((room) => {
      const matchesArea = !placeSearch || (room.area && room.area.includes(placeSearch));
      const matchesServiceType = !priceSearch || (room.serviceType && room.serviceType.includes(priceSearch));
      return matchesArea && matchesServiceType;
    });
    setFilteredRooms(filtered);
  }, [roomData, placeSearch, priceSearch]);

  const toggleRoom = (roomId) => {
    setSelectedRooms((prevSelectedRooms) =>
      prevSelectedRooms.includes(roomId)
        ? prevSelectedRooms.filter((id) => id !== roomId)
        : [...prevSelectedRooms, roomId]
    );
  };

  const handleShow = (index) => {
    setShowModal((prev) => {
      const updatedState = [...prev];
      updatedState[index] = true;
      return updatedState;
    });
  };

  const handleClose = (index) => {
    setShowModal((prev) => {
      const updatedState = [...prev];
      updatedState[index] = false;
      return updatedState;
    });
  };

  function sliceTextUntilComma(text) {
    if (!text) return "";
    const index = text.indexOf("،");
    return index !== -1 ? text.slice(0, index) : text;
  }

  const rateStar = (rate) => (rate > 4 ? starImg : HalfStar);

  const hostTitleFunc = (hostRate) => (hostRate > 4 ? "مضيف متميز" : "مضيف");

  const drawRooms = (filteredRooms) => {
    if (!filteredRooms || !Array.isArray(filteredRooms)) {
      console.error("Invalid filteredRooms:", filteredRooms);
      return null;
    }

    return filteredRooms.map((room, index) => (
      <Col xs={12} sm={6} md={4} lg={3} className="my-2" key={room._id}>
        <Card className="mx-auto mx-md-0 Card border-0">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <Link to={`/rooms/${room._id}`} className="text-decoration-none">
              <SwiperSlide>
                <img src={room.imageCoverUrl} alt="room cover" className="Swiper-Image" />
              </SwiperSlide>
              {room.imagesUrl.slice(0, 2).map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img src={image} alt={`room image ${idx + 1}`} className="Swiper-Image" />
                </SwiperSlide>
              ))}
            </Link>
          </Swiper>
          <h4>
            <FontAwesomeIcon
              icon={faHeart}
              className="OurRooms-Heart-icon"
              onClick={() => toggleRoom(room._id)}
              style={{
                color: selectedRooms.includes(room._id) ? "rgb(208, 39, 39)" : "white",
              }}
            />
          </h4>
          <img src={BookImg} alt="Owner Book" className="Owner-book" />
          <img src={room.userImage} alt="owner img" className="Owner-Img" onClick={() => handleShow(index)} />
          <Modal show={showModal[index]} onHide={() => handleClose(index)} centered>
            <Modal.Body style={{ backgroundColor: "#f3f3f3" }} className="rounded-3 border-0">
              <CloseButton onClick={() => handleClose(index)} className="mb-3" />
              <Container>
                <Row className="owner-model-div p-3 d-flex">
                  <Col sm={6} className="text-center">
                    <img src={room.userImage} alt="Owner img" className="Owner-Model-Img" />
                    <h6>{room.userName}</h6>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src={rateStar(room.hostRate)} alt="star" className="Owner-Star" />
                      <p className="pt-3 ps-2">{hostTitleFunc(room.hostRate)}</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <ul className="ps-3">
                      <li className="d-flex">
                        <p className="owner-right-data">رقم الهاتف:</p>
                        <p className="owner-left-data">{room.userPhoneNumber}</p>
                      </li>
                      <li className="d-flex">
                        <p className="owner-right-data">التقييم:</p>
                        <p className="owner-left-data">{room.hostRate}</p>
                      </li>
                      <li className="d-flex">
                        <p className="owner-right-data">الايميل:</p>
                        <p className="owner-left-data">{room.userEmail}</p>
                      </li>
                    </ul>
                    <FontAwesomeIcon icon={faEnvelope} className="Owner-Model-Email-icon" />
                    <FontAwesomeIcon icon={faPhoneVolume} className="Owner-Model-Phone-icon" />
                    <FontAwesomeIcon icon={faAward} className="Owner-Model-Award-icon" />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
          <Card.Body>
            <Card.Title className="fs-5 fw-bold">{room.title}</Card.Title>
            <Card.Text className="py-2">
              <FontAwesomeIcon icon={faStar} className="OurRooms-Star-Icon" />
              {room.ratingsAverage} (عدد التقييمات: {room.ratingsQuantity})
            </Card.Text>
            <Card.Text>{sliceTextUntilComma(room.description)}</Card.Text>
            <Card.Text className="fw-bold">
              السعر: <span className="Room-Price">${room.price}</span> /في الليلة
            </Card.Text>
            <Link to={`/rooms/${room._id}`} className="btn OurRooms-MoreBtn text-white w-100">تفاصيل أكثر</Link>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <>
      <Nav />
      <Container>
        <Row className="pt-4">
          <Col md={6}>
            <h3 className="OurRooms-Title">غرفنا</h3>
          </Col>
          <Col md={6}>
            <div className="input-group OurRooms-SearchBar">
              <input
                type="text"
                className="form-control"
                placeholder="ابحث عن غرفة..."
                value={placeSearch}
                onChange={(e) => setPlaceSearch(e.target.value)}
              />
              <button className="btn OurRooms-SearchIcon">
                <img src={SearchIcon} alt="Search" />
              </button>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">{drawRooms(filteredRooms)}</Row>
      </Container>
      <Footer />
    </>
  );
}

export default Rooms;
