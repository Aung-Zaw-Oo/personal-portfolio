"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircle,
  faCode,
  faEnvelope,
  faFolderOpen,
  faHouse,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/ui/Container";

const footerLinks = [
  {
    label: "Home",
    href: "#hero",
    icon: faHouse,
  },
  {
    label: "About",
    href: "#about",
    icon: faCode,
  },
  {
    label: "Skills",
    href: "#skills",
    icon: faBriefcase,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: faFolderOpen,
  },
  {
    label: "Services",
    href: "#services",
    icon: faBriefcase,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: faEnvelope,
  },
];

const socials = [
  {
    label: "Github",
    href: "https://github.com",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: faLinkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: faXTwitter,
  },
];

export default function Footer() {
  // Solves Next.js hydration warning by updating year solely on client load
  const [currentYear, setCurrentYear] = useState<string>("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-zinc-950 py-12">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-col gap-10"
        >
          {/* Brand + Availability */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-violet-400"
                  aria-hidden="true"
                />
                AUNG ZAW OO
                <span className="text-violet-500">.</span>
              </h3>

              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                Building modern web experiences with clean interfaces, scalable
                architecture, and thoughtful user experiences.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="flex w-fit items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 backdrop-blur-md">
              <FontAwesomeIcon
                icon={faCircle}
                className="animate-pulse text-[8px] text-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-zinc-300">
                Available for freelance work
              </span>
            </div>
          </div>

          {/* Navigation + Social */}
          <div className="flex flex-col gap-6 border-y border-zinc-900 py-6 md:flex-row md:items-center md:justify-between">
            {/* Navigation */}
            <nav
              className="flex flex-wrap gap-x-6 gap-y-3"
              aria-label="Footer Navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-xs transition-colors duration-300 group-hover:text-violet-400"
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Aung Zaw Oo's ${social.label} Profile`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all duration-300 hover:border-violet-500/40 hover:text-violet-400 focus:ring-1 focus:ring-violet-500/40 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-lg"
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} Aung Zaw Oo. All rights reserved.</p>

            <p className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faTerminal}
                className="text-violet-400"
                aria-hidden="true"
              />
              Built with
              <span className="text-zinc-500">React</span>+
              <span className="text-zinc-500">Next.js</span>
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
