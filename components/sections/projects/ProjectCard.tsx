"use client";

import { motion } from "framer-motion";
import { Project } from "./types";
import ProjectPreview from "./ProjectPreview";
import ProjectTech from "./ProjectTech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Arrow slide variant configuration
  const arrowVariants = {
    initial: { x: 0, y: 0 },
    hover: { x: 3, y: -3 },
  };

  return (
    <motion.article
      layout="position"
      whileHover="cardHover"
      variants={{
        cardHover: {
          y: -8,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        },
      }}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-md transition-colors duration-500 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      {/* Dynamic Backlight Glow on Hover */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Project Preview wrapper */}
      <ProjectPreview
        image={project.image}
        title={project.title}
        liveUrl={project.liveUrl}
      />

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category + Year */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
            {project.categoryLabel}
          </span>

          <span className="font-mono text-xs text-zinc-500">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 min-h-[64px] text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-violet-400">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 line-clamp-3 min-h-[72px] text-sm leading-relaxed font-light text-zinc-400">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-auto">
          <ProjectTech tech={project.tech} />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between border-t border-zinc-800/70 px-6 pt-4 pb-6">
        {/* Live Demo Link */}
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial="initial"
          whileHover="hover" // Triggers hover variant propagation downwards to children
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-1.5 text-sm font-medium text-white transition-colors duration-200 hover:text-violet-400"
        >
          <span>Live Demo</span>

          {/* Micro-interaction: Slides arrow diagonally upward-right on block hover */}
          <motion.span
            variants={arrowVariants}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
            className="inline-block"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </motion.span>
        </motion.a>

        {/* GitHub Link */}
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
            whileHover={{
              scale: 1.15,
              rotate: 8,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
