"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { IoArrowForward, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const bgColor = isDark ? "#121212" : "#F4F4F4";
  const textColor = isDark ? "#E0E0E0" : "#2E2E2E";
  const accentColor = "#4A90E2";
  const secondaryBg = isDark ? "#1a1a1a" : "#ffffff";
  const secondaryTextColor = isDark ? "#B0B0B0" : "#5A5A5A";
  const cardBg = isDark ? "rgba(26, 26, 26, 0.5)" : "rgba(255, 255, 255, 0.5)";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20"
        style={{ backgroundColor: bgColor }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-32 left-20 w-80 h-80 opacity-5 rounded-full"
          style={{ background: accentColor }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-96 h-96 opacity-5 rounded-full"
          style={{ background: accentColor }}
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.span
                className="inline-block text-sm font-semibold"
                style={{ color: accentColor }}
              >
                👋 Hello, I'm
              </motion.span>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ color: textColor }}
              >
                Rishabh <span style={{ color: accentColor }}>Jain</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: secondaryTextColor }}>
                From India
              </h2>
              <p
                className="text-lg leading-relaxed max-w-xl"
                style={{ color: secondaryTextColor }}
              >
                I'm a Tech enthusiast who builds websites and web applications that offer great user
                experiences. I enjoy writing clean code and solving problems creatively.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 6px 20px ${accentColor}40`,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${accentColor}60`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <IoArrowForward size={18} />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                  backgroundColor: "transparent",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `${accentColor}10`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              {[
                { icon: IoLogoGithub, href: "https://github.com/Rishabhjain610" },
                { icon: IoLogoLinkedin, href: "https://linkedin.com/in/rishabhjain610" },
                { icon: IoLogoInstagram, href: "https://instagram.com/rishabh_jain610" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: `${accentColor}25`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration Placeholder */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-80 h-80 rounded-2xl flex items-center justify-center text-7xl"
              style={{
                backgroundColor: `${accentColor}15`,
                border: `2px solid ${accentColor}30`,
              }}
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💻
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: accentColor }}
          >
            <motion.div
              className="w-1 h-2 bg-current rounded-full mt-2"
              style={{ color: accentColor }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: secondaryBg }}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ color: textColor }}
          >
            About <span style={{ color: accentColor }}>Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${isDark ? "rgba(224, 224, 224, 0.1)" : "rgba(46, 46, 46, 0.1)"}`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: textColor }}
              >
                Who I Am
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: secondaryTextColor }}
              >
                A passionate full-stack developer from India with a keen interest in building modern web
                applications. I love working with React, Next.js, and other cutting-edge technologies to
                create seamless user experiences.
              </p>
            </div>

            <div
              className="p-8 rounded-xl"
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${isDark ? "rgba(224, 224, 224, 0.1)" : "rgba(46, 46, 46, 0.1)"}`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: textColor }}
              >
                What I Do
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: secondaryTextColor }}
              >
                When I'm not coding, you'll find me contributing to open source, learning new technologies,
                or sharing knowledge with the developer community. I believe in continuous learning and
                growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: bgColor }}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ color: textColor }}
          >
            Skills & <span style={{ color: accentColor }}>Technologies</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "JavaScript",
              "Python",
              "Git",
              "Docker",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="p-6 rounded-lg text-center font-semibold transition-all duration-300"
                style={{
                  backgroundColor: `${accentColor}15`,
                  color: accentColor,
                  border: `1px solid ${accentColor}30`,
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: `${accentColor}25`,
                  boxShadow: `0 8px 20px ${accentColor}30`,
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: secondaryBg }}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-12"
            style={{ color: textColor }}
          >
            Featured <span style={{ color: accentColor }}>Projects</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              { title: "Project One", desc: "A modern web application with React and Node.js" },
              { title: "Project Two", desc: "Full-stack application with PostgreSQL and Express" },
              { title: "Project Three", desc: "Real-time chat application with Socket.io" },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${isDark ? "rgba(224, 224, 224, 0.1)" : "rgba(46, 46, 46, 0.1)"}`,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 12px 30px ${accentColor}20`,
                }}
              >
                <div
                  className="h-48 flex items-center justify-center text-5xl"
                  style={{
                    backgroundColor: `${accentColor}15`,
                  }}
                >
                  ✨
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: textColor }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: secondaryTextColor }}
                  >
                    {project.desc}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 font-semibold transition-all duration-300"
                    style={{ color: accentColor }}
                    whileHover={{ gap: "8px" }}
                  >
                    View Project
                    <IoArrowForward size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: bgColor }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: textColor }}
          >
            Let's Work <span style={{ color: accentColor }}>Together</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg mb-10"
            style={{ color: secondaryTextColor }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>

          <motion.button
            variants={itemVariants}
            className="px-10 py-4 rounded-lg font-semibold text-white transition-all duration-300"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 6px 20px ${accentColor}40`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 10px 30px ${accentColor}60`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-4 sm:px-6 lg:px-8 border-t text-center"
        style={{
          borderColor: isDark ? "rgba(224, 224, 224, 0.1)" : "rgba(46, 46, 46, 0.1)",
          backgroundColor: secondaryBg,
          color: secondaryTextColor,
        }}
      >
        <p>© 2024 Rishabh Jain. All rights reserved.</p>
      </footer>
    </div>
  );
}