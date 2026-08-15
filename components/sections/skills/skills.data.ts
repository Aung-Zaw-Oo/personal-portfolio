import {
  faLaptopCode,
  faServer,
  faDatabase,
  faScrewdriverWrench,
  faChartLine,
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
        level: "Proficient",
      },
      {
        name: "Next.js",
        level: "Proficient",
      },
      {
        name: "TypeScript",
        level: "Working Knowledge",
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
      },
      {
        name: "React Native",
        level: "Familiar",
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
        level: "Proficient",
      },
      {
        name: "NestJS",
        level: "Working Knowledge",
      },
      {
        name: "Laravel",
        level: "Working Knowledge",
      },
      {
        name: "REST APIs",
        level: "Proficient",
      },
      {
        name: "Authentication",
        level: "Working Knowledge",
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
        level: "Proficient",
      },
      {
        name: "MySQL",
        level: "Proficient",
      },
      {
        name: "Database Design",
        level: "Working Knowledge",
      },
      {
        name: "SQL Optimization",
        level: "Familiar",
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
        level: "Proficient",
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
        level: "Proficient",
      },
      {
        name: "PHP",
        level: "Working Knowledge",
      },
    ],
  },

  {
    title: "Business & Data",
    icon: faChartLine,
    theme: {
      icon: "text-rose-400",
      bg: "bg-rose-500/10",
      level: "text-rose-400",
      hover: "hover:border-rose-500/40",
    },

    skills: [
      {
        name: "Data Analysis",
        level: "Proficient",
      },
      {
        name: "Reporting Automation",
        level: "Proficient",
      },
      {
        name: "Process Automation",
        level: "Working Knowledge",
      },
      {
        name: "MS Office Suite",
        level: "Proficient",
      },
    ],
  },
];
