import React from "react";
import "./css/App.css";
import "./css/Main.scss";
import { Gallery } from "./Pages/Gallery";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
