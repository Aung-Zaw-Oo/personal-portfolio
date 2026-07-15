"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectType, ProjectOption, RangeValue } from "./type";
import RangeControl from "./RangeControl";
import Container from "@/components/ui/Container";

const projectOptions: ProjectOption[] = [
  {
    id: "webapp",
    label: "Web Application",
    multiplier: 1,
  },
  {
    id: "ecommerce",
    label: "E-commerce Store",
    multiplier: 1.2,
  },
  {
    id: "landing",
    label: "Premium Design Landing",
    multiplier: 0.6,
  },
  {
    id: "custom",
    label: "Bespoke / Custom API",
    multiplier: 1.5,
  },
];

const complexityLevels: RangeValue[] = [
  {
    label: "Minimal (1-4 views)",
    duration: "4-5 Weeks",
    multiplier: 0.8,
  },
  {
    label: "Medium (5-10 views)",
    duration: "6-8 Weeks",
    multiplier: 1.2,
  },
  {
    label: "Enterprise",
    duration: "12-16 Weeks",
    multiplier: 2.2,
  },
];

const timelineLevels: RangeValue[] = [
  {
    label: "Urgent (Rush)",
    duration: "4 Weeks",
    multiplier: 1.6,
  },
  {
    label: "Standard",
    duration: "6-8 Weeks",
    multiplier: 1.1,
  },
  {
    label: "Relaxed",
    duration: "10-14 Weeks",
    multiplier: 0.9,
  },
];

interface ProjectEstimatorProps {
  onPrefill?: (data: { projectType: string; message: string }) => void;
}

export default function ProjectEstimator({ onPrefill }: ProjectEstimatorProps) {
  const [projectType, setProjectType] = useState<ProjectType>("webapp");
  const [complexity, setComplexity] = useState(1);
  const [timeline, setTimeline] = useState(1);

  const selectedProject =
    projectOptions.find((item) => item.id === projectType) ?? projectOptions[0];
  const selectedComplexity = complexityLevels[complexity];
  const selectedTimeline = timelineLevels[timeline];

  const estimate = useMemo(() => {
    const complexityData = complexityLevels[complexity];
    const timelineData = timelineLevels[timeline];

    const basePrice = 5000;
    const total =
      basePrice *
      selectedProject.multiplier *
      complexityData.multiplier *
      timelineData.multiplier;

    const min = Math.round(total * 0.8);
    const max = Math.round(total * 1.3);

    return {
      price: `$${min.toLocaleString()} - $${max.toLocaleString()}`,
      duration: timelineData.duration,
      complexity: complexityData.label,
    };
  }, [selectedProject.multiplier, complexity, timeline]);

  return (
    <section className="w-full py-24" id="quote">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-2xl backdrop-blur-md md:p-8">
          {/* Ambient Purple Backdrop Glow */}
          <div className="absolute -top-12 -right-12 -z-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500" />

          <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="text-violet-400">⚙</span>
            Interactive Project Scope Builder
          </h3>

          {/* Two-Column Layout Grid */}
          <div className="grid items-start gap-8 lg:grid-cols-12">
            {/* LEFT COLUMN: Controls & Selections */}
            <div className="space-y-8 lg:col-span-7">
              {/* PROJECT TYPE */}
              <div role="radiogroup" aria-labelledby="project-type-label">
                <label
                  id="project-type-label"
                  className="mb-3 block text-sm font-medium text-zinc-300"
                >
                  What style of project are we engineering?
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {projectOptions.map((option) => {
                    const isSelected = projectType === option.id;
                    return (
                      <button
                        key={option.id}
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setProjectType(option.id)}
                        className={`group relative flex items-center justify-between overflow-hidden rounded-xl border px-4 py-3 text-left text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-violet-500/40 ${
                          isSelected
                            ? "border-violet-500/40 bg-violet-500/10 text-white"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-white"
                        }`}
                      >
                        {/* Dynamic Button Hover Glow Accent */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <span className="font-medium">{option.label}</span>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="font-bold text-violet-400"
                          >
                            ✓
                          </motion.span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* COMPLEXITY SLIDER */}
              <RangeControl
                label="Estimated project scale & complexity"
                value={complexity}
                setValue={setComplexity}
                items={complexityLevels}
              />

              {/* TIMELINE SLIDER */}
              <RangeControl
                label="Timeline flexibility"
                value={timeline}
                setValue={setTimeline}
                items={timelineLevels}
              />
            </div>

            {/* RIGHT COLUMN: Real-time Calculation Panel */}
            <div className="space-y-4 lg:sticky lg:top-6 lg:col-span-5">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 shadow-inner backdrop-blur-md">
                <div className="space-y-6">
                  {/* PRICE DISPLAY */}
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Recommended Budget Range
                    </p>
                    <div className="relative h-12 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={estimate.price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-4xl font-extrabold text-transparent"
                        >
                          {estimate.price}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* TIMELINE DISPLAY */}
                  <div className="border-t border-zinc-800/60 pt-4">
                    <p className="mb-1 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Estimated Timeline
                    </p>
                    <div className="relative h-8 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={estimate.duration}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute inset-0 text-xl font-semibold text-zinc-200"
                        >
                          {estimate.duration}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION CTA */}
              <button
                className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20 focus:ring-2 focus:ring-violet-500/50 focus:outline-none active:scale-[0.99]"
                onClick={() => {
                  onPrefill?.({
                    projectType: `${selectedProject.label} • ${selectedComplexity.label} • ${selectedTimeline.label}`,
                    message: [
                      `Project Type: ${selectedProject.label}`,
                      `Complexity: ${selectedComplexity.label}`,
                      `Timeline: ${selectedTimeline.label}`,
                      `Estimated Budget: ${estimate.price}`,
                      `Estimated Duration: ${estimate.duration}`,
                      "",
                      "I'd love to discuss this project and bring it to life.",
                    ].join("\n"),
                  });

                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Pre-fill Project Details Into Contact Form ↓
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
