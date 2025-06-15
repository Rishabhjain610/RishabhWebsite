import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaCode } from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    title: "Class 10th ICSE",
    organization: "Goldcrest High School, Vashi",
    duration: "2021",
    icon: <FaSchool className="w-6 h-6 text-purple-400" />,
  },
  {
    id: 2,
    title: "Class 12th HSC",
    organization: "Shiravane Vidyalaya & Junior College, Nerul",
    duration: "2021-23",
    icon: <FaUniversity className="w-6 h-6 text-purple-400" />,
  },
  {
    id: 3,
    title: "B.E in Computer Engineering",
    organization: "Thadomal Shahani Engineering College, Mumbai",
    duration: "2023-2027",
    icon: <FaCode className="w-6 h-6 text-purple-400" />,
  },
];

const ResponsiveTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: -50,
      y: 20,
      transition: {
        delay: i * 0.3,
      },
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.3,
      },
    }),
  };

  const iconVariants = {
    hidden: (i) => ({
      scale: 0,
      rotate: -180,
      transition: {
        delay: i * 0.3,
      },
    }),
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: i * 0.3,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="timeline1"
      style={{
        position: "relative",
        maxWidth: "768px",
        margin: "0 auto",
        padding: "48px 16px",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        style={{
          position: "absolute",
          left: "32px",
          height: "100%",
          width: "4px",
          background:
            "linear-gradient(to bottom, transparent, #a855f7, transparent)",
        }}
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        style={{ display: "flex", flexDirection: "column", gap: "80px" }}
      >
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={itemVariants}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                left: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transformOrigin: "center",
              }}
              custom={index}
              variants={iconVariants}
              whileHover="hover"
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#5b21b6",
                  borderRadius: "9999px",
                  border: "2px solid #a855f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
            </motion.div>

            <motion.div
              style={{ marginLeft: "80px", flex: 1 }}
              custom={index}
              variants={itemVariants}
            >
              <motion.div
                style={{
                  backgroundColor: "rgba(128, 90, 213, 0.125)",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  padding: "20px",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 4px 20px rgba(168, 85, 247, 0.2)",
                }}
                transition={{ duration: 0.2 }}
                className="hover:border-purple-500/40 hover:shadow-md hover:shadow-purple-500/50"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-medium mb-1">
                  {item.organization}
                </p>
                <p className="text-purple-500 text-sm">{item.duration}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ResponsiveTimeline;
