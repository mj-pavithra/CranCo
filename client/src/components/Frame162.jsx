import React from "react";
import "../css/Frame162.css";

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
                <th>{tableHeader.col5}</th>
                </tr>
            </thead>
            <tbody>
                {pageList.map((page, index) => (
                <tr key={index}>
                    <td>{page.vehicleProfileId}</td>
                    <td>{page.userId}</td>
                    <td>{page.vehicleProfileName}</td>
                    <td>{page.vehicleType}</td>
                    <td>{page.vehicleModel}</td>
                    {/* <td>
                        <button onClick={() => confirmDeletePost(complaint.reportId)}>Delete</button>
                    </td> */}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
    };

export default Frame162;