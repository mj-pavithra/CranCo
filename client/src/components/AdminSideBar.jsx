import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
        <img src="../../../../../assets/logo.png"></img>
        <ul>
            <li>
                <img src="../../../../../assets/dashboard icon.png"></img>
                <Link to="/admin/dashboard" active={activeItem === "Dashboard"} onClick={handleClick}>
                Dashboard
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/user icon.png"></img>
                <Link to="/admin/usermanagement" active={activeItem === "Users"} onClick={handleClick}>
                Users
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/complaint icon.png"></img>
                <Link to="/admin/complaintmanagement" active={activeItem === "Complaints"} onClick={handleClick}>
                Complaints
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/analytics icon.png"></img>
                <Link to="/" active={activeItem === "Analytics"} onClick={handleClick}>
                Analytics
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/post icon.png"></img>
                <Link to="/admin/postmanagement" active={activeItem === "Posts"} onClick={handleClick}>
                Posts
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/page icon.png"></img>
                <Link to="/admin/pagemanagement" active={activeItem === "Pages"} onClick={handleClick}>
                Pages
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/user feedback.png"></img>
                <Link to="/" active={activeItem === "User Feedback"} onClick={handleClick}>
                User Feedback
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/settings icon.png"></img>
                <Link to="/" active={activeItem === "Settings"} onClick={handleClick}>
                Settings
            </Link>
            </li>
            {/* <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Notifications"} onClick={handleClick}>
                Notifications
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Activity Logs"} onClick={handleClick}>
                Activity Logs
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Error Handling"} onClick={handleClick}>
                Error Handling
            </Link>
            </li> */}
        </ul>
    </div>
  );
};

export default AdminSidebar;
