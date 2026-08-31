"use client";

import { motion } from 'motion/react';

/**
 * The one bit of motion interior pages need. Server components cannot hold the
 * viewport hook, so this wraps whatever they render instead of turning every
 * page into a client component.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
