import React from "react";

import { motion } from "framer-motion";

import Timeline from "./Timeline";
import "../App.css";
const About = () => {
  
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-transparent to-purple-900/10" id="about">
      <motion.h1
        className="font1 font-medium text-center text-5xl flex items-center justify-center gap-3 "
        style={{
          marginTop: "70px",
        }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About
        <h2 className="text-center text-5xl text-purple-500">Me</h2>
      </motion.h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        <div
          className="md:w-[120%] lg:w-[60%] w-4/5 text-center md:text-start text-2xl relative top-10 "
          
        >
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="leading-relaxed paraspacing"
            
          >
            Hey there! I'm Rishabh Jain, a Full Stack Developer who loves
            turning ideas into powerful, user-friendly digital experiences. With
            a strong background in computer engineering and a curious mind, I'm
            always exploring new technologies and better ways to build. I enjoy
            collaborating with others, thinking critically, and writing clean,
            efficient code. When I'm not coding, you'll find me either on the
            cricket field or deep in thought over the latest in world affairs.
          </motion.p>
          <div
            className="flex flex-row justify-start md:gap-12  gap-3"
            style={{
              marginTop: "20px",
             
            }}
          >
            <motion.a
              href="#contact"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium font1 relative overflow-hidden text-sm fillbutton"
              
              variants={{
                initial: {
                  scale: 1,
                  opacity: 0,
                  x: -200,
                },
                hover: {
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
                  transition: { duration: 0.2, ease: "easeInOut" },
                },
                tap: { scale: 0.95 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                },
              }}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              whileInView="animate"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="glow border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white rounded-lg font-medium font1 relative overflow-hidden text-sm"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)",
              }}
              variants={{
                initial: {
                  scale: 1,
                  opacity: 0,
                  x: -200,
                },
                hover: {
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
                  transition: { duration: 0.2, ease: "easeInOut" },
                },
                tap: { scale: 0.95 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                },
              }}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              whileInView="animate"
            >
              Contact me
            </motion.a>
          </div>
        </div>

        <Timeline />
      </div>
      
    </div>
  );
};

export default About;
