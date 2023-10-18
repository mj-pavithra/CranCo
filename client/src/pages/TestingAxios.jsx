import React from "react";
import axios from "axios";

const TestingAxios = () => {
  function onclickcaller() {
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW5ldGhAZW1haWwuY29tIiwiaWF0IjoxNjk3NDM1ODE4LCJleHAiOjE2OTc0MzcyNTh9.QFzQHNWZjdNFMFzL-0KzI3jeBRxC9quC3e2WX06QYV4",
      },
    };

    axios
      .get("http://localhost:8081/api/v1/demo-controller", config)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

    // const headers = new Headers({
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW5ldGhAZW1haWwuY29tIiwiaWF0IjoxNjk3NDIxMDk2LCJleHAiOjE2OTc0MzU0OTZ9.QsgjMF1Hfl1ckpeA9V2ZNxlp9SCa0mpAZE0wSrdu4rM", // Replace 'Bearer' with your specific authentication type
    //   "Content-Type": "application/json", // Include other headers as needed
    // });

    // fetch("http://localhost:8081/api/v1/demo-controller", {
    //   method: "GET",
    //   headers: headers,
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.text();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  return (
    <>
      <button onClick={onclickcaller}>call request</button>
    </>
  );
};

export default TestingAxios;
