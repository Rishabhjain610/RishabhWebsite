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
        <ul className="flex gap-6 xl:gap-10">
          <li>
            <a
              href="#home"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaUser className="text-lg" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaCode className="text-lg" />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaLaptopCode className="text-lg" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaBriefcase className="text-lg" />
              <span>Work</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </a>
          </li>
          <li className="" style={{ paddingRight: "45px" }}>
            <a
              href="https://drive.google.com/file/d/1DV-irLeae0jWaRLNNyeMvwzPm8aqvXoB/view?usp=sharing"
              className="nav-link flex items-center gap-2 py-2 hover:text-purple-500 transition-colors duration-300"
            >
              <FaFileAlt className="text-lg" />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="lg:hidden mr-6 flex items-center">
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
              <a
                href="#home"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaHome className="text-xl" />
                <span className="text-lg">Home</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#about"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaUser className="text-xl" />
                <span className="text-lg">About</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#skills"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaCode className="text-xl" />
                <span className="text-lg">Skills</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#projects"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaLaptopCode className="text-xl" />
                <span className="text-lg">Projects</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#work"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaBriefcase className="text-xl" />
                <span className="text-lg">Work</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaEnvelope className="text-xl" />
                <span className="text-lg">Contact</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="https://drive.google.com/file/d/1DV-irLeae0jWaRLNNyeMvwzPm8aqvXoB/view?usp=sharing"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaFileAlt className="text-xl" />
                <span className="text-lg">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )} */}
      <div className="lg:hidden mr-6 flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`relative w-8 h-8 flex flex-col justify-center items-center`} style={{left:"-20px"}}>
            <span
              className={`block absolute h-0.5 w-5 bg-white rounded transition-all duration-300
                ${isOpen ? "rotate-45 top-4" : "top-2"}
              `}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-white rounded transition-all duration-300
                ${isOpen ? "opacity-0" : "top-4"}
              `}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-white rounded transition-all duration-300
                ${isOpen ? "-rotate-45 top-4" : "top-6"}
              `}
            ></span>
          </div>
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
              <a
                href="#home"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaHome className="text-xl" />
                <span className="text-lg">Home</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#about"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaUser className="text-xl" />
                <span className="text-lg">About</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#skills"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaCode className="text-xl" />
                <span className="text-lg">Skills</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#projects"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaLaptopCode className="text-xl" />
                <span className="text-lg">Projects</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#work"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaBriefcase className="text-xl" />
                <span className="text-lg">Work</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
                <FaEnvelope className="text-xl" />
                <span className="text-lg">Contact</span>
              </a>
            </li>
            <li className="mobile-nav-item px-8 py-2 rounded-lg w-full">
              <a
                href="https://drive.google.com/file/d/1DV-irLeae0jWaRLNNyeMvwzPm8aqvXoB/view?usp=sharing"
                className="flex w-full items-center justify-center gap-3 hover:text-purple-500"
                onClick={toggleMenu}
              >
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
