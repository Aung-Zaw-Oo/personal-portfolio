"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

interface ContactProps {
  prefillData?: {
    subject: string;
    projectType: string;
    message: string;
  } | null;
}

// Orchestrator variants for smooth entry sequencing
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // Smoothly delays the form card behind the info
    },
  },
};

const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (easeOutExpo) for snappy premium feel
    },
  },
};

const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Contact({ prefillData }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative z-10 border-t border-zinc-900 bg-zinc-950/60 py-24"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-120px", // Triggers comfortably when heading is visible
          }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start"
        >
          {/* Left Column: Contact Info Info Panel */}
          <motion.div className="lg:col-span-5" variants={slideInLeft}>
            <ContactInfo />
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div className="lg:col-span-7" variants={slideInRight}>
            <ContactForm prefillData={prefillData} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
