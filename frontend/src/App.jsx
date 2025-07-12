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
import { motion, useScroll } from "framer-motion";
const App = () => {
  const [loading, setLoading] = useState(true);
  const scrollYprogress = useScroll().scrollYProgress;
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
        <motion.div
          className="h-[3px] w-full bg-purple-500 fixed  left-0 z-50 origin-left shadow-2xl drop-shadow-purple-500 rounded-full"
          style={{ scaleX: scrollYprogress }}
          initial={{ scaleX: 0 }}
        ></motion.div>

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
