import React, { useEffect, useState } from "react";
import axios from 'axios';
import AxiosConfig from '../AxiosConfig';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame159 from "../components/Frame159"; 
import { Link } from "react-router-dom";


const optionList = [
  { img1: "/assets/dashboard icon.png", text1: <Link to="/admin/dashboard" style={{ color: "black", textDecoration: "none" }}>Dashboard</Link>},
  { img1: "/assets/user icon.png", text1: <span style={{ color: "blue" }}>Users</span>},
  { img1: "/assets/post icon.png", text1: <Link to="/admin/postmanagement" style={{ color: "black", textDecoration: "none" }}>Posts</Link>},
  { img1: "/assets/page icon.png", text1: <Link to="/admin/pagemanagement" style={{ color: "black", textDecoration: "none" }}>Pages</Link>},
  { img1: "/assets/complaint icon.png", text1: <Link to="/admin/complaintmanagement" style={{ color: "black", textDecoration: "none" }}>Complaints</Link>,},
  // { img1: "/assets/anlytics icon.png", text1: "Analytics" },
  // { img1: "/assets/user feedback icon.png", text1: "User Feedback" },
  // { img1: "/assets/settings icon.png", text1: "Settings" }, 
];

const userListData = [
  {
    "username": "Manoj",
    "email": "manoj@gmail.com",
    "role": "USER",
    "status": "Active",
  },
  {
    "username": "Kavishka",
    "email": "kavishka@gmail.com",
    "role": "USER",
    "status": "Active",
  },
  {
    "username": "akila",
    "email": "akila@gmail.com",
    "role": "USER",
    "status": "Active",
  },
  {
    "username": "kalana",
    "email": "kalana@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Anjana",
    "email": "anjana@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Avishka",
    "email": "avishka@gmail.com",
    "role": "USER",
    "status": "Active",
  },
  {
    "username": "Kanishka",
    "email": "kaishka@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Sampath",
    "email": "sampath@gmail.com",
    "role": "USER",
    "status": "Not Active",
  }, 
  {
    "username": "Sandun",
    "email": "sandun@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Kavishanka",
    "email": "kavishanka@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Pramod",
    "email": "pramod@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Kasun",
    "email": "kasun@gmail.com",
    "role": "USER",
    "status": "Not Active",
  }, 
  {
    "username": "Ravishka",
    "email": "ravishka@gmail.com",
    "role": "USER",
    "status": "Active",
  }, 
  {
    "username": "Kavindu",
    "email": "kavindu@gmail.com",
    "role": "USER",
  }
  // {
  //   "username": "michael_brown",
  //   "active": true,
  //   "pinStatus": "Active",
  //   "lastSeen": "2023-07-21",
  //   "role": "User",
  //   "action": "Edit"
  // },
  // {
  //   "username": "sophia_johnson",
  //   "active": false,
  //   "pinStatus": "Inactive",
  //   "lastSeen": "2023-07-20",
  //   "role": "User",
  //   "action": "Edit"
  // },
  // {
  //   "username": "william_davis",
  //   "active": true,
  //   "pinStatus": "Active",
  //   "lastSeen": "2023-07-21",
  //   "role": "User",
  //   "action": "Edit"
  // },
  // {
  //   "username": "olivia_miller",
  //   "active": false,
  //   "pinStatus": "Inactive",
  //   "lastSeen": "2023-07-20",
  //   "role": "User",
  //   "action": "Edit"
  // },
  // {
  //   "username": "Janith",
  //   "active": true,
  //   "pinStatus": "Active",
  //   "lastSeen": "2023-07-21",
  //   "role": "User",
  //   "action": "Edit"
  // },
]; 

const tableHeader = {
  tableTitle: "Total Users",
  // col1: "User ID",
  col1: "User Name",
  col2: "Email",
  col3: "Role",   
  col4: "Status"
};

const logo = "/assets/logo.png"; 

// const DashboardMainContainer = () => {
//   // Initialize state to hold complaint data
//   const [userListData, setuserListData] = useState([]);
//   //Create a function to fetch data using Axios
//   const fetchData = async () => {
//     try {
//       // Make a GET request to your API endpoint
//       const response = await AxiosConfig.get('/api/v1/auth/users/all')
//       //const response = await axios.get('http://localhost:8081/api/v1/auth/users/all');
//       //http://localhost:8081/api/v1/auth/users/all
//       const userData = response.data;
//       console.log(response.data);
//       const sortedList = userData.sort((a, b) => a.userId - b.userId);
//       console.log(sortedList);
//       setuserListData(sortedList);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

const DashboardMainContainer = () => {
  return (
    <div className="DashboardMainContainer">
      <Frame135 img1={logo} optionList={optionList} />
      <div className="Dashboard">
        <AdminDashboardHeader FirstName="John" proPic="/assets/propic6.jpeg" DisplayName="John Doe" Position="Administrator" />
        <AdminSearchBar />
        <Frame159 tableHeader={tableHeader} userList={userListData} />
      </div>
    </div>
  );
};
 
export default DashboardMainContainer;

