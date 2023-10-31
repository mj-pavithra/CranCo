import React, { useState } from "react";
import LoginInput from "../components/LoginInput";
import Checkbox from "../components/Checkbox";
import Btn from "../components/Btn";
import LoginPageContainer from "../containers/LoginPageContainer";
import { Link } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessege, setErrMessege] = useState("");
  const [loadStatus, setLoadStatus] = useState(false);

  const loginHandle = async () => {
    try {
      setLoadStatus(true);
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/authenticate",
        {
          username: email,
          password: password,
        }
      );
      setErrMessege("invalid username or password");
      console.log(response.data);

      // save data from response as cookies
      Cookies.set("token", response.data.access_token);
      Cookies.set("refreshToken", response.data.refresh_token);
      Cookies.set("user_id", response.data.user_id);
      Cookies.set("user_email", response.data.user_email);
      Cookies.set("user_name", response.data.user_name);

      console.log(
        "everythinsaved fine",
        Cookies.get("token"),
        Cookies.get("refreshToken"),
        Cookies.get("user_id"),
        Cookies.get("user_email"),
        Cookies.get("user_name")
      );
      setLoadStatus(false);
      window.location.href = "http://localhost:3000/homepage";
    } catch (error) {
      console.log(sessionStorage.getItem("username"));
      if (error.response && error.response.data) {
        setErrMessege("Incorrect user name or password");
        console.log(errMessege.message, "this is the error");
      } else {
        setErrMessege("An error occurred.");
      }
      setLoadStatus(false);
    }
  };

  return (
    <LoginPageContainer>
      {/* <div className="load-effect-login active"></div> */}
      <div className="layout-cont-4">
        <div className="layout-cont-3">
          <div className="section-1">
            <div className="sec1-message" style={{ fontSize: "30px" }}>
              <b>Login to CranCo</b>
            </div>
          </div>
          <div className="layout-cont-2">
            <div className="layout-cont-1">
              {loadStatus ? (
                <div className="d-flex justify-content-center">
                  <div className="loader-animation-login"></div>
                </div>
              ) : (
                ""
              )}

              {errMessege == "" ? (
                ""
              ) : (
                <div class="alert alert-danger" role="alert">
                  {errMessege.message}
                </div>
              )}

              <div>
                <LoginInput
                  name={"email"}
                  placeholder={"Enter your username"}
                  type={"text"}
                  style={{ color: "#FFFFFF" }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log("called");
                  }}
                  value={email}
                />
              </div>
              <div>
                <LoginInput
                  name={"password"}
                  placeholder={"Enter your password"}
                  type={"password"}
                  style={{ color: "#FFFFFF" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
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
                <Btn
                  type={"submit"}
                  buttonText={"Login"}
                  width="fluid"
                  onClick={loginHandle}
                />
              </div>
            </div>

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
