import React, { useEffect, useRef, useState } from "react";
import "../css/NavigationBar.css";
import NotificationContainer from "../components/NotificationContainer";
import Hr from "../components/Hr.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import PopupDivFull from "./PopupDivFull";
import ToggleButton from "../components/ToggleButton";
import { Link } from "react-router-dom";

function NavigationBar() {
  // navigation menu icons
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName === activeIcon ? activeIcon : iconName);
  };

  // notification bell
  const [bellState, setBellState] = useState(false);

  const handleBellClick = () => {
    setBellState((bellState) => !bellState);
  };

  const notificationRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setBellState(false);
      }
    };


    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.addEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* navbar div */}
      <nav className="navbar_back">
        <div className="container-fluid navbar-main ">
          <div className="row">
            {/* left div */}
            <div className="col-4 navbar-main d-flex align-items-center">
              <Link to="/login">
                <img
                  className="navbar-logo"
                  src="/assets/logo.png"
                  alt="logo"
                />
              </Link>
              <input
                type="text"
                className="navbar-search"
                placeholder="Search here"
              />
            </div>


            {/* middle div */}
            <div className="col-4 navbar-main d-flex align-items-center justify-content-center">
              <Link to="/homepage">
                <div
                  className={`navbar-icon-wrapper ${activeIcon === "home" ? " active" : ""
                    }`}
                  onClick={() => handleIconClick("home")}
                >
                  <FontAwesomeIcon className="navbar-icon" icon={faHome} />
                </div>
              </Link>
              <Link to="/marketplace">
                <div
                  className={`navbar-icon-wrapper ${activeIcon === "marketplace" ? " active" : ""
                    }`}
                  onClick={() => handleIconClick("marketplace")}
                >
                  <FontAwesomeIcon className="navbar-icon" icon={faShop} />
                </div>
              </Link>
              <div>
                <ToggleButton />
              </div>
            </div>

            {/* last div */}
            <div className="col-4 navbar-main d-flex align-items-center justify-content-end gap-5">
              <PopupDivFull
                icon={faMagnifyingGlass}
                heading={"Search"}
                iconClass={"color-transparent-white nav-search-icon"}
              />
              <div ref={notificationRef} className="notification-main">
                <FontAwesomeIcon
                  className={`navbar-bell ${bellState ? "active" : ""}`}
                  icon={faBell}
                  onClick={() => handleBellClick()}
                />
                {bellState && (
                  <div className="notification-div">
                    <NotificationContainer />
                  </div>
                )}
              </div>
              <ToggleButton />
            </div>
          </div>
        </div>
        <Hr />
      </nav>
    </>
  );
}

export default NavigationBar;
