import "./App.css";

import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import MerchantRegistrationPage from "./pages/MerchantRegistrationPage";
// import ViewVehicleDetails from "./components/ViewVehicleDetails";
// import EditVehicleDetails from "./components/EditVehicleDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/viewvehciledetails" element={<ViewVehicleDetails />} /> */}
            {/* <Route path="/editvehciledetails" element={<EditVehicleDetails />} /> */}
          </Route>
          <Route path="/registration">
            <Route path="/registration/user" element={<UserRegistrationPage />} />
            <Route path="/registration/merchant" element={<MerchantRegistrationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// comment from kaveesha