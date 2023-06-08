import React, { useContext, useState } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const demoEmail = "demo@demo.com";
  const demoPassword = "demo123";

  const login = async (user) => {
    if (user.email === demoEmail && user.password === demoPassword) {
      console.log("Successfully logged in");
      setIsLoggedIn(true);
      return true;
    } else {
      console.log("Invalid account");
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    console.log("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
