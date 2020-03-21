import React from "react";
import "./css/App.css";
import "./css/Main.scss";
import { Gallery } from "./Pages/Gallery";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import ReactGA from "react-ga";

ReactGA.initialize("UA-161537377-1");
ReactGA.pageview(window.location.pathname + window.location.search);

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
