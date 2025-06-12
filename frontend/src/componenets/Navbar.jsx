// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaHome,
//   FaUser,
//   FaCode,
//   FaLaptopCode,
//   FaBriefcase,
//   FaEnvelope,
//   FaFileAlt,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import LogoRj from "../assets/LogoRj.png";
// import "../App.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll event

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const navContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const navItem = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };
//   return (
//     <nav
//       className="text-white flex items-center justify-between fixed top-0 left-0 w-[100vw] z-40 bg-transparent backdrop-blur-sm bg-opacity-10
//     text-base font-medium font1 "
//     >
//       <div>
//         <img src={LogoRj} alt="Rishabh Jain Logo" className="navbar-logo" />
//       </div>

//       {/* Desktop Menu - Only visible on lg (1024px) and above */}
//       <div className="hidden lg:flex items-center mr-6">
//         <motion.ul className="flex gap-10" variants={navContainer} initial="hidden" animate="visible">
//           <motion.li variants={navItem}>
//             <a
//               href="#home"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaHome className="text-lg" />
//               <span>Home</span>
//             </a>
//           </motion.li>
//           <motion.li variants={navItem}>
//             <a
//               href="#about"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaUser className="text-lg" />
//               <span>About</span>
//             </a>
//           </motion.li>
//           <motion.li variants={navItem}>
//             <a
//               href="#skills"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaCode className="text-lg" />
//               <span>Skills</span>
//             </a>
//           </motion.li>
//           <motion.li variants={navItem}>
//             <a
//               href="#projects"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaLaptopCode className="text-lg" />
//               <span>Projects</span>
//             </a>
//           </motion.li>
//           <motion.li variants={navItem}>
//             <a
//               href="#work"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaBriefcase className="text-lg" />
//               <span>Work</span>
//             </a>
//           </motion.li>
//           <motion.li variants={navItem}>
//             <a
//               href="#contact"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaEnvelope className="text-lg" />
//               <span>Contact</span>
//             </a>
//           </motion.li>
//           <motion.li className="" style={{ paddingRight: "45px" }} variants={navItem}>
//             <a
//               href="#resume"
//               className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
//             >
//               <FaFileAlt className="text-lg" />
//               <span>Resume</span>
//             </a>
//           </motion.li>
//         </motion.ul>
//       </div>

//       {/* Mobile menu button - Visible on screens below lg */}
//       <div className="lg:hidden mr-6 flex items-center">
//         <button
//           onClick={toggleMenu}
//           className="text-white p-2 focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <FaTimes className="text-2xl" style={{ marginRight: "30px" }} />
//           ) : (
//             <FaBars className="text-2xl" style={{ marginRight: "30px" }} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu - Displayed for screens below lg when toggled */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed top-20 left-0 w-full h-[50vh] "
//           style={{
//             backdropFilter: "blur(200px)",
//             backgroundColor: "rgba(0, 0, 0, 0.9)",
//           }}
//         >
//           <ul className="flex flex-col   justify-evenly h-full w-full">
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg  w-full `}>
//               <a
//                 href="#home"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaHome className="text-xl" />
//                 <span className="text-lg">Home</span>
//               </a>
//             </li>
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg w-full `}>
//               <a
//                 href="#about"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaUser className="text-xl" />
//                 <span className="text-lg">About</span>
//               </a>
//             </li>
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg  w-full `}>
//               <a
//                 href="#skills"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaCode className="text-xl" />
//                 <span className="text-lg">Skills</span>
//               </a>
//             </li>
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg  w-full`}>
//               <a
//                 href="#projects"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaLaptopCode className="text-xl" />
//                 <span className="text-lg">Projects</span>
//               </a>
//             </li>
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg  w-full `}>
//               <a
//                 href="#work"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaBriefcase className="text-xl" />
//                 <span className="text-lg">Work</span>
//               </a>
//             </li>
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg  w-full `}>
//               <a
//                 href="#contact"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaEnvelope className="text-xl" />
//                 <span className="text-lg">Contact</span>
//               </a>
//             </li>
//             <li className={`mobile-nav-item px-8 py-2 rounded-lg  w-full `}>
//               <a
//                 href="#resume"
//                 className="flex w-full items-center justify-center gap-3 hover:text-purple-500 "
//                 onClick={toggleMenu}
//               >
//                 <FaFileAlt className="text-xl" />
//                 <span className="text-lg">Resume</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );

// }
// export default Navbar
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import LogoRj from "../assets/LogoRj.png";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white flex items-center justify-between fixed top-0 left-0 w-[100vw] z-40 bg-transparent backdrop-blur-sm bg-opacity-10 text-base font-medium font1">
      <div>
        <img src={LogoRj} alt="Rishabh Jain Logo" className="navbar-logo" />
      </div>

      
      <div className="hidden lg:flex items-center mr-6">
        <ul className="flex gap-10">
          <li>
            <a href="#home" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaUser className="text-lg" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaCode className="text-lg" />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaLaptopCode className="text-lg" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#work" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaBriefcase className="text-lg" />
              <span>Work</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </a>
          </li>
          <li className="" style={{ paddingRight: "45px" }}>
            <a href="#resume" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>

    
      <div className="lg:hidden mr-6 flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="text-2xl" style={{ marginRight: "30px" }} />
          ) : (
            <FaBars className="text-2xl" style={{ marginRight: "30px" }} />
          )}
        </button>
      </div>

      
      {isOpen && (
        <div
          className="lg:hidden fixed top-20 left-0 w-full h-[50vh]"
          style={{
            backdropFilter: "blur(200px)",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <ul className="flex flex-col justify-evenly h-full w-full">
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#home" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaHome className="text-xl" />
                <span className="text-lg">Home</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#about" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaUser className="text-xl" />
                <span className="text-lg">About</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#skills" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaCode className="text-xl" />
                <span className="text-lg">Skills</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#projects" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaLaptopCode className="text-xl" />
                <span className="text-lg">Projects</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#work" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaBriefcase className="text-xl" />
                <span className="text-lg">Work</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#contact" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaEnvelope className="text-xl" />
                <span className="text-lg">Contact</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a href="#resume" className="flex w-full items-center justify-center gap-3 hover:text-purple-500" onClick={toggleMenu}>
                <FaFileAlt className="text-xl" />
                <span className="text-lg">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;