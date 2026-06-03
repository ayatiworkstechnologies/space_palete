"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },

  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(pathname === '/');

  useEffect(() => {
    if (showSplash && pathname === '/') {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 1500); // 1.5s in center before moving
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [pathname, showSplash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LayoutGroup>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div
              layoutId="main-logo"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/sp-logo.png"
                alt="Space Palette Logo"
                width={300}
                height={120}
                priority
                className="h-[100px] w-auto md:h-[140px] lg:h-[180px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: pathname === '/' ? 1.5 : 0 }}
        style={{ viewTransitionName: "site-header" }}
        className={`
          fixed left-0 top-0 z-50 w-full
          
          transition-all duration-700
          ${isScrolled
            ? "bg-black/35 backdrop-blur-md"
            : "bg-transparent backdrop-blur-0"
          }
        `}
      >
        <div
          className={`
            mx-auto flex w-full items-center justify-between
            px-6 transition-all duration-700 md:px-8 lg:px-10
            ${isScrolled ? "h-[70px]" : "h-[92px]"}
          `}
        >
          {/* Logo */}
          <Link href="/" className="relative z-20 inline-flex items-center">
            {!showSplash && (
              <motion.div
                layoutId="main-logo"
                animate={{
                  scale: isScrolled ? 0.86 : 1,
                }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="origin-left"
              >
                <Image
                  src="/sp-logo.png"
                  alt="Space Palette Logo"
                  width={150}
                  height={60}
                  priority
                  className="
                    h-[54px] w-[62px]
                    transition duration-500
                    md:h-[60px] md:w-[72px]
                    lg:h-[66px] lg:w-[82px]
                  "
                />
              </motion.div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex w-full max-w-[940px] items-center justify-between">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: (pathname === '/' ? 1.8 : 0.15) + index * 0.08,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        group relative text-[13px] font-semibold uppercase
                        tracking-[0.08em] transition duration-300
                        ${isActive ? 'text-[#f47a3c]' : 'text-white hover:text-white'}
                      `}
                    >
                      {item.label}

                      <span
                        className={`
                          absolute -bottom-2 left-0 h-px bg-[#f47a3c]
                          transition-all duration-300 
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full bg-white'}
                        `}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="relative z-20 flex items-center justify-end">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: pathname === '/' ? 1.8 : 0.15, duration: 0.5 }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/60 text-white transition duration-300
                hover:bg-white hover:text-[#061f1d] lg:hidden
              "
            >
              <FiMenu className="text-[23px]" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[#061f1d] text-white"
          >
            <div className="flex h-24 items-center justify-between px-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center"
              >
                <Image
                  src="/space-logo.svg"
                  alt="Space Palette Logo"
                  width={180}
                  height={80}
                  priority
                  className="h-auto w-[84px] md:w-[96px]"
                />
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="
                  flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/60 transition hover:bg-white hover:text-[#061f1d]
                "
              >
                <FiX className="text-[24px]" />
              </button>
            </div>

            <motion.nav
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 25, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="px-6 pt-12"
            >
              <ul className="space-y-7">
                {navLinks.map((item, index) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.07,
                        duration: 0.45,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`
                          block border-b border-white/12 pb-5
                          text-[34px] font-light uppercase tracking-[-0.04em]
                          transition hover:text-white
                          ${isActive ? 'text-[#f47a3c] border-[#f47a3c]/30' : 'text-white'}
                        `}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
