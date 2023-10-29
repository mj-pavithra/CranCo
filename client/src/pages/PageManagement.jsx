import React, { useEffect, useState } from "react";
import axios from 'axios';
import Frame135 from "../components/Frame135";
import AdminDashboardHeader from "../components/AdminDashboardHeader";
import "../css/DashboardMainContainer.css";
import AdminSearchBar from "../components/AdminSearchBar";
import Frame162 from "../components/Frame162";

const optionList = [
  { img1: "/assets/home icon.png", text1: "Dashboard"},
  { img1: "/assets/home icon.png", text1: "Users", to: "/admin/usermanagement" },
  { img1: "/assets/home icon.png", text1: "Complaints", to: "/admin/complaintmanagement"},
  { img1: "/assets/home icon.png", text1: "Analytics" },
  { img1: "/assets/home icon.png", text1: "Posts", to: "/admin/pagemanagement"},
  { img1: "/assets/home icon.png", text1: "Pages"},
  { img1: "/assets/home icon.png", text1: "User Feedback" },
  { img1: "/assets/home icon.png", text1: "Settings" },
];

const tableHeader = {
  tableTitle: "Page List",
  col1: "Profile ID",
  col3: "Profile Name",
  col4: "Vehicle Type",   
  col5: "Vehicle Model",
  col6: "Vehical Reg No"
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
      const response = await axios.get('http://localhost:8081/api/v1/auth/vehicle-profiles/all')

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