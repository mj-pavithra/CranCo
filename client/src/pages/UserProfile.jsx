// HomePage.jsx
import React from "react";
import UserProfileContainer from "../containers/UserProfileContainer";
import "../index.css";

const data = {
  coverPhoto: "assets/cover_image.png",
  profilePhoto: "assets/profile.jpg",
  editDP: "assets/camera-solid.png",
  profileName: "Kavishka Anjuna",
  likedPage1: "assets/page1.jpeg",
  likedPage2: "assets/page2.jpeg",
  likedPage3: "assets/page3.jpeg",
  likedPageCount: "9",
  RalionshipState: "",
  addFriend: "Add Friend",
};

const UserProfile = () => {
  return (
    <>
      <div className="backgroundDiv">
        <UserProfileContainer
          data = {data}
          isOwner="no"
        />
      </div>
    </>
  );
};

export default UserProfile;
