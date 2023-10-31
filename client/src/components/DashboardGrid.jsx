import React, { useEffect, useState } from "react";
import '../css/DashboardGrid.css';
import AdminPendingTask from "../components/AdminPendingTask";
import { Link } from "react-router-dom";
import axios from "axios";
import AxiosConfig from "../AxiosConfig";

const DashboardGrid = ({ img1, text1 }) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalComplaints, setTotalComplaints] = useState(0);
  // const [totalUsers, setTotalUsers] = useState(0);
  // const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch total users count
    AxiosConfig.get("/api/v1/auth/users/count")
      .then((response) => {
        setTotalUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total users:", error);
      });

    // Fetch total posts count
    AxiosConfig.get("/api/v1/auth/posts/count")
      .then((response) => {
        setTotalPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total posts:", error);
      });

    // Fetch total pages count
    AxiosConfig.get("/api/v1/auth/vehicle-profiles/count")
      .then((response) => {
        setTotalPages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total pages:", error);
      });

    // Fetch total complaints count
    AxiosConfig.get("/api/v1/auth/complaints/count")
      .then((response) => {
        setTotalComplaints(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total complaints:", error);
      });
  };

  return (
    <div className="grid-container">
        <div className="grid-item row1">Total Users<br /><strong>{totalUsers}</strong></div>
        <div className="grid-item row1">Total Posts<br /><strong>{totalPosts}</strong></div>
        <div className="grid-item row1">Total Pages<br /><strong>{totalPages}</strong></div>
        <div className="grid-item row1">Total Complaints<br /><strong>{totalComplaints}</strong></div>
      <div className="grid-item row2">Total Active Users<br /><strong>{totalUsers}</strong><br /><br /><br /><br /></div>
      <div className="grid-item row2">Total Active Pages<br /><strong>{totalPages}</strong><br /><br /><br /><br /></div>
      <div className="grid-item row3">
        <AdminPendingTask
          img1="/assets/task icon.png"
          text1="Pending Tasks For Admin"
          tasks={[
            // "Complete project report",
            // "Review client feedback",
            // "Submit expense report",
          ]}
        />
        <br /><br /><br /><br /><br />
      </div>
    </div>
  );
};

export default DashboardGrid;
