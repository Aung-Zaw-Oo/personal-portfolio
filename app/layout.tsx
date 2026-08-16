// app\layout.tsx

import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ParticleBackground from "@/components/effects/ParticleBackground";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import SectionPill from "@/components/ui/SectionPill";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aungzawoo.vercel.app"),

  title: "Aung Zaw Oo | Full Stack Developer",

  description:
    "Aung Zaw Oo is a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS, and modern web applications.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "KmH_BeaH3eSC7ixf-ow1fKpI1dkvJgLpMC35fRlzNng",
  },

  openGraph: {
    title: "Aung Zaw Oo | Full Stack Developer",
    description:
      "Aung Zaw Oo is a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS, and modern web applications.",
    url: "https://aungzawoo.vercel.app/",
    siteName: "Aung Zaw Oo",
    locale: "en_US",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aung Zaw Oo",
  url: "https://aungzawoo.vercel.app/",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/aung-zaw-oo-180a46387/",
    "https://github.com/Aung-Zaw-Oo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <a
          href="#main-content"
          className="sr-only rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white ring-2 ring-blue-400/60 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to main content
        </a>

        <ParticleBackground />
        <CustomCursor />
        <Navbar />
        <SectionPill />

        {children}

        <ScrollToTopButton />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
