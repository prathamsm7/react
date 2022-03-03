import logo from "./logo.svg";
import "./App.css";

function App() {
  let mOS = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  let mM = ["Samsung", "HTC", "Micromax", " Apple"];
  return (
    <div className="App">
      <ul id="os">
        <h1>Mobile Operating System</h1>
        {mOS.map((elem) => {
          return MobileOS(elem);
        })}
      </ul>

      <ul id="mm">
        <h1>Mobile Manufacturers</h1>
        {mM.map((elem) => {
          return MobileOS(elem);
        })}
      </ul>
    </div>
  );
}

function MobileOS(name) {
  return <li>{name}</li>;
}

export default App;
