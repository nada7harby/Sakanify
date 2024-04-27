import { Container, Card, Row, Col } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import Nav from "./Nav";
import Footer from "./Footer";
import Swal from "sweetalert2";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faPhoneVolume,
  faEnvelope,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
// import Alert from 'react-bootstrap/Alert';

//Rooms images
import Room1 from "../img/room1.png";
import Room2 from "../img/room2.png";
import Room3 from "../img/room3.png";
import Room4 from "../img/room4.png";
import Room5 from "../img/room5.png";
import Room6 from "../img/room6.png";
import Room7 from "../img/Room7.png";
import Room8 from "../img/Room8.png";
import Room9 from "../img/Room9.jpeg";
import Room10 from "../img/Room10.jpeg";
import Room11 from "../img/Room11.jpeg";
import Room12 from "../img/Room12.png";
import Room13 from "../img/Room13.png";
import Room14 from "../img/Room14.png";
import Room15 from "../img/Room15.png";

//Elements images
import starImg from "../img/Full-star.png";
import HalfStar from "../img/Half-star.png";
import BookImg from "../img/Book.png";
import SearchIcon from "../img/Search.png";
import HostIcon from "../img/host-icon.png";

//Owners images
import Owner1 from "../img/Owner1.png";
import Owner2 from "../img/Owner2.png";
import Owner3 from "../img/Owner3.png";
import Owner4 from "../img/Owner4.png";
import Owner5 from "../img/Owner5.png";
import Owner6 from "../img/Owner6.png";
import Owner7 from "../img/Owner7.png";
import Owner8 from "../img/Owner8.png";
import "../css/OurRooms.css";
function Rooms() {
  const numberCheck = localStorage.getItem("password");

  const rooms = [
    {
      id: 1,
      title: "سوهاج - مصر",
      image: {
        image1: Room1,
        image2: Room2,
        image3: Room3,
      },
      description: "شقة، 3 غرف، 5 سراير",
      price: 600,
      rate: 3.8,
      owner: {
        ownerImg: Owner1,
        ownerName: "أحمد علي",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "owner@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 2,
      title: "الترعة المردومة",
      image: {
        image1: Room2,
        image2: Room4,
        image3: Room5,
      },
      description: "شقة، 3 غرف، 5 سراير، حمامين",
      price: 800,
      rate: 4.9,
      owner: {
        ownerImg: Owner2,
        ownerName: "سارة أحمد",
        StudentsComments: 79,
        ownerRate: 4.8,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "owner@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 3,
      title: "سوهاج - مصر",
      image: {
        image1: Room6,
        image2: Room7,
        image3: Room8,
      },
      description: "شقة، 3 غرف، 3 سراير",
      price: 750,
      rate: 4.5,
      owner: {
        ownerImg: Owner3,
        ownerName: "سمير فخري",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "owner@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 4,
      title: "سوهاج - مصر",
      image: {
        image1: Room9,
        image2: Room10,
        image3: Room11,
      },
      description: "غرفة، سرير، حمام ومطبخ",
      price: 900,
      rate: 5,
      owner: {
        ownerImg: Owner4,
        ownerName: " سالي فؤاد",
        StudentsComments: 79,
        ownerRate: 5,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "owner@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 5,
      title: "الترعة المردومة",
      image: {
        image1: Room12,
        image2: Room6,
        image3: Room7,
      },
      description: "شقة، 4 غرف،6 سراير",
      price: 1000,
      rate: 4,
      owner: {
        ownerImg: Owner5,
        ownerName: "ديفيد نبيل",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "owner@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 6,
      title: "سوهاج الجديدة - مصر",
      image: {
        image1: Room13,
        image2: Room2,
        image3: Room1,
      },
      description: "شقة، 3 غرف، 2 سرير",
      price: 650,
      rate: 3.7,
      owner: {
        ownerImg: Owner6,
        ownerName: "سيمون",
        StudentsComments: 79,
        ownerRate: 5,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "owner@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 7,
      title: "سوهاج الجديدة - مصر",
      image: {
        image1: Room14,
        image2: Room4,
        image3: Room5,
      },
      description: "شقة، غرفتين، 4 سراير ",
      price: 800,
      rate: 3.2,
      owner: {
        ownerImg: Owner7,
        ownerName: "سلمى",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "Ahmed@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 8,
      title: "سوهاج - مصر",
      image: {
        image1: Room15,
        image2: Room4,
        image3: Room11,
      },
      description: "شقة، غرفة، سرير مزدوج",
      price: 600,
      rate: 4.5,
      owner: {
        ownerImg: Owner8,
        ownerName: "ساندرا",
        StudentsComments: 79,
        ownerRate: 4.2,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "Ahmed@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 9,
      title: "سوهاج - مصر",
      image: {
        image1: Room4,
        image2: Room12,
        image3: Room1,
      },
      description: "شقة، غرفة، سرير مزدوج",
      price: 630,
      rate: 2.6,
      owner: {
        ownerImg: Owner2,
        ownerName: "حنين",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "Ahmed@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 10,
      title: "سوهاج - مصر",
      image: {
        image1: Room10,
        image2: Room12,
        image3: Room10,
      },
      description: "شقة، 4 غرفة، 3 سراير",
      price: 900,
      rate: 4.2,
      owner: {
        ownerImg: Owner7,
        ownerName: "تسنيم",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "Ahmed@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 11,
      title: "سوهاج - مصر",
      image: {
        image1: Room8,
        image2: Room3,
        image3: Room5,
      },
      description: "شقة، غرفتين ، سرير ",
      price: 400,
      rate: 3.4,
      owner: {
        ownerImg: Owner1,
        ownerName: "سامي",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "Ahmed@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
    {
      id: 12,
      title: "سوهاج - مصر",
      image: {
        image1: Room11,
        image2: Room13,
        image3: Room7,
      },
      description: "شقة، غرفتين ،4 سراير ",
      price: 700,
      rate: 2.5,
      owner: {
        ownerImg: Owner3,
        ownerName: "مصطفي",
        StudentsComments: 79,
        ownerRate: 3.6,
        ownerYears: 11,
        phone: "0123456789",
        ownerMail: "Ahmed@gmail.com",
        ownerDescription:
          "ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك",
      },
    },
  ];
  let source;

  const [showModal, setShowModal] = useState(Array(rooms.length).fill(false));
  const [SelectedRooms, setSelectedRooms] = useState([]);
  const [PlaceSearch, setPlaceSearch] = useState("");
  const [PriceeSearch, setPriceSearch] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);
  const toggleRoom = (room) => {
    if (numberCheck != "") {
      const roomId = room.id;
      const isRoomSelected = SelectedRooms.includes(roomId);

      if (isRoomSelected) {
        setSelectedRooms(SelectedRooms.filter((id) => id !== roomId));
      } else {
        setSelectedRooms([...SelectedRooms, roomId]);
      }
    }
    else{
      Swal.fire("You should login at first ");
    }
  }
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

  const RateStar = (rate) => {
    if (rate > 4) {
      source = starImg;
    } else {
      source = HalfStar;
    }
    return source;
  };
  let HostTitle;
  const HostTilteFunc = (HostRate) => {
    if (HostRate > 4) {
      HostTitle = "مضيف متميز";
    } else {
      HostTitle = "مضيف";
    }
    return HostTitle;
  };
  // const handleSearch = () => {
  //   if (PlaceSearch || PriceeSearch) {
  //     setSearchInitiated(true);
  //   } else {
  //     setSearchInitiated(false);
  //   }
  // };
  const DrawRooms = (filteredRooms) => {
    const room = filteredRooms.map((room, index) => {
      return (
        <Col xs={12} sm={6} md={4} lg={3} className="my-2" key={room.id}>
          <Card className="mx-auto mx-md-0 Card border-0">
            <Card.Img variant="top" />
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={room.image.image1} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={room.image.image2} alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={room.image.image3} alt="logo" />
              </SwiperSlide>
            </Swiper>
            <h4>
              <FontAwesomeIcon
                className="OurRooms-Heart-icon"
                icon={faHeart}
                onClick={() => toggleRoom(room)}
                style={{
                  color: SelectedRooms.includes(room.id)
                    ? "rgb(208, 39, 39)"
                    : "white",
                }}
              />
            </h4>
            <img src={BookImg} alt="Owner Book" className="Owner-book" />
            <img
              src={room.owner.ownerImg}
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
                <CloseButton
                  onClick={() => handleClose(index)}
                  className="mb-3"
                />
                <Container>
                  <Row className="owner-model-div p-3 d-flex m-0">
                    <Col sm={6} className="text-center ">
                      <img
                        src={room.owner.ownerImg}
                        alt="Owner img"
                        className="Owner-Model-Img"
                      />
                      <h3 className="mt-3 font-Weigth">
                        {room.owner.ownerName}
                      </h3>
                      <p className="Font-Color">
                        <img
                          src={HostIcon}
                          className="host-icon"
                          alt="host title"
                        />
                        {HostTilteFunc(room.owner.ownerRate)}
                      </p>
                    </Col>

                    <Col sm={6} className="text-center mt-4">
                      <div>
                        <h4 className="font-Weigth">
                          {room.owner.StudentsComments}
                        </h4>
                        <p className="Font-Color">تعليقا</p>
                      </div>
                      <div>
                        <h4 className="font-Weigth">
                          {" "}
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ fontSize: "18px", marginBottom: "3px" }}
                          />{" "}
                          {room.owner.ownerRate}
                        </h4>
                        <p className="Font-Color">تقييما</p>
                      </div>
                      <div>
                        <h4 className="font-Weigth">{room.owner.ownerYears}</h4>
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
                        {room.owner.phone}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ marginLeft: "6px" }}
                        />{" "}
                        {room.owner.ownerMail}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faAward}
                          style={{ marginLeft: "6px" }}
                        />{" "}
                        {room.owner.ownerDescription}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
            </Modal>
            <Card.Body className="text-end d-flex justify-content-between">
              <div>
                <Card.Title className="Card-Title">{room.title}</Card.Title>
                <Card.Text className="Card-Text">{room.description}</Card.Text>
                <p className="Room-Price">{room.price} ج.م</p>
              </div>
              <div className="d-flex">
                <img
                  src={RateStar(room.rate)}
                  alt="Rate star"
                  className="Star-img"
                />
                <p>{room.rate}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return room;
  };

  const RoomsAfterSearch = () => {
    let filteredRooms = rooms;
    if (PlaceSearch) {
      filteredRooms = rooms.filter((room) => room.title.includes(PlaceSearch));
    }

    if (PriceeSearch) {
      filteredRooms = rooms.filter((room) =>
        room.price.toString().includes(PriceeSearch)
      );
    }
    return DrawRooms(filteredRooms);
  };
  console.log(searchInitiated);
  return (
    <>
      <Nav />
      <div className="Rooms">
        <Container className="py-4">
          <div className="Div  mx-auto  d-flex justify-content-center align-items-center">
            <div>
              <h4 className="text-center"> المكان</h4>
              <input
                type="text"
                placeholder="البحث عن وجهات"
                className="text-center form-control  border-0 mx-auto search-inp"
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
            {/* <div className="SearchIconDiv" onClick={handleSearch}> */}
            <div className="SearchIconDiv">
              <img
                src={SearchIcon}
                alt="Search icon"
                className="Search-icon"
                // onClick={handleSearch}
              />
            </div>
          </div>
        </Container>
        <Container fluid>
          {/* <Row>{searchInitiated ? RoomsAfterSearch() : DrawRooms(rooms)}</Row> */}
          <Row>{RoomsAfterSearch()}</Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Rooms;
