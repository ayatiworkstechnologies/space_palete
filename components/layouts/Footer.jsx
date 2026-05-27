"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function SocialIcon({ children, size = 22 }) {
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

function ThreadsIcon({ size }) {
  return (
    <SocialIcon size={size}>
      <path d="M12.17 2C6.56 2 3.02 5.58 3.02 11.08c0 5.64 3.62 10.92 9.28 10.92 5.04 0 8.18-3.09 8.18-7.08 0-3.18-1.76-5.17-5.01-5.94-.42-2.34-1.83-3.67-4.1-3.67-2.1 0-3.74 1.16-4.55 3.16l1.96.84c.5-1.28 1.36-1.93 2.56-1.93 1.07 0 1.76.62 2.02 1.79-.34-.02-.69-.03-1.05-.03-3.03 0-4.84 1.39-4.84 3.67 0 2.09 1.64 3.56 3.98 3.56 2.42 0 3.95-1.39 4.14-3.72l.02-.25c1.78.58 2.59 1.72 2.59 3.52 0 2.75-2.22 4.73-5.83 4.73-4.28 0-7.05-4.08-7.05-8.65 0-4.31 2.61-6.95 6.9-6.95 3.01 0 5.16 1.36 6.49 4.14l2-.95C18.98 4.18 16.14 2 12.17 2Zm-.7 12.34c-1.1 0-1.8-.6-1.8-1.55 0-1.12.95-1.73 2.68-1.73.4 0 .79.03 1.18.08v.35c0 1.82-.72 2.85-2.06 2.85Z" />
    </SocialIcon>
  );
}

function PinterestIcon({ size }) {
  return (
    <SocialIcon size={size}>
      <path d="M12.18 2C6.67 2 3 5.72 3 10.55c0 3.05 1.72 5.45 3.95 6.4.37.16.58.01.66-.4.06-.31.22-1.36.3-1.78.1-.57.06-.76-.33-1.22-.8-.96-1.31-2.2-1.31-3.96 0-4.02 3.01-7.82 8.14-7.82 4.44 0 7.55 2.71 7.55 6.58 0 4.94-2.47 8.38-5.67 8.38-1.77 0-3.09-1.46-2.67-3.26.51-2.14 1.49-4.45 1.49-5.99 0-1.38-.74-2.53-2.28-2.53-1.81 0-3.27 1.87-3.27 4.38 0 1.6.54 2.68.54 2.68s-1.79 7.57-2.12 8.98c-.37 1.57-.22 3.78-.06 5.21.04.39.55.52.76.18.74-1.2 1.59-2.98 1.99-4.5.16-.59.8-3.05.8-3.05.43.82 1.68 1.51 3.01 1.51 3.96 0 6.82-3.64 6.82-8.16C21 5.02 17.35 2 12.18 2Z" />
    </SocialIcon>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/spacepalette22/",
    icon: FacebookIcon,
    size: 22,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/spacepalette_urban/",
    icon: InstagramIcon,
    size: 22,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@spacepalette_urban",
    icon: ThreadsIcon,
    size: 22,
  },
  {
    label: "X",
    href: "https://x.com/offPaletteSpace",
    icon: null,
    size: 22,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Spacepalette-designs",
    icon: YoutubeIcon,
    size: 24,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/space-palette-india",
    icon: LinkedinIcon,
    size: 22,
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/spacepalettedesigns/",
    icon: PinterestIcon,
    size: 22,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 text-white md:px-6">
      {/* Animated dotted background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 38 }).map((_, index) => (
          <span
            key={index}
            className="footer-dot absolute block rounded-full bg-white/35"
            style={{
              left: `${(index * 23) % 100}%`,
              top: `${(index * 37) % 100}%`,
              width: `${index % 5 === 0 ? 3 : 2}px`,
              height: `${index % 5 === 0 ? 3 : 2}px`,
              animationDelay: `${index * 0.14}s`,
              animationDuration: `${3.5 + (index % 5) * 0.65}s`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_42%,rgba(0,0,0,0.96)_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl border-t border-white/10 max-md:border-t-0"
      >
        <motion.nav
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 py-9 text-lg text-white max-md:block max-md:border-b max-md:border-white/10 max-md:py-4 max-md:text-center max-md:text-xl"
        >
          <Link href="/" className="transition duration-300 hover:text-[#f47a3c] max-md:hidden">
            Home
          </Link>
          <Link href="/about" className="transition duration-300 hover:text-[#f47a3c] max-md:hidden">
            About us
          </Link>
          <Link href="/projects" className="transition duration-300 hover:text-[#f47a3c] max-md:hidden">
            Projects
          </Link>
          {/* <Link href="/studios" className="transition duration-300 hover:text-[#f47a3c] max-md:hidden">
            Studios
          </Link> */}
          <Link href="/contact" className="transition duration-300 hover:text-[#f47a3c]">
            Contact Us
          </Link>
        </motion.nav>

        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-5 pb-8 max-md:grid max-md:grid-cols-4 max-md:border-b max-md:border-white/10 max-md:gap-4 max-md:py-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 28, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.18 + index * 0.06,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.12,
                  rotate: -3,
                }}
                whileTap={{ scale: 0.94 }}
                className="
                  group relative inline-flex h-14 w-14 items-center justify-center
                  rounded-full border border-white/12 text-white/90
                  transition duration-300
                  hover:border-[#f47a3c]/70 hover:text-[#f47a3c]
                  max-md:h-12 max-md:w-12
                "
              >
                <span className="absolute inset-0 rounded-full bg-[#f47a3c]/0 blur-xl transition duration-300 group-hover:bg-[#f47a3c]/18" />

                <span className="relative z-10">
                  {Icon ? (
                    <Icon size={social.size} />
                  ) : (
                    <span className="text-lg font-semibold leading-none">X</span>
                  )}
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.38, duration: 0.75, ease: "easeOut" }}
          className="border-t border-white/10 py-5 text-center max-md:border-t-0 max-md:py-5"
        >
          <p className="mx-auto max-w-3xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            Copyright &copy;2026 spacepalette - All right reserved | Designed &amp;
            Developed by{" "}
            <a
              href="https://www.ayatiworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#f47a3c]"
            >
              Ayatiworks
            </a>
          </p>
        </motion.div>
      </motion.div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes footerDotMove {
          0% {
            transform: translate3d(0, 0, 0) scale(0.75);
            opacity: 0.1;
          }

          45% {
            opacity: 0.55;
          }

          65% {
            transform: translate3d(12px, -18px, 0) scale(1.1);
            opacity: 0.78;
          }

          100% {
            transform: translate3d(-10px, 14px, 0) scale(0.72);
            opacity: 0.12;
          }
        }

        .footer-dot {
          animation-name: footerDotMove;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          will-change: transform, opacity;
        }
      `}</style>
    </footer>
  );
}