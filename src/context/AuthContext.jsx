import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const AUTO_LOGOUT_TIME = (15 * 60 * 1000); // 15 minutes
  const timeoutRef = useRef(null);

  // Restore from sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [username, setUsername] = useState(sessionStorage.getItem("username") || "");
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");

  // Clear timeout if needed
  const clearExistingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Start auto logout timer
  const startAutoLogoutTimer = () => {
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => {
      logout(true);
    }, AUTO_LOGOUT_TIME);
  };

  // Login method
  const login = (user, authToken) => {
    setIsAuthenticated(true);
    setUsername(user);
    setToken(authToken);

    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("token", authToken);

    startAutoLogoutTimer();
  };

  // Logout method
  const logout = (isAuto = false) => {
    setIsAuthenticated(false);
    setUsername("");
    setToken("");

    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");

    clearExistingTimeout();

    if (isAuto) {
      alert("You have been logged out due to inactivity.");
    }
  };

  // Monitor activity
  useEffect(() => {
    if (isAuthenticated) {
      startAutoLogoutTimer();

      const resetTimer = () => startAutoLogoutTimer();

      window.addEventListener("mousemove", resetTimer);
      window.addEventListener("keydown", resetTimer);
      window.addEventListener("click", resetTimer);

      return () => {
        window.removeEventListener("mousemove", resetTimer);
        window.removeEventListener("keydown", resetTimer);
        window.removeEventListener("click", resetTimer);
        clearExistingTimeout();
      };
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
