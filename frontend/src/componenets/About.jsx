// import React from 'react'
// import "../App.css";

// const About = () => {
//   return (
//     <div className='' style={{marginTop:"75px"}}>
//       <p className='text-center text-4xl font1'>About Me</p>
//     </div>
//   )
// }

// export default About
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';
import "../App.css";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font1">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg">
              Hi there! I'm Rishabh Jain, a passionate Full Stack Developer with expertise in building modern web applications.
            </p>
            <p className="text-lg">
              With a strong foundation in both frontend and backend technologies, I create seamless, user-centric solutions that make a difference.
            </p>
            <p className="text-lg">
              I specialize in React.js, Node.js, and modern web technologies, always staying up-to-date with the latest industry trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaGraduationCap className="text-4xl text-purple-500" />,
                title: "Education",
                description: "B.Tech in Computer Science",
                details: "2020-2024"
              },
              {
                icon: <FaLaptopCode className="text-4xl text-purple-500" />,
                title: "Experience",
                description: "Full Stack Development",
                details: "2+ years"
              },
              {
                icon: <FaRegLightbulb className="text-4xl text-purple-500" />,
                title: "Projects",
                description: "15+ Completed",
                details: "Web & Mobile Apps"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-purple-900/20 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-purple-400">{item.description}</p>
                  <p className="text-gray-400 text-sm">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/resume.pdf"
            className="inline-block px-8 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;