import React from "react";
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import DashboardGrid from "../components/DashboardGrid";
import { Link } from "react-router-dom";

const optionList = [
  { img1: "/assets/dashboard icon.png", text1: <span style={{ color: "blue" }}>Dashboard</span>},
  { img1: "/assets/user icon.png", text1: <Link to="/admin/usermanagement" style={{ color: "black", textDecoration: "none" }}>Users</Link>},
  { img1: "/assets/post icon.png", text1: <Link to="/admin/postmanagement" style={{ color: "black", textDecoration: "none" }}>Posts</Link>},
  { img1: "/assets/page icon.png", text1: <Link to="/admin/pagemanagement" style={{ color: "black", textDecoration: "none" }}>Pages</Link>},
  { img1: "/assets/complaint icon.png", text1: <Link to="/admin/complaintmanagement" style={{ color: "black", textDecoration: "none" }}>Complaints</Link>,},
  // { img1: "/assets/anlytics icon.png", text1: "Analytics" },
  // { img1: "/assets/user feedback icon.png", text1: "User Feedback" },
  // { img1: "/assets/settings icon.png", text1: "Settings" }, 
];

const logo = "/assets/logo.png";

const DashboardMainContainer = () => {
  return (
    <div className="DashboardMainContainer">
        <Frame135 img1={logo} optionList ={optionList} />
        <div className="Dashboard">
          <AdminDashboardHeader FirstName="John" proPic="/assets/propic6.jpeg" DisplayName="John Doe" Position="Administrator" />
          <DashboardGrid />
          </div>
    </div>
  );
};

export default DashboardMainContainer;
