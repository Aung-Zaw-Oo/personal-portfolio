"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RangeValue } from "./type";

interface Props {
  label: string;
  value: number;
  setValue: (value: number) => void;
  items: RangeValue[];
}

export default function RangeControl({ label, value, setValue, items }: Props) {
  return (
    <div className="group/range">
      {/* Header */}
      <div className="mb-3 flex h-5 items-center justify-between text-sm">
        <label
          id={`${label}-label`}
          className="text-zinc-300 transition-colors duration-300 group-hover/range:text-zinc-200"
        >
          {label}
        </label>

        <div className="relative h-5 min-w-[150px] text-right font-mono font-semibold text-violet-400">
          <AnimatePresence mode="wait">
            <motion.span
              key={value}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="absolute top-0 right-0 block whitespace-nowrap"
            >
              {items[value].label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Track Wrapper */}
      <motion.div
        className="relative flex items-center"
        whileHover={{ scale: 1.002 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <input
          type="range"
          aria-labelledby={`${label}-label`}
          min="0"
          max={items.length - 1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-violet-500 transition-all duration-300 outline-none focus:ring-1 focus:ring-violet-500/30 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125"
        />
      </motion.div>

      {/* Slider Labels */}
      <div className="relative mt-3 h-5 w-full font-mono text-[10px] text-zinc-600">
        {items.map((item, idx) => {
          const position =
            items.length === 1 ? 50 : (idx / (items.length - 1)) * 100;
          return (
            <span
              key={idx}
              style={{ left: `${position}%` }}
              className={`absolute -translate-x-1/2 whitespace-nowrap transition-colors duration-300 ${
                value === idx
                  ? "font-medium text-violet-400/80"
                  : "group-hover/range:text-zinc-500"
              }`}
            >
              {item.label.split(" (")[0]}
            </span>
          );
        })}
      </div>
    </div>
  );
}
