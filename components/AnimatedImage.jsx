"use client";

import Image from "next/image";
import AnimatedImageReveal from "@/components/AnimatedImageReveal";

export default function AnimatedImage({
  src,
  alt,
  children,
  fill = true,
  sizes,
  priority = false,
  className = "",
  imageClassName = "object-cover",
  delay = 0,
  amount = 0.2,
  hover = true,
  ...props
}) {
  return (
    <AnimatedImageReveal
      delay={delay}
      amount={amount}
      className={className}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`${imageClassName}${hover ? " transition duration-700 hover:scale-105" : ""}`}
      />
      {children}
    </AnimatedImageReveal>
  );
}
