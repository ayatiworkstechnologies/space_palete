"use client";

import { useEffect, useRef } from "react";

export default function TwinkleDotsBackground({ 
  color = "rgba(255, 255, 255, 1)", 
  maxDotSize = 2, 
  density = 0.0003
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let dots = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const dotCount = Math.floor(canvas.width * canvas.height * density);
      dots = [];
      
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * maxDotSize + 0.5,
          opacity: Math.random(),
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          fadeSpeed: Math.random() * 0.01 + 0.002
        });
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Fade logic (come and go)
        dot.opacity += dot.fadeSpeed * dot.fadeDirection;

        if (dot.opacity >= 0.5) {
          dot.opacity = 0.5; // Max opacity 0.5 so it stays subtle
          dot.fadeDirection = -1;
        } else if (dot.opacity <= 0) {
          dot.opacity = 0;
          dot.fadeDirection = 1;
          // Randomize position when fully faded out for a more dynamic "coming and going"
          dot.x = Math.random() * canvas.width;
          dot.y = Math.random() * canvas.height;
        }

        ctx.globalAlpha = dot.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, maxDotSize, density]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
