"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectFullImage({
  image = "/project/full.jpg",
  title = "Project",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const frameScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.74, 1, 1.08]);
  const frameY = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -70]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [1.18, 1.02, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.45, 1], [34, 18, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.55], [0, 1, 1]);

  const smoothFrameScale = useSpring(frameScale, { stiffness: 80, damping: 28 });
  const smoothFrameY = useSpring(frameY, { stiffness: 80, damping: 30 });
  const smoothImageScale = useSpring(imageScale, { stiffness: 80, damping: 30 });
  const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 30 });
  const smoothRadius = useSpring(borderRadius, { stiffness: 110, damping: 28 });

  return (
    <section ref={ref} className="relative min-h-[150vh] bg-black">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-8 md:py-12">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", y: 42, opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              scale: smoothFrameScale,
              y: smoothFrameY,
              borderRadius: smoothRadius,
            }}
            className="relative h-[360px] w-full overflow-hidden md:h-[620px] lg:h-[760px]"
          >
            <motion.div
              style={{ scale: smoothImageScale, y: smoothImageY }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={`${title} full interior`}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
