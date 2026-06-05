"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function FloatingImage({ item, index, title }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [90, -90] : [140, -120]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.04]);

  const smoothY = useSpring(y, { stiffness: 75, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 75, damping: 30 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ y: smoothY, scale: smoothScale }}
      className={`relative h-[330px] w-full overflow-hidden md:h-[380px] md:w-[240px] ${item.className || ""}`}
    >
      <Image
        src={item.image}
        alt={`${title} gallery ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 240px"
        quality={100}
        className="object-cover"
      />
    </motion.div>
  );
}

export default function ProjectFloatingGallery({
  gallery = [],
  title = "Project",
}) {
  return (
    <section className="relative bg-black px-6 py-8 text-white md:px-12 md:py-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:items-start">
        {gallery.map((item, index) => (
          <FloatingImage
            key={`${title}-${item.image}-${index}`}
            item={item}
            index={index}
            title={title}
          />
        ))}
      </div>
    </section>
  );
}
