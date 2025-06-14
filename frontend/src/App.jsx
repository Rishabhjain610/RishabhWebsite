import React, { useState, useEffect } from "react";
import "./App.css";
import Bg from "./componenets/Bg";
import Preloader from "./componenets/Preloader";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import About from "./componenets/About";
import gsap from "gsap";
import Skills from "./componenets/Skills";
import Projects from "./componenets/Projects";

// Register GSAP plugins

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader />

      <div className="min-h-[600vh] text-white overflow-hidden">
        <Bg />
        
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects/>
      
      </div>
    </>
  );
};

export default App;
