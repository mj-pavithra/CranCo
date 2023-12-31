import React from "react";
import "../css/LoginPageContainer.css";

const LoginPageContainer = ({ children }) => {
  return (
    <>
      <body>
        <div className="d-flex">
          <div className="side-div left-side color-white">
            <div className="d-flex flex-column initial-message-holder gap-4">
              <img
                src="/assets/logo_white.png"
                alt="CranCo"
                className="login_logo"
              />
              <div className="main-title">
                Join Our
                <br />
                Community
              </div>
              <div>Revelutionaizing the Vehicle Enthusiast Community.</div>
            </div>
          </div>
          <div className="side-div right-side">{children}</div>
        </div>
      </body>
    </>
  );
};

export default LoginPageContainer;
