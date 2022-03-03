import logo from "./logo.svg";
import "./App.css";

function App() {
  let mOS = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  let mM = ["Samsung", "HTC", "Micromax", " Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {mOS.map((elem) => {
        return MobileOS(elem);
      })}

      <h1>Mobile Manufacturers</h1>
      {mM.map((elem) => {
        return MobileOS(elem);
      })}
    </div>
  );
}

function MobileOS(name) {
  return (
    <div>
      <ul>
        <li>{name}</li>
      </ul>
    </div>
  );
}

export default App;
