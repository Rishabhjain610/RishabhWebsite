import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import Timeline from "./Timeline";
import "../App.css";
import SpotlightCard from "./SpotlightCard";
import laptop1 from "../assets/laptop1.png";
import { SiGithub } from "react-icons/si";
import taskify from "../assets/taskify.mp4"; // Add this with other imports
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
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:max-w-[80vw] max-w-[90vw]"
        style={{
          margin: "50px auto",
          paddingBottom: "50px",
        }}
      >
        <SpotlightCard
          className="custom-spotlight-card h-[800px] w-[350px] bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        >
          {/* <div className="relative h-[50vh] w-full">
            <img 
              src={laptop1} 
              alt="laptop frame" 
              className="h-[50vh] w-full object-contain"
            />
            <video
              src={taskify}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-[21%] left-[16%] w-[68%] h-[42%] object-fill rounded-lg"
            ></video>
          </div> */}
          <div className="relative h-[50vh] w-full">
            <img
              src={laptop1}
              alt="laptop frame"
              className="h-[50vh] w-full object-contain"
            />
            <video
              src={taskify}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-[22%] left-[16%] w-[68%] h-[42%] object-cover rounded-lg"
            ></video>
          </div>
          <h1 className="font1 text-3xl ">
            Task<span className="text-purple-500">Flow</span>
          </h1>
          <p
            style={{
              margin: "10px 20px",
            }}
            className="font1 text-gray-300"
          >
            TaskFlow is a simple and minimalistic full-stack To-Do application
            that allows users to add, update, and delete their daily tasks.
            Built with modern technologies, it ensures security with JWT
            authentication and bcrypt hashing, while being fully responsive and
            clean in design.
          </p>

          <div style={{ margin: "10px 20px 0px 20px" }}>
            <h2
              className="font1 font-bold text-xl "
              style={{
                marginBottom: "10px",
                color: "#b5b5b5a4",
              }}
            >
              Tech Stack:
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                React JS
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                Node JS
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                Express JS
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                Mongo DB
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                CORS
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                React-tsparticle
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                Tailwind CSS
              </span>
              <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                JWT
              </span>
            </div>
            <a
              href="https://github.com/Rishabhjain610/Taskflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center  text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
              <div className="flex items-center justify-center">
                <SiGithub
                  size={32}
                  className="bg-black rounded-full p-1"
                  style={{
                    marginTop: "20px",
                  }}
                />
              </div>
            </a>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[500px] w-[350px] bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col justify-center rounded-3xl hover:shadow-lg hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[500px] w-[350px] bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col justify-center rounded-3xl hover:shadow-lg hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[500px] w-[350px] bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col justify-center rounded-3xl hover:shadow-lg hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[500px] w-[350px] shadow-purple-500 shadow-sm flex items-center flex-col justify-center rounded-3xl hover:shadow-lg hover:-translate-y-3 transform transition-all duration-300 ease-in-out bg-transparent backdrop-blur-xs"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        ></SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card h-[500px] w-[350px] bg-transparent backdrop-blur-xs shadow-purple-500 shadow-sm flex items-center flex-col justify-center rounded-3xl hover:shadow-lg hover:-translate-y-3 transform transition-all duration-300 ease-in-out"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        ></SpotlightCard>
      </div>
    </div>
  );
};

export default Skills;
