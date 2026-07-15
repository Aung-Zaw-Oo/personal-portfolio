"use client";

import { motion } from "framer-motion";

interface ProjectTechProps {
  tech: string[];
}

export default function ProjectTech({ tech }: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <motion.span
          key={item}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="cursor-default rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-xs font-medium text-zinc-300 transition-colors duration-300 select-none hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-400"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
