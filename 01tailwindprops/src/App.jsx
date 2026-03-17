import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-white p-4">tailwind props</h1>
      <Card username="harshit" btnText="click me" />
      <Card username="jane" btnText="learn more" />
      <Card username="bob" btnText="get started" />
    </>
  );
}

export default App;
