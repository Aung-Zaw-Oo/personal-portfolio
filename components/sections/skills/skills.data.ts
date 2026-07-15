import {
  faLaptopCode,
  faServer,
  faDatabase,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillItem {
  name: string;
  level: string;
}

interface SkillTheme {
  icon: string;
  bg: string;
  level: string;
  hover: string;
}

export interface SkillCategory {
  title: string;
  icon: IconDefinition;
  theme: SkillTheme;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: faLaptopCode,
    theme: {
      icon: "text-blue-400",
      bg: "bg-blue-500/10",
      level: "text-blue-400",
      hover: "hover:border-blue-500/40",
    },

    skills: [
      {
        name: "React",
        level: "Advanced",
      },
      {
        name: "Next.js",
        level: "Advanced",
      },
      {
        name: "TypeScript",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
      },
    ],
  },

  {
    title: "Backend",
    icon: faServer,
    theme: {
      icon: "text-purple-400",
      bg: "bg-purple-500/10",
      level: "text-purple-400",
      hover: "hover:border-purple-500/40",
    },

    skills: [
      {
        name: "Node.js",
        level: "Advanced",
      },
      {
        name: "NestJS",
        level: "Intermediate",
      },
      {
        name: "REST APIs",
        level: "Advanced",
      },
      {
        name: "Authentication",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Database",
    icon: faDatabase,
    theme: {
      icon: "text-emerald-400",
      bg: "bg-emerald-500/10",
      level: "text-emerald-400",
      hover: "hover:border-emerald-500/40",
    },

    skills: [
      {
        name: "PostgreSQL",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
      {
        name: "Database Design",
        level: "Intermediate",
      },
      {
        name: "SQL Optimization",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Tools & System",
    icon: faScrewdriverWrench,
    theme: {
      icon: "text-amber-400",
      bg: "bg-amber-500/10",
      level: "text-amber-400",
      hover: "hover:border-amber-500/40",
    },

    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
      },
      {
        name: "CMS Development",
        level: "Experience",
      },
      {
        name: "ERP Systems",
        level: "Experience",
      },
      {
        name: "Responsive Design",
        level: "Advanced",
      },
    ],
  },
];
