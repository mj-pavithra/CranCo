import { Link } from "react-router-dom";
import "../css/UserSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUsersLine,
  faCar,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

function UserSidebar({ image, username }) {
  return (
    <div className="side-bar">
      <div className="user-cage">
        <img src={image} alt="User Avatar" />
        <p>{username}</p>
      </div>
      <div className="sidebar-links">
        <Link className="link" to="/homepage">
          <FontAwesomeIcon className="sidebar-icon" icon={faHouseChimney} />
          Home
        </Link>
        <Link className="link" to="/login">
          <FontAwesomeIcon className="sidebar-icon" icon={faUsersLine} />
          Friends
        </Link>
        <Link className="link" to="/">
          <FontAwesomeIcon className="sidebar-icon" icon={faCar} />
          Vehicles
        </Link>
        <Link className="link" to="/">
          <FontAwesomeIcon className="sidebar-icon" icon={faShop} />
          Shops
        </Link>
      </div>
    </div>
  );
}

export default UserSidebar;
