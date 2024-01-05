import { createContext, useState } from 'react';

// S1
export const AuthContext = createContext();

// S2 : Provider
export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
}
