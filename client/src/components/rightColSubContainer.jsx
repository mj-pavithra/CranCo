import React from "react";
import "../css/RightColSubContainer.css";
import { Link } from "react-router-dom";

const RightColSubContainer = ({ containerTitle, Items, btnTxt }) => {
  return (
    <div className="topContainer">
      <p className="containerTitle txt-11">{containerTitle}</p>
      <div className="fullContainer1">
        <div className="fullContainer">
          {Items.map((item, index) => (
            <React.Fragment key={index}>
              <Link className="link-unstyled" to={item.linkto}>
                <div className="eachProfile">
                  <img className="proPic" src={item.imgUrl} alt="logo" />
                  <h1 className="pageName">{item.name}</h1>
                </div>
              </Link>
              <hr className="hr" />
            </React.Fragment>
          ))}
        </div>
        <Link className="link-unstyled" to="/admin/AllPages">
          {btnTxt && <button className="addPagebtn">{btnTxt}</button>}
        </Link>
      </div>
    </div>
  );
};

export default RightColSubContainer;
