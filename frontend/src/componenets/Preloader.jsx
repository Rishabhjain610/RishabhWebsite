
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const svgText = "< Rishabh Jain />";

  // Container animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren" 
      }
    },
    exit: {
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.98,
      transition: { 
        duration: 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96],
        when: "afterChildren",
        staggerChildren: 0.05
      }
    }
  };

  // Text animations
  const textContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  // Letter animations
  const letterVariants = {
    initial: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(8px)" 
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
      transition: { 
        duration: 0.3, 
        ease: "easeIn" 
      }
    }
  };

  // Loader animations
  const loaderGroupVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: svgText.length * 0.05 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      transition: { 
        duration: 0.3,
        ease: "easeIn" 
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center bg-black overflow-hidden px-4"
          style={{ justifyContent: "flex-start", paddingTop: "15vh" }}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Starry background */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="stars-small"></div>
            <div className="stars-medium"></div>
            <div className="stars-large"></div>
          </div>
          
          <div className="flex flex-col items-center justify-center w-full relative z-10">
            {/* Main heading - centered */}
            <motion.svg
              width="100%"
              height="auto"
              viewBox="0 0 1000 250"
              className="w-full max-w-[90vw] min-w-5xl sm:max-w-xl md:max-w-2xl z-10 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              variants={textContainerVariants}
            >
              <defs>
                {/* Enhanced cosmic gradient */}
                <linearGradient id="cosmic-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B8EF" />
                  <stop offset="30%" stopColor="#9B5DE5" />
                  <stop offset="70%" stopColor="#9B5DE5" />
                  <stop offset="100%" stopColor="#00F5D4" />
                </linearGradient>
                
                {/* Space glow effect */}
                <filter id="space-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background text for extra glow effect */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="rgba(255,255,255,0.07)"
                className="font-extrabold font-[Orbitron]"
                style={{
                  fontSize: "clamp(52px, 10.5vw, 104px)",
                  dominantBaseline: "middle",
                  filter: "blur(8px)",
                }}
              >
                {svgText}
              </text>
              
              {/* Main text with cosmic gradient */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="url(#cosmic-gradient)"
                filter="url(#space-glow)"
                className="font-extrabold font-[Orbitron]"
                style={{
                  fontSize: "clamp(50px, 10vw, 100px)",
                  dominantBaseline: "middle",
                }}
              >
                {svgText.split("").map((char, index) => (
                  <motion.tspan
                    key={index}
                    custom={index}
                    variants={letterVariants}
                  >
                    {char}
                  </motion.tspan>
                ))}
              </text>
            </motion.svg>
          </div>
            
          {/* Cosmic loader */}
          <motion.div
            className="flex flex-col items-center relative z-10"
            variants={loaderGroupVariants}
            style={{ marginTop: "clamp(4rem, 10vh, 6rem)" }} 
          >
            {/* Planet and orbit system */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
              {/* Outer orbital ring with glow */}
              <div className="absolute inset-0 border-[3px] border-dashed border-purple-400/40 rounded-full"
                  style={{ 
                    animation: "orbit 12s linear infinite",
                    boxShadow: "0 0 15px rgba(147, 51, 234, 0.15)" 
                  }} />
                  
              {/* Middle orbital ring with glow */}
              <div className="absolute inset-[8px] sm:inset-[10px] border-[3px] border-dashed border-cyan-300/40 rounded-full"
                  style={{ 
                    animation: "orbit 18s linear infinite reverse",
                    boxShadow: "0 0 15px rgba(45, 212, 191, 0.15)" 
                  }} />
                  
              {/* Inner orbital ring with glow */}
              <div className="absolute inset-[20px] sm:inset-[25px] border-[2px] border-dashed border-fuchsia-300/40 rounded-full"
                  style={{ 
                    animation: "orbit 8s linear infinite",
                    boxShadow: "0 0 15px rgba(192, 38, 211, 0.15)" 
                  }} />
              
              {/* Central planet with enhanced glow */}
              <div className="absolute top-1/2 left-1/2 w-14 h-14 sm:w-16 sm:h-16 -ml-7 sm:-ml-8 -mt-7 sm:-mt-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500"
                  style={{ 
                    animation: "pulse 3s ease-in-out infinite",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" 
                  }} />
                  
              {/* Orbiting moon 1 with enhanced glow */}
              <div className="absolute top-0 left-1/2 -ml-2.5 sm:-ml-3 -mt-2.5 sm:-mt-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
                  style={{ 
                    animation: "orbit 5s linear infinite",
                    boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)" 
                  }} />
                  
              {/* Orbiting satellite 1 with enhanced glow */}
              <div className="absolute top-1/2 left-0 -ml-2 sm:-ml-2.5 -mt-2 sm:-mt-2.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-rose-400 to-pink-500"
                  style={{ 
                    animation: "orbit 7s linear infinite reverse",
                    boxShadow: "0 0 15px rgba(244, 114, 182, 0.5)" 
                  }} />
                  
              {/* Orbiting satellite 2 with enhanced glow */}
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-amber-300 to-orange-500"
                  style={{ 
                    animation: "orbitElliptical 9s linear infinite",
                    boxShadow: "0 0 15px rgba(251, 146, 60, 0.5)" 
                  }} />
            </div>
            
            {/* Loading text with enhanced glow */}
            <div 
              className="mt-6 text-cyan-300 text-sm sm:text-base font-[Orbitron] tracking-widest uppercase"
              style={{ 
                animation: "fadeInOut 2s ease-in-out infinite",
                textShadow: "0 0 8px rgba(45, 212, 191, 0.7)" 
              }}
            >
              Loading
            </div>
          </motion.div>

          {/* Animation keyframes */}
          <style>
            {`
              /* Starry background */
              .stars-small, .stars-medium, .stars-large {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: none;
              }
              
              .stars-small {
                background-image: radial-gradient(1px 1px at 50px 160px, white, rgba(0,0,0,0)),
                                 radial-gradient(1px 1px at 40px 200px, rgba(255,255,255,0.5), rgba(0,0,0,0)),
                                 radial-gradient(1.5px 1.5px at 300px 300px, white, rgba(0,0,0,0)),
                                 radial-gradient(1px 1px at 250px 250px, white, rgba(0,0,0,0)),
                                 radial-gradient(1.5px 1.5px at 150px 150px, rgba(255,255,255,0.7), rgba(0,0,0,0)),
                                 radial-gradient(1px 1px at 220px 480px, white, rgba(0,0,0,0));
                background-size: 600px 600px;
                animation: stars-small-motion 200s linear infinite;
              }
              
              .stars-medium {
                background-image: radial-gradient(2px 2px at 200px 100px, white, rgba(0,0,0,0)),
                                 radial-gradient(2px 2px at 150px 150px, rgba(255,255,255,0.6), rgba(0,0,0,0)),
                                 radial-gradient(2.5px 2.5px at 400px 400px, white, rgba(0,0,0,0)),
                                 radial-gradient(1.5px 1.5px at 350px 350px, rgba(255,255,255,0.8), rgba(0,0,0,0));
                background-size: 700px 700px;
                animation: stars-medium-motion 150s linear infinite;
              }
              
              .stars-large {
                background-image: radial-gradient(3px 3px at 120px 120px, rgba(255,255,255,0.9), rgba(0,0,0,0)),
                                 radial-gradient(2.5px 2.5px at 400px 300px, white, rgba(0,0,0,0)),
                                 radial-gradient(3px 3px at 550px 550px, rgba(255,255,255,0.7), rgba(0,0,0,0));
                background-size: 800px 800px;
                animation: stars-large-motion 100s linear infinite;
              }
              
              @keyframes stars-small-motion {
                from { background-position: 0 0; }
                to { background-position: 600px 600px; }
              }
              
              @keyframes stars-medium-motion {
                from { background-position: 0 0; }
                to { background-position: 700px 700px; }
              }
              
              @keyframes stars-large-motion {
                from { background-position: 0 0; }
                to { background-position: 800px 800px; }
              }
              
              @keyframes orbit {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              
              @keyframes orbitElliptical {
                0% { transform: rotate(0deg) translate(-10px) rotate(0deg); }
                100% { transform: rotate(360deg) translate(-10px) rotate(-360deg); }
              }
              
              @keyframes pulse {
                0% { opacity: 0.8; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.08); box-shadow: 0 0 25px rgba(139, 92, 246, 0.8); }
                100% { opacity: 0.8; transform: scale(1); }
              }
              
              @keyframes fadeInOut {
                0% { opacity: 0.5; }
                50% { opacity: 1; }
                100% { opacity: 0.5; }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;