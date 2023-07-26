import "./App.css";

import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserRegistrationPage from "./pages/UserRegistrationPage";
import MerchantRegistrationPage from "./pages/MerchantRegistrationPage";
import FriendsPage from "./pages/FriendsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
// comment from kaveesha