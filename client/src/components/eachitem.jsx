import React from "react";
import "../css/EachItem.css";
import Btn from "./Btn";

const EachItem = ({ itemName, dis, img , action}) => {
    return (
      <div className="each-item">
        <img className="item-img" src={img} alt="profile" />
        <div className="item-text">
          <h3 className="item-name">{itemName}</h3>
          <h4 className="item-dis">{dis}</h4>
        </div>
        <Btn buttonText={action} />
      </div>
    );
  };

export default EachItem;
