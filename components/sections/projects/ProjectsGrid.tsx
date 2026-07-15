"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "./types";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  // Ultra-responsive spring dynamics for positional shifts
  const layoutSpring = {
    type: "spring",
    stiffness: 350,
    damping: 32,
  } as const;

  // Handles the container's initial fade-in and child orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.35,
        delayChildren: 0.15,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 24,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      y: 12,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as const;

  return (
    <motion.div
      layout="position"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      transition={layoutSpring}
      className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            variants={cardVariants}
            exit="exit"
            // layoutId maps layout shifts between renders without tearing
            layoutId={project.id.toString()}
            className="w-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
