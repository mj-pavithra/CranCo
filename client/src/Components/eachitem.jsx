import React from "react";
import "../css/eachItem.css";
import Btn from "./Btn";

const EachItem = ({itemName, dis}) => {
  return (
    <div className="each-item">
      <img className="item-img" src="/girl.png" alt="profile" />
      <div className="item-text">
        <h3 className="item-name">{itemName}</h3>
        <h4 className="item-dis">Colombo</h4>
      </div>
      <Btn buttonText="Confirm" />
    </div>
  );
};

export default EachItem;
