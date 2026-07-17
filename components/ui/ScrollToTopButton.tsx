"use client";

import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/95 text-slate-100 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:text-white focus:ring-2 focus:ring-blue-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none"
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-base" />
    </button>
  );
}
