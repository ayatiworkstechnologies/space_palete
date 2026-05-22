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
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:py-28">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="trust-title text-3xl font-medium tracking-tight text-white md:text-5xl">
            Trust Across{" "}
            <span className="inline-flex items-center gap-2 text-[#f47a3c]">
              <span className="text-[#f47a3c]/70">[</span>
              Spaces
              <span className="text-[#f47a3c]/70">]</span>
            </span>
          </h2>
        </div>

        {/* Logos */}
        <div className="mt-20 grid grid-cols-1 items-center justify-items-center gap-14 sm:grid-cols-3 md:mt-24">
          {trustLogos.map((logo, index) => (
            <div
              key={logo.id}
              className="trust-logo-card group flex h-20 w-full max-w-[260px] items-center justify-center"
              style={{
                animationDelay: `${index * 0.18}s`,
              }}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-14 max-w-[210px] object-contain opacity-90 grayscale brightness-0 invert transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}