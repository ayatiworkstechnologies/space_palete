"use client";

import { useEffect } from "react";

const motionSelectors = [
  "main > section:not(:first-of-type)",
  "main > section:not(:first-of-type) h2",
  "main > section:not(:first-of-type) p",
  "main > section:not(:first-of-type) form",
  "main > section:not(:first-of-type) article",
  "main > section:not(:first-of-type) img",
  "main > section:not(:first-of-type) button",
  "main > section:not(:first-of-type) a",
];

const hiddenClasses = [
  "opacity-0",
  "translate-y-6",
  "blur-[2px]",
  "transition-all",
  "duration-700",
  "ease-out",
  "will-change-transform",
];

const visibleClasses = ["opacity-100", "translate-y-0", "blur-0"];

export default function ScrollMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll(motionSelectors.join(",")),
    );

    elements.forEach((element, index) => {
      element.classList.add(...hiddenClasses);
      element.style.transitionDelay = `${(index % 5) * 45}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6", "blur-[2px]");
            entry.target.classList.add(...visibleClasses);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
