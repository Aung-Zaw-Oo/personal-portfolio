"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/components/navbar/nav.data";

export default function SectionPill() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const updateActiveSection = () => {
      const targetLine = window.scrollY + window.innerHeight * 0.35;
      let bestIndex = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - targetLine);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveIndex(bestIndex);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 24 }}
        className="fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 rounded-3xl bg-zinc-950/95 px-3 py-3 text-xs text-slate-200 shadow-2xl shadow-black/40 backdrop-blur-xl md:flex"
      >
        <div className="flex flex-col items-center gap-3">

          <div className="flex flex-col items-center gap-2">
            {navItems.map((item, index) => (
              <span
                key={item.href}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-blue-400 shadow-[0_0_0_8px_rgba(56,189,248,0.12)]"
                    : "bg-slate-700"
                }`}
              />
            ))}
          </div>

          <div className="h-16 w-px rounded-full bg-slate-700/70" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
