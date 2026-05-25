import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ProjectProfileSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-16 text-white md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)] md:[background-size:180px_180px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.12fr_0.88fr] lg:gap-28">
        {/* LEFT FORM */}
        <div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Project Profile
          </h2>

          <p className="mt-4 text-xs leading-5 text-white/85">
            Let us understand your space and design goals.
          </p>

          <form className="mt-7 space-y-8">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                suppressHydrationWarning
                className="w-full border-0 border-b border-white/20 bg-transparent px-4 pb-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f47a3c]"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <input
                  type="tel"
                  placeholder="Phone Numer"
                  suppressHydrationWarning
                  className="w-full border-0 border-b border-white/20 bg-transparent px-4 pb-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f47a3c]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  suppressHydrationWarning
                  className="w-full border-0 border-b border-white/20 bg-transparent px-4 pb-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f47a3c]"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Project Type"
                suppressHydrationWarning
                className="w-full border-0 border-b border-white/20 bg-transparent px-4 pb-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f47a3c]"
              />
            </div>

            <div>
              <textarea
                rows="2"
                placeholder="Describe Your Vision"
                suppressHydrationWarning
                className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-4 pb-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f47a3c]"
              />
            </div>

            <button
              type="submit"
              suppressHydrationWarning
              className="group inline-flex items-center gap-5 border border-white/70 px-4 py-3 text-[11px] font-semibold text-white transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black"
            >
              Discover Creations
              <ArrowRight
                size={17}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>

        {/* RIGHT CONTACT */}
        <div className="md:pl-8">
          <h2 className="text-3xl font-medium leading-[0.95] tracking-tight md:text-4xl">
            Share Your <br />
            Vision{" "}
            <span className="inline-flex items-center gap-2 text-[#f47a3c]">
              <span className="text-[#f47a3c]/70">[</span>
              Spaces
              <span className="text-[#f47a3c]/70">]</span>
            </span>
          </h2>

          <div className="mt-9 space-y-7">
            <div>
              <div className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.8} />
                <h3 className="text-base font-normal text-white md:text-lg">Contact Our Studio</h3>
              </div>
              <a href="mailto:uma@spacepalette.net" className="mt-3 block pl-7 text-xs leading-relaxed text-white/45 transition hover:text-[#f47a3c]">
                uma@spacepalette.net
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.8} />
                <h3 className="text-base font-normal text-white md:text-lg">Speak With Our Studio</h3>
              </div>
              <a href="tel:+918688098077" className="mt-3 block pl-7 text-xs leading-relaxed text-white/45 transition hover:text-[#f47a3c]">+91 8688098077</a>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.8} />
                <h3 className="text-base font-normal text-white md:text-lg">Head quarters</h3>
              </div>
              <p className="mt-3 block pl-7 text-xs leading-relaxed text-white/45">
                No.46, 3rd Floor, GSquare Building,
                <br />
                Rajiv Gandhi Salai, OMR, Kandanchavadi,
                <br />
                Chennai, Tamil Nadu 600096.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.8} />
                <h3 className="text-base font-normal text-white md:text-lg">Another Locations</h3>
              </div>
              <p className="mt-3 block pl-7 text-xs leading-relaxed text-white/45">
                Bangalore, Hyderabad, Coimbatore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
