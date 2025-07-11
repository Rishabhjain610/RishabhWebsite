import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import "../App.css";

import Timeline3 from "../componenets/TimeLine3";

const Experience = () => {
  return (
    <div
      className="min-h-[100vh] bg-gradient-to-b from-transparent to-purple-900/10"
      id="work"
    >
      <motion.h1
        className="font1 font-medium text-center text-[45px] flex items-center justify-center gap-3 "
        style={{
          marginTop: "70px",
        }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My
        <h2 className="text-center text-[45px] text-purple-500">Experience</h2>
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
      <div className="mt-7" style={{
        marginTop: "40px",
        paddingBottom: "40px"
      }}>
        <Timeline3 />
      </div>
    </div>
  );
};

export default Experience;
