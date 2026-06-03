"use client";

import { useEffect, useRef } from "react";

export default function HalftoneBackground({ 
  color = "rgba(255, 255, 255, 0.15)", 
  dotSize = 3, 
  spacing = 24 
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;

      // Draw grid of dots
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Math to create the animated halftone wave pattern
          // Combine sin and cos for a diagonal wave that morphs over time
          const waveX = Math.sin(x * 0.005 + time);
          const waveY = Math.cos(y * 0.005 + time);
          const combinedWave = (waveX + waveY + 2) / 4; // Normalize to 0-1

          // Apply a gentle radial falloff so it's not uniformly dense everywhere
          const distanceX = Math.abs(x - canvas.width / 2);
          const distanceY = Math.abs(y - canvas.height / 2);
          const maxDist = Math.max(canvas.width, canvas.height) / 2;
          const falloff = 1 - Math.min(1, Math.sqrt(distanceX ** 2 + distanceY ** 2) / maxDist);

          // Calculate final dynamic size for each dot
          const size = Math.max(0, combinedWave * dotSize * (falloff * 1.5 + 0.5));

          if (size > 0.5) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 0.015; // Animation speed
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, dotSize, spacing]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
