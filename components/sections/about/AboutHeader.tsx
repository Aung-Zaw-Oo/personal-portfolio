"use client";

import { motion } from "framer-motion";

export default function AboutHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 16,
      },
    },
  } as const;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.p
        variants={childVariants}
        className="mb-2 text-sm font-semibold tracking-widest text-blue-400 uppercase"
      >
        My Story
      </motion.p>

      <motion.h2
        variants={childVariants}
        className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl"
      >
        Building Software
        <span className="text-blue-400"> with Purpose</span>
      </motion.h2>
    </motion.div>
  );
}
