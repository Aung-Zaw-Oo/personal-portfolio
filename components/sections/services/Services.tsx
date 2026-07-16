"use client";

import Container from "@/components/ui/Container";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 border-y border-zinc-900 bg-zinc-950/60 py-24"
    >
      <Container>
        {/* Animates down to up sequentially when scrolled into view */}
        <ServicesHeader />

        {/* Staggers its cards sequentially shortly after coming into view */}
        <ServicesGrid />
      </Container>
    </section>
  );
}
