// HomePage.jsx
import React from "react";
import ProfileCard from "../components/ProfileCard";

const data = {coverPhoto :"/assets/coverphoto.jpeg", profilePhoto:"/assets/profile.jpg", editDP: "/assets/camera-solid.png", profileName : "MJ Pavithra", likedPage1 : "/assets/page1.jpeg", likedPage2 : "/assets/page2.jpeg", likedPage3 : "/assets/page3.jpeg", likedPageCount :"9", RalionshipState:"friend of friend", addFriend : "Add Friend"};

const UserProfile = () => {
  return (
    <>
      <ProfileCard coverPhoto ={data.coverPhoto} profilePhoto ={data.profilePhoto} editDP ={data.editDP} profileName ={data.profileName} likedPage1 ={data.likedPage1} likedPage2 ={data.likedPage2} likedPage3 ={data.likedPage3} likedPageCount ={data.likedPageCount} RalionshipState ={data.RalionshipState} addFriend ={data.addFriend} />
    </>
  );
};

export default UserProfile;
