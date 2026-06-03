"use client";

import { usePathname } from "next/navigation";
import ContactFormSection from "@/components/contact/ContactFormSection";

export default function GlobalContact() {
  const pathname = usePathname();

  // Hide this global section on the dedicated contact page to avoid duplication
  if (pathname === "/contact") {
    return null;
  }

  return (
    <div className="mt-20 border-t border-white/10 pt-16">
      <ContactFormSection />
    </div>
  );
}
