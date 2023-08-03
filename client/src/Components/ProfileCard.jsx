import React from "react";
import "../css/ProfileCards.css";

const ProfileCard = ({ coverPhoto, profilePhoto, editDP, profileName, likedPage1, likedPage2, likedPage3, likedPageCount, RalionshipState, addFriend  }) => {
    

    const onError = (originalImg) => {
        const altImg = "/assets/alt-image.jpeg";
      if (originalImg === null || originalImg === "") {
        return altImg;
      }
      return originalImg;
    };
    
  
    return (
   <div className="profileCard">
    <div className="profileCardtop">
        <img className="coverPhoto" alt="Error" src={onError(coverPhoto)}/
        >
    </div>
    <div className="profileCardmiddle">
        <img className="profilePhoto" src={onError(profilePhoto)}/>
        <img className="editDP" alt="Error" src={onError(editDP)}/>
    </div>
    <div className="profileCardbottom">
        <h1 className="profileName">{profileName} </h1>
        <div classname="pages">
            <img className="likedPage1" alt="Error" src={onError(likedPage1)}/>
            <img className="likedPage1 lp2" alt="Error" src={onError(likedPage2)}/>
            <img className="likedPage1 lp3" alt="Error" src={onError(likedPage3)}/>
            <h3 className="likedPageCount">{likedPageCount} Pages</h3>
        </div>
        <h3 className="RalionshipState">{RalionshipState}</h3>
        <button className="addFriend">{addFriend}</button>
    </div>
   </div>
  );
};

export default ProfileCard;