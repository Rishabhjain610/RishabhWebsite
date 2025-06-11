import React, { useState } from "react";
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
// For custom animation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white flex items-center justify-between fixed top-0 left-0 w-full z-50 bg-blur text-base font-medium">
      <div>
        <img
          src={LogoRj}
          alt="Rishabh Jain Logo"
          style={{
            height: "25px",
            margin: "30px",
          }}
        />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center mr-6">
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
          <li style={{
            paddingRight: "25px"
          }}>
            <a href="#resume" className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300">
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center mr-6">
        <button 
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full text-center bg-opacity-95">
          <ul className="flex flex-col py-4">
            <li className="px-6 py-2">
              <a href="#home" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaHome className="text-lg" />
                <span>Home</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#about" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaUser className="text-lg" />
                <span>About</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#skills" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaCode className="text-lg" />
                <span>Skills</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#projects" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaLaptopCode className="text-lg" />
                <span>Projects</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#work" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaBriefcase className="text-lg" />
                <span>Work</span>
              </a>
            </li>
            <li className="px-6 py-2">
              <a href="#contact" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaEnvelope className="text-lg" />
                <span>Contact</span>
              </a>
            </li>
            <li className="px-6 py-2 pr-10">
              <a href="#resume" className="nav-link flex items-center gap-2 hover:text-purple-500 transition-colors duration-300">
                <FaFileAlt className="text-lg" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;