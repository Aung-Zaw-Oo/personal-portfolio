// components\sections\projects\projects.data.ts

import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce Experience",
    year: "2026",
    description:
      "A full-stack e-commerce platform built with a development team at O-Technique Myanmar International. Contributed to the product catalog, shopping cart, and checkout flow, working across React/Next.js front-end and Node.js/NestJS back-end services.",
    image: "/images/projects/e-commerce.jpg",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "ERP & CRM Systems",
    category: "fullstack",
    categoryLabel: "Enterprise Systems",
    year: "2026",
    description:
      "Enterprise Resource Planning and Customer Relationship Management modules built as part of a full-stack team. Focused on internal business process management and customer data tracking, translating business requirements into working full-stack features.",
    image: "/images/projects/erp-crm.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Laravel",
      "PostgreSQL",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Content Management System",
    category: "frontend",
    categoryLabel: "CMS Platform",
    year: "2026",
    description:
      "A content management system built to support content creation, editing, and publishing workflows. Built responsive front-end interfaces with React, Next.js, and Tailwind CSS as part of the O-Technique development team.",
    image: "/images/projects/cms.jpg",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portal & Dashboard Applications",
    category: "saas",
    categoryLabel: "Data Dashboard",
    year: "2026",
    description:
      "Data-driven dashboard views and user portals built with React and Next.js front ends. Drew on a background in banking data analysis and reporting to help shape clear, usable data presentation for end users.",
    image: "/images/projects/dashboard.jpg",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
