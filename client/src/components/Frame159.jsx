import React from "react";
import "../css/Frame159.css";

const Frame159 = ({ userList } ) => {
    return (
        <div className="Frame159">
            <h2 className="tableTitle">User List</h2>
            <table className="userListTable">
            <thead>
                <tr>
                <th>Username</th>
                <th>Active</th>
                <th>Pin Status</th>
                <th>Last Seen</th>
                <th>Role</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user, index) => (
                <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.active ? "Yes" : "No"}</td>
                    <td>{user.pinStatus}</td>
                    <td>{user.lastSeen}</td>
                    <td>{user.role}</td>
                    <td>{user.action}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
    };

export default Frame159;
