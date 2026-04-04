"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import { LogoCube } from "./LogoCube";

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function Navigation({
  menuOpen,
  setMenuOpen,
}: NavigationProps) {
  const navItems = [
    {
      label: "STUDIO",
      href: "#studio",
      color: "var(--brand-cyan)",
    },
    {
      label: "PHILOSOPHY",
      href: "#philosophy",
      color: "var(--brand-magenta)",
    },
    {
      label: "ARSENAL",
      href: "#services",
      color: "var(--brand-violet)",
    },
    {
      label: "PROCESS",
      href: "#process",
      color: "var(--brand-gold)",
    },
    {
      label: "PACKAGES",
      href: "#pricing",
      color: "var(--brand-magenta)",
    },
    {
      label: "BLOG",
      href: "#blog",
      color: "var(--brand-cyan)",
    },
    {
      label: "CONTACT",
      href: "#contact",
      color: "var(--brand-gold)",
    },
  ];

  return (
    <>
      {/* Fixed nav trigger */}
      <motion.div
        className="fixed top-8 right-8 z-50 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className="w-12 h-12 flex items-center justify-center"
          style={{
            border: "1px solid var(--brand-concrete)",
            backgroundColor: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          {menuOpen ? (
            <X
              size={24}
              style={{ color: "var(--brand-white)" }}
            />
          ) : (
            <Menu
              size={24}
              style={{ color: "var(--brand-white)" }}
            />
          )}
        </div>
      </motion.div>

      {/* Logo — static at top, not fixed. Hidden when menu is open to avoid collision on mobile */}
      {!menuOpen && (
        <motion.div
          className="absolute top-8 left-8 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#"
            className="flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <LogoCube />
          </a>
        </motion.div>
      )}

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center overflow-hidden"
            style={{ backgroundColor: "var(--brand-black)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-[30%] w-px h-full"
                style={{
                  backgroundColor: "var(--brand-magenta)",
                  opacity: 0.05,
                }}
              />
              <div
                className="absolute top-0 left-[60%] w-px h-full"
                style={{
                  backgroundColor: "var(--brand-cyan)",
                  opacity: 0.05,
                }}
              />
            </div>

            <nav className="px-8 md:px-16 lg:px-24 w-full relative z-10">
              {/* Section label */}
              <motion.div
                className="mb-6 md:mb-12 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div
                  className="h-px w-8"
                  style={{
                    background:
                      "linear-gradient(to right, var(--brand-magenta), var(--brand-cyan))",
                  }}
                />
                <span
                  className="text-[10px] tracking-widest"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--brand-concrete-light)",
                  }}
                >
                  NAVIGATION
                </span>
              </motion.div>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-2 md:py-5 text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter transition-all duration-200 group"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--brand-white)",
                    textDecoration: "none",
                  }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.15 }}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 20, color: item.color }}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className="text-base tracking-widest opacity-30 group-hover:opacity-100 transition-opacity"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: item.color,
                        minWidth: "2.5rem",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                </motion.a>
              ))}

              {/* Bottom info */}
              <motion.div
                className="mt-6 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                style={{
                  borderTop: "1px solid var(--brand-concrete)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="mailto:hello@talecrafters.studio"
                  className="text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--brand-concrete-light)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--brand-concrete-light)')}
                  onClick={(e) => e.stopPropagation()}
                >
                  hello@talecrafters.studio
                </a>
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--brand-concrete-light)",
                  }}
                >
                  STORYTELLING{" "}
                  <span
                    style={{ color: "var(--brand-magenta)" }}
                  >
                    &times;
                  </span>{" "}
                  TECH{" "}
                  <span style={{ color: "var(--brand-cyan)" }}>
                    &times;
                  </span>{" "}
                  CHAOS
                </span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
