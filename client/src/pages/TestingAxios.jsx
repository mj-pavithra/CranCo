import React from "react";
import axios from "axios";

const TestingAxios = () => {
  function onclickcaller() {
    // const config = {
    //   headers: {
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW5ldGhAZW1haWwuY29tIiwiaWF0IjoxNjk3NjkwMTE1LCJleHAiOjE2OTc2OTE1NTV9.h-Gk1WxA8hxRoWEVhOw3TiJLj1TuHEDpm_9uJiwUJkI",
    //   },
    // };

    // axios
    //   .get("http://localhost:8081/api/v1/demo-controller", config)
    //   .then((response) => {
    //     console.log("Data sent successfully:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending data:", error);
    //   });

    const headers = new Headers({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW5ldGhAZW1haWwuY29tIiwiaWF0IjoxNjk3Njk4ODkyLCJleHAiOjE2OTc3MDAzMzJ9.uSSM6-fHDC97NmZQJgTFRFB9gA83n7cdpbH6Jjs118k",
      "Content-Type": "application/json",
    });

    fetch("http://localhost:8081/api/v1/demo-controller", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <button onClick={onclickcaller}>call request</button>
    </>
  );
};

export default TestingAxios;
