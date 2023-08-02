// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage"; // Import other page components as needed
import VehiclesPage from "./pages/VehiclesPage";
import AllVehiclePhotos from "./pages/AllVehiclePhotos";
import FriendsPage from "../src/pages/FriendsPage";
import Marketplace from "./pages/Marketplace";
import Pages from "./pages/MerchentPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPageUser from "./pages/RegistrationPageUser";
import RegistrationPageMerchant from "./pages/RegistrationPageMerchant";
import Error404 from "./pages/Error404";
import LoginPageContainer from "./containers/LoginPageContainer";
import ViewProductPage from "./pages/ViewProductPage";
import MerchantOtherView from "./pages/MerchantOtherView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login2" element={<LoginPageContainer />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/product" element={<ViewProductPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/allvehiclephotos" element={<AllVehiclePhotos />} />
          <Route path="/merchant" element={<MerchantOtherView />}></Route>
          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="/registration">
          <Route path="/registration/user" element={<RegistrationPageUser />} />
          <Route
            path="/registration/merchant"
            element={<RegistrationPageMerchant />}
          />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
