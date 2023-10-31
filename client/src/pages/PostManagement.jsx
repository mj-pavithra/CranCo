import React, { useEffect, useState } from "react";
import axios from 'axios';
import AxiosConfig from '../AxiosConfig';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame161 from "../components/Frame161";
import { Link } from "react-router-dom";

const optionList = [
  { img1: "/assets/dashboard icon.png", text1: <Link to="/admin/dashboard" style={{ color: "black", textDecoration: "none" }}>Dashboard</Link>},
  { img1: "/assets/user icon.png", text1: <Link to="/admin/usermanagement" style={{ color: "black", textDecoration: "none" }}>Users</Link>},
  { img1: "/assets/post icon.png", text1: <span style={{ color: "blue" }}>Posts</span>,},
  { img1: "/assets/page icon.png", text1: <Link to="/admin/pagemanagement" style={{ color: "black", textDecoration: "none" }}>Pages</Link>},
  { img1: "/assets/complaint icon.png", text1: <Link to="/admin/complaintmanagement" style={{ color: "black", textDecoration: "none" }}>Complaints</Link>,},
  // { img1: "/assets/anlytics icon.png", text1: "Analytics" },
  // { img1: "/assets/user feedback icon.png", text1: "User Feedback" },
  // { img1: "/assets/settings icon.png", text1: "Settings" },
];

const tableHeader = {
  tableTitle: "Total Posts",
  //col1: "Post ID",
  col1: "User Name",
  col2: "Caption",
  // col3: "Location",
  col3: "Post Id",
  col4: "Action"
};

const logo = "/assets/logo.png";

const DashboardMainContainer = () => {
  // Initialize state to hold complaint data
  const [postListData, setpostListData] = useState([]);
  //Create a function to fetch data using Axios
  const fetchData = async () => {
    try {
      // Make a GET request to your API endpoint
      const response = await AxiosConfig.get('/api/v1/auth/posts/all');
      //const response = await axios.get('http://localhost:8081/api/v1/auth/posts/all');

      // Assuming your API response contains the complaint data in an array
      const postData = response.data;

      const sortedList = postData.sort((a, b) => a.postId - b.postId);

      // Update the postListData state with the fetched data
      setpostListData(sortedList);
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching data:', error);
    }
  };
    // Call the fetchData function when your component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="DashboardMainContainer">
      <Frame135 img1={logo} optionList={optionList} />
      <div className="Dashboard">
        <AdminDashboardHeader FirstName="John" proPic="/assets/propic6.jpeg" DisplayName="John Doe" Position="Administrator" />
        <AdminSearchBar />
        <Frame161 tableHeader={tableHeader} postList={postListData} />
      </div>
    </div>
  );
};
 
export default DashboardMainContainer;