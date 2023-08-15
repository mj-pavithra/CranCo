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
const action = "Accept";
const action2 = "View profile";

const data = [
  { rowTitle: "Friends", action: "View profile", items: ["Kavishka Anjuna", "Chathuni Kavee", "Amaya Nethmini", "Mahinda Rajapaksha", "Chamara Ranawaka", "Heshanjalee", "Nirjanjalee", "Brus Lee",  ] , dis:[ "From Negombo",  "From Anjoda","From Pure", "From Madamulana", "From Kaluthara", "From Anjoda",], image: ["/assets/profile.jpg", "/assets/propic6.jpeg", "/assets/propic2.jpeg", "/assets/propic12.jpeg", "/assets/propic3.jpeg", "/assets/propic5.jpeg", "/assets/car_img_7.jpeg", "/assets/car_img_8.jpeg", "/assets/car_img_9.jpg",]},
  { rowTitle: "Requests",action : "Accept", items: ["Sithum Pathum", "Prarthana ", "Sadani Fernando", "Shehani Hahadawala",   ], dis:["From Imbulgoda", "From Colombo", "From Gampaha", "From Kadawatha",], image: ["/assets/propic13.jpeg", "/assets/propic10.jpeg", "/assets/propic11.jpeg", "/assets/propic14.jpeg", ] },
   // Add more data objects here as needed
];  

  return (
    <>
      <NavigationBar />
      <body>
        <div className="div-1">
           <div className="div-left">
            <UserSidebar image="/assets/propic6.jpeg" username="Manoj Pavithra"/>
          </div>
          <div className={`div-max-middle `}>
            {data.map((blockData, index, ) => (
              <MidMaxBlock key={index} rowTitle={blockData.rowTitle} items={blockData.items} dis={blockData.dis} image={blockData.image} action={blockData.action}  type ="user"/>
            ))}
          </div>
        </div>
        
      </body>
    </>
  );
};

export default FriendsPage;
