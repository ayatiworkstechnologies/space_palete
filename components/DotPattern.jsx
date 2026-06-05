"use client";

/**
 * DotPattern — reusable dotted / halftone background overlay.
 *
 * Variants:
 *   "grid"    – uniform dot grid with soft radial fade (halftone feel)
 *   "radial"  – radial halftone burst from center
 *   "scatter" – randomly placed blinking particles
 *
 * Props:
 *   variant   – "grid" | "radial" | "scatter"  (default: "grid")
 *   density   – "low" | "normal" | "high"      (default: "normal")
 *   accent    – show some accent-colored dots   (default: false)
 *   className – extra classes on the wrapper
 */
export default function DotPattern({
  variant = "grid",
  density = "normal",
  accent = false,
  className = "",
}) {
  if (variant === "scatter") {
    return <ScatterDots density={density} accent={accent} className={className} />;
  }

  const dotSize = { low: "1.2px", normal: "1.5px", high: "2px" }[density];
  const spacing = { low: 24, normal: 18, high: 14 }[density];
  const halfSpacing = spacing / 2;

  let basePattern = "";
  let bgSize = `${spacing}px ${spacing}px`;
  let maskImage = "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.6) 40%, transparent 80%)";
  let transform = "none";
  let opacity = 1;
  let animClass = "pattern-breathe";

  // Different structural geometries
  if (variant === "honeycomb") {
    // Hexagonal / staggered dot grid
    basePattern = `
      radial-gradient(circle at center, rgba(255,255,255,0.14) 0 ${dotSize}, transparent ${dotSize}),
      radial-gradient(circle at center, rgba(255,255,255,0.14) 0 ${dotSize}, transparent ${dotSize})
    `;
    bgSize = `${spacing}px ${spacing}px`;
    animClass = "pattern-pan-diagonal";
  } else if (variant === "concentric") {
    // Concentric dotted rings (radar effect)
    basePattern = `repeating-radial-gradient(circle at center, transparent 0, transparent ${spacing - 2}px, rgba(255,255,255,0.14) ${spacing - 1}px, transparent ${spacing}px)`;
    bgSize = "100% 100%"; // Gradient covers whole container
    maskImage = "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.8) 30%, transparent 60%)";
    animClass = "pattern-breathe";
  } else if (variant === "stardust") {
    // Chaotic multi-layered noise (non-grid)
    basePattern = `
      radial-gradient(circle at 15% 50%, rgba(255,255,255,0.2) 0 1px, transparent 1.5px),
      radial-gradient(circle at 85% 30%, rgba(255,255,255,0.15) 0 1.5px, transparent 2px),
      radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0 1px, transparent 1.5px),
      radial-gradient(circle at 70% 60%, rgba(255,255,255,0.25) 0 2px, transparent 2.5px)
    `;
    bgSize = `${spacing * 4}px ${spacing * 4}px`;
    maskImage = "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 60%, transparent 100%)";
    animClass = "pattern-rotate-slow";
  } else if (variant === "oval") {
    // Large, non-grid intersecting elliptical wireframes (interference rings)
    basePattern = `
      repeating-radial-gradient(ellipse at 30% 50%, transparent 0, transparent 50px, rgba(255,255,255,0.08) 51px, transparent 52px),
      repeating-radial-gradient(ellipse at 70% 60%, transparent 0, transparent 70px, rgba(255,255,255,0.06) 71px, transparent 72px)
    `;
    bgSize = "100% 100%";
    maskImage = "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.5) 50%, transparent 90%)";
    animClass = "pattern-breathe";
  } else if (variant === "diagonal") {
    // Square grid but masked diagonally
    basePattern = `radial-gradient(circle, rgba(255,255,255,0.14) 0 ${dotSize}, transparent ${dotSize})`;
    maskImage = "linear-gradient(135deg, black 0%, rgba(0,0,0,0.5) 40%, transparent 80%)";
    animClass = "pattern-pan-diagonal";
  } else if (variant === "wave") {
    // 3D perspective grid
    basePattern = `radial-gradient(circle, rgba(255,255,255,0.14) 0 ${dotSize}, transparent ${dotSize})`;
    maskImage = "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.96) 42%, transparent 100%)";
    transform = "perspective(900px) rotateX(66deg) rotateZ(-7deg) scale(1.22)";
    opacity = 0.6;
    animClass = "pattern-wave-anim";
  } else if (variant === "radial") {
    // Square grid masked radially
    basePattern = `radial-gradient(circle, rgba(255,255,255,0.14) 0 ${dotSize}, transparent ${dotSize})`;
    maskImage = "radial-gradient(circle at center, black 0%, rgba(0,0,0,0.7) 30%, transparent 70%)";
  } else {
    // Default standard grid
    basePattern = `radial-gradient(circle, rgba(255,255,255,0.14) 0 ${dotSize}, transparent ${dotSize})`;
  }

  // Handle the offset background position for honeycomb
  const bgPosition = variant === "honeycomb" 
    ? `0 0, ${halfSpacing}px ${halfSpacing}px` 
    : "0 0";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Pattern Base Layer */}
      <div
        className={`absolute inset-0 ${animClass}`}
        style={{
          backgroundImage: basePattern,
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
          transform: transform,
          transformOrigin: "top center",
          opacity: opacity,
        }}
      />

      {/* Fade mask applied over top */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
          backgroundColor: variant === 'stardust' ? 'transparent' : 'black',
        }}
      />
    </div>
  );
}

function ScatterDots({ density, accent, className }) {
  const count = { low: 14, normal: 22, high: 32 }[density];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-75">
        {Array.from({ length: count }).map((_, i) => {
          const isAccent = accent && i % 4 === 0;
          const isGlow = i % 5 === 0;
          const animClass = isAccent
            ? "dot-blink-glow bg-[#E16E38]/40"
            : isGlow
              ? "dot-blink-drift bg-white/50"
              : "dot-blink-soft bg-white/35";

          return (
            <span
              key={i}
              className={`absolute block rounded-full ${animClass}`}
              style={{
                left: `${(i * 23 + 7) % 100}%`,
                top: `${(i * 31 + 11) % 100}%`,
                width: i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
                height: i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
                animationDuration: `${3 + (i % 6) * 0.7}s`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}
      </div>
      {/* Soft dark edge mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
