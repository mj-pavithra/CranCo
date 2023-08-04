// HomePage.jsx
import React from "react";
import UserProfileContainer from "../containers/UserProfileContainer";
import '../index.css'

const UserProfile = () => {
  return (
    <>
    <div className="backgroundDiv" >
      <UserProfileContainer />
    </div>
    </>
  );
};

export default UserProfile;
