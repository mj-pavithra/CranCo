import React from "react";
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame159 from "../components/Frame159";

const optionList = [
  { img1: "/assets/home icon.png", text1: "Dashboard" },
  { img1: "/assets/home icon.png", text1: "Users" },
  { img1: "/assets/home icon.png", text1: "Content" },
  { img1: "/assets/home icon.png", text1: "Analytics" },
  { img1: "/assets/home icon.png", text1: "Posts" },
  { img1: "/assets/home icon.png", text1: "Pages" },
  { img1: "/assets/home icon.png", text1: "User Feedback" },
  { img1: "/assets/home icon.png", text1: "Settings" },
];

const userListData = [
    {
      "username": "john_doe",
      "active": true,
      "pinStatus": "Active",
      "lastSeen": "2023-07-21",
      "role": "Admin",
      "action": "Edit"
    },
    {
      "username": "jane_smith",
      "active": false,
      "pinStatus": "Inactive",
      "lastSeen": "2023-07-20",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "alex_williams",
      "active": true,
      "pinStatus": "Active",
      "lastSeen": "2023-07-21",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "emily_jones",
      "active": false,
      "pinStatus": "Inactive",
      "lastSeen": "2023-07-20",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "michael_brown",
      "active": true,
      "pinStatus": "Active",
      "lastSeen": "2023-07-21",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "sophia_johnson",
      "active": false,
      "pinStatus": "Inactive",
      "lastSeen": "2023-07-20",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "william_davis",
      "active": true,
      "pinStatus": "Active",
      "lastSeen": "2023-07-21",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "olivia_miller",
      "active": false,
      "pinStatus": "Inactive",
      "lastSeen": "2023-07-20",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "james_johnson",
      "active": true,
      "pinStatus": "Active",
      "lastSeen": "2023-07-21",
      "role": "User",
      "action": "Edit"
    },
    {
      "username": "ava_wilson",
      "active": false,
      "pinStatus": "Inactive",
      "lastSeen": "2023-07-20",
      "role": "User",
      "action": "Edit"
    }
  ];

const tableHeader = {
    tableTitle: "Page List",
    col1: "Page Name",
    col2: "Active",
    col3: "Followers",
    col4: "Last Seen",
    col5: "Type",
    col6: "Action"
};
  
const logo = "/assets/logo.png";

const DashboardMainContainer = () => {
  return (
    <div className="DashboardMainContainer">
        <Frame135 img1={logo} optionList ={optionList} />
        <div className="Dashboard">
          <AdminDashboardHeader FirstName="John" proPic="/assets/propic6.jpeg" DisplayName="John Doe" Position="Administrator" />
            <AdminSearchBar />
            <Frame159 tableHeader={tableHeader} userList={userListData}  />
          </div>
    </div>
  );
};

export default DashboardMainContainer;
