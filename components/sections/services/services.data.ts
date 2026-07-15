import { Service } from "./type";

// Import the specific solid icons from Font Awesome
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
      "Building modern, responsive, and high-performance user interfaces using React, Next.js, and TypeScript. Focused on clean architecture, smooth interactions, accessibility, and excellent user experiences.",
    icon: faCode,
    color: "violet",
    highlights: ["React & Next.js", "Responsive Interfaces"],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems with Node.js, NestJS, and modern database solutions. Creating reliable APIs, authentication systems, and business logic that power applications.",
    icon: faServer,
    color: "cyan",
    highlights: ["RESTful APIs", "Database Integration"],
  },
  {
    id: 3,
    title: "Full Stack Development",
    description:
      "Delivering complete web applications from frontend interfaces to backend services. Building scalable solutions with modern technologies, clean architecture, and maintainable code.",
    icon: faLayerGroup,
    color: "emerald",
    highlights: ["Frontend + Backend", "End-to-End Solutions"],
  },
  {
    id: 4,
    title: "Custom Web Applications",
    description:
      "Transforming unique business requirements into tailored web applications. From internal tools and dashboards to workflow systems, creating solutions designed around your needs.",
    icon: faRocket,
    color: "amber",
    highlights: ["Business Solutions", "Custom Workflows"],
  },
];
