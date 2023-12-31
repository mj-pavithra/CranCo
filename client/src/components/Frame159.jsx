import React from "react";
import "../css/Frame159.css";

const Frame159 = ({ userList , tableHeader } ) => {
    return (
        <div className="Frame159">
            <h2 className="tableTitle">{tableHeader.tableTitle}</h2>
            <table className="userListTable">
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
                {userList.map((user, index) => (
                <tr key={index}>
                    {/* <td>{user.userId}</td> */}
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status ? "Active" : "Not"}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
    };

export default Frame159;
