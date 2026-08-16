// components/sections/services/ServicesHeader.tsx

"use client";

import { motion } from "framer-motion";

export default function ServicesHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

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
      className="mx-auto mb-16 max-w-3xl text-center"
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
        id="services-heading"
        variants={itemVariants}
        className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
      >
        Full Stack Web Development Services
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-base leading-relaxed font-light text-slate-300"
      >
        I build modern, responsive web applications and business systems using
        React, Next.js, TypeScript, Node.js, NestJS, and modern database
        technologies — from frontend interfaces and REST APIs to CMS, ERP, CRM,
        and data-driven applications.
      </motion.p>
    </motion.div>
  );
}
