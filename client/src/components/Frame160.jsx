import React from "react";
import "../css/Frame160.css";
import axios from 'axios';
import AxiosConfig from "../AxiosConfig";

//delete report record
const handleDeleteComplaint = async (reportId) => {
    try {
      await AxiosConfig.delete(`/api/v1/auth/complaints/${reportId}`);
        alert("Complaint Deleted");
        window.location.reload();
    } catch (error) {
      console.error('Error Deleting Complaint:', error);
      alert("Error deleting Complaint");
    }
};

//confirm before delete report record
const confirmDeleteComplaint = (reportId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this Complaint?");
    if (shouldDelete) {
      handleDeleteComplaint(reportId);
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
                    {/* <td>
                        <button onClick={() => confirmDeleteComplaint(complaint.reportId)} style={{ borderRadius: '5px' }}>Delete Complaint</button>
                    </td> */}
                    <td> 
                    <button
                        onClick={() => confirmDeleteComplaint(complaint.reportId)}
                        style={{
                        borderRadius: '5px',
                        backgroundColor: 'transparent', // Set the initial background color
                        transition: 'background-color 0.3s', // Add a smooth transition
                        cursor: 'pointer', // Change the cursor to a pointer on hover
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = 'lightblue')} // Change the background color on hover
                        onMouseLeave={(e) => (e.target.style.backgroundColor = 'blue')} // Reset the background color on mouse leave
                    >
                    Remove Complaint
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
    };

export default Frame160;
