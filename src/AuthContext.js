import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = async (username, password) => {
    try {
        if(username==="barath@gmail.com" && password==="123456"){
            setIsAuthenticated(true);
        }    
    } catch (error) {
      console.error('Error during login:', error);
      setIsAuthenticated(false);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export { AuthProvider, useAuth, AuthContext };