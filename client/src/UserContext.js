import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    image: "",
    usernames: "",
  });

  const fetchUserData = () => {
    // backend API call
    setTimeout(() => {
      setUserData({
        image: "/girl.png",
        username: "Kaveesha Gunawardana",
      });
    }, 1000); // 1s delay for API call
  };

  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
