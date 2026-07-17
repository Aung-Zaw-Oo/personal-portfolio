"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SkillCard from "./SkillCard";
import { skills } from "./skills.data";

export default function Skills() {
  // Stagger wrapper for the grid structure
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger delay between each card
      },
    },
  } as const;

  // Upward slide and reveal animation for the section header text
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        staggerChildren: 0.08,
      },
    },
  } as const;

  const headerChildVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  } as const;

  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden border-y border-zinc-900 bg-zinc-950/60 py-24"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.p
            variants={headerChildVariants}
            className="mb-2 text-sm font-semibold tracking-widest text-blue-400 uppercase"
          >
            My Toolkit
          </motion.p>

          <motion.h2
            variants={headerChildVariants}
            className="font-heading text-4xl font-bold text-white sm:text-5xl"
          >
            Technologies I Build With
          </motion.h2>

          <motion.p
            variants={headerChildVariants}
            className="mt-4 text-slate-300"
          >
            A modern technology stack focused on building fast, scalable, and
            maintainable web applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            // Framer Motion handles variants automatically through child components.
            // Since SkillCard (which we upgraded previously) has a variants definition
            // mapping to "hidden" and "visible", we don't need to redeclare variants here.
            <SkillCard key={skill.title} {...skill} />
          ))}
        </motion.div>
      </Container>

      {/* Decorative Subtle Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
    </section>
  );
}
