import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isAuth, user } = useContext(AuthContext);

  return (
    <div className="App">
      <h1>{isAuth ? `Welcome ${user.email} !` : `Please Log In`}</h1>
      <Navbar />
    </div>
  );
}

export default App;
