"use client";

import { motion } from "framer-motion";

export default function ServicesHeader() {
  // Unified orchestration container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Visual gap between each text block's entry
        delayChildren: 0.1,
      },
    },
  };

  // Fluid physics for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  } as const;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      {/* Eyebrow */}
      <motion.p
        variants={itemVariants}
        className="mb-3 text-sm font-semibold tracking-widest text-violet-400 uppercase select-none"
      >
        My Services
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
      >
        Full Spectrum Freelance Solutions
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-base leading-relaxed font-light text-slate-300"
      >
        Designed to maximize client outcomes. Elevating your vision with
        scalable strategies, immaculate frontends, and dynamic engineering
        support.
      </motion.p>
    </motion.div>
  );
}
