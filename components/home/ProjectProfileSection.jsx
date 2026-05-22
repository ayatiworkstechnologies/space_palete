import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ProjectProfileSection() {
  return (
    <section
      id="contact"
      className="project-profile-section relative overflow-hidden bg-black px-6 py-24 text-white md:py-32"
    >
      {/* Grid Background */}
      <div className="project-grid-bg pointer-events-none absolute inset-0" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#f47a3c]/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-96 w-96 rounded-full bg-white/5 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 md:grid-cols-[1.1fr_0.9fr] lg:gap-28">
        {/* LEFT FORM */}
        <div className="project-form-wrap">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Project Profile
          </h2>

          <p className="mt-5 text-sm leading-6 text-white/70 md:text-base">
            Let us understand your space and design goals.
          </p>

          <form className="mt-8 space-y-8">
            <div className="form-line-group">
              <input
                type="text"
                placeholder="Full Name"
                suppressHydrationWarning
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="form-line-group">
                <input
                  type="tel"
                  placeholder="Phone Numer"
                  suppressHydrationWarning
                />
              </div>

              <div className="form-line-group">
                <input
                  type="email"
                  placeholder="Email"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="form-line-group">
              <input
                type="text"
                placeholder="Project Type"
                suppressHydrationWarning
              />
            </div>

            <div className="form-line-group">
              <textarea
                rows="2"
                placeholder="Describe Your Vision"
                suppressHydrationWarning
              />
            </div>

            <button
              type="submit"
              suppressHydrationWarning
              className="group inline-flex items-center gap-5 border border-white/70 px-5 py-3 text-xs font-medium text-white transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black"
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
        <div className="project-contact-wrap md:pl-8">
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Share Your <br />
            Vision{" "}
            <span className="inline-flex items-center gap-2 text-[#f47a3c]">
              <span className="text-[#f47a3c]/70">[</span>
              Spaces
              <span className="text-[#f47a3c]/70">]</span>
            </span>
          </h2>

          <div className="mt-12 space-y-10">
            <div className="contact-info-item">
              <div className="flex items-center gap-3">
                <Mail size={20} strokeWidth={1.8} />
                <h3>Contact Our Studio</h3>
              </div>
              <a href="mailto:uma@spacepalette.net">
                uma@spacepalette.net
              </a>
            </div>

            <div className="contact-info-item">
              <div className="flex items-center gap-3">
                <Phone size={20} strokeWidth={1.8} />
                <h3>Speak With Our Studio</h3>
              </div>
              <a href="tel:+918688098077">+91 8688098077</a>
            </div>

            <div className="contact-info-item">
              <div className="flex items-center gap-3">
                <MapPin size={20} strokeWidth={1.8} />
                <h3>Reach the Studio</h3>
              </div>
              <p>
                No.46, 3rd Floor, GSquare Building,
                <br />
                Rajiv Gandhi Salai, OMR, Kandanchavadi,
                <br />
                Chennai, Tamil Nadu 600096.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
