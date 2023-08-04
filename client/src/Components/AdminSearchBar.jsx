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
