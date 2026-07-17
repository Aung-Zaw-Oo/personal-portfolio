"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navItems } from "./nav.data";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Disable background scrolling while the mobile menu is open
  useEffect(() => {
    const root = document.documentElement;

    if (open) {
      document.body.style.overflow = "hidden";
      root.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      root.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      root.style.overflow = "";
    };
  }, [open]);

  // Close with ESC key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Framer Motion Variants
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950/90 text-xl text-zinc-300 transition duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white focus:ring-2 focus:ring-blue-500/60 focus:outline-none"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Backdrop & Drawer Container */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 flex h-dvh min-h-dvh w-80 flex-col border-l border-zinc-800/70 bg-zinc-950/95 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="mb-12 flex items-center justify-between">
                <span className="text-lg font-bold text-white">Navigation</span>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="text-xl text-zinc-400 transition hover:text-white"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              {/* Links */}
              <nav>
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <motion.li key={item.href} variants={itemVariants}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-lg font-medium text-zinc-300 transition hover:translate-x-2 hover:text-white"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <motion.div variants={itemVariants} className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:from-blue-500 hover:to-purple-500"
                >
                  Let's Talk
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </a>

                <p className="mt-5 text-center text-xs text-zinc-500">
                  © 2026 Aung Zaw Oo
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
