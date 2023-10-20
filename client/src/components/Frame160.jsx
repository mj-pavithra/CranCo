import React from "react";
import "../css/Frame160.css";
import axios from 'axios';

//delete report record
const handleDeletePost = async (reportId) => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/complaints/${reportId}`);
        alert("Post Deleted");
        window.location.reload();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert("Error deleting post");
    }
};

//confirm before delete report record
const confirmDeletePost = (reportId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this post?");
    if (shouldDelete) {
      handleDeletePost(reportId);
    }
  };
  

const Frame160 = ({ complaintList , tableHeader } ) => {
    
    return (
        <div className="Frame160">
            <h2 className="tableTitle">{tableHeader.tableTitle}</h2>
            <table className="complaintListTable">
            <thead>
                <tr>
                <th>{tableHeader.col1}</th>
                <th>{tableHeader.col2}</th>
                <th>{tableHeader.col3}</th>
                <th>{tableHeader.col4}</th>
                </tr>
            </thead>
            <tbody>
                {complaintList.map((complaint, index) => (
                <tr key={index}>
                    <td>{complaint.reportId}</td>
                    <td>{complaint.postId}</td>
                    <td>{complaint.reason}</td>
                    <td>
                        <button onClick={() => confirmDeletePost(complaint.reportId)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
    };

export default Frame160;
