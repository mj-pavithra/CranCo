// HomePage.jsx
import React from "react";
import UserProfileContainer from "../containers/UserProfileContainer";
import '../index.css'
import Cookies from "js-cookie";


const userData = {coverPhoto :"/assets/coverphoto.jpeg", 
            profilePhoto:"/assets/propic6.jpeg", 
            editDP: "/assets/camera-solid.png", 
            profileName : Cookies.get("user_name"), 
            likedPage1 : "/assets/page1.jpeg", 
            likedPage2 : "/assets/page2.jpeg", 
            likedPage3 : "/assets/page3.jpeg", 
            likedPageCount :"9", 
            RalionshipState:"friend of friend", 
            addFriend : "Add Friend"};
const OwneProfile = () => {
  return (
    <>
    <div className="backgroundDiv" >
      <UserProfileContainer data={userData} isOwner=""/>
    </div>
    </>
  );
};

export default OwneProfile;
