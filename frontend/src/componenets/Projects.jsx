import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import "../App.css";
import SpotlightCard from "./SpotlightCard";
import laptop1 from "../assets/laptop1.png";
import { SiGithub } from "react-icons/si";
import taskify from "../assets/taskify.mp4";
import blogify from "../assets/blogify.mp4";
import AirBnb from "../assets/AirBnb.mp4";
import JobPrep from "../assets/JobPrep.mp4";
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
      <div className="flex justify-center" style={{ marginTop: "10px" }}>
        <motion.h1
          className="flex items-center bg-purple-500 h-1 rounded-full"
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "100px",
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        ></motion.h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:max-w-[80vw] max-w-[90vw] justify-items-center"
        style={{
          margin: "50px auto",
          paddingBottom: "50px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Rishabhjain610/Taskflow">
            <SpotlightCard
              className="custom-spotlight-card h-[900px] w-[300px] sm:h-[1050px] sm:w-[350px] xl:h-[800px] xl:w-[350px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
              spotlightColor="rgba(139, 92, 246, 0.15)"
              data-aos="fade-left"
            >
              <div className="relative h-[36vh] w-[95%]">
                <img
                  src={laptop1}
                  alt="laptop frame"
                  className="absolute h-[37vh] w-full object-contain"
                />
                <video
                  src={taskify}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute lg:top-[13%] lg:left-[14%] lg:w-[72%] lg:h-[58%] object-cover  top-[22%] left-[14%] w-[72%] h-[45%]
                 sm:top-[27%] sm:left-[14%] sm:w-[71%] sm:h-[37%]"
                ></video>
              </div>
              <h1 className="font1 text-3xl ">
                Task<span className="text-purple-500">flow</span>
              </h1>
              <p
                style={{
                  margin: "10px 20px",
                }}
                className="font1 text-gray-300"
              >
                TaskFlow is a minimalistic full-stack To-Do app for adding,
                updating, and deleting daily tasks with a clean, responsive
                design. It ensures security using JWT authentication and bcrypt
                hashing, built with modern technologies.
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
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Rishabhjain610/Blogify">
            <SpotlightCard
              className="custom-spotlight-card h-[900px] w-[300px] sm:h-[1050px] sm:w-[350px] xl:h-[800px] xl:w-[350px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
              spotlightColor="rgba(139, 92, 246, 0.15)"
              data-aos="fade-left"
            >
              <div className="relative h-[36vh] w-[95%]">
                <img
                  src={laptop1}
                  alt="laptop frame"
                  className="absolute h-[37vh] w-full object-contain"
                />
                <video
                  src={blogify}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute lg:top-[13%] lg:left-[14%] lg:w-[71%] lg:h-[59%] object-cover  top-[22%] left-[14%] w-[72%] h-[45%]
                 sm:top-[27%] sm:left-[14%] sm:w-[71%] sm:h-[37%]"
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
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Rishabhjain610/airBnb">
            <SpotlightCard
              className="custom-spotlight-card h-[900px] w-[300px] sm:h-[1050px] sm:w-[350px] xl:h-[800px] xl:w-[350px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
              spotlightColor="rgba(139, 92, 246, 0.15)"
              data-aos="fade-left"
            >
              <div className="relative h-[36vh] w-[95%]">
                <img
                  src={laptop1}
                  alt="laptop frame"
                  className="absolute h-[37vh] w-full object-contain"
                />
                <video
                  src={AirBnb}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute lg:top-[13%] lg:left-[14%] lg:w-[71%] lg:h-[59%] object-cover  top-[22%] left-[14%] w-[72%] h-[45%]
                 sm:top-[27%] sm:left-[14%] sm:w-[71%] sm:h-[37%]"
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
                A full-stack Airbnb clone where users can sign up, log in,
                create listings, book rooms, rate stays, and search places.
                Built with the MERN stack and tools like Multer, Cloudinary,
                Lucide Icons, and React Toastify.
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
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Rishabhjain610/Jobprepfinal">
            <SpotlightCard
              className="custom-spotlight-card h-[900px] w-[300px] sm:h-[1050px] sm:w-[350px] xl:h-[800px] xl:w-[350px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
              spotlightColor="rgba(139, 92, 246, 0.15)"
              data-aos="fade-left"
            >
              <div className="relative h-[36vh] w-[95%]">
                <img
                  src={laptop1}
                  alt="laptop frame"
                  className="absolute h-[37vh] w-full object-contain"
                />
                <video
                  src={JobPrep}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute lg:top-[13%] lg:left-[14%] lg:w-[71%] lg:h-[59%] object-cover  top-[22%] left-[14%] w-[72%] h-[45%]
                 sm:top-[27%] sm:left-[14%] sm:w-[71%] sm:h-[37%]"
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
                Job Prep is an AI-powered platform built with React.js and
                Tailwind CSS to streamline the job search journey. It features
                an AI chatbot for interview prep, an ATS-friendly resume
                builder, and a real-time job search portal.
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
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Rishabhjain610/tesla">
            <SpotlightCard
              className="custom-spotlight-card h-[900px] w-[300px] sm:h-[1050px] sm:w-[350px] xl:h-[800px] xl:w-[350px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
              spotlightColor="rgba(139, 92, 246, 0.15)"
              data-aos="fade-left"
            >
              <div className="relative h-[36vh] w-[95%]">
                <img
                  src={laptop1}
                  alt="laptop frame"
                  className="absolute h-[37vh] w-full object-contain"
                />
                <video
                  src={tesla}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute lg:top-[13%] lg:left-[14%] lg:w-[71%] lg:h-[59%] object-cover  top-[22%] left-[14%] w-[72%] h-[45%]
                 sm:top-[27%] sm:left-[14%] sm:w-[71%] sm:h-[37%]"
                ></video>
              </div>
              <h1 className="font1 text-3xl ">
                Te<span className="text-purple-500">sla</span>
              </h1>
              <p
                style={{
                  margin: "10px 20px",
                }}
                className="font1 text-gray-300"
              >
                A reimagined Tesla website built with modern web tech and
                stunning animations for a next-level frontend experience. Uses
                React Three Fiber, Framer Motion, GSAP, and Tailwind CSS for
                dynamic and immersive UI.
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
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/Rishabhjain610/shiksha">
            <SpotlightCard
              className="custom-spotlight-card h-[900px] w-[300px] sm:h-[1050px] sm:w-[350px] xl:h-[800px] xl:w-[350px]
        bg-transparent shadow-purple-500 shadow-sm flex items-center flex-col  rounded-3xl hover:shadow-md hover:-translate-y-3 transform transition-all duration-300 ease-in-out backdrop-blur-xs"
              spotlightColor="rgba(139, 92, 246, 0.15)"
              data-aos="fade-left"
            >
              <div className="relative h-[36vh] w-[95%]">
                <img
                  src={laptop1}
                  alt="laptop frame"
                  className="absolute h-[37vh] w-full object-contain"
                />
                <video
                  src={Shiksha}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute lg:top-[13%] lg:left-[14%] lg:w-[71%] lg:h-[59%] object-cover  top-[22%] left-[14%] w-[72%] h-[45%]
                 sm:top-[27%] sm:left-[14%] sm:w-[71%] sm:h-[37%]"
                ></video>
              </div>
              <h1 className="font1 text-3xl ">
                Shi<span className="text-purple-500">ksha</span>
              </h1>
              <p
                style={{
                  margin: "10px 20px",
                }}
                className="font1 text-gray-300"
              >
                Shiksha is a secure online exam platform with real-time video
                proctoring, auto-timer, and strict integrity measures. It blocks
                tab switches, minimization, screenshots, copy attempts,
                right-clicks, and console access.
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
                  <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                    Tailwind CSS
                  </span>
                  <span className="font1 space1 bg-purple-500/20 rounded-lg text-sm">
                    Font Awesome
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
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
