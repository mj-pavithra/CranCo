import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSunBright } from '@fortawesome/pro-solid-svg-icons';




function ToggleButton() {
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faSunBright} />
            </button>
        </div>
    );
}

export default ToggleButton;