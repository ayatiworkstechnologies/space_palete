import BracketSpaces from "@/components/BracketSpaces";

const trustLogos = [
  {
    id: 1,
    name: "NCompass",
    image: "/logo-1.png",
  },
  {
    id: 2,
    name: "Pinnacle Studio",
    image: "/logo-2.png",
  },
  {
    id: 3,
    name: "Purva Somerset",
    image: "/logo-3.png",
  },
  {
    id: 4,
    name: "NCompass",
    image: "/logo-1.png",
  },
  {
    id: 5,
    name: "Pinnacle Studio",
    image: "/logo-2.png",
  },
  {
    id: 6,
    name: "Purva Somerset",
    image: "/logo-3.png",
  },
];

export default function TrustSection() {
  const marqueeLogos = [...trustLogos, ...trustLogos];

  return (
    <section className="relative overflow-hidden bg-black px-0 py-24 text-white md:px-6 md:py-28">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
            Trust Across{" "}
            <BracketSpaces />
          </h2>
        </div>

        {/* Logos */}
        <div className="relative mx-auto mt-14 w-full max-w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] md:mt-24">
          <div className="flex w-max items-center gap-8 py-4 [animation:trust-marquee_22s_linear_infinite] hover:[animation-play-state:paused] md:gap-24 md:[animation-duration:24s]">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="group flex h-16 w-[150px] shrink-0 items-center justify-center opacity-90 transition duration-500 hover:opacity-100 sm:w-[190px] md:h-20 md:w-[280px]"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-10 max-w-[135px] object-contain grayscale brightness-0 invert transition duration-500 group-hover:scale-105 sm:max-w-[170px] md:max-h-16 md:max-w-[240px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trust-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
