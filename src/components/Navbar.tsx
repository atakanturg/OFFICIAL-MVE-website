import { Link, useLocation } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Investment Summit", href: "/investment-summit" },
    { name: "SFERE", href: "/sfere" },
    { name: "REASON", href: "/reason" },
    { name: "MVE Fund", href: "/investment-challenge" },
    { name: "Competitions", href: "/competitions" },
  ];

  return (
    <>
      {/* ─── Floating Bottom Pill ─── */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3"
      >
        <div className="flex items-center gap-1 bg-[#1E1E1E] border border-white/[0.06] rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/[0.05] transition-colors cursor-pointer"
          >
            <div className="flex flex-col gap-[3px]">
              <motion.span
                className="block w-4 h-[1.5px] bg-[#F5F5F0]"
                animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-4 h-[1.5px] bg-[#F5F5F0]"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="block w-4 h-[1.5px] bg-[#F5F5F0]"
                animate={isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <span className="text-sm font-medium text-[#F5F5F0] tracking-wide hidden sm:inline">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>

          {/* MVE Wordmark */}
          <Link
            to={location === "/" ? "/" : "/#programs"}
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-[#58C391] font-heading font-bold text-lg tracking-[0.15em] hover:opacity-80 transition-opacity"
          >
            MVE
          </Link>

          {/* Contact CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-[#58C391] text-[#0A0A0A] text-sm font-semibold tracking-wide rounded-full hover:bg-[#76D3A5] transition-colors"
          >
            Contact
          </Link>
        </div>
      </motion.nav>

      {/* ─── Menu Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center gap-1"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.name === "Home" && location !== "/" ? "/#programs" : link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-3xl md:text-5xl font-heading font-semibold tracking-wide py-2 px-4 transition-colors duration-200 ${
                      location === link.href
                        ? "text-[#58C391]"
                        : "text-[#F5F5F0]/60 hover:text-[#F5F5F0]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Small secondary links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8 pt-6 border-t border-white/[0.06]"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-[#666666] hover:text-[#58C391] transition-colors tracking-widest uppercase font-medium"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
