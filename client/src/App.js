// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "../src/containers/MainContainer";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import FriendsPage from "../src/pages/FriendsPage";

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          {/* Add more Route components here for other pages */}
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default App;
