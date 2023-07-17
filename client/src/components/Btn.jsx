import React from 'react'
import  ButtonCSS from "./Btn.module.css";

const Btn = ({buttonText}) => {
  return (
    <div>
        <button className={ButtonCSS.btn}>{buttonText}</button>
    </div>
  )
}

export default Btn