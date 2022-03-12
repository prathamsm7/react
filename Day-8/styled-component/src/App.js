import logo from "./logo.svg";
import "./App.css";
import { Buttons } from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Buttons bg="blue" border="none" color="white">
        Primary Button
      </Buttons>
      <Buttons border="solid">Default Button</Buttons>
      <Buttons border="dashed">Dashed Button</Buttons>
      <Buttons color="#ff006e">Text Button</Buttons>
      <Buttons>
        <a href="https://www.google.com">Link Button</a>
      </Buttons>
    </div>
  );
}

export default App;
