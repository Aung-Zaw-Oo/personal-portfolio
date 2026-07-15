"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Skill {
  name: string;
  level: string;
}

interface Theme {
  icon: string;
  bg: string;
  level: string;
  hover: string;
}

interface Props {
  title: string;
  icon: IconDefinition;
  skills: Skill[];
  theme: Theme;
}

export default function SkillCard({ title, icon, skills, theme }: Props) {
  // Entrance stagger orchestration
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  // Skill line transition
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  } as const;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-xl transition-all duration-300 ${theme.hover}`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${theme.bg} ${theme.icon}`}
      >
        <FontAwesomeIcon icon={icon} />
      </motion.div>

      {/* Title */}
      <h3 className="mb-6 font-heading text-xl font-bold text-white">
        {title}
      </h3>

      {/* Skills */}
      <ul className="space-y-4">
        {skills.map((skill) => (
          <motion.li
            key={skill.name}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group flex items-center justify-between"
          >
            <span className="text-sm text-zinc-300 transition-colors duration-200 group-hover:text-white">
              {skill.name}
            </span>

            <span
              className={`rounded-md border border-zinc-800/40 bg-zinc-950/40 px-2 py-0.5 font-mono text-xs font-semibold transition-colors duration-200 group-hover:border-zinc-700/50 ${theme.level}`}
            >
              {skill.level}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
