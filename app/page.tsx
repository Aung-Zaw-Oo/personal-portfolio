"use client";

import { useState } from "react";

import ProjectEstimator from "@/components/features/estimator/ProjectEstimator";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/footer/Footer";
import { Hero } from "@/components/sections/hero";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";
import Skills from "@/components/sections/skills/Skills";
import TechMarquee from "@/components/sections/tech-marquee/TechMarquee";

export default function Home() {
  const [prefillData, setPrefillData] = useState<{
    subject: string;
    projectType: string;
    message: string;
  } | null>(null);

  return (
    <div>
      <main id="main-content" tabIndex={-1}>
        <Hero></Hero>
        <TechMarquee></TechMarquee>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Services></Services>
        <ProjectEstimator onPrefill={setPrefillData} />
        <Contact prefillData={prefillData} />
        <Footer></Footer>
      </main>
    </div>
  );
}
