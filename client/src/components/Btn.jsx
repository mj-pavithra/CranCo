import React from "react";
import '../css/Btn.css'

const Btn = ({ buttonText, width = '', type="",onClick = "" }) => {
  return (
    <div>
      <button type={type} className={`custom-btn ${width}`} onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Btn;
