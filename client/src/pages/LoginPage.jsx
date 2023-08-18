import React from "react";
import LoginInput from "../components/LoginInput";
import Checkbox from "../components/Checkbox";
import Btn from "../components/Btn";
import LoginPageContainer from "../containers/LoginPageContainer";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <div className="layout-cont-4">
        <div className="layout-cont-3">
          <div className="section-1">
            <div className="sec1-message" style={{ fontSize: "30px" }}>
              <b>Login to CranCo</b>
            </div>
          </div>
          <div className="layout-cont-2">
            <form className="layout-cont-1" action="">
              <div>
                <LoginInput
                  name={"Username"}
                  placeholder={"Enter your username"}
                  type={"text"}
                  style={{ color: "#FFFFFF" }}
                />
              </div>
              <div>
                <LoginInput
                  name={"Password"}
                  placeholder={"Enter your password"}
                  type={"password"}
                  style={{ color: "#FFFFFF" }}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row gap-3 color-transparent-white">
                  <Checkbox name={"remember_password"} id={"12"} />{" "}
                  <span>Remember me</span>
                </div>
                <div className="color-primary">
                  <Link className="main-link color-primary">
                    Reset password
                  </Link>
                </div>
              </div>
              <div className="pt-3">
                <Btn type={"submit"} buttonText={"Login"} width="fluid" />
              </div>
            </form>

            <div className="color-white txt-09 d-flex flex-column align-items-center">
              <div>
                Don't have an account?{" "}
                <Link
                  className="main-link color-primary"
                  to="/registration/user"
                >
                  {" "}
                  Create an account
                </Link>
              </div>
              <div>
                Are you a business?{" "}
                <Link
                  className="main-link color-primary"
                  to="/registration/merchant"
                >
                  Get started here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginPageContainer>
  );
};

export default LoginPage;
