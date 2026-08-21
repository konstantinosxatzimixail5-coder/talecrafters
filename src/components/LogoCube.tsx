"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function LogoCube() {
  const [glitch, setGlitch] = useState(false);

  // Random glitch pulses
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150 + Math.random() * 200);
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-[6px]">
      <div className="w-12 h-12 flex-shrink-0 relative rounded-sm overflow-hidden">
        <img
          src="/tc-icon.svg"
          alt="TaleCrafters icon"
          className="w-full h-full object-cover"
        />
        {/* Glitch overlays */}
        {glitch && (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(transparent 0%, transparent ${30 + Math.random() * 20}%, var(--brand-cyan) ${30 + Math.random() * 20}%, var(--brand-cyan) ${32 + Math.random() * 20}%, transparent ${32 + Math.random() * 20}%)`,
                opacity: 0.4,
                mixBlendMode: 'screen',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: `inset(${Math.random() * 40}% 0 ${Math.random() * 40}% 0)`,
                transform: `translateX(${Math.random() * 6 - 3}px)`,
                background: 'rgba(255,45,111,0.3)',
                mixBlendMode: 'screen',
              }}
            />
          </>
        )}
        {/* Scanline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
          }}
        />
      </div>

      <motion.span
        className="text-[1rem] sm:text-[1.4rem] md:text-[1.9rem] leading-none whitespace-nowrap"
        style={{
          fontFamily: '"Sackers Gothic", "Raleway", sans-serif',
          fontWeight: 700,
          color: 'var(--brand-white)',
          letterSpacing: '0.12em',
        }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        TaleCrafters
      </motion.span>
    </div>
  );
}
