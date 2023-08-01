// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import VehiclesPage from "./pages/VehiclesPage";
import LoginPage from "./pages/LoginPage";
import AllVehiclePhotos from "./pages/AllVehiclePhotos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/allvehiclephotos" element={<AllVehiclePhotos />} />
      </Routes>
    </Router>
  );
};

export default App;
