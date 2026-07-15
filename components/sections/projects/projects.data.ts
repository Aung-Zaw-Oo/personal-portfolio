import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Mare Coastal Seafood",
    category: "frontend",
    categoryLabel: "Immersive Web Experience",
    year: "2026",
    description:
      "A high-end restaurant digital experience built to capture coastal atmosphere. Features immersive WebGL wave graphics, dynamic menu storytelling, and smooth reservation transitions.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "TalentFlow Marketplace",
    category: "fullstack",
    categoryLabel: "Freelance Platform",
    year: "2026",
    description:
      "A modern freelance ecosystem connecting elite developers with high-growth startups. Features real-time workspace collaboration, Escrow contract payouts, and interactive project trackers.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Aura Analytics Dash",
    category: "saas",
    categoryLabel: "B2B SaaS Platform",
    year: "2026",
    description:
      "A real-time telemetry dashboard designed for high-traffic infrastructure. Synthesizes millions of incoming data points into lightning-fast, high-fidelity SVG/Canvas charts.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Veloce Minimalist Gear",
    category: "ecommerce",
    categoryLabel: "E-Commerce Experience",
    year: "2026",
    description:
      "A performance athletics storefront built for maximum speed. Features an ultra-snappy bag drawer, dynamic inventory updates, and visual, gesture-based size grids.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Synthetix Code Editor",
    category: "frontend",
    categoryLabel: "Developer Tooling",
    year: "2026",
    description:
      "A fully featured, web-based IDE experience built with optimized performance. Combines low-latency key bindings with virtualized scroll rendering for massive source files.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Monaco"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];
