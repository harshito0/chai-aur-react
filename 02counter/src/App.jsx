import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <h1>chai aur react</h1>
      </div>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}> add value</button>
      <br />
      <button onClick={subtractValue}>subtract value</button>
    </>
  );
}

export default App;
