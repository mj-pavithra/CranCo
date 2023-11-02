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


  const [proPicPrepared, setproPicPrepared] = useState("");

  
const getProPic = async () => {
  const email = Cookies.get("user_name");
  const getProPic = await configuredAxios.get(`/api/v1/auth/users/getProPic?email=${email}`);
  console.log(getProPic.data);
  const proPicDy = getProPic.data;
  function appendToLocalhost(proPicDy) {
      
      const fileNameWithoutBrackets = proPicDy.replace(/[[\] ]/g, "");
  
      // Append the base URL to the modified file name
      const baseUrl = "http://localhost:8081/api/resources/images/";
      return `${baseUrl}${fileNameWithoutBrackets}`;
    }
    const preparedProPic = appendToLocalhost(proPicDy);
      setproPicPrepared(preparedProPic); // Update state with the prepared cover photo
      console.log(preparedProPic);

  };

  
useEffect(() => {
  getProPic(); // Call the function when the component mounts
}, []); 
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
        {/* <button className="model-a-soul">
          <b>Model a Soul</b>
        </button> */}
      </div>
    </div>
  );
}

export default UserSidebar;
