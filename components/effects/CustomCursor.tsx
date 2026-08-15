"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  "a, button, input, textarea, select, summary, [role='button'], [role='link']";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frameId: number | null = null;
    if (window.innerWidth >= 1024 && !prefersReducedMotion) {
      frameId = requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setIsVisible(true);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(interactiveSelector) !== null;
      setIsHovered(isInteractive);
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    const render = () => {
      positionRef.current.x +=
        (targetRef.current.x - positionRef.current.x) * 0.18;
      positionRef.current.y +=
        (targetRef.current.y - positionRef.current.y) * 0.18;

      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = `${positionRef.current.x}px`;
        cursorRef.current.style.top = `${positionRef.current.y}px`;
        ringRef.current.style.left = `${positionRef.current.x}px`;
        ringRef.current.style.top = `${positionRef.current.y}px`;
      }

      animationFrameId.current = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOver);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    animationFrameId.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOver);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovered ? "cursor-active" : ""}`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? "ring-active" : ""}`}
      />
    </>
  );
}
