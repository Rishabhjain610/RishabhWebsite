import React from "react";
import { motion } from "framer-motion";

const SVGIcons = {
  briefcase: (
    <motion.svg
      viewBox="0 0 512 512"
      width="20"
      height="20"
      fill="#8B5CF6"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v256c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56z" />
    </motion.svg>
  ),
  code: (
    <motion.svg
      viewBox="0 0 640 512"
      width="20"
      height="20"
      fill="#8B5CF6"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
    </motion.svg>
  ),
  users: (
    <motion.svg
      viewBox="0 0 640 512"
      width="20"
      height="20"
      fill="#8B5CF6"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4c73.6 0 133.3 59.7 133.3 133.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
    </motion.svg>
  ),
};

const timelineData = [
  {
    id: 1,
    title: "Marketing Team Member",
    organization: "CSI-TSEC (Computer Society of India) · Part-time",
    duration: "Apr 2024 - Mar 2025 · 1 yr",
    location: "Mumbai, Maharashtra, India · Hybrid",
    icon: "briefcase",
    points: [
      "Secured a snacks partner for TechNext 2024, enhancing event experience.",
      "Brought a technical sponsor for Rubix 2025, supporting the hackathon's success.",
      "Managed sponsorship outreach and built relationships with potential partners.",
      "Contributed to marketing strategies to promote CSI-TSEC events effectively.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    organization: "Avriti · Internship",
    duration: "Nov 2024 - Jan 2025 · 3 mos",
    location: "Remote",
    icon: "code",
    points: [
      "Improved UI/UX and responsiveness, enhancing user experience.",
      "Optimized performance, leading to 100+ new visitors per month.",
      "Developed dynamic React.js components for better engagement.",
      "Collaborated with teams for seamless UI integration.",
    ],
  },
  {
    id: 3,
    title: "Tech SCOM",
    organization: "GDG TSEC · Part-time",
    duration: "Apr 2025 - Present · 3 mos",
    location: "Mumbai, Maharashtra, India · Hybrid",
    icon: "users",
    points: [
      "Managed technical aspects of student community.",
      "Organized workshops and technical events.",
      "Collaborated with other technical teams.",
      "Enhanced community engagement through activities.",
    ],
  },
];

const Timeline2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 30,
      x: i % 2 === 0 ? -50 : 50,
      scale: 0.8,
      filter: "blur(10px)",
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 360,
      x: "-50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(139,92,246,0.05) 50%, rgba(0,0,0,0) 100%)",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "64px 24px",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background:
              "linear-gradient(180deg, transparent, #8B5CF6, transparent)",
            transform: "translateX(-50%)",
            opacity: 0.3,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {timelineData.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              custom={index}
              variants={itemVariants}
              style={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                padding: "32px 0",
                position: "relative",
                "@media (max-width: 768px)": {
                  justifyContent: "flex-start",
                },
              }}
            >
              <motion.div
                variants={iconVariants}
                style={{
                  position: "absolute",
                  left: "50%",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(30,30,30,0.9)",
                    border: "3px solid #A347F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(163,71,246,0.4)",
                  }}
                >
                  
                  {SVGIcons[item.icon]}
                </div>
              </motion.div>

              <motion.div
                style={{
                  width: "45%",
                  backdropFilter: "blur(10px)",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #A347F6",
                  "@media (max-width: 768px)": {
                    width: "calc(100% - 64px)",
                    marginLeft: "64px",
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  
                  boxShadow: "0 8px 15px #A347F6",
                }}
                transition={{ duration: 0.3 }}
                className="bg-transparent "
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#A347F6",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#e5e7eb",
                    marginBottom: "8px",
                    fontSize: "1rem",
                  }}
                >
                  {item.organization}
                </p>
                <p
                  style={{
                    color: "#A347F6",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "4px",
                  }}
                >
                  {item.duration}
                </p>
                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.875rem",
                    marginBottom: "16px",
                  }}
                >
                  {item.location}
                </p>
                <ul
                  style={{
                    listStyle: "disc",
                    paddingLeft: "1.25rem",
                    color: "#e5e7eb",
                  }}
                >
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      style={{
                        fontSize: "0.875rem",
                        marginBottom: "4px",
                        lineHeight: "1.4",
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Timeline2;
