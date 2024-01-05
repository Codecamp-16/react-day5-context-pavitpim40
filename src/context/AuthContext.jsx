import { createContext, useState } from 'react';

// S1
export const AuthContext = createContext();

// S2 : Provider
export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  // login
  const login = (email, password) => {
    if (email === 'codecamp@gmail.com' && password === '123456') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  // logout
  const logout = () => {
    setIsLogin(false);
  };
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
