"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import MobileMenu from "./MobileMenu";
import { navItems } from "./nav.data";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md"
    >
      <Container>
        <nav className="py-5" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a href="#hero" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/30">
                AZ
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold tracking-tight text-white">
                  AUNG ZAW OO
                </span>
                <span className="text-xs text-zinc-400">
                  Full Stack Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div 
              className="hidden items-center gap-2 text-sm text-zinc-400 md:flex"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative rounded-lg px-4 py-2 transition duration-200 hover:text-white"
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Sliding hover pill indicator */}
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 rounded-lg bg-zinc-800/50"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
              <Button variant="secondary" href="#contact" icon={faArrowRight}>
                Let's Talk
              </Button>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}