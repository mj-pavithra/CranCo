import React from "react";
// import axios from "../AxiosConfig"
import axios from "../AxiosConfig";
// import "../css/AddNewPage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
const TestingAxios = () => {
  function onclickcaller() {
    // function validateToken() {
    //   axios.post("http://localhost:8081/api/v1/auth/validate-token", {
    //     token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW5ldGhAZW1haWwuY29tIiwiaWF0IjoxNjk3NzI3ODU3LCJleHAiOjE2OTc3MjkyOTd9.TSci2HYEOtV7X4_AJ241_ivdmtUNsaGjuUx73u6PUok"
    //   }).then((response) => {
    //     if (response.status == 200) {
    //       console.log("request ok")
    //       return true;
    //     }
    //     return false;
    //   }).catch((error) => {
    //     return false;
    //   })
    // }
    // var val = validateToken();
    // console.log(val);

    axios
      .get("/api/v1/demo-controller")
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  }

  axios.post("api/v1/somwething", {
    username: "anjuna",
    password: "anjuna123",
  });

  return (
    <>
      <button onClick={onclickcaller}>call request</button>
    </>
  );
};

export default TestingAxios;
