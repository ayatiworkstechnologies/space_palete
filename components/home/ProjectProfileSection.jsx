"use client";

import { useState } from "react";
import CommonButton from "@/components/CommonButton";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectProfileSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "",
    vision: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            full_name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            project_type: formData.projectType,
            vision: formData.vision,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          projectType: "",
          vision: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

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
      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#E16E38]/8 blur-[130px]" />

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

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-9 flex min-h-[350px] flex-col items-center justify-center border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md max-w-[620px]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E16E38]/10 text-[#E16E38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white md:text-2xl">
                Vision Shared Successfully!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-md font-primary">
                Thank you for reaching out. We have received your project details and our team will get in touch with you shortly to bring your spaces to life.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-[#E16E38] underline underline-offset-4 hover:text-white transition duration-300 font-primary cursor-pointer"
              >
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-9 max-w-[620px] space-y-7 md:mt-11 md:space-y-8">
              <div className="flex flex-col relative group">
                <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  suppressHydrationWarning
                  className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-3 text-[15px] text-white outline-none transition duration-300 focus:border-[#E16E38] md:text-base font-primary"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col relative group">
                  <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    suppressHydrationWarning
                    className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-3 text-[15px] text-white outline-none transition duration-300 focus:border-[#E16E38] md:text-base font-primary"
                  />
                </div>

                <div className="flex flex-col relative group">
                  <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    suppressHydrationWarning
                    className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-3 text-[15px] text-white outline-none transition duration-300 focus:border-[#E16E38] md:text-base font-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col relative group">
                <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                  Project Type
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  suppressHydrationWarning
                  className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-3 text-[15px] text-white outline-none transition duration-300 focus:border-[#E16E38] md:text-base font-primary"
                />
              </div>

              <div className="flex flex-col relative group">
                <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                  Describe Your Vision
                </label>
                <textarea
                  rows="2"
                  required
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  suppressHydrationWarning
                  className="w-full resize-none border-0 border-b border-white/18 bg-transparent px-1 pb-3 text-[15px] text-white outline-none transition duration-300 focus:border-[#E16E38] md:text-base font-primary"
                />
              </div>

              {status === "error" && (
                <p className="text-sm font-medium text-[#E16E38] font-primary">
                  {errorMessage}
                </p>
              )}

              <CommonButton
                as="button"
                type="submit"
                suppressHydrationWarning
                className="!py-3"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sharing Vision..." : "Discover Creations"}
              </CommonButton>
            </form>
          )}
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
            Vision <span className="text-[#E16E38]">Spaces</span>
          </h2>

          <div className="mt-8 max-w-[430px] space-y-6 md:mt-10 md:space-y-7">
            <div className="group">
              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#E16E38]"
                />
                <h3 className="text-[14px] font-semibold text-white md:text-[15px]">
                  Contact Our Studio
                </h3>
              </div>

              <a
                href="mailto:uma@spacepalette.net"
                className="mt-2 block pl-8 text-[14px] leading-relaxed text-white transition hover:text-[#E16E38] md:text-base"
              >
                uma@spacepalette.net
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#E16E38]"
                />
                <h3 className="text-[14px] font-semibold text-white md:text-[15px]">
                  Speak With Our Studio
                </h3>
              </div>

              <a
                href="tel:+917338811688"
                className="mt-2 block pl-8 text-[14px] leading-relaxed text-white transition hover:text-[#E16E38] md:text-base"
              >
                +91 7338811688
              </a>
            </div>

            <div className="group">
              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  strokeWidth={1.6}
                  className="shrink-0 text-white transition group-hover:text-[#E16E38]"
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
                  className="shrink-0 text-white transition group-hover:text-[#E16E38]"
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
