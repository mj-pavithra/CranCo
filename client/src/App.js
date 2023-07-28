// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "../src/containers/MainContainer";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import FriendsPage from "../src/pages/FriendsPage";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import MerchantRegistrationPage from "./pages/MerchantRegistrationPage";

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/">
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/friends" element={<FriendsPage />} />
          </Route>
          <Route path="/registration">
            <Route path="/registration/user" element={<UserRegistrationPage />} />
            <Route path="/registration/merchant" element={<MerchantRegistrationPage />} />
            
          </Route>
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default App;
