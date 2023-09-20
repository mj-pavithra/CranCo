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
// import ViewVehicleDetails from "./components/ViewVehicleDetails";
// import EditVehicleDetails from "./components/EditVehicleDetails";
import RegistrationPageUser from "./pages/RegistrationPageUser";
import RegistrationPageMerchant from "./pages/RegistrationPageMerchant";
import Error404 from "./pages/Error404";
// import LoginPageContainer from "./containers/LoginPageContainer";
import ViewProductPage from "./pages/ViewProductPage";
import MerchantOtherView from "./pages/MerchantOtherView";
import MerchantOwnerView from "./pages/MerchantOwnerView";
import UserProfile from "./pages/UserProfile";
import VehiclesPageOwnersView from "./pages/VehiclesPageOwnersView";
import AdminDashboard from "./pages/AdminDashboard";

// import ProgressBar from "./components/ProgressBar";

import OwnersVehicleProfileAllPhotos from "./pages/OwnersVehicleProfileAllPhotos";
import UserManagement from "./pages/UserManagement";
import PageManagement from "./pages/PageManagement";
import OwneProfile from "./pages/OwneProfile";
import VehicleAboutEditPage from "./pages/VehicleAboutEditPage";
import AddNewPage from "./pages/AddNewPage";
import DataCollection from "./pages/DataCollection";
import VehicleProfileSettings from "./pages/VehicleProfileSettings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/datacollection" element={<DataCollection />} />
          {/* <Route path="/login2" element={<LoginPageContainer />} /> */}

          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/product" element={<ViewProductPage />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/myprofile" element={<OwneProfile />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/allvehiclephotos" element={<AllVehiclePhotos />} />
          <Route path="/addnewpage" element={<AddNewPage />} />
          <Route
            path="/allphotos"
            // element={<OwnersVehicleProfileAllPhotos />}
          />
          <Route
            path="/vehiclespageownersview"
            element={<VehiclesPageOwnersView />}
          />
          <Route
            path="/vehiclespageownersview/settings"
            element={<VehicleProfileSettings />}
          />
          <Route path="/vehicleaboutedit" element={<VehicleAboutEditPage />} />
          <Route path="/merchant" element={<MerchantOtherView />}></Route>
          <Route path="/merchantowner" element={<MerchantOwnerView />}></Route>
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
        <Route path="/admin">
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/usermanagement" element={<UserManagement />} />
          <Route path="/admin/pagemanagement" element={<PageManagement />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
