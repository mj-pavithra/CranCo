import React, { useEffect, useState } from "react";
import axios from 'axios';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame160 from "../components/Frame160";

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

const tableHeader = {
  tableTitle: "Complaint List",
  col1: "Report ID",
  col2: "Post ID",
  col3: "Reason",
  col4: "Action"
};

const logo = "/assets/logo.png";

const DashboardMainContainer = () => {
  // Initialize state to hold complaint data
  const [complaintListData, setComplaintListData] = useState([]);
  //Create a function to fetch data using Axios
  const fetchData = async () => {
    try {
      // Make a GET request to your API endpoint
      const response = await axios.get('http://localhost:8081/api/v1/complaints/all');

      // Assuming your API response contains the complaint data in an array
      const complaintData = response.data;

      const sortedList = complaintData.sort((a, b) => a.postId - b.postId);

      // Update the complaintListData state with the fetched data
      setComplaintListData(sortedList);
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
        <Frame160 tableHeader={tableHeader} complaintList={complaintListData} />
      </div>
    </div>
  );
};
 
export default DashboardMainContainer;