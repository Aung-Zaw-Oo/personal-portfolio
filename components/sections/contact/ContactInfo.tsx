"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "./contact.data";

export default function ContactInfo() {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold tracking-widest text-violet-400 uppercase">
        {"Let's Connect"}
      </p>

      <h2 className="mb-6 text-4xl font-bold tracking-tight text-white">
        Ready to Build Your Next Digital Product?
      </h2>

      <p className="mb-8 text-base leading-relaxed font-light text-slate-300">
        Have an idea, project requirement, or want to discuss opportunities?
        Feel free to reach out. I would love to hear about your project and
        explore how we can build it together.
      </p>

      <div className="space-y-6">
        {contacts.map((item) => {
          const isExternal = item.type !== "email";

          return (
            <a
              key={item.type}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              // Patches the reverse tabnabbing vulnerability
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl outline-none focus:ring-1 focus:ring-violet-500/30"
            >
              {/* Icon Frame — Scales slightly and glows matching card behaviors */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-300 group-hover:scale-105 group-hover:border-violet-500/40 group-hover:text-violet-400 group-hover:shadow-lg group-hover:shadow-violet-500/5">
                <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
              </div>

              <div>
                <p className="font-mono text-xs font-semibold tracking-widest text-zinc-500">
                  {item.label}
                </p>

                {/* Smooth color transit replacement instead of harsh native underline */}
                <p className="font-medium text-white transition-colors duration-300 group-hover:text-violet-400">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
