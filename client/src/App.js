import UserSidebar from "./Components/UserSidebar";
import "./App.css";
import { useEffect, useState } from "react";
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import HomePage from "./pages/HomePage";

function App() {
  const [userData, setUserData] = useState({
    image: "",
    username: "",
  });
  const fetchUserData = () => {
    // backend to fetch user data
    setUserData({
      image: "../public/girl.png",
      username: "Kaveesha Gunawardana",
    });
  };

  // fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <div className="App">
        <UserSidebar image={userData.image} username={userData.username} />
      </div>
    </BrowserRouter>
=======
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HelloWorld />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> bcd079bb880605bc338d25c1dc8b46f3542639b6
  );
}

export default App;
