import React from "react";
import "../css/UserFriends.css";


const UserFriends = ({ ProfilePicture, userName, pageImage1, pageImage2 , pageCount }) => {
    const onError = (originalImg) => {
        const altImg = "/assets/alt-image.jpeg";
      if (originalImg === null || originalImg === "") {
        return altImg;
      }
      if (!originalImg) {
        return altImg;
      }
      return originalImg;
      
    };

    return (
        <div className="topContainer2">
            <div className="proPicContainer">
                <img className="proPic2" src={onError(ProfilePicture)} alt="logo" />
            </div>
            <div className="detailContainer">
                <p className="userName">{userName}</p>
                <div className="pageContainer">
                    <img className="pageImg " src={onError(pageImage1)} alt="logo" />
                    <img className="pageImg secondImg" src={onError(pageImage2)} alt="logo" />
                    <p className="pageCount">{pageCount} Pages</p>
                </div>
            </div>
        </div>
    );
    
};

export default UserFriends;