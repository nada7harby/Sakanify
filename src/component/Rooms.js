import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faPhoneVolume, faEnvelope, faAward } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import starImg from "../img/Full-star.png";
import HalfStar from "../img/Half-star.png";
import BookImg from "../img/Book.png";
import SearchIcon from "../img/Search.png";
import HostIcon from "../img/host-icon.png";
import "../css/OurRooms.css";

function Rooms() {
  const [favorites, setFavorites] = useState(() => {
    const savedFav = localStorage.getItem("Fav");
    return savedFav ? JSON.parse(savedFav) : [];
  });
  const [roomData, setRoomData] = useState([]);
  const [showModal, setShowModal] = useState([]);
  const [SelectedRooms, setSelectedRooms] = useState([]);
  const [PlaceSearch, setPlaceSearch] = useState("");
  const [PriceeSearch, setPriceSearch] = useState("");

  useEffect(() => {
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

  const toggleRoom = (room) => {
    setSelectedRooms((prevSelectedRooms) =>
      prevSelectedRooms.includes(room._id)
        ? prevSelectedRooms.filter((id) => id !== room._id)
        : [...prevSelectedRooms, room._id]
    );
    addToFavorites(room);
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

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.find((fav) => fav._id === product._id);
      let updatedFav;
      if (isFavorite) {
        updatedFav = prevFavorites.filter((fav) => fav._id !== product._id);
      } else {
        updatedFav = [...prevFavorites, product];
      }
      localStorage.setItem("Fav", JSON.stringify(updatedFav));
      return updatedFav;
    });
  };

  function sliceTextUntilComma(text) {
    if (!text) return "";
    const index = text.indexOf("،");
    return index !== -1 ? text.slice(0, index) : text;
  }
  const RateStar = (rate) => (rate > 4 ? starImg : HalfStar);

  const HostTilteFunc = (HostRate) => (HostRate > 4 ? "مضيف متميز" : "مضيف");

  const DrawRooms = (filteredRooms) => {
    console.log("Filtered rooms:", filteredRooms);

    if (!filteredRooms || !Array.isArray(filteredRooms)) {
      console.error("Invalid filteredRooms:", filteredRooms);
      return null;
    }

    return filteredRooms.map((room, index) => (
      <Col xs={12} sm={6} md={4} lg={3} className="my-2" key={room._id}>
        <Card className="mx-auto mx-md-0 Card border-0">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <Link to={`/Rooms/${room._id}`} className="text-decoration-none">
              <SwiperSlide>
                <img
                  src={room.imageCoverUrl}
                  alt="room cover"
                  className="Swiper-Image"
                />
              </SwiperSlide>
              {room.imagesUrl.slice(0, 2).map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={image}
                    alt={`room image ${idx + 1}`}
                    className="Swiper-Image"
                  />
                </SwiperSlide>
              ))}
            </Link>
          </Swiper>
          <h4>
            {" "}
            <FontAwesomeIcon
              icon={faHeart}
              className="OurRooms-Heart-icon"
              onClick={() => toggleRoom(room)}
              style={{
                color: favorites.some((fav) => fav._id === room._id)
                  ? "rgb(208, 39, 39)"
                  : "white",
              }}
            />
          </h4>
          <img src={BookImg} alt="Owner Book" className="Owner-book" />
          <img
            src={room.userImage}
            alt="owner img"
            className="Owner-Img"
            onClick={() => handleShow(index)}
          />
          <Modal
            show={showModal[index]}
            onHide={() => handleClose(index)}
            centered
          >
            <Modal.Body
              style={{ backgroundColor: "#f3f3f3" }}
              className="rounded-3 border-0"
            >
              <CloseButton onClick={() => handleClose(index)} className="mb-3" />
              <Container>
                <Row className="owner-model-div p-3 d-flex">
                  <Col sm={6} className="text-center">
                    <img
                      src={room.userImage}
                      alt="Owner img"
                      className="Owner-Model-Img"
                    />
                    <h3 className="mt-3 font-Weigth">{room.name}</h3>
                    <p className="text-center">
                      <img src={HostIcon} className="host-icon" alt="host title" />
                      {HostTilteFunc(room.ratingsAverage)}
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
                          icon={faStar}
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
                      {room.phone}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ marginLeft: "6px" }}
                      />{" "}
                      {room.email}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faAward}
                        style={{ marginLeft: "6px" }}
                      />{" "}
                      ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك
                    </p>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
          <Link to={`/rooms/${room._id}`} className="text-decoration-none">
            <Card.Body className="text-end d-flex justify-content-between">
              <div>
                <Card.Title className="Card-Title">{room.addressUp}</Card.Title>
                <Card.Text className="Card-Text">
                  {sliceTextUntilComma(room.description)}
                </Card.Text>
                <p className="Room-Price">{room.price} ج.م</p>
              </div>
              <div className="d-flex">
                <img
                  src={RateStar(room.ratingsAverage)}
                  alt="Rate star"
                  className="Star-img"
                />
                <p style={{ color: "black" }}>{room.ratingsAverage}</p>
              </div>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    ));
  };

  const RoomsAfterSearch = () => {
    let filteredRooms = roomData;

    if (PlaceSearch) {
      filteredRooms = filteredRooms.filter((room) =>
        room.address.includes(PlaceSearch)
      );
    }

    if (PriceeSearch) {
      filteredRooms = filteredRooms.filter((room) =>
        room.price.toString().includes(PriceeSearch)
      );
    }

    return DrawRooms(filteredRooms);
  };

  return (
    <>
      <Nav />
      <div className="Rooms">
        <Container fluid className="py-4">
          <div className="Div mx-auto d-flex justify-content-center align-items-center mb-3">
            <div>
              <h4 className="text-center"> المكان</h4>
              <input
                type="text"
                placeholder="البحث عن وجهات"
                className="text-center form-control border-0 mx-auto search-inp"
                name="Place Search"
                onChange={(e) => setPlaceSearch(e.target.value)}
              />
            </div>
            <div className="SearchLine"></div>
            <div>
              <h4 className="text-center"> السعر</h4>
              <input
                type="text"
                placeholder="إضافة السعر"
                className="text-center form-control border-0 w-md-75 mx-auto search-inp"
                name="Price Search"
                onChange={(e) => setPriceSearch(e.target.value)}
              />
            </div>
            <div className="SearchIconDiv">
              <img src={SearchIcon} alt="search Icon" className="SearchIcon" />
            </div>
          </div>
          <Row>{RoomsAfterSearch()}</Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
