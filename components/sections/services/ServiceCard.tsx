"use client";

import { Service } from "./type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  service: Service;
}

// 1. Explicitly type the colors map keys to match your Service configuration safely
const colors = {
  violet: {
    box: "bg-violet-500/10",
    text: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    shadowHover: "hover:shadow-violet-500/10",
    glow: "group-hover:shadow-violet-500/30",
    radialGlow: "from-violet-500/10",
    titleHover: "group-hover:text-violet-400",
  },
  cyan: {
    box: "bg-cyan-500/10",
    text: "text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
    shadowHover: "hover:shadow-cyan-500/10",
    glow: "group-hover:shadow-cyan-500/30",
    radialGlow: "from-cyan-500/10",
    titleHover: "group-hover:text-cyan-400",
  },
  emerald: {
    box: "bg-emerald-500/10",
    text: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    shadowHover: "hover:shadow-emerald-500/10",
    glow: "group-hover:shadow-emerald-500/30",
    radialGlow: "from-emerald-500/10",
    titleHover: "group-hover:text-emerald-400",
  },
  amber: {
    box: "bg-amber-500/10",
    text: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    shadowHover: "hover:shadow-amber-500/10",
    glow: "group-hover:shadow-amber-500/30",
    radialGlow: "from-amber-500/10",
    titleHover: "group-hover:text-amber-400",
  },
} as const;

export default function ServiceCard({ service }: Props) {
  // Gracefully fallback to violet if the service has an unconfigured color
  const color = colors[service.color as keyof typeof colors] ?? colors.violet;

  return (
    <article
      className={`group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/20 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${color.borderHover} ${color.shadowHover}`}
    >
      {/* 2. Custom Radial Glow Background matches the unique service color */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${color.radialGlow} via-transparent to-zinc-950/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div>
        {/* Icon Container */}
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${color.box} ${color.text} shadow-lg transition-all duration-500 group-hover:scale-110 ${color.glow}`}
        >
          <FontAwesomeIcon icon={service.icon} />
        </div>

        {/* Title — Dynamically colors matching the service theme on hover */}
        <h3
          className={`mb-3 text-2xl font-bold text-white transition-colors duration-300 ${color.titleHover}`}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed font-light text-zinc-400">
          {service.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-8 flex flex-wrap gap-2 border-t border-zinc-800/50 pt-6">
        {service.highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
