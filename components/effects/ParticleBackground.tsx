"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  opacity: number;
  hue: number;
  drift: number;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: null as number | null,
    y: null as number | null,
    radius: 160,
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const initParticles = (width: number, height: number) => {
      const count = Math.min(Math.floor((width * height) / 16000), 120);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.9,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.45 + 0.35,
        hue: 252 + Math.random() * 66,
        drift: Math.random() * Math.PI * 2,
      }));
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(width, height);
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, width, height);

      const background = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        width * 0.05,
        width * 0.5,
        height * 0.4,
        width * 0.9,
      );
      background.addColorStop(0, "rgba(79, 70, 229, 0.08)");
      background.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.drift += 0.02;
        particle.opacity = 0.36 + Math.sin(particle.drift) * 0.12;

        if (particle.x <= 0 || particle.x >= width) particle.dx *= -1;
        if (particle.y <= 0 || particle.y >= height) particle.dy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const strength = (1 - distance / mouse.radius) * 0.06;
            particle.x -= dx * strength;
            particle.y -= dy * strength;
          }
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 85%, 72%, ${particle.opacity})`;
        ctx.shadowColor = `hsla(${particle.hue}, 90%, 84%, ${particle.opacity * 0.35})`;
        ctx.shadowBlur = particle.size * 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const activeParticles = Math.min(particles.length, 60);
      for (let a = 0; a < activeParticles; a += 1) {
        for (let b = a + 1; b < activeParticles; b += 1) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.hypot(dx, dy);

          if (distance < 110) {
            const alpha = (1 - distance / 110) * 0.11;
            ctx.strokeStyle = `hsla(${(particles[a].hue + particles[b].hue) / 2}, 90%, 75%, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const resetMouse = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleResize = () => resizeCanvas();

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerout", resetMouse);
    window.addEventListener("pointercancel", resetMouse);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", resetMouse);
      window.removeEventListener("pointercancel", resetMouse);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
