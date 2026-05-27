"use client";

import { motion } from "framer-motion";

export default function AnimatedImageReveal({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
  ...props
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -36,
        clipPath: "inset(0 0 100% 0 round 0px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0 round 0px)",
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
