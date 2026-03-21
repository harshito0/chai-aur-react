import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
