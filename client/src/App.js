// App.js
import React from "react";
import { BrowserRouter as Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import FriendsPage from "../src/pages/FriendsPage";
import Marketplace from "./pages/Marketplace";
import LoginPage from "./pages/LoginPage";
import RegistrationPageUser from "./pages/RegistrationPageUser";
import RegistrationPageMerchant from "./pages/RegistrationPageMerchant";
import Error404 from "./pages/Error404";
import LoginPageContainer from "./containers/LoginPageContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login2" element={<LoginPageContainer ></LoginPageContainer >} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="/registration">
          <Route path="/registration/user" element={<RegistrationPageUser />} />
          <Route path="/registration/merchant" element={<RegistrationPageMerchant />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
