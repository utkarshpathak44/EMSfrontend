import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const userContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  isSuperUser: false,
  currentUser: null,
  getUserData: () => {},
  login: () => {},
  logout: () => {},
  getLocalItem: () => {},
  setLocalItem: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [isSuperUser, setIsSuperUser] = useState(localStorage.getItem("isSuperUser") === "true");
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const isLoggedIn = !!token;

  const setLocalItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const getLocalItem = (key) => {
    return localStorage.getItem(key);
  };

  const login = (token, userId, isSuperUser) => {
    setToken(token);
    setUserId(userId);
    setIsSuperUser(isSuperUser);
    setLocalItem("token", token);
    setLocalItem("userId", userId);
    setLocalItem("isSuperUser", isSuperUser);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setIsSuperUser(false);
    setCurrentUser(null);
    localStorage.clear();
    navigate("/login");
  };

  const getUserData = async () => {
    const getUserData = async () => {
        console.log("getUserData() called...");
      
        try {
          const res = await axiosInstance.get("/users/me");
          console.log("🧪 User data from /me:", res.data);
          setCurrentUser(res.data);
        } catch (err) {
          console.error("Failed to fetch current user:", err.message);
          logout();
        }
      };
      
    try {
      const res = await axiosInstance.get("/users/me");
      console.log("🧪 User data from /me:", res.data);
      setCurrentUser(res.data);
    } catch (err) {
      console.error("Failed to fetch current user:", err.message);
      logout();
    }
  };

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  return (
    <userContext.Provider
      value={{
        isLoggedIn,
        token,
        userId,
        isSuperUser,
        currentUser,
        login,
        logout,
        getUserData,
        getLocalItem,
        setLocalItem,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;