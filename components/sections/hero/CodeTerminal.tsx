"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal, Activity } from "lucide-react";

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
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const rawCode = `import Developer from "@core/human";\nconst ${variableName} = new Developer({\n  role: "${data.role}",\n  frontend: "${data.frontend}",\n  backend: "${data.backend}",\n  database: "${data.database}",\n  focus: "${data.focus}",\n  status: "${data.status}"\n});`;
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 p-0.5 shadow-2xl backdrop-blur-2xl"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative rounded-[15px] bg-zinc-950/90">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 transition-transform hover:scale-110" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 transition-transform hover:scale-110" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 transition-transform hover:scale-110" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 rounded-md bg-zinc-800/50 px-2 py-0.5 text-[11px] font-medium text-zinc-400">
              <Terminal className="h-3 w-3 text-zinc-500" />
              <span>{filename}</span>
            </div>
          </div>

          <button
            onClick={copyCode}
            aria-label="Copy code snippet"
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-zinc-200"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Viewport */}
        <div className="p-5 font-mono text-xs leading-relaxed text-zinc-300">
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="text-zinc-700 select-none">01</span>
            <p>
              <span className="text-purple-400">import</span>{" "}
              <span className="text-zinc-100">Developer</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-emerald-300">&quot;@core/human&quot;</span>;
            </p>
          </div>

          <div className="mt-1.5 flex items-center gap-2 text-zinc-500">
            <span className="text-zinc-700 select-none">02</span>
            <p className="text-zinc-500">
              // Transforming ideas into digital solutions
            </p>
          </div>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-zinc-700 select-none">03</span>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-amber-300">{variableName}</span> ={" "}
              <span className="text-purple-400">new</span>{" "}
              <span className="text-blue-400">Developer</span>(&#123;
            </p>
          </div>

          {/* Object Key/Value Pair Section */}
          <div className="my-1 ml-4 space-y-1 border-l border-zinc-800/80 pl-6">
            <div className="flex items-center gap-2">
              <span className="text-zinc-700 select-none">04</span>
              <p>
                <span className="text-sky-400">role</span>:{" "}
                <span className="text-emerald-300">
                  &quot;{data.role}&quot;
                </span>
                ,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-700 select-none">05</span>
              <p>
                <span className="text-sky-400">frontend</span>:{" "}
                <span className="text-emerald-300">
                  &quot;{data.frontend}&quot;
                </span>
                ,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-700 select-none">06</span>
              <p>
                <span className="text-sky-400">backend</span>:{" "}
                <span className="text-emerald-300">
                  &quot;{data.backend}&quot;
                </span>
                ,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-700 select-none">07</span>
              <p>
                <span className="text-sky-400">database</span>:{" "}
                <span className="text-emerald-300">
                  &quot;{data.database}&quot;
                </span>
                ,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-700 select-none">08</span>
              <p>
                <span className="text-sky-400">focus</span>:{" "}
                <span className="text-emerald-300">
                  &quot;{data.focus}&quot;
                </span>
                ,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-700 select-none">09</span>
              <p>
                <span className="text-sky-400">status</span>:{" "}
                <span className="text-emerald-300">
                  &quot;{data.status}&quot;
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-700 select-none">10</span>
            <p className="text-zinc-300">&#125;);</p>
          </div>

          {/* Active Monitoring Card */}
          <div className="mt-5 rounded-xl border border-white/5 bg-zinc-900/40 p-4 shadow-inner backdrop-blur-lg">
            <div className="mb-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-zinc-400" />
                <span className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                  Engine Metrics
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-emerald-400">
                  Online
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>
            </div>

            {/* Frontend Meter */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Frontend Precision</span>
                <span className="font-semibold text-purple-400">
                  {data.frontendPrecision}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800/80">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${data.frontendPrecision}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                />
              </div>
            </div>

            {/* Backend Meter */}
            <div className="mt-3 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">
                  Backend Systems Reliability
                </span>
                <span className="font-semibold text-cyan-400">
                  {data.backendReliability}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800/80">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${data.backendReliability}%` }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
