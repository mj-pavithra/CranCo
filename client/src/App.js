// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "../src/containers/MainContainer";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import LoginPage from "./pages/LoginPage"; // Import the LoginPage component
import AllVehiclePhotos from "./pages/AllVehiclePhotos";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page outside of MainContainer */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes inside MainContainer */}
        <Route
          path="/homepage"
          element={
            <MainContainer>
              <HomePage />
            </MainContainer>
          }
        />
        <Route
          path="/vehicles"
          element={
            <MainContainer>
              <VehiclesPage />
            </MainContainer>
          }
        />
        <Route
          path="/allvehiclephotos"
          element={
            <MainContainer>
              <AllVehiclePhotos />
            </MainContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
