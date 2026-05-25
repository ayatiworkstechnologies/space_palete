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
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:py-28">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
            Trust Across{" "}
            <BracketSpaces />
          </h2>
        </div>

        {/* Logos */}
        <div className="mt-20 grid grid-cols-1 items-center justify-items-center gap-14 sm:grid-cols-3 md:mt-24">
          {trustLogos.map((logo) => (
            <div key={logo.id} className="group flex h-16 w-full max-w-[260px] items-center justify-center opacity-90 transition duration-500 hover:opacity-100 md:h-20">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-11 max-w-[190px] object-contain grayscale brightness-0 invert transition duration-500 group-hover:scale-105 md:max-h-14 md:max-w-[210px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
