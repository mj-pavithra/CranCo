import React from "react";
import "../css/eachItem.css";

const EachItem = (props) => {
    return (
        <div className="each-item">
        <div className="each-item-left">
            <img src={props.image} alt="profile" />
        </div>
        <div className="each-item-middle">
            <h3>{props.username}</h3>
            <p>{props.description}</p>
        </div>
        <div className="each-item-right">
            <button>Accept</button>
            <button>Decline</button>
        </div>
        </div>
    );
    }

export default EachItem;