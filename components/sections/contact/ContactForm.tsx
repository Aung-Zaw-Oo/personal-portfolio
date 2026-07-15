"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  prefillData?: { projectType: string; message: string } | null;
}

export default function ContactForm({ prefillData }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefillData.projectType,
        message: prefillData.message,
      }));
    }
  }, [prefillData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Action handler logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur-md transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <input
              type="text"
              aria-label="Your Name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white transition-all duration-300 outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              aria-label="Email Address"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white transition-all duration-300 outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            aria-label="Project Type"
            placeholder="Project Type"
            value={formData.projectType}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, projectType: e.target.value }))
            }
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white transition-all duration-300 outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div className="flex flex-col">
          <textarea
            rows={5}
            aria-label="Tell me about your project"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            required
            className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white transition-all duration-300 outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
        >
          <span>Send Message</span>
          <i className="fa-solid fa-paper-plane text-xs" aria-hidden="true" />
        </motion.button>
      </form>
    </motion.div>
  );
}
