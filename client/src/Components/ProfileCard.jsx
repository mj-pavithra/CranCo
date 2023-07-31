import React from "react";
import "../css/profileCard.css";


  
    return (
   <div className="profileCard">
    <div className="profileCardtop">
        <img className="coverPhoto" alt="/assets/alt-image.jpg">{coverPhoto}</img>
    </div>
    <div className="profileCardmiddle">
        <img className="profilePhoto">{profilePhoto}</img>
        <img className="editDP" alt="/assets/alt-image.jpg">{editDP}</img>
    </div>
    <div className="profileCardbottom">
        <h1 className="profileName">{profileName}</h1>
        <div classname="pages">
            <img className="likedPage1" alt="/assets/alt-image.jpg">{likedPage1}</img>
            <img className="likedPage2" alt="/assets/alt-image.jpg">{likedPage2}</img>
            <img className="likedPage3" alt="/assets/alt-image.jpg">{likedPage3}</img>
            <h3 className="likedPageCount">{likedPageCount}</h3>
        </div>
        <h3 className="RalionshipState"></h3>
        <button className="addFriend">{addFriend}</button>
    </div>
   </div>
  );
};

export default ProfileCard;
