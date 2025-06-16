import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import "../App.css";

import Timeline2 from "./Timeline2";

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
      <div>
        <Timeline2 />
      </div>
    </div>
  );
};

export default Experience;
