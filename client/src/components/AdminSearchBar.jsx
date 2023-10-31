import React from "react";
import "../css/AdminSearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faX, faHeart, faMagnifyingGlass, faAngleDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as reg_heart,
  faComment as reg_comment,
  faShareSquare as reg_share,
} from "@fortawesome/free-regular-svg-icons";
import Icon from "./Icon";

const AdminSearchBar = () => {
  return (
    <>
      <div className="mainBar">
        <div className="searchBar">
            <FontAwesomeIcon className='post-action-icon' icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
         
        </div>
        <div className="sort">
          <p>Sort by</p>
          <FontAwesomeIcon icon={faAngleDown} />

        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faSliders} />
        </div>
      </div>
    </>
  );
};

export default AdminSearchBar; 

// import React, { useState } from "react";
// import Axios from "axios";
// import AxiosConfig from "../AxiosConfig";
// import "../css/AdminSearchBar.css";

// const AdminSearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [userResults, setUserResults] = useState([]);
//   const [pageResults, setPageResults] = useState([]);
//   const [postResults, setPostResults] = useState([]);
//   const [complaintResults, setComplaintResults] = useState([]);

//   const searchUsers = () => {
//     AxiosConfig.get(`/api/users/search/${username}`)
//       .then((response) => {
//         setUserResults(response.data);
//       })
//       .catch((error) => {
//         console.error("Error searching users:", error);
//       });
//   };

//   const searchPages = () => {
//     Axios.get(`/api/pages/search=${vehicleProfileName}`)
//       .then((response) => {
//         setPageResults(response.data);
//       })
//       .catch((error) => {
//         console.error("Error searching pages:", error);
//       });
//   };

//   const searchPosts = () => {
//     Axios.get(`/api/posts/search/${userId}`)
//       .then((response) => {
//         setPostResults(response.data);
//       })
//       .catch((error) => {
//         console.error("Error searching posts:", error);
//       });
//   };

//   const searchComplaints = () => {
//     Axios.get(`/api/complaints/search=/${reason}`)
//       .then((response) => {
//         setComplaintResults(response.data);
//       })
//       .catch((error) => {
//         console.error("Error searching complaints:", error);
//       });
//   };

//   // Combine the results from all searches
//   const combinedResults = [...userResults, ...pageResults, ...postResults, ...complaintResults];

//   // Render the combined results
//   const searchResultsList = combinedResults.map((result) => (
//     <div key={result.id}>{result.name}</div>
//   ));

//   return (
//     <>
//       <div className="mainBar">
//         <div className="searchBar">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={searchUsers}>Search Users</button>
//           <button onClick={searchPages}>Search Pages</button>
//           <button onClick={searchPosts}>Search Posts</button>
//           <button onClick={searchComplaints}>Search Complaints</button>
//         </div>
//       </div>
//       <div>
//         {searchResultsList}
//       </div>
//     </>
//   );
// };

// export default AdminSearchBar;
