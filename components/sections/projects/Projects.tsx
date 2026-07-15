"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGrid from "./ProjectsGrid";

import { projects } from "./projects.data";
import { ProjectCategory } from "./types";

import Container from "@/components/ui/Container";

type FilterValue = "all" | ProjectCategory;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="relative z-10 py-24">
      <Container>
        {/* Header + Filter Row */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* ProjectsHeader handles its own staggered mount animations */}
          <ProjectsHeader />

          {/* Animate the filter bar entering elegantly */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3, // Soft stagger after the main header begins showing
            }}
          >
            <ProjectsFilter
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </motion.div>
        </div>

        {/* Project Cards Grid — Handles layout morphing and filtering independently */}
        <ProjectsGrid projects={filteredProjects} />
      </Container>
    </section>
  );
}
