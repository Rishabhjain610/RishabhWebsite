import React, { useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "../index.css";
import Hero3 from "../assets/Hero3.png";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const pulseVariant = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 5, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };

  const iconHoverVariants = {
    hover: { scale: 1.2, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };
  const scrollIndicatorVariant = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: [0.4, 1, 0.4],
      y: [0, 6, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[150vh] md:min-h-screen px-4 py-20 overflow-hidden text-white bg-gradient-to-b from-transparent to-purple-900/20"
    >
      <div
        ref={containerRef}
        className="container relative z-10 mx-auto max-w-7xl"
      >
        <AnimatePresence>
          {isInView && (
            <>
              <motion.div
                className="absolute bottom-30 left-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 filter blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.div
                className="absolute top-40 md:top-60 left-1/3 w-40 h-40 bg-pink-500 rounded-full opacity-10 filter blur-lg"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.3, scale: 1 }}
                variants={pulseVariant}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div
            className="w-full relative top-[-40px] md:top-[10px] md:w-3/5 mb-12 md:mb-0"
            style={{
              ["@media (min-width: 1024px)"]: {
                paddingLeft: "45px",
              },
              padding: "10px 15px",
            }}
          >
            <h2 className="text-3xl font-medium text-purple-400 mb-3">
              Hello, I'm
            </h2>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Rishabh Jain
            </h1>

            <div className="text-xl md:text-3xl font-semibold text-gray-300 mb-8 h-14 font1">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block", marginTop: "10px" }}
              />
            </div>

            <p className="text-base md:text-lg text-gray-400 max-w-xl">
              I'm a Tech enthusiast who builds websites and web applications
              that offer great user experiences. I enjoy writing clean code and
              solving problems creatively.
            </p>

            <div className="flex gap-8 " style={{ marginTop: "25px" }}>
              <motion.a
                href="#contact"
                className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium font1 relative overflow-hidden"
                style={{
                  padding: "12px 24px",
                  boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
                }}
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.a>

              <motion.a
                href="#projects"
                className="glow border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white rounded-lg font-medium font1 relative overflow-hidden"
                style={{
                  padding: "12px 24px",
                  boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)",
                }}
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                View Projects
              </motion.a>
            </div>

            <div className="flex gap-6" style={{ marginTop: "20px" }}>
              <motion.a
                href="https://github.com/Rishabhjain610"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                variants={iconHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rishabhjain610/"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                variants={iconHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com/rishabh_jain610"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                variants={iconHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaInstagram size={24} />
              </motion.a>
            </div>
          </div>
          <div className="relative w-[300px] top-10 md:top-0 md:w-[500px]">
            <img
              src={Hero3}
              alt="Hero illustration"
              className="w-full h-auto "
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            variants={scrollIndicatorVariant}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
