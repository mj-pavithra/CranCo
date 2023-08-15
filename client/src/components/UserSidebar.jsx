import { Link } from "react-router-dom";
import "../css/UserSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUsers,
  faCar,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

function UserSidebar({ image, username }) {
  return (
    <div className="side-bar">
      <Link className="link-unstyled" to="/myprofile">
        <div className="user-cage">
          <img src={image} alt="User Avatar" />
          <p>{username}</p>
        </div>
      </Link>
      <div className="sidebar-links">
        {/* <Link className="link" to="/homepage">
          <FontAwesomeIcon className="sidebar-icon" icon={faHouseChimney} />
          Home
        </Link> */}
        <Link className="link" to="/friends">
          <FontAwesomeIcon className="sidebar-icon" icon={faUsers} />
          Friends
        </Link>
        <Link className="link" to="/vehicles">
          <FontAwesomeIcon className="sidebar-icon" icon={faCar} />
          Souls
        </Link>
        <Link className="link" to="/">
          <FontAwesomeIcon className="sidebar-icon" icon={faShop} />
          GearMart
        </Link>
        <br />
        <br />
        <br />
        <br />
        <button className="model-a-soul">
          <b>Model a Soul</b>
        </button>
      </div>
    </div>
  );
}

export default UserSidebar;
