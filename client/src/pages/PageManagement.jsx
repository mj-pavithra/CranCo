import React, { useEffect, useState } from "react";
import axios from 'axios';
import AxiosConfig from '../AxiosConfig';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame162 from "../components/Frame162";
import { Link } from "react-router-dom";

const optionList = [
  { img1: "/assets/dashboard icon.png", text1: <Link to="/admin/dashboard" style={{ color: "black", textDecoration: "none" }}>Dashboard</Link>},
  { img1: "/assets/user icon.png", text1: <Link to="/admin/usermanagement" style={{ color: "black", textDecoration: "none" }}>Users</Link>},
  { img1: "/assets/post icon.png", text1: <Link to="/admin/postmanagement" style={{ color: "black", textDecoration: "none" }}>Posts</Link>},
  { img1: "/assets/page icon.png", text1: <span style={{ color: "blue" }}>Pages</span>},
  { img1: "/assets/complaint icon.png", text1: <Link to="/admin/complaintmanagement" style={{ color: "black", textDecoration: "none" }}>Complaints</Link>,},
  // { img1: "/assets/anlytics icon.png", text1: "Analytics"},
  // { img1: "/assets/user feedback icon.png", text1: "User Feedback"},
  // { img1: "/assets/settings icon.png", text1: "Settings" },
];

const tableHeader = {
  tableTitle: "Total Pages",
  col1: "Profile Name",  
  // col2: "Vehicle Type",
  col2: "Vehicle Model",
  col3: "Vehical Reg No", 
  col4: "Action"
  // col5: "Action"
};

const logo = "/assets/logo.png"; 

const DashboardMainContainer = () => {
  // Initialize state to hold complaint data
  const [pageListData, setpageListData] = useState([]);
  //Create a function to fetch data using Axios
  const fetchData = async () => {
    try {
      // Make a GET request to your API endpoint
      const response = await AxiosConfig.get('/api/v1/auth/vehicle-profiles/all')
      //const response = await axios.get('http://localhost:8081/api/v1/auth/vehicle-profiles/all');

      const pageData = response.data;

      const sortedList = pageData.sort((a, b) => a.vehicleProfileId - b.vehicleProfileId);

      setpageListData(sortedList);
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
        <Frame162 tableHeader={tableHeader} pageList={pageListData} />
      </div>
    </div>
  );
};
 
export default DashboardMainContainer;