import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";


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

const Skills = () => {
  return (
    <div
      className="min-h-[100vh] bg-gradient-to-b from-transparent to-purple-900/10"
      id="projects"
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
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
          <SpotlightCard
            className="custom-spotlight-card h-[850px] w-[350px] md:h-[1000px] lg:h-[800px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
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
                className="absolute lg:top-[22%] lg:left-[16%] lg:w-[68%] lg:h-[42%] object-cover  top-[24%] left-[16%] w-[67%] h-[40%] 
               md:top-[32%] md:left-[16%] md:w-[68%] md:h-[27%]
              "
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
              authentication and bcrypt hashing, while being fully responsive
              and clean in design.
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            className="custom-spotlight-card h-[850px] w-[350px] md:h-[1000px] lg:h-[800px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
            spotlightColor="rgba(139, 92, 246, 0.15)"
            data-aos="fade-left"
          >
            <div className="relative h-[50vh] w-full">
              <img
                src={laptop1}
                alt="laptop frame"
                className="h-[50vh] w-full object-contain"
              />
              <video
                src={blogify}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[24%] left-[16%] w-[67%] h-[40%] object-cover 
               md:top-[32%] md:left-[16%] md:w-[68%] md:h-[27%]
               lg:top-[22%] lg:left-[16%] lg:w-[68%] lg:h-[42%]"
              ></video>
            </div>
            <h1 className="font1 text-3xl ">
              Blog<span className="text-purple-500">ify</span>
            </h1>
            <p
              style={{
                margin: "10px 20px",
              }}
              className="font1 text-gray-300"
            >
              Blogify is a full-stack blog application that allows users to
              create, read, update, and delete blog posts. It features secure
              authentication, rich text content management, and supports image
              uploads using Multer. 
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
                  Multer
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Tailwind CSS
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  JWT
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Bcrypt
                </span>
              </div>
              <a
                href="https://github.com/Rishabhjain610/Blogify"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            className="custom-spotlight-card h-[850px] w-[350px] md:h-[1000px] lg:h-[800px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
            data-aos="fade-left"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
            <div className="relative h-[50vh] w-full">
              <img
                src={laptop1}
                alt="laptop frame"
                className="h-[50vh] w-full object-contain"
              />
              <video
                src={AirBnb}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[24%] left-[16%] w-[67%] h-[40%] object-cover 
               md:top-[32%] md:left-[16%] md:w-[68%] md:h-[27%]
               lg:top-[22%] lg:left-[16%] lg:w-[68%] lg:h-[42%]"
              ></video>
            </div>
            <h1 className="font1 text-3xl ">
              Air<span className="text-purple-500">Bnb</span>
            </h1>
            <p
              style={{
                margin: "10px 20px",
              }}
              className="font1 text-gray-300"
            >
              A full-stack Airbnb web application where users can sign up, log
              in, create and manage listings, book rooms, rate places, search
              listings, and more. Built with the MERN stack and modern tools
              like Multer, Cloudinary, Lucide Icons, and React Toastify.
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
                  Cloudinary
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Tailwind CSS
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  JWT
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Cookie-parser
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  React-Toast
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Multer
                </span>
              </div>
              <a
                href="https://github.com/Rishabhjain610/airbnb"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            className="custom-spotlight-card h-[850px] w-[350px] md:h-[1000px] lg:h-[800px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
            <div className="relative h-[50vh] w-full">
              <img
                src={laptop1}
                alt="laptop frame"
                className="h-[50vh] w-full object-contain"
              />
              <video
                src={JobPrep}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[24%] left-[16%] w-[67%] h-[40%] object-cover 
               md:top-[32%] md:left-[16%] md:w-[68%] md:h-[27%]
               lg:top-[22%] lg:left-[16%] lg:w-[68%] lg:h-[42%]"
              ></video>
            </div>
            <h1 className="font1 text-3xl ">
              Job<span className="text-purple-500">Prep</span>
            </h1>
            <p
              style={{
                margin: "10px 20px",
              }}
              className="font1 text-gray-300"
            >
              Job Prep is an AI-powered platform built with React.js and
              Tailwind CSS that streamlines the job search journey.It has a AI
              chatbot for interview preparation to boost skills & doubt solving.
              The integrated AI resume builder generates ATS-friendly resumes in
              minutes.A built-in real time job serch portal.
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
                  FireBase
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                  Gemini Api
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                  Rapid Api
                </span>

                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Tailwind CSS
                </span>
              </div>
              <a
                href="https://github.com/Rishabhjain610/Jobprepfinal"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            className="custom-spotlight-card h-[850px] w-[350px] md:h-[1000px] lg:h-[800px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
            <div className="relative h-[50vh] w-full">
              <img
                src={laptop1}
                alt="laptop frame"
                className="h-[50vh] w-full object-contain"
              />
              <video
                src={tesla}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[24%] left-[16%] w-[67%] h-[40%] object-cover 
               md:top-[32%] md:left-[16%] md:w-[68%] md:h-[27%]
               lg:top-[22%] lg:left-[16%] lg:w-[68%] lg:h-[42%]"
              ></video>
            </div>
            <h1 className="font1 text-3xl ">
              Tes<span className="text-purple-500">la</span>
            </h1>
            <p
              style={{
                margin: "10px 20px",
              }}
              className="font1 text-gray-300"
            >
              A reimagined version of Tesla's official website built using
              modern web technologies and breathtaking animations. This project
              focuses on creating a next-level frontend experience using
              cutting-edge libraries like React Three Fiber, Framer Motion,
              GSAP, and Tailwind CSS.
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
                  Three JS
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                  GSAP
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Tailwind CSS
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                  Framer Motion
                </span>
              </div>
              <a
                href="https://github.com/Rishabhjain610/tesla"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            className="custom-spotlight-card h-[850px] w-[350px] md:h-[1000px] lg:h-[800px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
            spotlightColor="rgba(139, 92, 246, 0.15)"
          >
            <div className="relative h-[50vh] w-full">
              <img
                src={laptop1}
                alt="laptop frame"
                className="h-[50vh] w-full object-contain"
              />
              <video
                src={Shiksha}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-[24%] left-[16%] w-[67%] h-[40%] object-cover 
               md:top-[32%] md:left-[16%] md:w-[68%] md:h-[27%]
               lg:top-[22%] lg:left-[16%] lg:w-[68%] lg:h-[42%]"
              ></video>
            </div>
            <h1 className="font1 text-3xl ">
              Shik<span className="text-purple-500">sha</span>
            </h1>
            <p
              style={{
                margin: "10px 20px",
              }}
              className="font1 text-gray-300"
            >
              Shiksha is a secure online exam platform that enforces integrity
              by detecting tab switches, browser minimization, screenshots, copy
              attempts, right‑click and console access, and auto‑terminating the
              test when any unauthorized action occurs, with an auto‑timer and
              real‑time live video monitoring for full proctoring.
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
                  HTML
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                  CSS
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                  JavaScript
                </span>
                <span className="font1 space1 bg-purple-500/20 rounded-lg text-xs">
                  Tailwind CSS
                </span>
              </div>
              <a
                href="https://github.com/Rishabhjain610/shiksha"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
