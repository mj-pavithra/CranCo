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
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Dashboard"} onClick={handleClick}>
                Dashboard
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/about" active={activeItem === "Users"} onClick={handleClick}>
                Users
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/users" active={activeItem === "Content"} onClick={handleClick}>
                Content
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Analytics"} onClick={handleClick}>
                Analytics
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Posts"} onClick={handleClick}>
                Posts
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Pages"} onClick={handleClick}>
                Pages
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "User Feedback"} onClick={handleClick}>
                User Feedback
            </Link>
            </li>
            <li>
                <img src="../../../../../assets/logo.png"></img>
                <Link to="/" active={activeItem === "Settings"} onClick={handleClick}>
                Settings
            </Link>
            </li>
            <li>
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
            </li>
        </ul>
    </div>
  );
};

export default AdminSidebar;
