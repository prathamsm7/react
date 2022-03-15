import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const [token, setToken] = useState();

  const handleSignIn = () => {
    axios.post("https://reqres.in/api/login", user).then((res) => {
      setToken(res.data.token);
      setIsAuth(true);
    });
  };

  const handleLogOut = () => {
    setToken("");
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuth, handleLogOut, handleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
