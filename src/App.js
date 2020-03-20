import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import "./css/Main.scss";
import { Gallery } from "./Pages/Gallery";
import { Header } from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
