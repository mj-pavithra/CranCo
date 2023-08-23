import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import Checkbox from "../components/Checkbox";
import Btn from "../components/Btn";
import LoginPageContainer from "../containers/LoginPageContainer";
import axios from "axios";

const RegistrationPageUser = () => {
  const registerHandle = async () => {
    try {
      const response = await axios.post("http://localhost:8081/api/users", {
        username: username,
        email: email,
        password: password,
      });
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      if (error.response && error.response.data) {
        setErrMessege(error.response.data);
        console.log(errMessege.message);
      } else {
        setErrMessege("An error occurred.");
      }
    }
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessege, setErrMessege] = useState("");

  return (
    <LoginPageContainer>
      <div className="layout-cont-4">
        <div className="layout-cont-3">
          <div className="section-1">
            <div className="sec1-message" style={{ color: "30px" }}>
              <b>Sign in to CranCo</b>
            </div>
          </div>
          <div className="layout-cont-2">
            <div className="layout-cont-1">
              {errMessege == "" ? (
                ""
              ) : (
                <div class="alert alert-danger" role="alert">
                  {errMessege.message}
                </div>
              )}
              <div>
                <LoginInput
                  name={"Username"}
                  placeholder={"Enter your username"}
                  type={"text"}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div>
                <LoginInput
                  name={"Email"}
                  placeholder={"Enter your E-mail"}
                  type={"email"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <LoginInput
                  name={"Password"}
                  placeholder={"Enter your password"}
                  type={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
    </LoginPageContainer>
  );
};

export default RegistrationPageUser;
