"use client";

import { useEffect, useRef } from "react";

const DOT_GAP = 24;
const HOVER_RADIUS = 330;
const MAX_LIFT = 8;

export default function GlobalDottedBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const mouse = { x: -9999, y: -9999, active: false };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let dots = [];
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const buildDots = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const offsetX = (width % DOT_GAP) / 2;
      const offsetY = (height % DOT_GAP) / 2;

      for (let y = offsetY; y <= height + DOT_GAP; y += DOT_GAP) {
        for (let x = offsetX; x <= width + DOT_GAP; x += DOT_GAP) {
          dots.push({
            x,
            y,
            lift: 0,
            glow: 0,
          });
        }
      }
    };

    const drawDot = (dot, influence) => {
      const liftTarget = prefersReducedMotion ? 0 : -MAX_LIFT * influence;
      dot.lift += (liftTarget - dot.lift) * 0.16;
      dot.glow += (influence - dot.glow) * 0.18;

      const y = dot.y + dot.lift;
      const radius = 1 + dot.glow * 0.35;
      const gray = Math.round(36 + dot.glow * 180);
      const alpha = 0.12 + dot.glow * 0.48;

      ctx.beginPath();
      ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, ${alpha})`;
      ctx.arc(dot.x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        const influence =
          mouse.active && distance < HOVER_RADIUS
            ? Math.pow(1 - distance / HOVER_RADIUS, 1.6)
            : 0;

        drawDot(dot, influence);
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    buildDots();
    draw();

    window.addEventListener("resize", buildDots);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", buildDots);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
