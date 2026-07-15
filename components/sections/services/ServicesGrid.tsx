"use client";

import { motion } from "framer-motion";
import { services } from "./services.data";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  // 1. Parent orchestration variants — triggers when scrolled into view
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // Starts showing cards shortly after the grid enters the viewport
        delayChildren: 0.1,
        // Animates cards sequentially one after another
        staggerChildren: 0.15,
      },
    },
  };

  // 2. Child card variants for a sleek slide-up fade-in
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.96,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  } as const;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      // Triggers the animation once when 10% of the grid is visible
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2"
    >
      {services.map((service) => (
        // 3. We wrap each ServiceCard inside a motion.div to apply stagger physics
        <motion.div key={service.id} variants={cardVariants} className="h-full">
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}