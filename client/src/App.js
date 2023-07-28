// App.js
import React from "react";
import { BrowserRouter as Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import FriendsPage from "../src/pages/FriendsPage";
import Marketplace from "./pages/Marketplace";
import Pages from "./pages/MerchentPage";
import LoginPage from "./pages/LoginPage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import MerchantRegistrationPage from "./pages/MerchantRegistrationPage";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="/registration">
          <Route path="/registration/user" element={<UserRegistrationPage />} />
          <Route path="/registration/merchant" element={<MerchantRegistrationPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
