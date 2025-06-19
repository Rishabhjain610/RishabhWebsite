import React from "react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import emailjs from "@emailjs/browser";
import "../App.css"; // Ensure you have the correct path to your CSS file

const Contact = () => {
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS Public Key:", publicKey);
    if (!publicKey) {
      console.error("Missing public key");
      setError("EmailJS configuration error");
    } else {
      emailjs.init(publicKey);
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError("Missing EmailJS configuration");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );
      if (result.text === "OK") {
        setStatus("success");
        form.current.reset();
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setError("Failed to send message. Try again later.");
    }
  };
  return (
    <div
      className="min-h-[100vh] bg-gradient-to-b from-transparent to-purple-900/10"
      id="contact"
    >
      <motion.h1
        className="font1 font-medium text-center text-5xl flex items-center justify-center gap-3"
        style={{
          marginTop: "70px",
        }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
        <h2 className="text-center text-5xl text-purple-500">Me</h2>
      </motion.h1>

      <div
        className="flex flex-col md:flex-row items-center justify-center gap-10"
        style={{
          margin: "50px 30px",
        }}
      >
        <motion.div
          className="w-full bg-transparent backdrop-blur-xs border-1 border-purple-500 rounded-2xl hover:shadow-md shadow-purple-500 transition-all duration-300 ease-in-out"
          style={{ margin: "20px 50px" ,
            padding:"40px 20px"
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-xl nunito sm:text-2xl tracking-wider md:text-start">
            Thank you for visiting,whether you have a question, collaboration
            idea, or just want to say hello, I’d be delighted to hear from you.
            Feel free to use the form below or send me a message directly,I
            typically respond within 24 hours.For inquiries related to projects,
            partnerships, or anything else, please don't hesitate to reach out.
            I look forward to connecting with you and exploring how we can work
            together!
          </p>

          <motion.div
            className="grid grid-cols-3 gap-4 max-w-[500px] mx-auto"
            style={{
              marginTop: "40px",
              position: "relative",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/rishabhjain610/"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <motion.svg
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </motion.svg>
              <span className="hidden lg:flex font1">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/Rishabhjain610"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <motion.svg
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </motion.svg>
              <span className="hidden lg:flex font1">GitHub</span>
            </motion.a>

            <motion.a
              href="https://wa.me/918433943227"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <motion.svg
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </motion.svg>
              <span className="hidden lg:flex font1">WhatsApp</span>
            </motion.a>

            <motion.a
              href="https://instagram.com/rishabh_jain610"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <motion.svg
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </motion.svg>
              <span className="hidden lg:flex font1">Instagram</span>
            </motion.a>

            <motion.a
              href="https://t.me/rishabhjain610"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <motion.svg
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </motion.svg>
              <span className="hidden lg:flex font1">Telegram</span>
            </motion.a>

            <motion.a
              href="mailto:rishabhjainwork1@gmail.com"
              className="glow bg-purple-500 hover:bg-purple-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                padding: "12px 24px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              }}
            >
              <motion.svg
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </motion.svg>
              <span className="hidden lg:flex font1">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpotlightCard
            className="custom-spotlight-card bg-transparent backdrop-blur-xs font1  flex flex-col justify-center items-center md:block"
            spotlightColor="rgba(139, 92, 246, 0.15)"
            style={{ padding: "2rem" }}
          >
            <h1
              className="text-4xl font-bold mb-6 text-center font1 text-purple-500"
              style={{
                marginTop: "20px",
              }}
            >
              Send me a message
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
              style={{ padding: "1.5rem" }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  className="block text-md font-medium mb-2"
                  htmlFor="name"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-purple-500/5 border border-purple-500/20 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ padding: "0.75rem 1rem" }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  className="block text-md font-medium mb-2"
                  htmlFor="email"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-purple-500/5 border border-purple-500/20 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ padding: "0.75rem 1rem" }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  className="block text-md font-medium mb-2"
                  htmlFor="message"
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  id="message"
                  className="w-full px-4 py-2 rounded-lg bg-purple-500/5 border border-purple-500/20 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ padding: "0.75rem 1rem" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-purple-500 hover:bg-purple-600 
  text-white font-medium transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                style={{
                  padding: "0.875rem 1.5rem",
                }}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <motion.svg
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                    </motion.svg>
                  </>
                )}
              </button>

              {status === "success" && (
                <p
                  className="text-green-500 text-center"
                  style={{ marginTop: "1rem" }}
                >
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p
                  className="text-red-500 text-center"
                  style={{ marginTop: "1rem" }}
                >
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
     <p class="text-center text-white font1" style={{
      padding:"20px"
     }}>
  Made with <span class="text-purple-500ray-700">&#128156;</span> by Rishabh Jain
</p>

    </div>
  );
};

export default Contact;
