import React, { useState, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import "../css/Tab.css";
import Swal from "sweetalert2";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import book from "../img/Book.png";

import starImg from "../img/Full-star.png"; 
import HalfStar from "../img/Half-star.png";


function Room_Tab() {
  const numberCheck = localStorage.getItem("password");
  const [activeTab, setActiveTab] = useState("tab1");
  const [roomData, setRoomData] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  // const [showModal, setShowModal] = useState({});
  const RateStar = (rate) => (rate > 4 ? starImg : HalfStar);



  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await fetch("https://sakanify.onrender.com/api/v1/posts");
        const data = await response.json();
        setRoomData(data.data.posts);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    getRoom();
  }, []);

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const toggleRoom = (room) => {
    if (numberCheck) {
      const roomId = room._id;
      setSelectedRooms((prevSelectedRooms) =>
        prevSelectedRooms.includes(roomId)
          ? prevSelectedRooms.filter((id) => id !== roomId)
          : [...prevSelectedRooms, roomId]
      );
    } else {
      Swal.fire("You should login at first");
    }
  };

  const handleShow = (roomId) => {
    if (!numberCheck) {
      Swal.fire("You should login at first");
      return;
    }
    setShowModal((prev) => ({ ...prev, [roomId]: true }));
  };

  // const handleClose = (roomId) => {
  //   setShowModal((prev) => ({ ...prev, [roomId]: false }));
  // };
  const [showModal, setShowModal] = useState([false, false, false]);

  const handleClose = (index) => {
    setShowModal((prev) => {
      if (!Array.isArray(prev)) {
        // If prev is not an array, return the previous state
        return prev;
      }
      const updatedState = [...prev];
      updatedState[index] = false;
      return updatedState;
    });
  };


  const renderRooms = () => {
    if (!roomData || roomData.length === 0) {
      return <p> Loading... </p>;
    }


    
function sliceTextUntilComma(text) { 
  if (!text) return ""; 
  const index = text.indexOf("،"); 
  return index !== -1 ? text.slice(0, index) : text; 
}


    return roomData.slice(0,6).map((ele) => (
      <div className="col-lg-3 col-sm-4 col-10 m-4" key={ele._id}>
        <div className="card">
          <div className="img-card"  onClick={() => handleShow(ele._id)}>
            <img className="card-img-top" src={ele.imageCoverUrl} alt="Card" />
            <img
              className="book"
              src={book}
              alt="book"
             
            />
            <img src={ele.userImage} class="OwImg_book" alt="img"></img>


            <Modal show={showModal[ele._id]} onHide={() => handleClose(ele._id)}>
              <Modal.Header >
                <Modal.Title>تفاصيل عن المالك</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <CloseButton 
                onClick={() => handleClose(ele._id)} 
                className="mb-3" 
              />
                <div className="container">
                  <div className="row m-0 info-owner pb-2 justify-content-between">
                    <div className="col-7 Oimg">
                      <img
                        src={ele.userImage}
                        className="OwImg_modal"
                        alt="owner"
                      />
                      <h4>{ele.name}</h4>
                    </div>
                    <div className="col-4 info-owner-more">
                      <div>
                        <span>46</span> <br /> <span>تعليقا</span>
                      </div>
                      <hr />
                      <div>
                        <span>4.23</span> <i className="fa-solid fa-star"></i>
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
                      <span>
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span>
                        {numberCheck
                          ? ele.phone
                          : ele.phone.slice(0, 3) +
                            "X".repeat(ele.phone.length - 3)}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa-regular fa-envelope"></i>
                      </span>
                      <span>
                        {numberCheck
                          ? ele.email
                          : ele.email.slice(0, 3) +
                            "X".repeat(ele.email.length - 3)}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa-solid fa-award"></i>
                      </span>
                      <span>
                        ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك.
                      </span>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="warning" onClick={() => handleClose(ele._id)}>
                  Close
                </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          <div className="card-body">
            <h5 className="card-title">{ele.address}</h5>
            <p className="card-text">{sliceTextUntilComma(ele.description)}</p>
            <p className="card-price card-text">{ele.price}ج.م</p>
            <div className="rate">
              <span>  
                  <img 
                      src={RateStar(ele.ratingsAverage)} 
                      alt="Rate star" 
                      className="Star-img" 
                    />
              </span>
              <span>{ele.ratingsAverage}</span>
            </div>
          </div>
          <div className="heart_fav">
            <span>
              <i
                className="fa-solid fa-heart"
                onClick={() => toggleRoom(ele)}
                style={{
                  color: selectedRooms.includes(ele._id) ? "red" : "white",
                }}
              ></i>
            </span>
          </div>
        </div>
      </div>
    ));
  };


  const renderRooms2 = () => {
    if (!roomData || roomData.length === 0) {
      return <p> Loading... </p>;
    }


    
function sliceTextUntilComma(text) { 
  if (!text) return ""; 
  const index = text.indexOf("،"); 
  return index !== -1 ? text.slice(0, index) : text; 
}


    return roomData.slice(6,12).map((ele) => (
      <div className="col-lg-3 col-sm-4 col-10 m-4" key={ele._id}>
        <div className="card">
          <div className="img-card">
            <img className="card-img-top" src={ele.imageCoverUrl} alt="Card" />
            <img
              className="book"
              src={book}
              alt="book"
              onClick={() => handleShow(ele._id)}
            />
            <img src={ele.userImage} class="OwImg_book" alt="img"></img>


            <Modal show={showModal[ele._id]} onHide={() => handleClose(ele._id)}>
              <Modal.Header closeButton>
                <Modal.Title>تفاصيل عن المالك</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                  <div className="row m-0 info-owner pb-2 justify-content-between">
                    <div className="col-7 Oimg">
                      <img
                        src={ele.userImage}
                        className="OwImg_modal"
                        alt="owner"
                      />
                      <h4>{ele.name}</h4>
                    </div>
                    <div className="col-4 info-owner-more">
                      <div>
                        <span>46</span> <br /> <span>تعليقا</span>
                      </div>
                      <hr />
                      <div>
                        <span>4.23</span> <i className="fa-solid fa-star"></i>
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
                      <span>
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span>
                        {numberCheck
                          ? ele.phone
                          : ele.phone.slice(0, 3) +
                            "X".repeat(ele.phone.length - 3)}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa-regular fa-envelope"></i>
                      </span>
                      <span>
                        {numberCheck
                          ? ele.email
                          : ele.email.slice(0, 3) +
                            "X".repeat(ele.email.length - 3)}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa-solid fa-award"></i>
                      </span>
                      <span>
                        ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك.
                      </span>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="warning" onClick={() => handleClose(ele._id)}>
                  Close
                </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          <div className="card-body">
            <h5 className="card-title">{ele.address}</h5>
            <p className="card-text">{sliceTextUntilComma(ele.description)}</p>
            <p className="card-price card-text">{ele.price}ج.م</p>
            <div className="rate">
              <span>
              <img 
                  src={RateStar(ele.ratingsAverage)} 
                  alt="Rate star" 
                  className="Star-img" 
                />
              </span>
              <span>{ele.ratingsAverage}</span>
            </div>
          </div>
          <div className="heart_fav">
            <span>
              <i
                className="fa-solid fa-heart"
                onClick={() => toggleRoom(ele)}
                style={{
                  color: selectedRooms.includes(ele._id) ? "red" : "white",
                }}
              ></i>
            </span>
          </div>
        </div>
      </div>
    ));
  };
  
  const renderRooms3 = () => {
    if (!roomData || roomData.length === 0) {
      return <p> Loading... </p>;
    }


    
function sliceTextUntilComma(text) { 
  if (!text) return ""; 
  const index = text.indexOf("،"); 
  return index !== -1 ? text.slice(0, index) : text; 
}


    return roomData.slice(12,15).map((ele) => (
      <div className="col-lg-3 col-sm-4 col-10 m-4" key={ele._id}>
        <div className="card">
          <div className="img-card">
            <img className="card-img-top" src={ele.imageCoverUrl} alt="Card" />
            <img
              className="book"
              src={book}
              alt="book"
              onClick={() => handleShow(ele._id)}
            />
            <img src={ele.userImage} class="OwImg_book" alt="img"></img>


            <Modal show={showModal[ele._id]} onHide={() => handleClose(ele._id)}>
              <Modal.Header closeButton>
                <Modal.Title>تفاصيل عن المالك</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                  <div className="row m-0 info-owner pb-2 justify-content-between">
                    <div className="col-7 Oimg">
                      <img
                        src={ele.userImage}
                        className="OwImg_modal"
                        alt="owner"
                      />
                      <h4>{ele.name}</h4>
                    </div>
                    <div className="col-4 info-owner-more">
                      <div>
                        <span>46</span> <br /> <span>تعليقا</span>
                      </div>
                      <hr />
                      <div>
                        <span>4.23</span> <i className="fa-solid fa-star"></i>
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
                      <span>
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span>
                        {numberCheck
                          ? ele.phone
                          : ele.phone.slice(0, 3) +
                            "X".repeat(ele.phone.length - 3)}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa-regular fa-envelope"></i>
                      </span>
                      <span>
                        {numberCheck
                          ? ele.email
                          : ele.email.slice(0, 3) +
                            "X".repeat(ele.email.length - 3)}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa-solid fa-award"></i>
                      </span>
                      <span>
                        ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك في بيتك.
                      </span>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="warning" onClick={() => handleClose(ele._id)}>
                  Close
                </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          <div className="card-body">
            <h5 className="card-title">{ele.address}</h5>
            <p className="card-text">{sliceTextUntilComma(ele.description)}</p>
            <p className="card-price card-text">{ele.price}ج.م</p>
            <div className="rate">
              <span>
                <img 
                    src={RateStar(ele.ratingsAverage)} 
                    alt="Rate star" 
                    className="Star-img" 
                  />
              </span>
              <span>{ele.ratingsAverage}</span>
            </div>
          </div>
          <div className="heart_fav">
            <span>
              <i
                className="fa-solid fa-heart"
                onClick={() => toggleRoom(ele)}
                style={{
                  color: selectedRooms.includes(ele._id) ? "red" : "white",
                }}
              ></i>
            </span>
          </div>
        </div>
      </div>
    ));
  };
  
  
  return (
    <div className="container">
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
            <div className="row m-0 justify-content-center">{renderRooms()}</div>
          </Tab.Pane>
          <Tab.Pane eventKey="tab2">
            <div className="row m-0 justify-content-center">{renderRooms2()}</div>
          </Tab.Pane>
          <Tab.Pane eventKey="tab3">
            <div className="row m-0 justify-content-center">{renderRooms3()}</div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default Room_Tab;
