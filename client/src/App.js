// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "../src/containers/MainContainer";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import LoginPage from "./pages/LoginPage"; // Import the LoginPage component

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
        {/* Add more protected routes here */}
      </Routes>
    </Router>
  );
};

export default App;
