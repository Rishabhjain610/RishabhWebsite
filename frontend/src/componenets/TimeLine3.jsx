import React, { useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "../index.css";

const TimeLine3 = () => {
  return (
    <div>
      <VerticalTimeline
        animate={true}
        lineColor="linear-gradient( rgba(0,0,0,0.4) 0%, rgba(168,85,247,0.7) 40%, rgba(0,0,0,0.4) 100%)"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "transparent",
            border: "1px solid #A855F7",
            backdropFilter: "blur(3px)",
            borderRadius: "12px",
            boxShadow: "none",
            color: "#fff",
          }}
          shadowSize={0}
          contentArrowStyle={{ borderRight: "10px solid #A855F7" }}
          date="Apr 2024 - Mar 2025 · 1 yr"
          dateClassName="datecolor"
          iconStyle={{
            backdropFilter: "blur(10px)",
            color: "#fff",
            borderColor: "#A855F7",
            border: "2px solid #A855F7",
          }}
          icon={
            <motion.svg
              viewBox="0 0 640 512"
              width="20"
              height="20"
              fill="#A855F7"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4c73.6 0 133.3 59.7 133.3 133.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </motion.svg>
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              color: "#A855F7",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Marketing Team Member
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              color: "#e5e7eb",
              marginTop: "8px",
              marginBottom: "-5px",
            }}
          >
            CSI-TSEC (Computer Society of India) · Part-time
          </h4>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginTop: "6px",
            }}
          >
            Mumbai, Maharashtra, India · Hybrid
          </p>
          <ul
            style={{
              color: "#e5e7eb",
              paddingLeft: "1.25rem",
              marginTop: "4px",
            }}
            className="list-disc"
          >
            <li>
              Secured a snacks partner for TechNext 2024, enhancing event
              experience.
            </li>
            <li>
              Brought a technical sponsor for Rubix 2025, supporting the
              hackathon's success.
            </li>
            <li>
              Managed sponsorship outreach and built relationships with
              potential partners.
            </li>
            <li>
              Contributed to marketing strategies to promote CSI-TSEC events
              effectively.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Marketing Team Member */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            border: "1px solid #A855F7",
            backdropFilter: "blur(3px)",
            borderRadius: "12px",
            boxShadow: "none",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid #A855F7" }}
          date="Nov 2024 - Feb 2025 · 3 months"
          dateClassName="datecolor"
          iconStyle={{
            backdropFilter: "blur(10px)",
            color: "",
            borderColor: "#A855F7",
            border: "2px solid #A855F7",
          }}
          shadowSize={0}
          icon={
            <motion.svg
              viewBox="0 0 640 512"
              width="20"
              height="20"
              fill="#A855F7"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </motion.svg>
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              color: "#A855F7",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Frontend Developer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              color: "#e5e7eb",
              marginTop: "8px",
              marginBottom: "-5px",
            }}
          >
            Avriti International Pvt Ltd· Internship
          </h4>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginTop: "6px",
            }}
          >
            Remote
          </p>
          <ul
            style={{
              color: "#e5e7eb",
              paddingLeft: "1.25rem",
              marginTop: "4px",
            }}
            className="list-disc"
          >
            <li>
              Improved UI/UX and responsiveness, enhancing user experience.
            </li>
            <li>
              Optimized performance, leading to 100+ new visitors per month.
            </li>
            <li>
              Developed dynamic React.js components for better engagement.
            </li>
            <li>Collaborated with teams for seamless UI integration.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Frontend Developer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            border: "1px solid #A855F7",
            backdropFilter: "blur(3px)",
            borderRadius: "12px",
            boxShadow: "none",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid #A855F7" }}
          date="July 2025 - Aug 2025 · 1 month"
          dateClassName="datecolor"
          shadowSize={0}
          iconStyle={{
            backdropFilter: "blur(10px)",
            color: "#fff",
            borderColor: "#A855F7",
            border: "2px solid #A855F7",
          }}
          icon={
            <motion.svg
              viewBox="0 0 640 512"
              width="20"
              height="20"
              fill="#A855F7"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4c73.6 0 133.3 59.7 133.3 133.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </motion.svg>
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              color: "#A855F7",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Full Stack Developer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              color: "#e5e7eb",
              marginTop: "8px",
              marginBottom: "-5px",
            }}
          >
            Ignito Corporation · Part-time
          </h4>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginTop: "6px",
            }}
          >
            Indore, Madhya pradesh, India · Remote
          </p>
          <ul
            style={{
              color: "#e5e7eb",
              paddingLeft: "1.25rem",
              marginTop: "4px",
            }}
            className="list-disc"
          >
            <li>
              {" "}
              Built inventory & analytics system with Next.js, Chart.js, Shadcn
              and led a team of three.
            </li>
            <li>
              Developed single-page responsive website using Next.js, Motion,
              Shadcn
            </li>
            <li>
              Managed client-related queries to ensure smooth communication and
              support.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            border: "1px solid #A855F7",
            backdropFilter: "blur(3px)",
            borderRadius: "12px",
            boxShadow: "none",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid #A855F7" }}
          date="Apr 2025 - Present"
          dateClassName="datecolor"
          shadowSize={0}
          iconStyle={{
            backdropFilter: "blur(10px)",
            color: "#fff",
            borderColor: "#A855F7",
            border: "2px solid #A855F7",
          }}
          icon={
            <motion.svg
              viewBox="0 0 640 512"
              width="20"
              height="20"
              fill="#A855F7"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352h117.4c73.6 0 133.3 59.7 133.3 133.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </motion.svg>
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              color: "#A855F7",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Senior Tech Team Member
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              color: "#e5e7eb",
              marginTop: "8px",
              marginBottom: "-5px",
            }}
          >
            GDG TSEC · Part-time
          </h4>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginTop: "6px",
            }}
          >
            Mumbai, Maharashtra, India · Hybrid
          </p>
          <ul
            style={{
              color: "#e5e7eb",
              paddingLeft: "1.25rem",
              marginTop: "4px",
            }}
            className="list-disc"
          >
            <li>Managed technical aspects of student community.</li>
            <li>Organized workshops and technical events.</li>
            <li>Collaborated with other technical teams.</li>
            <li>Enhanced community engagement through activities.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Tech SCOM */}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine3;
