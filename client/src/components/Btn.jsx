import React from "react";
import ButtonCSS from "./css/Btn.module,css";

const Btn = ({ buttonText, width = '', type }) => {
  return (
    <div>
      <button type={type} className={`custom-btn ${width}`}>{buttonText}</button>
    </div>
  );
};

export default Btn;
