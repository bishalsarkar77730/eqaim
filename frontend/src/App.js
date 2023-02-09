import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="home">
        <Home />
      </div>
    </div>
  );
};

export default App;
