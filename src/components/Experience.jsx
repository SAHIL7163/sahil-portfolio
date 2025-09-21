import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const ExperienceDetails = ({ role, company, time, tech, points }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-lg lg:text-2xl">
          {role} – <span className="text-indigo-800">{company}</span>
        </h3>
        <span className="capitalize font-semibold text-indigo-600/75">
          {time}
        </span>
        <p className="font-medium text-sm lg:text-md mt-2">
          <span className="font-semibold">Tech Stack:</span> {tech}
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm lg:text-md font-medium">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="flex flex-col items-center pb-32 w-full">
      <h2 className="pt-20 text-5xl font-bold text-indigo-900 mb-20">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        {/* Vertical timeline line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-indigo-800 origin-top"
        />

        <ul className="w-full flex flex-col gap-8">
          <ExperienceDetails
            role="Associate Software Developer"
            company="ASQI (FarmApp)"
            time="January 2025 – Present"
            tech="React, Python, Django REST Framework, PostgreSQL, Redis, Celery, Docker"
            points={[
              "Developed subscription-based weather alert system delivering forecasts to 5,000 users in 8 languages.",
              "Automated alerts using Celery, Scrapy, and webhooks, integrated with WhatsApp messaging.",
              "Improved database performance by 40% by resolving N+1 query issues in PostgreSQL.",
              "Designed a web crawler using Scrapy to extract over 30,000 soil health records from government portal.",
              "Developed automated weekly admin reports with usage analytics, delivered as PDFs via email.",
            ]}
          />
          <ExperienceDetails
            role="Full Stack Developer Intern"
            company="ASQI (FarmApp)"
            time="July 2024 – December 2024"
            tech="React, Python, Django REST Framework, PostgreSQL"
            points={[
              "Implemented soft delete and password reset features, reducing account recovery time by 50%.",
              "Developed farmer onboarding, profile management, transfer features, and role-based access control.",
              "Created a biochar interest management dashboard with filtering, sorting, and status tracking.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
