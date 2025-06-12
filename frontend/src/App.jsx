import React, { useState } from "react";
import "./App.css";
import Bg from "./componenets/Bg";
import Preloader from "./componenets/Preloader";
import Navbar from "./componenets/Navbar";
import LandingPage1 from "./componenets/Hero";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-[600vh] text-white">
      <Bg />
      <Preloader  />
    
        
          <Navbar />
          <LandingPage1 />
        
     
    </div>
  );
};

export default App;