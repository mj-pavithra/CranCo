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
  { img1: "/assets/dashboard icon.png", text1: <Link to="/admin/dashboard">Dashboard</Link>},
  { img1: "/assets/user icon.png", text1: "Users"},
  { img1: "/assets/post icon.png", text1: <Link to="/admin/postmanagement">Posts</Link>},
  { img1: "/assets/page icon.png", text1: <Link to="/admin/pagemanagement">Pages</Link>},
  { img1: "/assets/complaint icon.png", text1: <Link to="/admin/complaintmanagement">Complaints</Link>},
  { img1: "/assets/anlytics icon.png", text1: "Analytics" },
  { img1: "/assets/user feedback icon.png", text1: "User Feedback" },
  { img1: "/assets/settings icon.png", text1: "Settings" }, 
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

const DashboardMainContainer = () => {
  // Initialize state to hold complaint data
  const [userListData, setuserListData] = useState([]);
  //Create a function to fetch data using Axios
  const fetchData = async () => {
    try {
      // Make a GET request to your API endpoint
      const response = await AxiosConfig.get('/api/v1/auth/users/all')

      const userData = response.data;
      console.log(response.data);
      const sortedList = userData.sort((a, b) => a.userId - b.userId);
      console.log(sortedList);
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

