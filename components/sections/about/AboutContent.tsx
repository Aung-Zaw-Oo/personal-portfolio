"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutCard from "./AboutCard";
import AboutQuote from "./AboutQuote";
import {
  faCode,
  faDatabase,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutContent() {
  // Stagger configurations for container structures
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  // Upward slide and fade-in physics
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  } as const;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-8"
    >
      {/* Story Text Paragraphs */}
      <motion.div variants={itemVariants} className="space-y-6">
        <p className="text-lg leading-relaxed text-slate-200">
          I am a Full Stack Developer with a professional background in banking,
          accounting, and data reporting. My experience working with business
          data helped me understand how technology can solve real operational
          problems.
        </p>

        <p className="leading-relaxed text-slate-300">
          My journey into software engineering started through self-learning and
          continuous practice. Today, I build modern web applications combining
          clean frontend experiences with reliable backend systems.
        </p>

        <p className="leading-relaxed text-slate-300">
          I enjoy transforming ideas into functional products — from designing
          intuitive interfaces to developing APIs, database structures, and
          scalable application logic.
        </p>
      </motion.div>

      {/* Focus Cards Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <div className="transform transition-transform duration-300 hover:-translate-y-1">
          <AboutCard
            icon={faCode}
            title="Frontend Engineering"
            description="
              Building modern interfaces with React, Next.js,
              TypeScript, Tailwind CSS, and component-driven architecture.
            "
          />
        </div>

        <div className="transform transition-transform duration-300 hover:-translate-y-1">
          <AboutCard
            icon={faDatabase}
            title="Backend Development"
            description="
              Designing APIs, authentication systems,
              database solutions, and maintainable application logic.
            "
          />
        </div>
      </motion.div>

      {/* Experience Highlight Card */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-sm shadow-black/20"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
            <span className="text-blue-400">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white">
              Professional Journey
            </h3>

            <p className="text-sm text-slate-300">
              Banking Operations → Software Engineering
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Combining business understanding with technical expertise allows me to
          build software that is not only functional, but also aligned with
          real-world requirements.
        </p>
      </motion.div>

      {/* Quote Component */}
      <motion.div variants={itemVariants}>
        <AboutQuote />
      </motion.div>
    </motion.div>
  );
}
