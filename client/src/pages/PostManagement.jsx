import React, { useEffect, useState } from "react";
import axios from 'axios';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame161 from "../components/Frame161";

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
  tableTitle: "Post List",
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
      const response = await axios.get('http://localhost:8081/api/v1/auth/posts/all');

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