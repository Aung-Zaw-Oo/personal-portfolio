"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  // Unified animation presets (aligned to hidden -> show keys)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Gap between each element's entry
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  } as const;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show" // Changed from "visible" to "show"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
    >
      {/* Text Content */}
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <motion.span
          variants={itemVariants}
          className="mb-3 block text-sm font-semibold tracking-[0.2em] text-violet-400 uppercase select-none"
        >
          My Work
        </motion.span>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl md:leading-[1.15]"
        >
          Handcrafted Premium{" "}
          <span className="block bg-gradient-to-r from-violet-400 via-indigo-200 to-zinc-400 bg-clip-text text-transparent sm:inline md:block">
            Digital Experiences
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base leading-relaxed font-light text-slate-300"
        >
          Explore a collection of modern web applications, platforms, and
          digital experiences built with thoughtful design, scalable
          architecture, and attention to every detail.
        </motion.p>
      </div>
    </motion.div>
  );
}
