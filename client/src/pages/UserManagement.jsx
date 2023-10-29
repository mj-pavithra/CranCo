import React, { useEffect, useState } from "react";
import axios from 'axios';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame159 from "../components/Frame159";

const optionList = [
  { img1: "/assets/home icon.png", text1: "Dashboard"},
  { img1: "/assets/home icon.png", text1: "Users"},
  { img1: "/assets/home icon.png", text1: "Complaints", to: "/admin/complaintmanagement"},
  { img1: "/assets/home icon.png", text1: "Analytics" },
  { img1: "/assets/home icon.png", text1: "Posts", to: "/admin/pagemanagement"},
  { img1: "/assets/home icon.png", text1: "Pages", to: "/admin/pagemanagement"},
  { img1: "/assets/home icon.png", text1: "User Feedback" },
  { img1: "/assets/home icon.png", text1: "Settings" },
];

const tableHeader = {
  tableTitle: "User List",
  col1: "User ID",
  col2: "User Name",
  col3: "Email",
  col4: "Role",   
  col5: "Status"
};

const logo = "/assets/logo.png"; 

const DashboardMainContainer = () => {
  // Initialize state to hold complaint data
  const [userListData, setuserListData] = useState([]);
  //Create a function to fetch data using Axios
  const fetchData = async () => {
    try {
      // Make a GET request to your API endpoint
      const response = await axios.get('http://localhost:8081/api/v1/auth/users/all')

      const userData = response.data;

      const sortedList = userData.sort((a, b) => a.userId - b.userId);

      setuserListData(sortedList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

