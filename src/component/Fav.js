import "../css/OwnerProfile.css";
import "../css/Tab.css";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Swal from "sweetalert2";
import "../css/Tab.css";
import userImage from "../img/Ellipse 41.png";
import { Link } from "react-router-dom";
import book from "../img/Book.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/OwnerProfile.css";
import "../css/Tab.css";
import "../css/Fav.css";

const Fav = ({ favorites }) => {
  const FavProduct = localStorage.getItem("Fav");
  const [favItems, setFavItems] = useState(
    FavProduct ? JSON.parse(FavProduct) : []
  );

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showModal, setShowModal] = useState([]);

  const handleShow = (index) => {
    setShowModal((prev) => {
      if (localStorage.getItem("password") === "") {
        Swal.fire("You should login at first ");
        return prev;
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
  return (
    <>
      <div className="favorites cart-page container">
        <h2 className="textFav">Favorites</h2>
        {favItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="row m-0 rowfav">
            {favItems.map((ele) => (
              <div className="col-lg-3 col-sm-4 col-10 m-4 " key={ele.id}>
                <div className="card">
                  <div className="img-card">
                    <img
                      className="card-img-top"
                      src={ele.imageCoverUrl}
                      alt="Card"
                    />
                    <img
                      className="book"
                      src={book}
                      alt="book"
                      variant="primary"
                      onClick={() => handleShow(ele.id)}
                    />
                    <Modal
                      show={showModal[ele.id]}
                      onHide={() => handleClose(ele.id)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>تفاصيل عن المالك</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="container">
                          <div className="row m-0 info-owner pb-2 justify-content-between ">
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
                                <span>4.23</span>{" "}
                                <i className="fa-solid fa-star"></i> <br />{" "}
                                <span>تقييما</span>
                              </div>
                              <hr />
                              <div>
                                <span>5</span> <br />{" "}
                                <span>سنوات الاستضافة</span>
                              </div>
                            </div>
                          </div>
                          <div className="row info_contact">
                            <div>
                              <span>
                                <i className="fa-solid fa-phone-volume"></i>
                              </span>
                              <span>owner.phoneNum</span>
                            </div>
                            <div>
                              <span>
                                <i className="fa-regular fa-envelope"></i>
                              </span>
                              <span>owner.owEmail</span>
                            </div>
                            <div>
                              <span>
                                <i className="fa-solid fa-award"></i>
                              </span>
                              <span>
                                ما الذي يجعل مسكني مميزًا: طاقة جيدة وشعور وكأنك
                                في بيتك.
                              </span>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="warning"
                          onClick={() => handleClose(ele.id)}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <img
                      src={ele.userImage}
                      className="OwImg_book"
                      alt="img"
                      onClick={() => handleShow(ele.id)}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{ele.addressUp}</h5>
                    <p className="card-text">{ele.address}</p>
                    <p className="card-text">{ele.price}ج.م</p>
                    <div className="rate">
                      <span>
                        <i className="fa-solid fa-star"></i>
                      </span>
                      <span>{ele.rate}</span>
                    </div>
                  </div>
                  <div className="heart_fav"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Fav;
