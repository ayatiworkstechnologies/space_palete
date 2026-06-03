"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function DottedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-full w-full">
      {/* Base very dim dots everywhere so the grid is faintly visible */}
      <div 
        className="absolute inset-0 h-full w-full opacity-10"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Interactive mouse highlight dots - reveals brighter white dots on hover */}
      <motion.div 
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          WebkitMaskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,1), rgba(0,0,0,0) 80%)`,
          maskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,1), rgba(0,0,0,0) 80%)`,
        }}
      />
    </div>
  );
}
