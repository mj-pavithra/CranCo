import React from "react";
import "../css/AdminPendingTask.css";

const AdminPendingTask = ({ img1, text1, tasks }) => {
  return (
    <div className="pendingTaskContainer">
      <p className="topic">Pending</p>
      <div className="TaskList">
        {tasks.map((task, index) => (
          <p className="TaskItem" key={index}>
            {task}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AdminPendingTask;
