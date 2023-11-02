import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import Checkbox from "../components/Checkbox";
import Btn from "../components/Btn";
import LoginPageContainer from "../containers/LoginPageContainer";
import axios from "axios";
import DataCollectionPopup from "../components/DataCollectionPopup";
import Cookies from "js-cookie";

const RegistrationPageUser = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Manage popup visibility
  const [loadStatus, setLoadStatus] = useState(false);

  const fieldEmptyError = (fieldName) => {
    setErrMessage(fieldName + " is empty");
  };

  const offError = () => {
    setErrMessage("");
  };

  const registerHandle = async () => {
    offError();
    if (firstName === "") {
      fieldEmptyError("First Name");
      return;
    }
    if (lastName === "") {
      fieldEmptyError("Last Name");
      return;
    }
    if (email === "") {
      fieldEmptyError("E-mail");
      return;
    }

    if (password.length < 8) {
      setErrMessage("Password too short");
      return;
    }
    if (password !== password2) {
      setErrMessage("password does not match");
      return;
    }

    const tempusername = `${firstName} ${lastName}`;
    try {
      setLoadStatus(true);
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/register",
        {
          username: tempusername,
          email: email,
          password: password,
        }
      );
      setLoadStatus(false);
      if (response.status != 200) {
        setErrMessage("Internal server error");
        return;
      }

      console.log(response.data);

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

      const redirectURL = Cookies.get("redirect");

      window.location.href = "http://localhost:3000/homepage";
      // Show the popup after successful registration
      // setShowPopup(true);
      setErrMessage("User Registered!");

      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrMessage(error.response.data.message);
      } else {
        setErrMessage("An error occurred.");
      }
    }
  };

  return (
    <LoginPageContainer>
      <div className="layout-cont-4">
        <div className="layout-cont-3">
          <div className="section-1">
            {/* <div className="sec1-message" style={{ color: "30px" }}>
              <b>Sign in to CranCo</b>
            </div> */}
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
              {errMessage === "" ? (
                ""
              ) : (
                <div className="alert alert-danger" role="alert">
                  {errMessage}
                </div>
              )}
              <div className="d-flex justify-content-center gap-2">
                <div>
                  <LoginInput
                    name={"firstName"}
                    placeholder={"Enter first name"}
                    type={"text"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <LoginInput
                    name={"lastName"}
                    placeholder={"Enter last name"}
                    type={"text"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <LoginInput
                  name={"Email"}
                  placeholder={"Enter your E-mail"}
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <LoginInput
                  name={"Password"}
                  placeholder={"Enter your password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <LoginInput
                  name={"Re-Enter password"}
                  placeholder={"Re-Enter password"}
                  type={"password"}
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row gap-3 color-transparent-white">
                  <Checkbox name={"remember_password"} id={"12"} />{" "}
                  <span>Remember me</span>
                </div>
                <div className="color-primary">Reset password</div>
              </div>
              <div className="pt-3">
                <Btn
                  buttonText={"Register"}
                  onClick={registerHandle}
                  width="fluid"
                />
              </div>
            </div>

            <div className="color-white txt-09 d-flex flex-column align-items-center">
              <div>
                Already have an account?{" "}
                <Link className="link-main color-primary" to={"/login"}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the popup */}
      {showPopup && <DataCollectionPopup />}
    </LoginPageContainer>
  );
};

export default RegistrationPageUser;
