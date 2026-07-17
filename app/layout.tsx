import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import ParticleBackground from "@/components/effects/ParticleBackground";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import SectionPill from "@/components/ui/SectionPill";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Aung Zaw Oo | Full Stack Developer",
  description:
    "Portfolio of Aung Zaw Oo, a Full Stack Developer building modern web applications.",
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
      </body>
    </html>
  );
}
