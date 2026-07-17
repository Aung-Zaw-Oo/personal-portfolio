"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectType, ProjectOption, RangeValue } from "./type";
import RangeControl from "./RangeControl";
import Container from "@/components/ui/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";

const projectOptions: ProjectOption[] = [
  {
    id: "frontend",
    label: "Frontend-only Website / Landing Page",
    multiplier: 0.75,
  },
  { id: "backend", label: "Backend/API Platform", multiplier: 1.05 },
  { id: "fullstack", label: "Fullstack App (UI + Backend)", multiplier: 1.35 },
  { id: "custom", label: "Custom Web Experience / Portal", multiplier: 1.6 },
];

const featureOptions = [
  {
    id: "responsive",
    label: "Responsive design & polished UI",
    multiplier: 0.08,
  },
  {
    id: "authentication",
    label: "User accounts & authentication",
    multiplier: 0.12,
  },
  { id: "payments", label: "Payments / checkout flow", multiplier: 0.14 },
  { id: "admin", label: "Admin/dashboard tools", multiplier: 0.12 },
  { id: "integrations", label: "Third-party integrations", multiplier: 0.1 },
  { id: "analytics", label: "Analytics & reporting", multiplier: 0.08 },
  { id: "cms", label: "Content management system", multiplier: 0.1 },
];

const complexityLevels: RangeValue[] = [
  {
    label: "Simple & Clean (Basic features)",
    duration: "4-5 Weeks",
    multiplier: 0.8,
  },
  {
    label: "Growth & Scale (Advanced features)",
    duration: "6-8 Weeks",
    multiplier: 1.2,
  },
  {
    label: "Full Scale / Corporate (Deep customization)",
    duration: "12-16 Weeks",
    multiplier: 2.2,
  },
];

const timelineLevels: RangeValue[] = [
  {
    label: "Fast-Track (Priority delivery)",
    duration: "4 Weeks",
    multiplier: 1.6,
  },
  {
    label: "Standard Pace (Recommended)",
    duration: "6-8 Weeks",
    multiplier: 1.1,
  },
  { label: "Flexible / Relaxed", duration: "10-14 Weeks", multiplier: 0.9 },
];

interface ProjectEstimatorProps {
  onPrefill?: (data: {
    subject: string;
    projectType: string;
    message: string;
  }) => void;
}

export default function ProjectEstimator({ onPrefill }: ProjectEstimatorProps) {
  const [projectType, setProjectType] = useState<ProjectType>("frontend");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState(1);
  const [timeline, setTimeline] = useState(1);

  const [currency, setCurrency] = useState<"USD" | "MMK">("USD");
  const [exchangeRate, setExchangeRate] = useState<number>(4000);
  const [isLoadingRate, setIsLoadingRate] = useState<boolean>(false);

  useEffect(() => {
    async function fetchRates() {
      setIsLoadingRate(true);
      try {
        const res = await fetch("/api/exchange-rate");
        if (!res.ok) throw new Error("Internal route error");

        const data = await res.json();

        if (data && data.rate) {
          const fetchedRate = Number(data.rate);

          if (fetchedRate < 3000) {
            setExchangeRate(4000);
          } else {
            setExchangeRate(fetchedRate);
          }
        }
      } catch (error) {
        console.error(
          "Failed to fetch live currency adjustments from internal handler, using default fallback.",
          error,
        );
        setExchangeRate(4000);
      } finally {
        setIsLoadingRate(false);
      }
    }

    fetchRates();
  }, []);

  const selectedProject =
    projectOptions.find((item) => item.id === projectType) ?? projectOptions[0];
  const selectedComplexity = complexityLevels[complexity];
  const selectedTimeline = timelineLevels[timeline];
  const selectedFeatureOptions = featureOptions.filter((feature) =>
    selectedFeatures.includes(feature.id),
  );

  const estimate = useMemo(() => {
    const complexityData = complexityLevels[complexity];
    const timelineData = timelineLevels[timeline];
    const featureMultiplier =
      1 +
      selectedFeatureOptions.reduce(
        (sum, feature) => sum + feature.multiplier,
        0,
      );

    const basePrice = 500;
    const totalInUSD =
      basePrice *
      selectedProject.multiplier *
      complexityData.multiplier *
      timelineData.multiplier *
      featureMultiplier;

    let min = Math.round(totalInUSD * 0.78);
    let max = Math.round(totalInUSD * 1.2);

    if (currency === "MMK") {
      min = min * exchangeRate;
      max = max * exchangeRate;

      return {
        price: `${min.toLocaleString()} MMK - ${max.toLocaleString()} MMK`,
        duration: timelineData.duration,
        complexity: complexityData.label,
      };
    }

    return {
      price: `$${min.toLocaleString()} - $${max.toLocaleString()} USD`,
      duration: timelineData.duration,
      complexity: complexityData.label,
    };
  }, [
    selectedProject.multiplier,
    complexity,
    timeline,
    currency,
    exchangeRate,
    selectedFeatureOptions,
  ]);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" id="quote">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 p-4 shadow-2xl backdrop-blur-md sm:p-6 md:p-8">
          <div className="absolute -top-12 -right-12 -z-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

          <h3 className="mb-6 flex flex-wrap items-center gap-3 text-xl font-bold text-white sm:mb-8 sm:text-2xl">
            <span className="text-violet-400">
              <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>
            </span>
            Instant Project Cost Calculator
            {isLoadingRate && (
              <span className="animate-pulse text-xs font-normal text-zinc-500">
                (Syncing live updates...)
              </span>
            )}
          </h3>

          <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-12">
            {/* LEFT COLUMN: User selections */}
            <div className="space-y-6 sm:space-y-8 lg:col-span-7">
              <div role="radiogroup" aria-labelledby="project-type-label">
                <label
                  id="project-type-label"
                  className="mb-3 block text-sm font-medium text-zinc-300"
                >
                  What type of project are we building together?
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {projectOptions.map((option) => {
                    const isSelected = projectType === option.id;
                    return (
                      <button
                        key={option.id}
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setProjectType(option.id)}
                        className={`group relative flex items-center justify-between overflow-hidden rounded-xl border px-4 py-3 text-left text-sm transition-all duration-300 ${
                          isSelected
                            ? "border-violet-500/40 bg-violet-500/10 text-white"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-white"
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="font-medium">{option.label}</span>
                          <span className="text-[11px] text-zinc-500">
                            {option.id === "frontend" &&
                              "Landing pages, microsites, UI polish."}
                            {option.id === "backend" &&
                              "APIs, data processing, server logic."}
                            {option.id === "fullstack" &&
                              "Frontend + backend with database."}
                            {option.id === "custom" &&
                              "Bespoke workflows and integrations."}
                          </span>
                        </div>
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="font-bold text-violet-400"
                          >
                            ✓
                          </motion.span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/60 p-4 text-sm text-zinc-300 shadow-inner backdrop-blur-sm">
                <p className="mb-3 font-semibold text-white">
                  Pick feature groups you expect in this project
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {featureOptions.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => {
                          setSelectedFeatures((current) =>
                            current.includes(feature.id)
                              ? current.filter((id) => id !== feature.id)
                              : [...current, feature.id],
                          );
                        }}
                        className={`flex flex-col items-start gap-2 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                          isSelected
                            ? "border-blue-500/40 bg-blue-500/10 text-white"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-white"
                        }`}
                      >
                        <span className="font-medium">{feature.label}</span>
                        <span className="text-[11px] text-zinc-500">
                          {feature.id === "authentication" &&
                            "Logins, session security, and user accounts."}
                          {feature.id === "payments" &&
                            "Checkout, billing, invoicing, and subscriptions."}
                          {feature.id === "admin" &&
                            "Internal controls, moderation or admin tools."}
                          {feature.id === "integrations" &&
                            "API connections, webhooks, or external services."}
                          {feature.id === "analytics" &&
                            "Dashboards, usage metrics, and reporting."}
                          {feature.id === "cms" &&
                            "Content updates via a simple authoring UI."}
                          {feature.id === "responsive" &&
                            "Mobile-first layout and device polish."}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <RangeControl
                label="How complex are the features you need?"
                value={complexity}
                setValue={setComplexity}
                items={complexityLevels}
              />

              <RangeControl
                label="How quickly do you need this launched?"
                value={timeline}
                setValue={setTimeline}
                items={timelineLevels}
              />
            </div>

            {/* RIGHT COLUMN: Output display & conversion parameters */}
            <div className="space-y-3 sm:space-y-4 lg:sticky lg:top-6 lg:col-span-5">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4 shadow-inner backdrop-blur-md sm:p-6">
                <div className="space-y-6">
                  {/* LOCALIZED CURRENCY SELECTOR */}
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Display Currency
                    </span>
                    <div className="flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5">
                      <button
                        type="button"
                        onClick={() => setCurrency("USD")}
                        className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                          currency === "USD"
                            ? "bg-violet-600 text-white shadow"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        USD
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrency("MMK")}
                        className={`rounded-md px-3 py-1 text-xs font-bold transition-all ${
                          currency === "MMK"
                            ? "bg-violet-600 text-white shadow"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        MMK
                      </button>
                    </div>
                  </div>

                  {/* BUDGET OUTPUT */}
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Estimated Budget Range
                    </p>
                    <div className="relative min-h-[3rem] overflow-visible">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={estimate.price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-xl font-extrabold break-words whitespace-normal text-transparent sm:text-2xl lg:text-3xl"
                        >
                          {estimate.price}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* TIMELINE OUTPUT */}
                  <div className="border-t border-zinc-800/60 pt-4">
                    <p className="mb-1 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                      Estimated Delivery Timeline
                    </p>
                    <div className="relative h-8 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={estimate.duration}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute inset-0 text-lg font-semibold text-zinc-200 sm:text-xl"
                        >
                          {estimate.duration}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION CALL TO ACTION */}
              <button
                className="w-full rounded-xl bg-violet-600 px-4 py-4 text-sm font-semibold text-white transition-all hover:bg-violet-500 active:scale-[0.99] sm:text-base"
                onClick={() => {
                  const featuresSummary =
                    selectedFeatures.length > 0
                      ? selectedFeatures
                          .map(
                            (id) =>
                              featureOptions.find(
                                (feature) => feature.id === id,
                              )?.label ?? id,
                          )
                          .join(", ")
                      : "Core scope only";

                  onPrefill?.({
                    subject: `Estimate Request: ${selectedProject.label}`,
                    projectType: `${selectedProject.label} • ${selectedComplexity.label} • ${selectedTimeline.label}`,
                    message: [
                      `Project Type: ${selectedProject.label}`,
                      `Complexity: ${selectedComplexity.label}`,
                      `Timeline: ${selectedTimeline.label}`,
                      `Feature groups: ${featuresSummary}`,
                      `Estimated Budget: ${estimate.price}`,
                      `Conversion Baseline Rate: 1 USD = ${exchangeRate} MMK`,
                      "",
                      "Hi! I generated this custom layout estimation and would love to lock in a consultation.",
                    ].join("\n"),
                  });

                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Secure This Estimate & Get Started →
              </button>

              {/* COMPLIANCE DISCLAIMER FOR THE LOCAL REGION */}
              <p className="px-2 text-center text-[11px] leading-normal text-zinc-500">
                * Estimates are calculated dynamically based on baseline
                development scope. Final invoice estimates can adjust depending
                on custom market components or significant variations in local
                exchange volatility.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
