"use client";

import Container from "@/components/ui/Container";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative z-10 border-y border-zinc-900 bg-zinc-950/60 py-24"
    >
      <Container>
        {/* Services Section Header */}
        <ServicesHeader />

        {/* Services Cards */}
        <ServicesGrid />
      </Container>
    </section>
  );
}
