import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  isSignedUp: false,
  error: { status: false, text: "" },
  login: () => {},
  signup: () => {},
  logout: () => {},
  user: { name: "", email: "" },
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState({ status: false, text: "" });
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // Set the default Authorization header for all axios requests
    axios.defaults.headers["token"] = `${token}`;
    // Make subsequent requests using Axios
    axios
      .get("http://localhost:3000/login")
      .then((response) => {
        // Handle response
        console.log(response.data);
        setUser(response.data);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        // Handle error
        console.error("Request failed:", error);
      });
  }, []);

  const login = async (user) => {
    setIsSignedUp(false);
    try {
      const response = await axios.post("http://localhost:3000/login", user);
      if (response.status == 200) {
        setIsLoggedIn(true);
        console.log("Successfully logged in.");
        setUser(response.data.user);
        setError({ status: false, text: "" });
        sessionStorage.setItem("token", response.data.token);
      }
    } catch (err) {
      switch (err.response.status) {
        case 400:
          console.log("Incorrect Password.");
          setError({
            status: true,
            text: "Incorrect Password, Please try again",
          });
          setTimeout(() => {
            setError({ status: false, text: "" });
          }, 5000);
          break;
        case 401:
          console.log("User not found.");
          setError({ status: true, text: "User not found" });
          setTimeout(() => {
            setError({ status: false, text: "" });
          }, 5000);
          break;
        default:
          console.log(err.message);
          break;
      }
    }
  };

  const signup = async (user) => {
    try {
      const response = await axios.post("http://localhost:3000/register", user);
      if (response.status == 200) {
        setIsSignedUp(true);
        setError({ status: false, text: "" });
        setTimeout(() => {
          setIsSignedUp(false);
        }, 5000);
      }
    } catch (err) {
      switch (err.response.status) {
        case 400:
          console.log("User existed.");
          setError({ status: true, text: "User existed" });
          setTimeout(() => {
            setError({ status: false, text: "" });
          }, 5000);
          break;
        default:
          console.log(err.message);
          break;
      }
    }
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUser({ name: "", email: "" });
    sessionStorage.removeItem("token");
    console.log("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        isSignedUp: isSignedUp,
        signup: signup,
        user: user,
        error: error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
