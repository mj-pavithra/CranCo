import "../css/LoginInput.css";
import React from "react";

const LoginInput = ({
  name,
  placeholder,
  type,
  style,
  onChange = "",
  value = "",
}) => {
  return (
    <>
      <div className="input-name">{name}</div>
      <input
        className="input-div"
        type={type}
        placeholder={placeholder}
        name={name}
        style={{ style }}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default LoginInput;
