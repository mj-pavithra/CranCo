import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import Checkbox from "../components/Checkbox";
import Btn from "../components/Btn";
import LoginPageContainer from "../containers/LoginPageContainer";

const RegistrationPageUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    birth_date: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <LoginPageContainer>
      <div className="layout-cont-4">
        <div className="layout-cont-3">
          <div className="section-1">
            <div className="sec1-message">Sign in to CranCo</div>
          </div>
          <div className="layout-cont-2">
            <form
              className="layout-cont-1"
              id="registration-form"
              onSubmit={handleSubmit}
            >
              <div>
                <LoginInput
                  name="name"
                  placeholder="Enter your user name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <LoginInput
                  name="birth_date"
                  placeholder="Enter your birthday"
                  type="date"
                  value={formData.birth_date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <LoginInput
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              {/* Rest of the form */}
              <div className="pt-3">
                <Btn type="submit" buttonText="login" width="fluid" />
              </div>
            </form>

            {/* Rest of the component */}
          </div>
        </div>
      </div>
    </LoginPageContainer>
  );
};

export default RegistrationPageUser;
