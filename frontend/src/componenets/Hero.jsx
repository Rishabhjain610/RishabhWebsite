
import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import '../App.css'; // Ensure you have the correct path to your CSS file
const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const pulseVariant = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 5, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden text-white ">
      <div ref={containerRef} className="container relative z-10 mx-auto max-w-7xl">
        {/* Background elements with animation */}
        <AnimatePresence>
          {isInView && (
            <>
              {/* <motion.div 
                className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full opacity-10 filter blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5 }}
                variants={pulseVariant}
              /> */}
              <motion.div 
                className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 filter blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                variants={pulseVariant}
              />
              <motion.div 
                className="absolute top-40 left-1/3 w-40 h-40 bg-pink-500 rounded-full opacity-10 filter blur-lg"
                initial={{ opacity: 0, scale: 1}}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </>
          )}
        </AnimatePresence>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left column with text */}
          <motion.div 
            className="w-full md:w-3/5 mb-12 md:mb-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-lg md:text-3xl font-medium text-purple-400 mb-3 "
              variants={childVariant}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={childVariant}
            >
              Rishabh Jain
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-3xl font-semibold text-gray-300 mb-8 h-14 font1"
              variants={childVariant}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Software Engineer',
                  2000,
                  'Backend Developer',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={true}

                style={{ display: 'inline-block' }}
              />
            </motion.div>
            
            <motion.p 
              className="text-base md:text-lg text-gray-400 mb-8 max-w-xl"
              variants={childVariant}
            >
              {/* I craft responsive websites and web applications that deliver exceptional user experiences. 
              Passionate about clean code and creative problem-solving. */}
              I’m a Tech enthusiast who builds websites and web applications that offer great user experiences. 
              I enjoy writing clean code and solving problems creatively.
            </motion.p>
            
            <motion.div 
              className="flex gap-8 my-[100px]"
              variants={staggerChildren}
            >
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                variants={childVariant}
              >
                Contact Me
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                variants={childVariant}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 gap-6"
              variants={staggerChildren}
            >
              <motion.a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -5, color: "#ffffff" }}
                variants={childVariant}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -5, color: "#0077b5" }}
                variants={childVariant}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -5, color: "#1DA1F2" }}
                variants={childVariant}
              >
                <FaTwitter size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right column with profile image/animation */}
          
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, 8, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;