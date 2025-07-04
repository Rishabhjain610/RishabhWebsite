import React, { useState, useEffect } from "react";
import "./App.css";
import Bg from "./componenets/Bg";
import Preloader from "./componenets/Preloader";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import About from "./componenets/About";

import Skills from "./componenets/Skills";
import Projects from "./componenets/Projects";
import Experience from "./componenets/Experience";
import Contact from "./componenets/Contact";

const App = () => {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with your real loading logic)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
    
      <div className="min-h-[600vh] text-white overflow-hidden">
        <Bg />

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      
      </div>
    </>
  );
};

export default App;
