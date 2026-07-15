"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let particles: any[] = [];

    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    const resize = () => {
      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;

      init();
    };

    const init = () => {
      particles = [];

      const count = Math.min(
        Math.floor((canvas.width * canvas.height) / 14000),
        100,
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,

          y: Math.random() * canvas.height,

          size: Math.random() * 2 + 1,

          dx: Math.random() * 0.4 - 0.2,

          dy: Math.random() * 0.4 - 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;

        p.y += p.dy;

        if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1;

        if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;

          const dy = mouse.y - p.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            p.x += dx * 0.02;

            p.y += dy * 0.02;
          }
        }

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(139,92,246,.25)";

        ctx.fill();
      });

      // connections

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;

          const dy = particles[a].y - particles[b].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(139,92,246,${(1 - distance / 120) * 0.12})`;

            ctx.lineWidth = 0.8;

            ctx.beginPath();

            ctx.moveTo(particles[a].x, particles[a].y);

            ctx.lineTo(particles[b].x, particles[b].y);

            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;

      mouse.y = e.clientY;
    });

    resize();

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}

      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
