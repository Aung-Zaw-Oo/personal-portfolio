"use client";

import { motion } from "framer-motion";

interface TerminalData {
  role: string;
  frontend: string;
  backend: string;
  database: string;
  focus: string;
  status: string;
  frontendPrecision: number;
  backendReliability: number;
}

interface CodeTerminalProps {
  filename?: string;
  variableName?: string;
  data?: TerminalData;
}

const defaultData: TerminalData = {
  role: "Full Stack Developer",
  frontend: "React / Next.js",
  backend: "Node.js / NestJS",
  database: "PostgreSQL / MySQL",
  focus: "Clean UI + Scalable Systems",
  status: "Available",
  frontendPrecision: 98,
  backendReliability: 95,
};

export default function CodeTerminal({
  filename = "developer-profile.tsx",
  variableName = "AungZawOo",
  data = defaultData,
}: CodeTerminalProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70 shadow-2xl backdrop-blur-xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>

        <span className="font-mono text-[11px] text-zinc-500">{filename}</span>
      </div>

      {/* Code Body */}
      <div className="p-6 font-mono text-xs leading-relaxed text-zinc-300">
        <p className="text-emerald-400">import Developer from "@core/human";</p>

        <p className="mt-3 text-zinc-500">
          // Transforming ideas into digital solutions
        </p>

        <p className="mt-3 text-purple-400">
          const {variableName} = new Developer({"{"}
        </p>

        <div className="space-y-1 border-l border-zinc-800 pl-4">
          <p>
            role: <span className="text-cyan-400">"{data.role}"</span>,
          </p>
          <p>
            frontend: <span className="text-blue-400">"{data.frontend}"</span>,
          </p>
          <p>
            backend: <span className="text-purple-400">"{data.backend}"</span>,
          </p>
          <p>
            database:{" "}
            <span className="text-emerald-400">"{data.database}"</span>,
          </p>
          <p>
            focus: <span className="text-cyan-400">"{data.focus}"</span>,
          </p>
          <p>
            status: <span className="text-emerald-400">"{data.status}"</span>
          </p>
        </div>

        <p className="text-purple-400">{"}"});</p>

        {/* Active Engine Monitoring */}
        <div className="mt-4 rounded-xl border border-zinc-800/50 bg-zinc-950/80 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
              Active Engine Monitoring
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          {/* Frontend Progress */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-400">Frontend Precision</span>
              <span className="text-purple-400">{data.frontendPrecision}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${data.frontendPrecision}%` }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.6,
                }}
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
              />
            </div>
          </div>

          {/* Backend Progress */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-400">Backend Systems Reliability</span>
              <span className="text-cyan-400">{data.backendReliability}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${data.backendReliability}%` }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.8,
                }}
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
