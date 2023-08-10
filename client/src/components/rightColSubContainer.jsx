import React from "react";
import "../css/RightColSubContainer.css";

const RightColSubContainer = ({ containerTitle, Items, btnTxt }) => {
  return (
    <div className="topContainer">
      <p className="containerTitle txt-11">{containerTitle}</p>
      <div className="fullContainer1">
        <div className="fullContainer">
          {Items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="eachProfile">
                <img className="proPic" src={item.imgUrl} alt="logo" />
                <h1 className="pageName">{item.name}</h1>
              </div>
              <hr className="hr" />
            </React.Fragment>
          ))}
        </div>
        {btnTxt && <button className="addPagebtn">{btnTxt}</button>}
      </div>
    </div>
  );
};

export default RightColSubContainer;
