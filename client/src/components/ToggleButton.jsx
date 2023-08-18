import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrightness, faSun } from "@fortawesome/free-solid-svg-icons";
import "../css/ToggleButton.css";

function ToggleButton() {
  return (
    <div className="toggle-btn-div">
      <button className="toggle-btn">
        {/* <FontAwesomeIcon icon={faBrightness} /> */}
        <FontAwesomeIcon icon={faSun} />
      </button>
    </div>
  );
}

export default ToggleButton;
