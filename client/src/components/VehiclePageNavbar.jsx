import "../css/VehiclePageNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function VehiclePageNavbar() {
  return (
    <div className="vp-navbar">
      <ul>
        <li>
          <a href="/vehiclespageownersview/settings">
            <div className="vpnavbar-logo">
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className="vpnavbar-label">Settings</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default VehiclePageNavbar;
