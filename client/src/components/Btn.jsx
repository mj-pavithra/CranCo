import React from 'react'
import ButtonCSS from "./css/Btn.module,css";

const Btn = ({ buttonText }) => {
  return (
    <div>
      <button className={ButtonCSS.btn}>{buttonText}</button>
    </div>
  )
}

export default Btn