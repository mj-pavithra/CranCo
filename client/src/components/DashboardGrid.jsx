import React from "react";
import '../css/DashboardGrid.css';
import AdminPendingTask from "../components/AdminPendingTask";
import { Link } from "react-router-dom";

const DashboardGrid = ({ img1, text1 }) => {
    return (
        <div class="grid-container">
          <Link to="/admin/usermanagement">
            <div class="grid-item row1">Total Uers<br></br><br></br><br></br><br></br></div>
          </Link>
            <div class="grid-item row1">Resent Pages<br></br><br></br><br></br><br></br></div>
          <Link to="/admin/pagemanagement">
            <div class="grid-item row1">Total Pages<br></br><br></br><br></br><br></br></div>
          </Link>
            <div class="grid-item row1">Top Pages</div>
            <div class="grid-item row2">Active Users<br></br><br></br><br></br><br></br></div>
            <div class="grid-item row2">Syaytem Heath<br></br><br></br><br></br><br></br></div>
            <div class="grid-item row3"><AdminPendingTask
            img1="/assets/task-image.png"
            text1="Pending Tasks"
            tasks={[
              "Complete project report",
              "Review client feedback",
              "Submit expense report",
            ]}
          />
          <br></br><br></br><br></br><br></br></div>
        </div>  

    );
};

export default DashboardGrid;