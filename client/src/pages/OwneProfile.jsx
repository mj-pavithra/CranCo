// HomePage.jsx
import React from "react";
import UserProfileContainer from "../containers/UserProfileContainer";
import '../index.css'


const OwneProfile = () => {
  return (
    <>
    <div className="backgroundDiv" >
      <UserProfileContainer isOwner=""/>
    </div>
    </>
  );
};

export default OwneProfile;
