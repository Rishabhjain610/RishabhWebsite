import React,{useEffect,useRef} from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import Timeline from "./Timeline";
import "../App.css";
import SpotlightCard from "./SpotlightCard";


const Skills = () => {
   
  return (
    <div
      className="min-h-[100vh] bg-gradient-to-b from-transparent to-purple-900/10"
      id="skills"
    >
      <motion.h1
        className="font1 font-medium text-center text-5xl flex items-center justify-center gap-3 "
        style={{
          marginTop: "70px",
        }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My
        <h2 className="text-center text-5xl text-purple-500">Projects</h2>
      </motion.h1>
      
    </div>
  );
};

export default Skills;
