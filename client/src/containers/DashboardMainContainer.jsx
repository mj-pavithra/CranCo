import React from "react";
import Frame135 from "../components/Frame135";
import "../css/DashboardMainContainer.css";

const optionList = [
  { img1: "/assets/home icon.png", text1: "Dashboard" },
  { img1: "/assets/home icon.png", text1: "Users" },
  { img1: "/assets/home icon.png", text1: "Content" },
  { img1: "/assets/home icon.png", text1: "Analytics" },
  { img1: "/assets/home icon.png", text1: "Posts" },
  { img1: "/assets/home icon.png", text1: "Pages" },
  { img1: "/assets/home icon.png", text1: "User Feedback" },
  { img1: "/assets/home icon.png", text1: "Settings" },
];

const logo = "/assets/logo.png";

const DashboardMainContainer = () => {
  return (
    <div className="DashboardMainContainer">
        <Frame135 img1={logo} optionList ={optionList} />
      
    </div>
  );
};

export default DashboardMainContainer;
