"use client";

import { useEffect, useRef } from "react";

export default function ScatteredDotsBackground({ 
  color = "rgba(255, 255, 255, 0.25)", 
  maxDotSize = 3, 
  density = 0.0004, // dots per pixel
  speed = 0.3
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
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height); // So they cover corners
      const dotCount = Math.floor(canvas.width * canvas.height * density);
      
      dots = [];
      
      for (let i = 0; i < dotCount; i++) {
        // Distribute randomly across the screen
        const r = Math.random() * maxRadius;
        const theta = Math.random() * Math.PI * 2;
        
        dots.push({
          radius: r,
          angle: theta,
          size: Math.random() * maxDotSize + 0.5,
          // Randomize rotation speed and direction (orbit)
          angularSpeed: ((Math.random() * speed) + (speed * 0.2)) * (Math.random() > 0.5 ? 1 : -1) * 0.002,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Orbit logic (round movement)
        dot.angle += dot.angularSpeed;

        const x = centerX + Math.cos(dot.angle) * dot.radius;
        const y = centerY + Math.sin(dot.angle) * dot.radius;

        ctx.globalAlpha = dot.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, maxDotSize, density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
