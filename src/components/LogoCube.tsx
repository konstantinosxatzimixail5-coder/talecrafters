"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LogoCube() {
  const [flipped, setFlipped] = useState(false);
  const [glitch, setGlitch] = useState(false);

  // Random glitch pulses
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150 + Math.random() * 200);
    }, 3000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = useCallback(() => {
    setFlipped((f) => !f);
  }, []);

  // Name is visible when imp is showing (not flipped)
  const showName = !flipped;

  return (
    <div className="flex items-center gap-0">
      {/* The Cube */}
      <div
        className="w-14 h-14 cursor-pointer flex-shrink-0 relative z-10"
        style={{ perspective: '600px' }}
        onClick={handleClick}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Front — Imp face */}
          <div
            className="absolute inset-0 rounded-sm overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img
              src="/logo.png"
              alt="TaleCrafters imp mascot logo"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.35) saturate(0.75)' }}
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

          {/* Back — TC icon */}
          <div
            className="absolute inset-0 rounded-sm flex items-center justify-center p-1"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(135deg, var(--brand-cyan) 0%, #0ab8a5 100%)',
              border: '1px solid rgba(0,229,204,0.4)',
            }}
          >
            <img
              src="/tc-icon.png"
              alt="TC"
              className="w-[88%] h-[88%] object-contain select-none"
            />
            {/* Glitch on back too */}
            {glitch && (
              <div
                className="absolute inset-0 pointer-events-none rounded-sm"
                style={{
                  clipPath: `inset(${Math.random() * 50}% 0 ${Math.random() * 50}% 0)`,
                  transform: `translateX(${Math.random() * 4 - 2}px)`,
                  background: 'rgba(42,8,69,0.25)',
                  mixBlendMode: 'multiply',
                }}
              />
            )}
            {/* Scanline */}
            <div
              className="absolute inset-0 pointer-events-none rounded-sm"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* TaleCrafters name that slides out */}
      <AnimatePresence>
        {showName && (
          <motion.div
            className="overflow-hidden ml-[6px]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="whitespace-nowrap block"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span
                className="text-[1rem] sm:text-[1.4rem] md:text-[1.9rem] leading-none"
                style={{
                  fontFamily: '"Sackers Gothic", "Raleway", sans-serif',
                  fontWeight: 700,
                  color: 'var(--brand-white)',
                  letterSpacing: '0.12em',
                }}
              >
                TaleCrafters
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
