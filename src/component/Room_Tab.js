import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "../css/Tab.css";
import Swal from "sweetalert2";
import { delay, motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import room1 from "../img/room1.png";
import room2 from "../img/room2.png";
import room3 from "../img/room3.png";
import room4 from "../img/room4.png";
import room5 from "../img/room5.png";
import room6 from "../img/room6.png";
import book from "../img/Book.png";
import oImg1 from "../img/ow1.png";
import oImg2 from "../img/ow2.png";
import oImg3 from "../img/ow3.png";
import oImg4 from "../img/ow4.png";
import oImg5 from "../img/ow5.png";
import oImg6 from "../img/ow6.png";

function Room_Tab() {
  const numberCheck = localStorage.getItem("password");
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [activeTab, setActiveTab] = useState("tab1");
  // const [color, setColor] = useState("red");

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  // const changeColor = () => {
  //   setColor(color === 'red' ? 'white' : 'red');
  // };

  var arr = [
    {
      id: 1,
      title: "سوهاج - مصر",
      img: [room1, room1, room1],
      describtion: "شقة، غرفتين، سريرين، حمامين ",
      price: 600,
      rate: 3.8,
      owner: {
        owName: "مروة مصطفي ",
        owImg: oImg1,
        phoneNum: "0123456789",
        owRate: 3.4,
        owYear: 2,
        owEmail: "Ahmed@gmail.com",
      },
    },
    {
      id: 2,
      title: "سوهاج - مصر",
      img: [room2, room2, room2],
      describtion: "شقة، غرفتين، سريرين، حمامين ",
      price: 600,
      rate: 3.8,
      owner: {
        owName: "علي محمد",
        owImg: oImg2,
        phoneNum: "0123456789",
        owRate: 3.4,
        owYear: 2,
        owEmail: "Ahmed@gmail.com",
      },
    },
    {
      id: 3,
      title: "سوهاج - مصر",
      img: [room3, room3, room3],
      describtion: "شقة، غرفتين، سريرين، حمامين ",
      price: 600,
      rate: 3.8,
      owner: {
        owName: "محمد خالد",
        owImg: oImg3,
        phoneNum: "0123456789",
        owRate: 3.4,
        owYear: 2,
        owEmail: "Ahmed@gmail.com",
      },
    },
    {
      id: 4,
      title: "سوهاج - مصر",
      img: [room4, room4, room4],
      describtion: "شقة، غرفتين، سريرين، حمامين ",
      price: 600,
      rate: 3.8,
      owner: {
        owName: "وليد محمد",
        owImg: oImg4,
        phoneNum: "0123456789",
        owRate: 3.4,
        owYear: 2,
        owEmail: "Ahmed@gmail.com",
      },
    },
    {
      id: 5,
      title: "سوهاج - مصر",
      img: [room5, room5, room5],
      describtion: "شقة، غرفتين، سريرين، حمامين ",
      price: 600,
      rate: 3.8,
      owner: {
        owName: " حسام خالد",
        owImg: oImg5,
        phoneNum: "0123456789",
        owRate: 3.4,
        owYear: 2,
        owEmail: "Ahmed@gmail.com",
      },
    },
    {
      id: 6,
      title: "سوهاج - مصر",
      img: [room6, room6, room6],
      describtion: "شقة، غرفتين، سريرين، حمامين ",
      price: 600,
      rate: 3.8,
      owner: {
        owName: "اميرة محمد",
        owImg: oImg6,
        phoneNum: "0123456789",
        owRate: 3.4,
        owYear: 2,
        owEmail: "Ahmed@gmail.com",
      },
    },
  ];

  const [SelectedRooms, setSelectedRooms] = useState([]);
  const toggleRoom = (room) => {
    if (numberCheck != "") {
      const roomId = room.id;
      const isRoomSelected = SelectedRooms.includes(roomId);
      if (isRoomSelected) {
        console.log("trueee");
        setSelectedRooms(SelectedRooms.filter((id) => id !== roomId));
      } else {
        console.log("falseeeee");
        setSelectedRooms([...SelectedRooms, roomId]);
      }
    } else {
      Swal.fire("يجب ان تسجل الدخول في البداية ");
    }
  };
  const [showModal, setShowModal] = useState(Array(arr.length).fill(false));

  const handleShow = (index) => {
    setShowModal((prev) => {
      if (localStorage.getItem("password") === "") {
        Swal.fire("يجب ان تسجل الدخول في البداية ");
      }
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
  const arr2 = arr.map((ele) => {
    return (
      <div className="col-lg-3 col-sm-4 col-10 m-4 " key={ele.id}>
        <div className="card">
          <div className="img-card">
            <img className="card-img-top" src={ele.img[1]} alt="Card" />
            <img
              className="book"
              src={book}
              alt="book"
              variant="primary"
              // onClick={handleShow}
              onClick={() => handleShow(ele.id)}
            />
            <Modal show={showModal[ele.id]} onHide={() => handleClose(ele.id)}>
              <Modal.Header closeButton>
                <Modal.Title>تفاصيل عن المالك</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                  <div className="row m-0 info-owner pb-2 justify-content-between ">
                    <div className="col-7 Oimg">
                      <img
                        src={ele.owner.owImg}
                        className="OwImg_modal"
                        alt="owner"
                      />
                      <h4>{ele.owner.owName}</h4>
                    </div>
                    <div className="col-4 info-owner-more">
                      <div>
                        <span>46</span> <br /> <span>تعليقا</span>
                      </div>
                      <hr />
                      <div>
                        <span>4.23</span> <i className="fa-solid fa-star"></i>{" "}
                        <br /> <span>تقييما</span>
                      </div>
                      <hr />
                      <div>
                        <span>5</span> <br /> <span>سنوات الاستضافة</span>
                      </div>
                    </div>
                  </div>
                  <div className="row info_contact">
                    <div>
                      {" "}
                      <span>
                        <i class="fa-solid fa-phone-volume"></i>{" "}
                      </span>
                      {/* <span>0123456789</span> */}
                      <span>
                        {numberCheck === ""
                          ? ele.owner.phoneNum.slice(0, 3) +
                            "X".repeat(ele.owner.phoneNum.length - 3)
                          : ele.owner.phoneNum}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i class="fa-regular fa-envelope"></i>
                      </span>
                      <span>
                        {" "}
                        {numberCheck === ""
                          ? ele.owner.owEmail.slice(0, 3) +
                            "X".repeat(ele.owner.owEmail.length - 3)
                          : ele.owner.owEmail}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i class="fa-solid fa-award"></i>
                      </span>
                      <span>
                        ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في
                        بيتك.
                      </span>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning" onClick={() => handleClose(ele.id)}>
                  Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button> */}
              </Modal.Footer>
            </Modal>
            <img
              src={ele.owner.owImg}
              className="OwImg_book"
              alt="img"
              onClick={() => handleShow(ele.id)}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{ele.title}</h5>
            <p className="card-text">{ele.describtion}</p>
            <p className="card-text">{ele.price}ج.م</p>

            <div className="rate">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>{ele.rate}</span>
            </div>
          </div>
          <div className="heart_fav">
            <span>
              <i
                className="fa-solid fa-heart"
                onClick={() => toggleRoom(ele)}
                style={{
                  color: SelectedRooms.includes(ele.id) ? "red" : "white",
                }}
              ></i>
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <motion.div className="container" initial={{ x: -250 }} animate={{ x: 0 }} transition={{delay:3}}>
      <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="tab1">غرفة لفرد</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab2"> غرفة لفردين</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab3"> غرفة لثلاث افراد</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="tab1">
            <div className="row m-0 justify-content-center">{arr2}</div>
          </Tab.Pane>
          <Tab.Pane eventKey="tab2">
            <div className="row m-0 justify-content-center">{arr2}</div>
          </Tab.Pane>
          <Tab.Pane eventKey="tab3">
            <div className="row m-0 justify-content-center">{arr2}</div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </motion.div>
  );
}

export default Room_Tab;
