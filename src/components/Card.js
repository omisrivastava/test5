import React from "react";
import "../styles/Card.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Card = ({ name, post, img }) => {
  return (
    <div className="container">
      <div className="imgContainer">
        <img
          className="profileimg"
          src={img}
          alt="profile"
        />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>{post}</h5>
      </div>

      <div className="socialIcons">
        <FaLinkedin size={"1.7rem"} color="white" />
        <FaInstagram size={"1.7rem"} color="white" />
        <FaTwitter size={"1.7rem"} color="white" />
      </div>
    </div>
  );
};

export default Card;
