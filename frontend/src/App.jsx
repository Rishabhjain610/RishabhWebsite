import React from "react";
import "./App.css";
import Bg from "./componenets/Bg"; // Fixed typo in folder name
import Preloader from "./componenets/Preloader";

const App = () => {
  return (
    <div >
     <Bg/>
     <Preloader/>
    </div>
  );
};

export default App;