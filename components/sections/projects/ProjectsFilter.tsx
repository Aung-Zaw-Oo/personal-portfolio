"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCategory } from "./types";

type FilterValue = "all" | ProjectCategory;

interface ProjectsFilterProps {
  selected: FilterValue;
  onChange: (value: FilterValue) => void;
}

const filters: {
  label: string;
  value: FilterValue;
}[] = [
  { label: "All", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
];

export default function ProjectsFilter({
  selected,
  onChange,
}: ProjectsFilterProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="flex w-fit flex-wrap items-center gap-1.5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-1.5 backdrop-blur-md"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {filters.map((filter, index) => {
        const active = selected === filter.value;
        const isHovered = hoveredIndex === index;

        return (
          <motion.button
            key={filter.value}
            onClick={() => onChange(filter.value)}
            onMouseEnter={() => setHoveredIndex(index)}
            // Leverages the dynamic physical squish of the entire button element
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative rounded-xl px-4 py-2 text-sm font-medium outline-none select-none"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {/* 1. HOVER BACKGROUND PILL (Simplified layout transitions) */}
            {isHovered && !active && (
              <motion.span
                layoutId="hover-background"
                className="absolute inset-0 rounded-xl bg-zinc-800/40"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
              />
            )}

            {/* 2. ACTIVE SELECTION PILL */}
            {active && (
              <motion.span
                layoutId="active-filter"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-600/15"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
              />
            )}

            {/* 3. TEXT LABEL */}
            <span
              className={`relative z-10 block transition-colors duration-250 ${
                active
                  ? "font-semibold text-white"
                  : isHovered
                    ? "text-zinc-200"
                    : "text-zinc-400"
              }`}
            >
              {filter.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
