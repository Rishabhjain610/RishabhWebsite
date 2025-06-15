import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import Timeline from "./Timeline";
import "../App.css";
import SpotlightCard from "./SpotlightCard";
import laptop1 from "../assets/laptop1.png";
import { SiGithub } from "react-icons/si";
import taskify from "../assets/taskify.mp4";
import blogify from "../assets/blogify.mp4";
import AirBnb from "../assets/airbnb.mp4";
import JobPrep from "../assets/jobprep.mp4";
import tesla from "../assets/tesla.mp4";
import Shiksha from "../assets/shiksha.mp4";

const Experience = () => {
  return (
    <div
      className="min-h-[100vh] bg-gradient-to-b from-transparent to-purple-900/10"
      id="work"
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
        <h2 className="text-center text-5xl text-purple-500">Experience</h2>
      </motion.h1>
      
    </div>
  );
};

export default Experience;
