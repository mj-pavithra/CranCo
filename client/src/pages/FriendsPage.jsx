import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";


const FriendsPage = () => {

  return (
    <>
    <NavigationBar />
    <body>
      <div className="div-1">
        <div className="div-left">
          <UserSidebar />
        </div>
        <div className="div-max-middle">
          <div className="friend-request">
            <h2>Friend Requests</h2>
            <div className="friend-request-list">
              <div className="each-item">
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

      
    </>
    
  );
};

export default FriendsPage;
