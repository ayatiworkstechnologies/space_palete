import { MessageCircle } from "lucide-react";

function SocialIcon({ children, size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function InstagramIcon({ size }) {
  return (
    <SocialIcon size={size}>
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </SocialIcon>
  );
}

function FacebookIcon({ size }) {
  return (
    <SocialIcon size={size}>
      <path d="M14 8.5V6.75c0-.5.4-.75.9-.75H17V2.3A25.7 25.7 0 0 0 13.94 2C10.9 2 8.82 3.86 8.82 7.23V10H5.5v4.12h3.32V22h4.08v-7.88h3.2L16.7 10h-3.8V7.64c0-.83.22-1.39 1.1-1.39H17V2.3h-3.06C10.9 2.3 8.82 4.16 8.82 7.53V10H5.5v4.12h3.32V22h4.08v-7.88h3.2L16.7 10H14Z" />
    </SocialIcon>
  );
}

function LinkedinIcon({ size }) {
  return (
    <SocialIcon size={size}>
      <path d="M6.94 8.88H3.22V21h3.72V8.88ZM5.08 3a2.16 2.16 0 1 0 0 4.32 2.16 2.16 0 0 0 0-4.32Zm16.7 11.05c0-3.65-1.95-5.35-4.55-5.35a3.92 3.92 0 0 0-3.56 1.96h-.05V8.88h-3.57V21h3.72v-6c0-1.58.3-3.1 2.25-3.1 1.92 0 1.95 1.8 1.95 3.2V21h3.72l.09-6.95Z" />
    </SocialIcon>
  );
}

function YoutubeIcon({ size }) {
  return (
    <SocialIcon size={size}>
      <path d="M21.58 7.19a2.74 2.74 0 0 0-1.93-1.94C17.94 4.8 12 4.8 12 4.8s-5.94 0-7.65.45a2.74 2.74 0 0 0-1.93 1.94A28.56 28.56 0 0 0 2 12a28.56 28.56 0 0 0 .42 4.81 2.74 2.74 0 0 0 1.93 1.94c1.71.45 7.65.45 7.65.45s5.94 0 7.65-.45a2.74 2.74 0 0 0 1.93-1.94A28.56 28.56 0 0 0 22 12a28.56 28.56 0 0 0-.42-4.81ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
    </SocialIcon>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 text-white max-md:min-h-[100svh] max-md:snap-start max-md:snap-always">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:115px_115px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_90%,transparent_100%)] md:[background-size:145px_145px]" />

      <div className="relative z-10 mx-auto max-w-6xl border-t border-white/10">
        <nav className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 py-8 text-lg text-white">
          <a href="#home" className="transition duration-300 hover:text-[#f47a3c]">
            Home
          </a>
          <a href="#about" className="transition duration-300 hover:text-[#f47a3c]">
            About us
          </a>
          <a href="#projects" className="transition duration-300 hover:text-[#f47a3c]">
            Projects
          </a>
          <a href="#contact" className="transition duration-300 hover:text-[#f47a3c]">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center justify-center gap-7 pb-7">
          <a
            href="https://wa.me/918688098077"
            target="_blank"
            aria-label="WhatsApp"
            className="inline-flex items-center justify-center text-white transition duration-300 hover:-translate-y-1 hover:text-[#f47a3c]"
          >
            <MessageCircle size={14} />
          </a>
          <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center text-white transition duration-300 hover:-translate-y-1 hover:text-[#f47a3c]">
            <InstagramIcon size={14} />
          </a>
          <a href="#" aria-label="X" className="inline-flex items-center justify-center text-sm text-white transition duration-300 hover:-translate-y-1 hover:text-[#f47a3c]">
            X
          </a>
          <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center text-white transition duration-300 hover:-translate-y-1 hover:text-[#f47a3c]">
            <FacebookIcon size={14} />
          </a>
          <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center text-white transition duration-300 hover:-translate-y-1 hover:text-[#f47a3c]">
            <LinkedinIcon size={14} />
          </a>
          <a href="#" aria-label="YouTube" className="inline-flex items-center justify-center text-white transition duration-300 hover:-translate-y-1 hover:text-[#f47a3c]">
            <YoutubeIcon size={15} />
          </a>
        </div>

        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-[11px] leading-5 text-white/65">
            Copyright &copy;2026 spacepalette - All right reserved | Designed &amp;
            Developed by{" "}
            <a
              href="https://www.ayatiworks.com/"
              target="_blank"
              className="text-white transition hover:text-[#f47a3c]"
            >
              Ayatiworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
