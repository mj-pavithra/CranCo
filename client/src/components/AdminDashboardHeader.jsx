import React, { useState, useEffect } from "react";
import "../css/AdminDashboardHeader.css";
import WindowToProfile from "./WindowToProfile";

const AdminDashboardHeader = ({ FirstName, proPic, DisplayName, Position }) => {
  const [showRightBlock, setShowRightBlock] = useState(true);

  const handleWindowClick = (event) => {
    const isRightBlockClick =
      event.target.classList.contains("ProPic") ||
      event.target.classList.contains("NameBox") ||
      event.target.classList.contains("DisplayName") ||
      event.target.classList.contains("Position");

    if (isRightBlockClick) {
      setShowRightBlock(false);
    } else {
      setShowRightBlock(true);
    }
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setShowRightBlock(true);
    };

    window.addEventListener("click", handleWindowClick);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div className="AdminDashboardHeader">
      <div className="LeftBlock">
        <h2 className="Welcome">Welcome back, {FirstName}</h2>
      </div>
      {showRightBlock ? (
        <div className="RightBlock">
            <div className="ProPic" onClick={handleWindowClick}>
                <img src={proPic} alt="profile pic" />
            </div>
            <div className="NameBox">
                <p className="DisplayName">{DisplayName}</p>
                <p className="Position">{Position}</p>
            </div>
        </div>
      ) : (
        <WindowToProfile
          proPic2={proPic}
          DisplayName2={DisplayName}
          Position2={Position}
        />
      )}
    </div>
  );
};

export default AdminDashboardHeader;
