import React from "react";
import '../css/WindowToProfile.css';

const WindowToProfile = ({ proPic2, DisplayName2, Position2 }) => {
    return (
        <div className="WindowToProfile">
            <div className="RightBlock2">
                <div className="ProPic2">
                    <img src={proPic2} alt="profile pic" />
                </div>
                <div className="NameBox2">
                    <p className="DisplayName2">{DisplayName2}</p>
                    <p className="Position2">{Position2}</p>
                </div>
            </div>
            <button className="ProfileBtn">Go to Profile</button>
            <button className="ProfileBtn"><img className="logout-img" src="/assets/logout.png"></img>logout</button>
        </div>
    );
};

export default WindowToProfile;
