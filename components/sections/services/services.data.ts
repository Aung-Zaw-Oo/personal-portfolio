import { Service } from "./type";

import {
  faCode,
  faServer,
  faLayerGroup,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and accessible user interfaces with React, Next.js, TypeScript, and Tailwind CSS. Focused on clean component architecture, performance, responsive design, and polished user experiences.",
    icon: faCode,
    color: "violet",
    highlights: ["React & Next.js", "TypeScript", "Responsive Interfaces"],
  },

  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing secure and maintainable backend systems with Node.js, NestJS, Laravel, and modern databases. Building REST APIs, authentication systems, database integrations, and reliable business logic.",
    icon: faServer,
    color: "cyan",
    highlights: ["Node.js & NestJS", "REST APIs", "Database Integration"],
  },

  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Building complete web applications across frontend and backend layers. Combining React, Next.js, Node.js, NestJS, TypeScript, and relational databases to create scalable and maintainable full-stack solutions.",
    icon: faLayerGroup,
    color: "emerald",
    highlights: [
      "Frontend + Backend",
      "End-to-End Solutions",
      "Scalable Architecture",
    ],
  },

  {
    id: 4,
    title: "Custom Web Applications",
    description:
      "Transforming business requirements into tailored web applications, dashboards, CMS platforms, ERP and CRM systems, and workflow tools designed around real-world operational needs.",
    icon: faRocket,
    color: "amber",
    highlights: [
      "Business Applications",
      "CMS / ERP / CRM",
      "Custom Workflows",
    ],
  },
];
