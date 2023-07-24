import Vehicles from "../pages/Vehicles";
import Friends from "../pages/FriendsPage";
import Home from "../pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import Shops from "../pages/Shops";
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
      <Link className="link" to="/">
        <FontAwesomeIcon icon={faHouseChimney} />
        Home
      </Link>
      <Link className="link" to="/friends/:friendId">
        <FontAwesomeIcon icon={faUsersLine} />
        Friends
      </Link>
      <Link className="link" to="/vehicles/:vehicleId">
        <FontAwesomeIcon icon={faCar} />
        Vehicles
      </Link>
      <Link className="link" to="/shops/:shopId">
        <FontAwesomeIcon icon={faShop} />
        Shops
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends/:friendId" element={<Friends />} />
        <Route path="/vehicles/:vehicleId" element={<Vehicles />} />
        <Route path="/shops/:shopId" element={<Shops />} />
      </Routes>
    </div>
  );
}

export default UserSidebar;
