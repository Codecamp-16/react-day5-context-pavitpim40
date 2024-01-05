import { createContext, useState } from 'react';

const END_POINT = 'https://paybox-wnfo.onrender.com/auth';

// S1
export const AuthContext = createContext();

// S2 : Provider
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // login
  const login = (email, password) => {
    fetch(`${END_POINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailOrMobile: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.user);
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
      });
  };
  // logout
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
