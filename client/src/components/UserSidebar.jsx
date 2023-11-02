import { Link } from "react-router-dom";
import "../css/UserSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUsers,
  faCar,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import configuredAxios from "../AxiosConfig";
import { useEffect } from "react";
import React, {useState} from "react";

function UserSidebar({ image, username }) {
  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the button element by its id
    const modelASoulButton = document.getElementById("modelASoulButton");

    // Add a click event listener to the button
    modelASoulButton.addEventListener("click", function () {
      // Navigate to the provided link
      window.location.href = "https://amayawedamulla.itch.io/cranco";
    });
  });
  const onError = (originalImg) => {
    const altImg = "/assets/alt-image.jpeg";
  if (originalImg === null || originalImg === "") {
    return altImg;
  }
  return originalImg;
};
  return (
    <div className="side-bar">
      <Link className="link-unstyled" to="/myprofile">
        <div className="user-cage">
          <img src={onError(proPicPrepared)} alt="User Avatar" />
          <p>
            {sessionStorage.getItem("username")
              ? sessionStorage.getItem("username")
              : username}
          </p>
        </div>
      </Link>
      <div className="sidebar-links">
        {/* <Link className="link" to="/homepage">
          <FontAwesomeIcon className="sidebar-icon" icon={faHouseChimney} />
          Home
        </Link> */}
        <Link className="link" to="/friends">
          <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />
          Friends
        </Link>
        <Link className="link" to="/marketplace">
          <FontAwesomeIcon className="sidebar-icon" icon={faCar} />
          Buy Souls
        </Link>
        <Link className="link" to="/merchant">
          <FontAwesomeIcon className="sidebar-icon" icon={faShop} />
          GearMart
        </Link>
        <br />
        <br />
        <br />
        <br />
        <button id="modelASoulButton" className="model-a-soul">
          <a
            className="modelasoul"
            href="https://amayawedamulla.itch.io/cranco"
          >
            <b>Model a Soul</b>
          </a>
        </button>
      </div>
    </div>
  );
}

export default UserSidebar;
