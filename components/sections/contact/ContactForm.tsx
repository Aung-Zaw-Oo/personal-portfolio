"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  prefillData?: {
    subject: string;
    projectType: string;
    message: string;
  } | null;
}

export default function ContactForm({ prefillData }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        subject: prefillData.subject,
        projectType: prefillData.projectType,
        message: prefillData.message,
      }));
    }
  }, [prefillData]);

  // Timer ref used to auto-reset the status message after a short delay
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setStatus("success");
      // Clear the entire form after successful send
      setFormData({
        name: "",
        email: "",
        subject: "",
        projectType: "",
        message: "",
      });

      // Clear any existing timer and schedule auto-reset of the success message
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
        resetTimerRef.current = null;
      }, 4000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message at this time.",
      );
    }
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <input
              type="text"
              aria-label="Project Type"
              placeholder="Project Type"
              value={formData.projectType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  projectType: e.target.value,
                }))
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white transition-all duration-300 outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              aria-label="Subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white transition-all duration-300 outline-none placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
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

        {status === "success" && (
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-200">
            Your message was sent successfully. I’ll get back to you shortly.
          </div>
        )}

        {status === "error" && errorMessage && (
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
            {errorMessage}
          </div>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
          <i className="fa-solid fa-paper-plane text-xs" aria-hidden="true" />
        </motion.button>
      </form>
    </motion.div>
  );
}
