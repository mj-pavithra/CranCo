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
      <Link className="link" to="/homepage">
        <FontAwesomeIcon icon={faHouseChimney} />
        Home
      </Link>
      <Link className="link" to="/login">
        <FontAwesomeIcon icon={faUsersLine} />
        Friends
      </Link>
      <Link className="link" to="/vehiclespage">
        <FontAwesomeIcon icon={faCar} />
        Vehicles
      </Link>
      <Link className="link" to="/">
        <FontAwesomeIcon icon={faShop} />
        Shops
      </Link>
    </div>
  );
}

export default UserSidebar;
