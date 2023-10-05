
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || '');
  const isAuthenticated = !!token;

  const loginUser = (newToken) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
