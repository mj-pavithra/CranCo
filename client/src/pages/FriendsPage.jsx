import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";
import MidMaxBlock from "./MidMaxBlock";

const FriendsPage = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 3",
    "Item 3",
    "Item 3",
    "Item 3",
  ];

  const dis = "Colombo";

  const image = "girl.png";
const action = "Add Friend";
  return (
    <>
      <NavigationBar />
      <body>
        <div className="div-1">
           <div className="div-left">
            <UserSidebar />
          </div>
          <div className={`div-max-middle `}>
          <MidMaxBlock rowTitle="Friends" items={items}  action={action} image={image} dis={dis}  type="user"/>
          <MidMaxBlock rowTitle="Requests" items={items} action={action} image={image} dis={dis} type="user"/>
          </div>
        </div>
        
      </body>
    </>
  );
};

export default FriendsPage;
