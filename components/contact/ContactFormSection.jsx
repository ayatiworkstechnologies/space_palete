"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CommonButton from "@/components/CommonButton";

export default function ContactFormSection() {
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
      const response = await fetch("/api/contact", {
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
    <section className="mb-6 px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">

        {/* Contact Details Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="mb-6 text-[24px] font-medium tracking-tight md:text-[30px]">
              Contact Our Studio
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E16E38] mb-2 font-bold">
                  Head Quarters
                </p>
                <p className="max-w-[320px] text-[14px] leading-relaxed text-white/95 font-primary">
                  No.46, 3rd Floor, GSquare Building,
                  <br />
                  Rajiv Gandhi Salai, OMR,
                  <br />
                  Kandanchavadi, Chennai, Tamil Nadu 600096.
                </p>

              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-bold">
                  Other Locations
                </p>
                <p className="max-w-[320px] text-[14px] leading-relaxed text-white/95 font-primary">
                  Bangalore, Hyderabad, Coimbatore.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-bold">
                  Email
                </p>
                <a
                  href="mailto:uma@spacepalette.net"
                  className="block text-[15px] font-medium text-white transition-colors hover:text-[#E16E38]"
                >
                  uma@spacepalette.net
                </a>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2 font-bold">
                  Phone
                </p>
                <a
                  href="tel:+917338811688"
                  className="block text-[15px] font-medium text-white transition-colors hover:text-[#E16E38]"
                >
                  +91 7338811688
                </a>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex min-h-[350px] flex-col items-center justify-center border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-md w-full"
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
              <form onSubmit={handleSubmit} className="space-y-7 md:space-y-8">
                <div className="flex flex-col relative group">
                  <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                    className="w-full border-0 border-b border-white/18 bg-transparent px-1 pb-3 text-[15px] text-white outline-none transition duration-300 focus:border-[#E16E38] md:text-base font-primary"
                  />
                </div>

                <div className="flex flex-col relative group">
                  <label className="text-[15px] md:text-[16px] font-normal tracking-wide text-white/90 mb-1 transition-colors duration-300 group-focus-within:text-[#E16E38] font-primary">
                    Describe Your Vision
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.vision}
                    onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
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
                  className="w-full md:w-auto"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Submit Inquiry"}
                </CommonButton>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
