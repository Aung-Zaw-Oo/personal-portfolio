"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      whileHover="hover" // Inherited hover state propagation for children
      className="group relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 shadow-2xl"
    >
      {/* Profile Image with subtle scale up */}
      <Image
        src="/images/profile/aung-zaw-oo.jpg"
        alt="Aung Zaw Oo - Full Stack Developer"
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        priority
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

      {/* Floating Tech Badge (Slightly rises when card is hovered) */}
      <motion.div
        variants={{
          hover: { y: -3, x: 2, scale: 1.02 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute top-5 right-5 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-xs text-zinc-300 backdrop-blur-md select-none"
      >
        <span className="flex items-center gap-2">
          {/* Status Indicator Pulse */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available
        </span>
      </motion.div>

      {/* Identity Text Info */}
      <div className="absolute bottom-0 left-0 z-10 p-6">
        <h3 className="font-heading text-xl font-bold text-white">
          Aung Zaw Oo
        </h3>

        <p className="text-sm text-zinc-400">Full Stack Developer</p>

        <div className="mt-3 flex gap-2 text-xs text-zinc-500">
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>

      {/* Glow Effect (Becomes brighter and larger on hover) */}
      <motion.div
        variants={{
          hover: {
            scale: 1.2,
            opacity: 0.4,
          }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
      />
    </motion.div>
  );
}