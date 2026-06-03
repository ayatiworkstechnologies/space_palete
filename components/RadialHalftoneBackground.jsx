"use client";

import { useEffect, useRef } from "react";

export default function RadialHalftoneBackground({ 
  color = "rgba(255, 255, 255, 0.15)", 
  dotSize = 3, 
  spacing = 22,
  origin = "center"
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

      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      
      if (origin === "right") centerX = canvas.width;
      else if (origin === "left") centerX = 0;
      else if (origin === "top") centerY = 0;
      else if (origin === "bottom") centerY = canvas.height;
      else if (origin === "bottom-right") {
        centerX = canvas.width;
        centerY = canvas.height;
      }
      
      const maxDist = Math.max(canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Radial wave: expanding outward
          const wave = Math.sin(distance * 0.04 - time);
          
          const falloff = Math.max(0, 1 - (distance / maxDist));
          
          const normalizedWave = (wave + 1) / 2;
          const size = normalizedWave * dotSize * (falloff * 2.5);

          if (size > 0.5) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 0.04;
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
}
