import React from "react";
import ButtonCSS from "./Css/Btn.css";

const Btn = ({ buttonText, width = '', type }) => {
  return (
    <div>
      <button type={type} className={`custom-btn ${width}`}>{buttonText}</button>
    </div>
  );
};

export default Btn;
