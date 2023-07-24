import React from "react";
import '../css/Btn.css'

const Btn = ({ buttonText, width = '', type }) => {
  return (
    <div>
      <button type={type} className={`custom-btn ${width}`}>{buttonText}</button>
    </div>
  );
};

export default Btn;
