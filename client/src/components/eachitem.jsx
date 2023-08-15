import React from "react";
<<<<<<< HEAD
import "../css/Eachitem.css";
=======
import "../css/EachItem.css";
>>>>>>> 88ed6738c78fee4430fd2e4c0cc30adf02f932ab
import Btn from "./Btn";
import { Link } from "react-router-dom";
import LinkToProfile from "../functions/LinkToProfile";

<<<<<<< HEAD
const EachItem = ({ itemName, dis, img, action }) => {
=======
const EachItem = ({ itemName, dis, img, action, linkto }) => {
>>>>>>> 88ed6738c78fee4430fd2e4c0cc30adf02f932ab
  return (
    <div className="each-item">
      <img className="item-img" src={img} alt="profile" />
      <div className="item-text">
        <h3 className="item-name">{itemName}</h3>
        <h4 className="item-dis">{dis}</h4>
      </div>
<<<<<<< HEAD
      <Btn buttonText={action} />
=======
      <Link className="link-unstyled" to={linkto}>
        <Btn buttonText={action} />
      </Link>
>>>>>>> 88ed6738c78fee4430fd2e4c0cc30adf02f932ab
    </div>
  );
};

export default EachItem;
