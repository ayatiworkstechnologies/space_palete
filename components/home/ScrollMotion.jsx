"use client";

import { useEffect } from "react";

const motionSelectors = [
  ".home-page > section:not(:first-child)",
  ".home-page > section:not(:first-child) h2",
  ".home-page > section:not(:first-child) p",
  ".home-page > section:not(:first-child) a",
  ".home-page > section:not(:first-child) button",
  ".expertise-card-pure",
  ".trust-logo-card",
  ".story-card",
  ".form-line-group",
  ".contact-info-item",
];

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
      element.classList.add("scroll-motion");
      element.style.setProperty("--motion-delay", `${(index % 6) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-motion-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
