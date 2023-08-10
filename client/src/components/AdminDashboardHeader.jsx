import React from "react";
import '../css/AdminDashboardHeader.css';

const AdminDashboardHeader = ([FirstName, proPic, DisplayName, Position]) => {
    return (
        <div className="AdminDashboardHeader">
            <div className="LeftBlock">
                <h2 className="Welcome">Welcome back,{FirstName}</h2>
            </div>
            <div className="RightBlock">
                <div className="ProPic">
                    <img src={proPic} alt="profile pic" />
                </div>
                <div className="NameBox">
                    <p className="DisplayName">{DisplayName}</p>
                    <p className="DisplayName">{Position}</p>
                </div>
            </div>
        </div>
    );
    };

    export default AdminDashboardHeader;