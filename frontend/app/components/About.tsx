"use client";
import React from "react";
import { IoSchool, IoHome, IoCodeSlash } from "react-icons/io5";

const education = [
  {
    icon: IoHome,
    title: "Class 10th ICSE",
    school: "Goldcrest High School, Vashi",
    year: "2021",
  },
  {
    icon: IoSchool,
    title: "Class 12th HSC",
    school: "Shiravane Vidyalaya & Junior College, Nerul",
    year: "2021–23",
  },
  {
    icon: IoCodeSlash,
    title: "B.E in Computer Engineering",
    school: "Thadomal Shahani Engineering College, Mumbai",
    year: "2023–2027",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#F4F4F4] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#e8e8e8] relative overflow-hidden"
    >
      {/* subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/30 to-transparent" />

      <div className="mx-auto max-w-6xl">

        {/* ── Section label ── */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A90E2] mb-2 font-spaceGrotesk">
            Who I am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk">
            About Me
          </h2>
          <div className="mt-3 h-[2px] w-10 rounded-full bg-[#4A90E2]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Bio ── */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-base md:text-lg leading-relaxed font-spaceGrotesk text-[#3a3a3a] dark:text-[#c8c8c8]">
              Hey there! I'm{" "}
              <span className="font-semibold text-[#1a1a1a] dark:text-white">Rishabh Jain</span>
              , a Full Stack Developer who loves turning ideas into powerful,
              user-friendly digital experiences. With a strong background in
              computer engineering and a curious mind, I'm always exploring
              new technologies and better ways to build.
            </p>

            <p className="text-base md:text-lg leading-relaxed font-spaceGrotesk text-[#3a3a3a] dark:text-[#c8c8c8]">
              I enjoy collaborating with others, thinking critically, and
              writing clean, efficient code. When I'm not coding, you'll find
              me either on the cricket field or deep in thought over the
              latest in world affairs.
            </p>

            {/* quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Built", value: "20+" },
                { label: "Technologies", value: "15+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border border-[#4A90E2]/10 bg-white dark:bg-[#161616]"
                >
                  <div className="text-2xl font-bold text-[#4A90E2] font-spaceGrotesk">
                    {s.value}
                  </div>
                  <div className="text-xs text-[#6b7280] dark:text-[#9ca3af] mt-0.5 font-spaceGrotesk">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm text-white font-spaceGrotesk transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg,#4A90E2,#2f78c6)",
                  boxShadow: "0 6px 20px rgba(74,144,226,0.28)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(74,144,226,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(74,144,226,0.28)";
                }}
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm font-spaceGrotesk border-2 border-[#4A90E2] text-[#4A90E2] bg-transparent transition-all duration-300 hover:bg-[#4A90E2]/8"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* ── RIGHT: Education timeline ── */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A90E2] mb-6 font-spaceGrotesk">
              Education
            </p>

            <div className="relative space-y-0">
              {/* vertical rail */}
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[#4A90E2]/60 via-[#4A90E2]/30 to-transparent" />

              {education.map((edu, i) => (
                <div key={i} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* icon dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#4A90E2,#2f78c6)",
                      boxShadow: "0 4px 14px rgba(74,144,226,0.35)",
                    }}
                  >
                    <edu.icon size={17} className="text-white" />
                  </div>

                  {/* card */}
                  <div
                    className="flex-1 p-4 rounded-xl border bg-white dark:bg-[#161616] border-[#4A90E2]/10 hover:border-[#4A90E2]/30 transition-all duration-300 group"
                  >
                    <h3 className="font-semibold text-sm font-spaceGrotesk text-[#1a1a1a] dark:text-white group-hover:text-[#4A90E2] transition-colors duration-200">
                      {edu.title}
                    </h3>
                    <p className="text-xs text-[#6b7280] dark:text-[#9ca3af] mt-1 font-spaceGrotesk">
                      {edu.school}
                    </p>
                    <span className="mt-2 inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#4A90E2]/10 text-[#4A90E2]">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A90E2]/30 to-transparent" />
    </section>
  );
};

export default About;