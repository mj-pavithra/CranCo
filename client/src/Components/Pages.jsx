import React from "react";
import "../css/Pages.css";
import { useNavigate } from "react-router-dom";

const Pages = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ]; // Add more items to test scrolling

  const navigate = useNavigate();

  return (
    <div className="topContainer">
      <h1 className="pageTitle">Pages</h1>
      <div className="fullContainer1">
        <div className="fullContainer">
          {items.map((item, index) => (
            <div
              key={index}
              className="eachProfile"
              onClick={() => navigate("../pages/VehiclesPageOwnersView")}
            >
              <img className="proPic" src="/assets/audir8.jpeg" alt="logo" />
              <h1 className="pageName">{item}</h1>
            </div>
          ))}
        </div>

        <button className="addPagebtn">Add Page</button>
      </div>
    </div>
  );
};

export default Pages;
