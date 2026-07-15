"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 1. Use the new non-deprecated motion factory API
const MotionImage = motion.create(Image);

interface ProjectPreviewProps {
  image: string;
  title: string;
  liveUrl: string;
}

export default function ProjectPreview({
  image,
  title,
  liveUrl,
}: ProjectPreviewProps) {
  return (
    <div className="group relative m-1.5 aspect-[16/10] overflow-hidden rounded-[22px] border border-zinc-800/60 bg-zinc-950">
      {/* 2. Optimized Next.js Image with modern Framer Motion Layout handling */}
      <MotionImage
        layout="position"
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
        className="block object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex translate-y-4 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105"
        >
          View Website
          <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
        </a>
      </div>

      {/* Browser Dots */}
      <div className="absolute top-4 left-4 z-10 flex gap-1.5 rounded-full bg-black/40 px-3 py-2 backdrop-blur-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
    </div>
  );
}
