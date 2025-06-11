import React from "react";
import "./App.css";
import Bg from "./componenets/Bg";
import Preloader from "./componenets/Preloader";
import Navbar from "./componenets/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Bg />
  <Preloader />
      <Navbar />
      
    </div>
  );
};

export default App;