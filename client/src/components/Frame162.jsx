import React from "react";
import "../css/Frame162.css";  
import AxiosConfig from "../AxiosConfig";

const handleRemovePage = async (vehicleProfileId) => {
    try {
      await AxiosConfig.delete(`/api/v1/auth/vehicle-profiles/${vehicleProfileId}`);
        alert("Page Removed");
        window.location.reload();
    } catch (error) {
      console.error('Error Removing Page:', error);
      alert("Error Removing Page");
    }
};

//confirm before delete report record
const confirmRemovePage = (vehicleProfileId) => {
    const shouldDelete = window.confirm("Are you sure you want to remove this page?");
    if (shouldDelete) {
      handleRemovePage(vehicleProfileId);
    }
  };

const Frame162 = ({ pageList , tableHeader } ) => {
    
    return (
        <div className="Frame162">
            <h2 className="tableTitle">{tableHeader.tableTitle}</h2>
            <table className="pageListTable">
            <thead>
                <tr>
                <th>{tableHeader.col1}</th>
                <th>{tableHeader.col2}</th>
                <th>{tableHeader.col3}</th>
                <th>{tableHeader.col4}</th>
                {/* <th>{tableHeader.col5}</th> */}
                </tr>
            </thead>
            <tbody>
                {pageList.map((page, index) => (
                <tr key={index}>
                    {/* <td>{page.vehicleProfileId}</td> */}
                    <td>{page.vehicleProfileName}</td>
                    <td>{page.vehicleModel}</td>
                    <td>{page.vehicleRegNo}</td>
                    {/* <td>{page.vehicleManuYear}</td> */}
                    <td> 
                    {/* <button onClick={() => confirmRemovePage(page.vehicleProfileId)} style={{ borderRadius: '5px' }}>Remove Page</button> */}
                    <button
                        onClick={() => confirmRemovePage(page.vehicleProfileId)}
                        style={{
                        borderRadius: '5px',
                        backgroundColor: 'transparent', // Set the initial background color
                        transition: 'background-color 0.3s', // Add a smooth transition
                        cursor: 'pointer', // Change the cursor to a pointer on hover
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = 'lightblue')} // Change the background color on hover
                        onMouseLeave={(e) => (e.target.style.backgroundColor = 'blue')} // Reset the background color on mouse leave
                    >
                    Remove Page
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
    };

export default Frame162;