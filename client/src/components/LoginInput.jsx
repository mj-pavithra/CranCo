import "../css/LoginInput.css";
import React from "react";

const LoginInput = ({ name, placeholder, type, style }) => {
  return (
    <>
      <div className="input-name">{name}</div>
      <input
        className="input-div"
        type={type}
        placeholder={placeholder}
        name={name}
        style={{ style }}
      />
    </>
  );
};

export default LoginInput;
