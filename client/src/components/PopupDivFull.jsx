import React, { useState } from "react";
import "../css/PopupDivFull.css";
import Hr from "./Hr";
import Icon from "./Icon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PopupDivFull = ({ heading, children, icon, iconClass }) => {
  const [activeStatus, changeState] = useState(false);

  const openDiv = () => {
    if (!activeStatus) {
      changeState(true);
      console.log("open called");
    }
  };

  const closeDiv = () => {
    if (activeStatus) {
      changeState(false);
      console.log("close called");
    }
  };

  return (
    <>
      {/* enter icon here */}
      <div className={iconClass} onClick={openDiv}>
        <Icon icon={icon} size={"12px"} />
      </div>

      <div className={`pdf-holder ${activeStatus ? "pdf-open" : ""}`}>
        <div className="pdf-holder-1">
          <div className="d-flex align-items-center gap-2">
            <div className="pdf-rotate-90 txt-14" onClick={closeDiv}>
              <Icon icon={faArrowRight} size={"12px"} />
            </div>
            <h1>{heading}</h1>
          </div>
          <div>{/* other content */}</div>
        </div>
        <Hr />
        {/* oby section */}
        <div>
          <div className="pdf-holder-2">
            <div>this is page 1</div>
            <Hr />
            <div>this is page 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupDivFull;
