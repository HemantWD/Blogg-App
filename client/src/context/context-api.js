import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );

  const loginUser = async (credentials) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/api/login`,
      credentials
    );
    setAuthUser(response.data);
  };

  const logoutUser = async (credentials) => {
    await axios.post(`${process.env.REACT_APP_API}/api/logout`, credentials);
    setAuthUser(null);
  };

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
