"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import CodeTerminal from "./CodeTerminal";
import Button from "@/components/ui/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  // Container variant to handle staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Individual child animation sliding upward
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  // Right-side element sliding in from the right
  const terminalVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: 0.4, // Delays terminal slightly so the eye transitions from left to right
      },
    },
  } as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-10"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <Container>
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 lg:col-span-7"
          >
            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Freelance & Contract Work
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl leading-none font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
            >
              Crafting{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              Full Stack Experiences
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
            >
              Hi, I'm <strong className="text-white">Aung Zaw Oo</strong>, a
              Full Stack Developer building modern web applications with clean
              interfaces, scalable architecture, and meaningful user
              experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap gap-4"
            >
              <Button href="#contact" icon={faArrowRight}>
                Start a Project
              </Button>

              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid w-full max-w-md grid-cols-3 gap-8 border-t border-zinc-800 pt-8"
            >
              <div>
                <p className="font-heading text-3xl font-bold">2+</p>
                <p className="text-xs text-zinc-500 uppercase">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="font-heading text-3xl font-bold">3</p>
                <p className="text-xs text-zinc-500 uppercase">Projects</p>
              </div>

              <div>
                <p className="font-heading text-3xl font-bold">100%</p>
                <p className="text-xs text-zinc-500 uppercase">Dedication</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT TERMINAL */}
          <motion.div
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5"
          >
            <CodeTerminal />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
