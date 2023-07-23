import { BrowserRouter } from "react-router-dom";
import UserSidebar from "./Components/UserSidebar";
import "./App.css";
import { useEffect, useState } from "react";

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
    <BrowserRouter>
      <div className="App">
        <UserSidebar image={userData.image} username={userData.username} />
      </div>
    </BrowserRouter>
  );
}

export default App;
