import React from "react";

import { motion } from "framer-motion";

import Timeline from "./Timeline";
import "../App.css";
import SpotlightCard from "./SpotlightCard";
const About = () => {
  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };
  return (
    <div
      className="sm:min-h-[120vh] min-h-[240vh] bg-gradient-to-b from-transparent to-purple-900/10"
      id="about"
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
        About
        <h2 className="text-center text-5xl text-purple-500">Me</h2>
      </motion.h1>

      <div
        className="flex flex-col md:flex-row items-center justify-center gap-8 "
        style={{
          margin: "40px 40px 0px 40px",
        }}
      >
        <motion.div
          className="flex flex-col sm:w-[50%] md:w-full lg:w-[50%] border-1 border-purple-500  rounded-2xl hover:shadow-md shadow-purple-500 transition-all duration-300 ease-in-out bg-purple-500/8 sm:h-[65vh] box1 lg:h-[60vh]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          
          
        >
          <motion.div
            className="w-full nunito text-xl text-center  sm:text-start sm:text-2xl "
            style={{ padding: "40px 20px"}}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey there! I'm Rishabh Jain, a Full Stack Developer who loves
            turning ideas into powerful, user-friendly digital experiences. With
            a strong background in computer engineering and a curious mind, I'm
            always exploring new technologies and better ways to build. I enjoy
            collaborating with others, thinking critically, and writing clean,
            efficient code. When I'm not coding, you'll find me either on the
            cricket field or deep in thought over the latest in world affairs.
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row  gap-5 mt-4 button1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1DV-irLeae0jWaRLNNyeMvwzPm8aqvXoB/view?usp=sharing"
              className="glow bg-purple-500 hover:bg-purple-600 text-white 
              rounded-lg font-medium font1 relative overflow-hidden text-center text-sm"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
              variants={buttonHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="glow border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white rounded-lg font-medium font1 text-center relative overflow-hidden text-sm"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)",
              }}
              variants={buttonHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <Timeline />
      </div>
    </div>
  );
};

export default About;
