import React from "react";

import "../css/EachItem.css";

import Btn from "./Btn";
import { Link } from "react-router-dom";
import LinkToProfile from "../functions/LinkToProfile";


const EachItem = ({ itemName, dis, img, action, linkto }) => {

  return (
    <div className="each-item">
      <img className="item-img" src={img} alt="profile" />
      <div className="item-text">
        <h3 className="item-name">{itemName}</h3>
        <h4 className="item-dis">{dis}</h4>
      </div>

      <Link className="link-unstyled" to={linkto}>
        <Btn buttonText={action} />
      </Link>

    </div>
  );
};

export default EachItem;
