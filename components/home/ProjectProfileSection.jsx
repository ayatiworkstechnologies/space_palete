"use client";

import CommonButton from "@/components/CommonButton";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectProfileSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-8 text-white md:py-12 lg:px-14 xl:px-10"
    >
      {/* Moving dotted background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 52 }).map((_, index) => (
          <span
            key={index}
            className="contact-dot absolute block rounded-full bg-white/40"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 100}%`,
              width: `${index % 5 === 0 ? 3 : 2}px`,
              height: `${index % 5 === 0 ? 3 : 2}px`,
              animationDelay: `${index * 0.13}s`,
              animationDuration: `${3.2 + (index % 6) * 0.55}s`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.32)_42%,rgba(0,0,0,0.94)_100%)]" />
      </div>

      {/* Soft orange glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#f47a3c]/8 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 65 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative z-10 mx-auto grid w-full max-w-[1200px]
          gap-10 md:grid-cols-[1fr_0.72fr]
          lg:gap-16 xl:gap-20
        "
      >
        {/* LEFT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.12, duration: 0.85, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Project Profile
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-white md:text-xl md:leading-9">
            Let us understand your space and design goals.
          </p>

          <form className="mt-9 max-w-[620px] space-y-7 md:mt-11 md:space-y-8">
            <input
              type="text"
              placeholder="Full Name"
              suppressHydrationWarning
              className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-4 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#f47a3c] md:text-base"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone Number"
                suppressHydrationWarning
                className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-4 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#f47a3c] md:text-base"
              />

              <input
                type="email"
                placeholder="Email"
                suppressHydrationWarning
                className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-4 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#f47a3c] md:text-base"
              />
            </div>

            <input
              type="text"
              placeholder="Project Type"
              suppressHydrationWarning
              className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-4 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#f47a3c] md:text-base"
            />

            <textarea
              rows="2"
              placeholder="Describe Your Vision"
              suppressHydrationWarning
              className="w-full resize-none border-0 border-b border-white/18 bg-transparent px-1 pb-4 text-[15px] text-white outline-none transition placeholder:text-white focus:border-[#f47a3c] md:text-base"
            />

            <CommonButton
              as="button"
              type="submit"
              suppressHydrationWarning
              className="!py-3"
            >
              Discover Creations
            </CommonButton>
          </form>
        </motion.div>

        {/* RIGHT CONTACT */}
        <motion.div
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.22, duration: 0.85, ease: "easeOut" }}
          className="w-full md:pl-0 lg:pt-1"
        >
          <h2
            className="
              max-w-[420px] text-3xl font-medium tracking-tight md:text-5xl
            "
          >
            Share Your <br />
            Vision <span className="text-[#f47a3c]">Spaces</span>
          </h2>

          <div className="mt-8 max-w-[430px] space-y-6 md:mt-10 md:space-y-7">
            <div className="group">
              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#f47a3c]"
                />
                <h3 className="text-[14px] font-semibold text-white md:text-[15px]">
                  Contact Our Studio
                </h3>
              </div>

              <a
                href="mailto:uma@spacepalette.net"
                className="mt-2 block pl-8 text-[14px] leading-relaxed text-white transition hover:text-[#f47a3c] md:text-base"
              >
                uma@spacepalette.net
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#f47a3c]"
                />
                <h3 className="text-[14px] font-semibold text-white md:text-[15px]">
                  Speak With Our Studio
                </h3>
              </div>

              <a
                href="tel:+917338811688"
                className="mt-2 block pl-8 text-[14px] leading-relaxed text-white transition hover:text-[#f47a3c] md:text-base"
              >
                +91 7338811688
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#f47a3c]"
                />
                <h3 className="text-[14px] font-semibold text-white md:text-[15px]">
                  Head Quarters
                </h3>
              </div>

              <p className="mt-2 block pl-8 text-[14px] leading-6 text-white md:text-base md:leading-7">
                No.46, 3rd Floor, GSquare Building,
                <br />
                Rajiv Gandhi Salai, OMR,
                <br />
                Kandanchavadi, Chennai, Tamil Nadu 600096.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#f47a3c]"
                />
                <h3 className="text-[14px] font-semibold text-white md:text-[15px]">
                  Other Locations
                </h3>
              </div>

              <p className="mt-2 block pl-8 text-[14px] leading-6 text-white md:text-base md:leading-7">
                Bangalore, Hyderabad, Coimbatore.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes contactDotMove {
          0% {
            transform: translate3d(0, 0, 0) scale(0.75);
            opacity: 0.1;
          }

          40% {
            opacity: 0.55;
          }

          60% {
            transform: translate3d(14px, -18px, 0) scale(1.1);
            opacity: 0.8;
          }

          100% {
            transform: translate3d(-12px, 16px, 0) scale(0.75);
            opacity: 0.12;
          }
        }

        .contact-dot {
          animation-name: contactDotMove;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}
